// ============================================================
// CONTACT FORM SUBMISSION INTERFACE
//
// This project is a static Vite/React site with no backend of its
// own (no /api, no server, no CMS integration — see package.json).
// This module is the single seam between the Contact page UI and
// wherever inquiries actually get delivered, so a backend can be
// wired up later without touching src/pages/Contact.jsx at all.
//
// How to connect a real backend later:
//   1. Stand up an endpoint that accepts a multipart/form-data POST
//      (a serverless function, a small Express/Fastify route, a form
//      service like Formspree, or your CRM's inbound-lead API).
//   2. Set VITE_CONTACT_ENDPOINT in a .env file to that URL.
//   3. That's it — submitContactRequest() below already builds the
//      FormData and POSTs to it. No UI changes required.
//
// Until VITE_CONTACT_ENDPOINT is set, submissions resolve locally
// (mocked) so the form and its validation can be fully exercised
// and demoed without a live backend.
// ============================================================

// Extension-based allow-list. Browsers don't reliably report MIME
// types for CAD formats (.dwg/.dxf commonly arrive as an empty
// string or application/octet-stream), so extension is the only
// consistent signal available client-side. This is a UX filter,
// not a security boundary — the eventual backend endpoint must
// re-validate file type/size/content server-side before storing or
// processing anything.
export const ALLOWED_FILE_EXTENSIONS = [
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "dwg",
  "dxf",
  "jpg",
  "jpeg",
  "png",
  "gif",
  "webp",
  "txt",
];

export const MAX_FILE_SIZE_MB = 25;
export const MAX_FILES = 10;

export function getFileExtension(file) {
  const name = file?.name || "";
  const lastDot = name.lastIndexOf(".");
  return lastDot === -1 ? "" : name.slice(lastDot + 1).toLowerCase();
}

/**
 * Validates a single File against the allow-list and size limit.
 * Returns null when valid, or a short human-readable reason when not.
 */
export function validateFile(file) {
  const ext = getFileExtension(file);
  if (!ALLOWED_FILE_EXTENSIONS.includes(ext)) {
    return `"${file.name}" isn't a supported file type.`;
  }
  const sizeMb = file.size / (1024 * 1024);
  if (sizeMb > MAX_FILE_SIZE_MB) {
    return `"${file.name}" is ${sizeMb.toFixed(1)}MB, which is over the ${MAX_FILE_SIZE_MB}MB limit.`;
  }
  return null;
}

/**
 * Splits an incoming FileList/array into accepted files and
 * rejection reasons, respecting the existing file count and the
 * MAX_FILES cap.
 */
export function screenFiles(incomingFiles, existingFiles = []) {
  const accepted = [];
  const rejected = [];
  const remainingSlots = Math.max(0, MAX_FILES - existingFiles.length);

  Array.from(incomingFiles).forEach((file, i) => {
    const reason = validateFile(file);
    if (reason) {
      rejected.push(reason);
    } else if (i < remainingSlots + rejected.length && accepted.length < remainingSlots) {
      accepted.push(file);
    } else {
      rejected.push(`"${file.name}" was skipped — up to ${MAX_FILES} files are allowed per submission.`);
    }
  });

  return { accepted, rejected };
}

function buildContactFormData(fields, files) {
  const formData = new FormData();
  Object.entries(fields).forEach(([key, value]) => {
    formData.append(key, value ?? "");
  });
  files.forEach((file) => formData.append("attachments", file, file.name));
  return formData;
}

/**
 * Submits a contact request.
 *   fields: { fullName, company, email, phone, location, service, subject, message }
 *   files:  File[] (already screened via screenFiles)
 *
 * Resolves { ok: true, mocked: boolean } on success.
 * Throws an Error with a user-safe message on failure.
 */
export async function submitContactRequest(fields, files = []) {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
  const formData = buildContactFormData(fields, files);

  if (!endpoint) {
    // No backend configured yet. Log clearly for whoever is testing
    // this locally, and resolve so the UI's confirmation state can
    // still be exercised end-to-end ahead of a real integration.
    console.warn(
      "[contactSubmission] VITE_CONTACT_ENDPOINT is not set — this submission was not sent anywhere. " +
        "Set VITE_CONTACT_ENDPOINT to a real endpoint to enable delivery.",
      Object.fromEntries(formData.entries())
    );
    return { ok: true, mocked: true };
  }

  const response = await fetch(endpoint, { method: "POST", body: formData });
  if (!response.ok) {
    throw new Error(`The request could not be sent (server responded ${response.status}). Please try again.`);
  }
  return { ok: true, mocked: false };
}
