import { type FC, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Phone } from "lucide-react";

/* ================= TYPES ================= */
type SubItem = {
  label: string;
  path: string;
};

type MenuSection = {
  heading: string;
  items: SubItem[];
};

type MenuItem = {
  title: string;
  path: string;
  sections?: MenuSection[];
};

/* ================= MENU DATA ================= */
const menuItems: MenuItem[] = [
  { title: "Home", path: "/" },
  {
    title: "About",
    path: "/about",
    sections: [
      {
        heading: "Who We Are",
        items: [
          { label: "Our Mission & Vision", path: "/about/mission" },
          { label: "Expert Team & Credentials", path: "/about/team" },
          { label: "Why Choose NAR", path: "/about/why-us" },
        ],
      },
      {
        heading: "Standards",
        items: [
          { label: "Quality Assurance & Ethics", path: "/about/quality" },
          { label: "Client Testimonials", path: "/about/testimonials" },
        ],
      },
    ],
  },
  {
    title: "Services",
    path: "/services",
    sections: [
      {
        heading: "Research Design",
        items: [
          { label: "Research Methodology", path: "/services/design/methodology" },
          { label: "Sampling Strategy", path: "/services/design/sampling" },
          { label: "Instrument Development", path: "/services/design/instrument" },
          { label: "Research Ethics Support", path: "/services/design/ethics" },
        ],
      },
      {
        heading: "Data Collection",
        items: [
          { label: "Survey Research Studies", path: "/services/collection/surveys" },
          { label: "Experimental Research (RCT)", path: "/services/collection/experimental" },
          { label: "Organisational Studies", path: "/services/collection/organisational" },
          { label: "Qualitative Interviews (IDI/FGD)", path: "/services/collection/qualitative" },
          { label: "Secondary Data Services", path: "/services/collection/secondary" },
        ],
      },
      {
        heading: "Data Analysis",
        items: [
          { label: "Quantitative (SPSS/R/Python)", path: "/services/analysis/quantitative" },
          { label: "SEM (AMOS/SmartPLS)", path: "/services/analysis/sem" },
          { label: "Qualitative (NVivo/ATLAS.ti)", path: "/services/analysis/qualitative" },
          { label: "Predictive Modeling", path: "/services/analysis/predictive" },
        ],
      },
      {
        heading: "Academic Writing",
        items: [
          { label: "Research Proposal/Synopsis", path: "/services/writing/proposal" },
          { label: "Thesis/Dissertation Support", path: "/services/writing/thesis" },
          { label: "Journal Article Preparation", path: "/services/writing/journal" },
          { label: "Editing & Formatting", path: "/services/writing/editing" },
        ],
      },
    ],
  },
  {
    title: "Research Domains",
    path: "/domains",
    sections: [
      {
        heading: "Business & Mgmt",
        items: [
          { label: "Marketing & Consumer", path: "/domains/marketing" },
          { label: "Human Resource Mgmt", path: "/domains/hrm" },
          { label: "Economics & Finance", path: "/domains/economics" },
        ],
      },
      {
        heading: "Social Sciences",
        items: [
          { label: "Psychology & Sociology", path: "/domains/psychology" },
          { label: "Education & Pedagogy", path: "/domains/education" },
          { label: "Law & Public Policy", path: "/domains/law" },
        ],
      },
      {
        heading: "Sciences & Tech",
        items: [
          { label: "Health & Public Health", path: "/domains/health" },
          { label: "Engineering & Technology", path: "/domains/engineering" },
          { label: "Agriculture & Enviro", path: "/domains/agriculture" },
        ],
      },
    ],
  },
  {
    title: "Resources",
    path: "/resources",
    sections: [
      {
        heading: "Tools & Guides",
        items: [
          { label: "Methodology Guides", path: "/resources/guides" },
          { label: "Sample Questionnaires", path: "/resources/scales" },
          { label: "Statistical Calculators", path: "/resources/calculators" },
        ],
      },
      {
        heading: "Learning",
        items: [
          { label: "Software Tutorials", path: "/resources/tutorials" },
          { label: "Publication Tips", path: "/resources/publication-tips" },
          { label: "Research Blog", path: "/resources/blog" },
          { label: "FAQs", path: "/resources/faqs" },
        ],
      },
    ],
  },
  {
    title: "Pricing",
    path: "/pricing",
    sections: [
      {
        heading: "Packages",
        items: [
          { label: "Data Collection Only", path: "/pricing/collection" },
          { label: "Data Analysis Only", path: "/pricing/analysis" },
          { label: "End-to-End Support", path: "/pricing/end-to-end" },
        ],
      },
      {
        heading: "Offers",
        items: [
          { label: "PhD Scholar Discounts", path: "/pricing/discounts" },
          { label: "Custom Quote Request", path: "/pricing/quote" },
        ],
      },
    ],
  },
  { title: "Contact", path: "/contact" },
];

