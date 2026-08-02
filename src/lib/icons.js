// ============================================================
// ICON REGISTRY
// Data files (services.js, sectors.js, technologies.js, ...) store
// icons as plain strings (e.g. "Compass") so content stays
// framework-agnostic. This registry maps those strings to the
// actual lucide-react components. To add a new icon: import it
// below and add one line to the `icons` object — nothing else in
// the app needs to change.
// ============================================================
import { createElement } from "react";
import {
  Compass, Layers, Plane, Radar, ScanLine, ShieldCheck, Video, ScanSearch,
  Landmark, Route, Droplets, Zap, Flame, Antenna, Factory, PlaneTakeoff,
  TrainFront, MapPinned, Satellite, Box, CloudCog, Scan, HardHat,
  HeartPulse, Building2, Menu, X, ChevronDown, Mail, Phone, MapPin,
  Upload, Send, Clock, Award, Users, Globe, ArrowRight, ArrowUpRight,
  CheckCircle2, Crosshair, Search, Target, TrendingUp, FileCheck2,
  AlertTriangle, Sparkles, Thermometer, Radio,
} from "lucide-react";

export const icons = {
  Compass, Layers, Plane, Radar, ScanLine, ShieldCheck, Video, ScanSearch,
  Landmark, Route, Droplets, Zap, Flame, Antenna, Factory, PlaneTakeoff,
  TrainFront, MapPinned, Satellite, Box, CloudCog, Scan, HardHat,
  HeartPulse, Building2, Menu, X, ChevronDown, Mail, Phone, MapPin,
  Upload, Send, Clock, Award, Users, Globe, ArrowRight, ArrowUpRight,
  CheckCircle2, Crosshair, Search, Target, TrendingUp, FileCheck2,
  AlertTriangle, Sparkles, Thermometer, Radio,
};

/** <Icon name="Compass" className="h-5 w-5" /> — renders nothing if the name is unknown.
 *  Written with createElement (not JSX) so this file can stay a plain .js module. */
export default function Icon({ name, className, strokeWidth = 1.75 }) {
  const Cmp = icons[name];
  if (!Cmp) return null;
  return createElement(Cmp, { className, strokeWidth, "aria-hidden": "true" });
}
