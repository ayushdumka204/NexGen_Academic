import { type FC, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Phone } from "lucide-react";

/* ================= TYPES ================= */
type SubItem = {
  label: string;
  path: string;
};

type MenuItem = {
  title: string;
  path: string;
  items?: SubItem[];
};

/* ================= MENU DATA ================= */
const menuItems: MenuItem[] = [
  { title: "Home", path: "/" },
  {
    title: "About",
    path: "/about",
    items: [
      { label: "About Us", path: "/about" },
      { label: "Team", path: "/team" },
      { label: "Institution", path: "/institution" },
    ],
  },
  {
    title: "Research",
    path: "/research",
    items: [
      { label: "Research Areas", path: "/researcharea" },
      { label: "Ongoing Projects", path: "/projects/ongoing" },
      { label: "Completed Projects", path: "/projects/completed" },
    ],
  },
  {
    title: "Methodologies",
    path: "/methodologies",
    items: [
      { label: "Quantitative", path: "/methodologies/quantitative" },
      { label: "Qualitative", path: "/methodologies/qualitative" },
    ],
  },
  {
    title: "Services",
    path: "/services",
    items: [
      { label: "Data Collection", path: "/services/data-collection" },
      { label: "Data Analysis", path: "/services/data-analysis" },
      { label: "Evaluation & Review", path: "/services/evaluation" },
    ],
  },
  {
    title: "Resources",
    path: "/resources",
    items: [
      { label: "Data & Tools", path: "/data-tools" },
      { label: "News & Updates", path: "/news-updates" },
      { label: "Collaborations", path: "/collaborations" },
    ],
  },
  { title: "Contact", path: "/contact" },
];

/* ================= MEGA MENU CONTENT ================= */
const megaMenuContent: Record<
  string,
  {
    leftTitle: string;
    leftDesc: string;
    middleTitle: string;
    middleLinks: SubItem[];
    rightTitle: string;
    rightPoints: string[];
  }
> = {
  About: {
    leftTitle: "What We Do",
    leftDesc:
      "We provide end-to-end academic research consultancy for PhD scholars, postgraduate students, and institutions, ensuring ethical and confidential research support.",
    middleTitle: "About NexGen",
    middleLinks: [
      { label: "About Organization", path: "/about" },
      { label: "Leadership & Team", path: "/team" },
      { label: "Institutional Partners", path: "/institutional-partner" },
    ],
    rightTitle: "About Highlights",
    rightPoints: [
      "Ethical academic practices",
      "Confidential research handling",
      "Affordable & transparent services",
      "Guaranteed Service",
    ],
  },
  Research: {
    leftTitle: "Research Support",
    leftDesc:
      "Our research division assists PhD scholars, postgraduate students, and institutions in conducting high-quality academic research aligned with IIMs, universities, and global research standards.",
    middleTitle: "Research Sections",
    middleLinks: [
      { label: "Research Areas", path: "/researcharea" },
      { label: "Ongoing Projects", path: "/projects/ongoing" },
      { label: "Completed Projects", path: "/projects/completed" },
    ],
    rightTitle: "Research Strengths",
    rightPoints: [
      "IIM & university-aligned research frameworks",
      "Publication-focused research design",
      "Interdisciplinary research approach",
      "Supervisor & reviewer compliance",
    ],
  },
  Methodologies: {
    leftTitle: "Research Methodologies",
    leftDesc:
      "We guide researchers in selecting and applying appropriate methodologies to ensure validity, reliability, and reproducibility of academic research.",
    middleTitle: "Methodology Types",
    middleLinks: [
      { label: "Quantitative Research", path: "/methodologies/quantitative" },
      { label: "Qualitative Research", path: "/methodologies/qualitative" },
      { label: "Mixed Method Approach", path: "/methodologies/mixed" },
    ],
    rightTitle: "Methodology Benefits",
    rightPoints: [
      "Statistically sound research models",
      "Globally accepted academic frameworks",
      "Tool-based data analysis support",
      "Ethically approved research designs",
    ],
  },
  Resources: {
    leftTitle: "Academic Resources",
    leftDesc:
      "Access curated academic resources, tools, datasets, and research updates designed to support scholars throughout their research journey.",
    middleTitle: "Resource Center",
    middleLinks: [
      { label: "Data & Tools", path: "/data-tools" },
      { label: "News & Updates", path: "/news-updates" },
      { label: "Collaborations", path: "/collaborations" },
    ],
    rightTitle: "Resource Benefits",
    rightPoints: [
      "Trusted academic databases",
      "Publication-ready templates",
      "Latest research trends & updates",
      "Global academic collaboration access",
    ],
  },
  Services: {
    leftTitle: "Academic Services",
    leftDesc:
      "Our services cover the complete research lifecycle from topic selection to thesis submission and publication support.",
    middleTitle: "Our Services",
    middleLinks: [
      { label: "Data Collection", path: "/services/data-collection" },
      { label: "Data Analysis", path: "/services/data-analysis" },
      { label: "Evaluation & Review", path: "/services/evaluation" },
      { label: "Research Planning & Writing Services", path: "/services/evaluation" },
    ],
    rightTitle: "Service Assurance",
    rightPoints: [
      "Plagiarism-free work",
      "University guideline compliance",
      "On-time delivery",
    ],
  },
};

