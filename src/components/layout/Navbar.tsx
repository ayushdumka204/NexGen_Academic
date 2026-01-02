import { type FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useToast } from "../ui/use-toast";

type MenuItem = {
  title: string;
  items: string[];
};

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeNav, setActiveNav] = useState<string>("");

  const { toast } = useToast();

  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (title: string): void => {
    setActiveNav(title);
    toast({
      title:
        "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const menuItems: MenuItem[] = [
    {
      title: "About",
      items: ["About Us", "Team", "Institution"],
    },
    {
      title: "Research",
      items: [
        "Research Areas",
        "Ongoing Projects",
        "Completed Projects",
        "Methodology",
      ],
    },
    {
      title: "Services",
      items: ["Data Collection", "Data Analysis", "Evaluation & Review"],
    },
    {
      title: "Resources",
      items: ["Data & Tools", "News & Updates", "Collaborations"],
    },
    {
      title: "Contact",
      items: ["Contact Info", "Collaboration Requests", "Ethics & Policies"],
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavClick("Home")}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">ARI</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-800">
                NexGen Research
              </span>
              <span className="text-xs text-slate-600">Academic</span>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-2">
            {menuItems.map((menu) => (
              <div
                key={menu.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(menu.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick(menu.title)}
                  className={`relative px-4 py-2 font-medium flex items-center gap-1 transition-all duration-200 ${
                    isScrolled
                      ? "text-slate-700 hover:text-blue-600"
                      : "text-slate-800 hover:text-blue-600"
                  }`}
                >
                  {menu.title}
                  <ChevronDown className="w-4 h-4" />

                  {/* ACTIVE GREEN UNDERLINE (TEXT WIDTH) */}
                  {activeNav === menu.title && (
                    <motion.span
                      layoutId="active-underline"
                      className="absolute left-0 -bottom-1 h-[3px] w-full bg-green-500 rounded-full"
                    />
                  )}
                </button>

                <AnimatePresence>
                  {activeDropdown === menu.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden"
                    >
                      {menu.items.map((item) => (
                        <button
                          key={item}
                          onClick={() => handleNavClick(menu.title)}
                          className="w-full text-left px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border-b border-slate-100 last:border-b-0"
                        >
                          {item}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* LOGIN / SIGNUP (DESKTOP) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("Login")}
              className="px-5 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all duration-200"
            >
              Login
            </button>

            <button
              onClick={() => handleNavClick("Signup")}
              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Sign Up
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (UNCHANGED) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-200"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {menuItems.map((menu) => (
                <div key={menu.title}>
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === menu.title ? null : menu.title
                      )
                    }
                    className="w-full flex items-center justify-between px-4 py-3 text-slate-700 hover:bg-blue-50 rounded-lg"
                  >
                    <span className="font-medium">{menu.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === menu.title ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === menu.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-1"
                      >
                        {menu.items.map((item) => (
                          <button
                            key={item}
                            onClick={() => handleNavClick(menu.title)}
                            className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                          >
                            {item}
                          </button>
                        ))}
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
// end