/* ================= COMPONENT ================= */
const Navbar: FC = () => {
  const location = useLocation();
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);

  const isMenuActive = (menu: MenuItem): boolean => {
    if (location.pathname === menu.path) return true;
    if (menu.sections) {
      return menu.sections.some((section) =>
        section.items.some((item) => location.pathname.startsWith(item.path))
      );
    }
    return false;
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md font-sans"
    >
      {/* ================= TOP BAR ================= */}
      <div
        className="max-w-7xl mx-auto px-4"
        onMouseLeave={() => setDesktopDropdown(null)}
      >
        <div className="flex items-center justify-between h-20 w-full">
          
          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3 min-w-0 z-50">
            <img
              src="/img/logo.png"
              alt="NAR Logo"
              className="h-10 w-auto max-w-[150px] sm:max-w-none sm:h-12 object-contain"
            />
          </NavLink>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((menu) => (
              <div
                key={menu.title}
                className="relative group"
                onMouseEnter={() => setDesktopDropdown(menu.sections ? menu.title : null)}
              >
                <NavLink
                  to={menu.path}
                  className={`
                    relative px-3 py-2 text-[15px] font-medium flex items-center gap-1 transition-colors
                    ${isMenuActive(menu) ? "text-slate-900" : "text-slate-800 hover:text-[#80cb29]"}
                  `}
                >
                  {menu.title}
                  {menu.sections && <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-200" />}
                  
                  {/* Active Indicator - UPDATED COLOR */}
                  {isMenuActive(menu) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#80cb29] rounded-full"
                    />
                  )}
                </NavLink>
              </div>
            ))}
          </div>

          {/* ================= RIGHT ACTIONS ================= */}
          <div className="hidden lg:flex items-center gap-4">
             {/* SCHOLAR LOGIN - Blue Outline Button (As requested previously) */}
             <NavLink
               to="/login"
               className="px-4 py-2 text-sm font-semibold text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
             >
               Scholar Login
             </NavLink>
            
            {/* GET STARTED - Blue Solid Button (As requested previously) */}
            <NavLink
              to="/get-started"
              className="px-5 py-2.5 bg-blue-600 text-white text-sm rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              GET STARTED
            </NavLink>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <div className="flex items-center gap-3 lg:hidden shrink-0 ml-4">
            <a 
              href="tel:+911234567890" 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-900 hover:bg-[#80cb29]/10 hover:text-[#80cb29] transition-colors"
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

      {/* ================= DESKTOP MEGA MENU ================= */}
      <AnimatePresence>
        {desktopDropdown && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-10 right-10 bg-white border-t border-slate-100 shadow-2xl z-40 rounded-b-xl overflow-hidden"
            onMouseEnter={() => setDesktopDropdown(desktopDropdown)}
            onMouseLeave={() => setDesktopDropdown(null)}
          >
            {menuItems.map((menu) => {
              if (menu.title !== desktopDropdown || !menu.sections) return null;

              return (
                <div key={menu.title}>
                  {/* Menu Grid Content */}
                  <div className="max-w-7xl mx-auto px-6 pt-8 pb-6">
                    <div className={`grid gap-8 ${
                      menu.sections.length > 3 ? 'grid-cols-4' : 
                      menu.sections.length === 3 ? 'grid-cols-3' : 'grid-cols-2'
                    }`}>
                      {menu.sections.map((section) => (
                        <div key={section.heading}>
                          {/* Heading Border - UPDATED COLOR */}
                          <h3 className="font-bold text-slate-900 text-sm tracking-wide uppercase mb-4 border-l-4 border-[#80cb29] pl-3">
                            {section.heading}
                          </h3>
                          <ul className="space-y-2.5">
                            {section.items.map((item) => (
                              <li key={item.label}>
                                <NavLink
                                  to={item.path}
                                  onClick={() => setDesktopDropdown(null)}
                                  // Link Hover - UPDATED COLOR
                                  className="text-[14px] text-slate-600 hover:text-[#80cb29] hover:translate-x-1 transition-all inline-block"
                                >
                                  {item.label}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ================= BOTTOM BAR - UPDATED COLOR ================= */}
                  <div className="bg-[#80cb29] text-white mt-2">
                    <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap justify-between gap-4 text-sm font-medium">
                      <span>© Since 2007</span>
                      <span>1000+ Clients Served</span>
                      <span>Secured & Confidential</span>
                      <span>Guaranteed Service</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto"
          >
            <div className="p-5 flex justify-between items-center border-b">
              <span className="font-bold text-lg text-slate-800">Menu</span>
              <button onClick={() => setMobileOpen(false)} className="p-2 bg-slate-100 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-2">
              {menuItems.map((menu) => (
                <div key={menu.title} className="border-b border-slate-50 last:border-0">
                  <div 
                    className="flex items-center justify-between py-3"
                    onClick={() => {
                        if (menu.sections) {
                            setMobileExpandedMenu(mobileExpandedMenu === menu.title ? null : menu.title);
                        }
                    }}
                  >
                    <NavLink
                        to={menu.path}
                        onClick={(e) => {
                            if(menu.sections) e.preventDefault();
                            else setMobileOpen(false);
                        }}
                        // Mobile Active Title - UPDATED COLOR
                        className={`font-semibold text-lg ${mobileExpandedMenu === menu.title ? 'text-[#80cb29]' : 'text-slate-800'}`}
                    >
                        {menu.title}
                    </NavLink>
                    {menu.sections && (
                        <ChevronDown 
                            className={`w-5 h-5 text-slate-400 transition-transform ${mobileExpandedMenu === menu.title ? 'rotate-180' : ''}`} 
                        />
                    )}
                  </div>

                  <AnimatePresence>
                    {menu.sections && mobileExpandedMenu === menu.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-slate-50 rounded-lg"
                      >
                        {menu.sections.map((section) => (
                           <div key={section.heading} className="p-4 pb-0 last:pb-4">
                               <h4 className="font-semibold text-sm text-slate-900 mb-2 uppercase tracking-wider">
                                   {section.heading}
                               </h4>
                               <div className="flex flex-col space-y-2 border-l-2 border-slate-200 pl-3 ml-1">
                                   {section.items.map((item) => (
                                       <NavLink
                                           key={item.label}
                                           to={item.path}
                                           onClick={() => setMobileOpen(false)}
                                           // Mobile Sub-Link Hover - UPDATED COLOR
                                           className="text-sm text-slate-600 py-1 hover:text-[#80cb29]"
                                       >
                                           {item.label}
                                       </NavLink>
                                   ))}
                               </div>
                           </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <div className="pt-6 space-y-3">
                 <NavLink 
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full py-3 text-center border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50"
                 >
                    Scholar Login
                 </NavLink>
                 <NavLink 
                    to="/get-started"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full py-3 text-center bg-blue-600 text-white rounded-lg font-bold shadow-md hover:bg-blue-700"
                 >
                    GET STARTED
                 </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;