/* ================= COMPONENT ================= */
const Navbar: FC = () => {
  const location = useLocation();
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const isMenuActive = (menu: MenuItem): boolean => {
    if (location.pathname === menu.path) return true;
    if (menu.items) {
      return menu.items.some((item) =>
        location.pathname.startsWith(item.path)
      );
    }
    return false;
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
    >
      {/* ================= TOP BAR ================= */}
      <div
        className="max-w-7xl mx-auto px-4"
        onMouseLeave={() => setDesktopDropdown(null)}
      >
        <div className="flex items-center justify-between h-20 w-full">
          
          {/* LOGO BLOCK - FLEXIBLE BUT CONTROLLED */}
          <NavLink to="/" className="flex items-center gap-3 min-w-0">
            <img
              src="/img/logo.png"
              alt="NexGen Research Logo"
              className="h-10 w-auto max-w-[150px] sm:max-w-none sm:h-12 rounded-lg object-contain"
            />
          </NavLink>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden lg:flex items-center gap-2">
            {menuItems.map((menu) => (
              <div
                key={menu.title}
                className="relative"
                onMouseEnter={() => setDesktopDropdown(menu.title)}
              >
                <NavLink
                  to={menu.path}
                  className="relative px-4 py-2 font-medium flex items-center gap-1 text-slate-800 hover:text-blue-600"
                >
                  {menu.title}
                  {menu.items && <ChevronDown className="w-4 h-4" />}
                  {isMenuActive(menu) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-1 h-[3px] w-full bg-green-500 rounded-full"
                    />
                  )}
                </NavLink>
              </div>
            ))}
          </div>

          {/* ================= JOIN US BUTTON (Desktop) ================= */}
          <div className="hidden lg:flex">
            <NavLink
              to="/join"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              JOIN US
            </NavLink>
          </div>

          {/* ================= MOBILE CONTROLS (Call + Menu) ================= */}
          {/* shrink-0 ensures this never collapses */}
          <div className="flex items-center gap-3 lg:hidden shrink-0 ml-4">
            <a 
              href="tel:+1234567890" 
              className="
                flex items-center justify-center
                w-10 h-10
                rounded-full
                border border-slate-900 
                text-slate-900 
                hover:bg-slate-100 
                transition-colors
              "
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileOpen((p) => !p)}
              className="p-2 text-slate-800 hover:bg-slate-100 rounded-full"
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= FULL WIDTH SUB NAV (Desktop) ================= */}
      <AnimatePresence>
        {desktopDropdown && megaMenuContent[desktopDropdown] && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-4 right-4 bg-white border shadow-2xl rounded-2xl"
            onMouseEnter={() => setDesktopDropdown(desktopDropdown)}
            onMouseLeave={() => setDesktopDropdown(null)}
          >
            {/* INVISIBLE HOVER BRIDGE */}
            <div className="absolute -top-6 left-0 right-0 h-6" />

            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-3 gap-10">
              {/* LEFT */}
              <div>
                <h4 className="font-bold text-slate-900 mb-2">
                  {megaMenuContent[desktopDropdown].leftTitle}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {megaMenuContent[desktopDropdown].leftDesc}
                </p>
              </div>

              {/* MIDDLE – CLICKABLE */}
              <div>
                <h4 className="font-bold text-slate-900 mb-2">
                  {megaMenuContent[desktopDropdown].middleTitle}
                </h4>
                <ul className="space-y-2">
                  {megaMenuContent[desktopDropdown].middleLinks.map((l) => (
                    <li key={l.label}>
                      <NavLink
                        to={l.path}
                        className="text-sm text-slate-700 hover:text-orange-600 transition"
                      >
                        ▸ {l.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT */}
              <div>
                <h4 className="font-bold text-slate-900 mb-2">
                  {megaMenuContent[desktopDropdown].rightTitle}
                </h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  {megaMenuContent[desktopDropdown].rightPoints.map((p) => (
                    <li key={p}>▸ {p}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-orange-500 text-white rounded-b-2xl">
              <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap justify-between gap-4 text-sm font-medium">
                <span>© Since 2008</span>
                <span>500+ Consultants</span>
                <span>Secured & Confidential</span>
                <span>Guaranteed Service</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MOBILE MENU (FIXED) ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((menu) => (
                <div key={menu.title}>
                  {/* LOGIC FIX: Check if items exist BEFORE rendering the wrapper */}
                  
                  {menu.items ? (
                    // CASE 1: Has Sub-items -> Render as BUTTON
                    <button
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === menu.title ? null : menu.title
                        )
                      }
                      className="w-full flex items-center justify-between py-2 text-slate-800 font-medium"
                    >
                      <span>{menu.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileDropdown === menu.title ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    // CASE 2: No Sub-items -> Render as NavLink (NOT Button)
                    <NavLink
                      to={menu.path}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between py-2 text-slate-800 font-medium w-full"
                    >
                      {menu.title}
                    </NavLink>
                  )}

                  {/* Render Sub-items if open */}
                  <AnimatePresence>
                    {menu.items && mobileDropdown === menu.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-2 space-y-2 border-l-2 border-slate-100 ml-2 mt-1">
                          {menu.items.map((item) => (
                            <NavLink
                              key={item.label}
                              to={item.path}
                              onClick={() => setMobileOpen(false)}
                              className="block py-1 text-sm text-slate-600 hover:text-blue-600"
                            >
                              {item.label}
                            </NavLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;