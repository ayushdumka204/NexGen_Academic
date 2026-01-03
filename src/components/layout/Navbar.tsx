import { type FC, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

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
      { label: "Research Areas", path: "/research" },
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
    title: "Resouces",
    path: "/resources",
    items: [
      { label: "Data & Tools", path: "/data-tools" },
      { label: "News & Updates", path: "/news-updates" },
      { label: "Collaborations", path: "/collaborations" },
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
  { title: "Contact", path: "/contact" },
];

/* ================= COMPONENT ================= */
const Navbar: FC = () => {
  const location = useLocation(); // exact route check
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
              NAR
            </div>
            <span className="font-bold text-slate-800 text-lg">
              NexGen Research 
            </span>
          </NavLink>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden lg:flex items-center gap-2">
            {menuItems.map((menu) => (
              <div
                key={menu.title}
                className="relative"
                onMouseEnter={() => setDesktopDropdown(menu.title)}
                onMouseLeave={() => setDesktopDropdown(null)}
              >
                <NavLink
                  to={menu.path}
                  className="relative px-4 py-2 font-medium flex items-center gap-1 text-slate-800 hover:text-blue-600"
                >
                  {menu.title}
                  {menu.items && <ChevronDown className="w-4 h-4" />}

                  {/* ✅ GREEN LINE – EXACT PAGE ONLY */}
                  {location.pathname === menu.path && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-1 h-[3px] w-full bg-green-500 rounded-full"
                    />
                  )}
                </NavLink>

                {/* DESKTOP DROPDOWN */}
                <AnimatePresence>
                  {menu.items && desktopDropdown === menu.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border"
                    >
                      {menu.items.map((item) => (
                        <NavLink
                          key={item.label}
                          to={item.path}
                          className={({ isActive }) =>
                            `block px-4 py-3 transition-all
                             ${
                               isActive
                                 ? "bg-green-50 text-green-600 font-medium"
                                 : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                             }`
                          }
                        >
                          {item.label}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* ================= LOGIN / SIGNUP (DESKTOP) ================= */}
          {/* ================= JOIN US (DESKTOP) ================= */}
          <div className="hidden lg:flex items-center">
            <NavLink
              to="/join"
              className="
                px-6 py-2.5
                bg-gradient-to-r from-blue-600 to-indigo-600
                text-white
                rounded-lg
                font-semibold
                tracking-wide
                hover:shadow-xl
                hover:scale-105
                transition-all
                duration-200
              "
            >
              JOIN US
            </NavLink>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="lg:hidden p-2"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU (ACCORDION STYLE) ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-3 space-y-1">
              {menuItems.map((menu) => (
                <div key={menu.title}>
                  {/* MOBILE MAIN ITEM */}
                  <button
                    onClick={() =>
                      menu.items
                        ? setMobileDropdown(
                            mobileDropdown === menu.title
                              ? null
                              : menu.title
                          )
                        : setMobileOpen(false)
                    }
                    className="w-full flex items-center justify-between py-2 font-medium text-slate-800"
                  >
                    <NavLink to={menu.path}>{menu.title}</NavLink>

                    {menu.items && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileDropdown === menu.title ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* MOBILE SUB ITEMS */}
                  <AnimatePresence>
                    {menu.items && mobileDropdown === menu.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 space-y-1"
                      >
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* ================= LOGIN / SIGNUP (MOBILE) ================= */}
              {/* ================= JOIN US (MOBILE) ================= */}
              <div className="mt-4 pt-4 border-t">
                <NavLink
                  to="/join"
                  onClick={() => setMobileOpen(false)}
                  className="
                    block w-full
                    text-center
                    py-3
                    bg-gradient-to-r from-blue-600 to-indigo-600
                    text-white
                    rounded-lg
                    font-semibold
                    tracking-wide
                    hover:shadow-lg
                    transition-all
                    duration-200
                  "
                >
                  JOIN US
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
// end
