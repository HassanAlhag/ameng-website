import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Sectors from "./pages/Sectors";
import SectorDetail from "./pages/SectorDetail";
import Technology from "./pages/Technology";
import TechnologyDetail from "./pages/TechnologyDetail";
import Projects from "./pages/Projects";
import Safety from "./pages/Safety";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Scrolls to top on every route change (React Router doesn't do this
// automatically). Kept tiny and local rather than pulling in a package.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// ============================================================
// App
// Top-level route table. Header/Footer render once here so every
// page automatically gets the same shell — pages only need to
// return their own content.
// ============================================================
export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Temporary homepage hero review routes — not linked in navigation.
              /home1 = current production hero (contained video panel).
              /home2 = full-background video hero, unchanged.
              /home3 = refined full-background hero (glass capability panel,
              unified stat strip, layered contrast) for side-by-side
              comparison against /home2. All three render the exact same
              Home page/content, differing only in heroVariant. Remove
              once the comparison is finished. */}
          <Route path="/home1" element={<Home heroVariant="contained" />} />
          <Route path="/home2" element={<Home heroVariant="background" />} />
          <Route path="/home3" element={<Home heroVariant="backgroundEnhanced" />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/sectors/:slug" element={<SectorDetail />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/technology/:slug" element={<TechnologyDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
