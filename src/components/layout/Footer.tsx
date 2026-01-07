import type { FC } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  ArrowUp,
} from "lucide-react";
import { useToast } from "../ui/use-toast";

type FooterSection = {
  title: string;
  links: string[];
};

type SocialLink = {
  icon: FC<{ className?: string }>;
  label: string;
};

const Footer: FC = () => {
  const { toast } = useToast();

  const handleClick = (): void => {
    toast({
      title: "This feature isn't implemented",
    });
  };

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Updated footer sections based on your request
  const footerSections: FooterSection[] = [
    {
      title: "Quick Links",
      links: [
        "About",
        "Services",
        "Pricing",
        "Resources",
        "Blog",
        "Contact",
        "Scholar Portal",
      ],
    },
    {
      title: "Popular Services",
      links: [
        "Survey Research",
        "Statistical Analysis",
        "Thesis Support",
        "Publication Help",
      ],
    },
    {
      title: "Policies",
      links: [
        "Privacy Policy",
        "Terms of Service",
        "Refund Policy",
        "Research Ethics",
        "Data Security",
      ],
    },
    {
      title: "Connect",
      links: [
        "LinkedIn",
        "YouTube",
        "Twitter",
        "Instagram",
        "Facebook",
        "Newsletter Signup",
      ],
    },
    {
      title: "Certifications",
      links: ["Certified", "Ethical Research Compliant"],
    },
  ];

  const socialLinks: SocialLink[] = [
    { icon: Facebook, label: "Facebook" },
    { icon: Twitter, label: "Twitter" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Github, label: "GitHub" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-8 mb-16">
          {/* BRAND + CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">NAR</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">NexGen Research</span>
                <span className="text-xs text-blue-300">Academic</span>
              </div>
            </div>

            <p className="text-blue-200 mb-6 leading-relaxed">
              Serving since last 18 years NexGen Market Research Services Pvt
              Ltd is a multidisciplinary market research agency, offers high
              quality marketing research, analysis and consulting services.
            </p>

            <div className="space-y-3">
              <div
                onClick={handleClick}
                className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors cursor-pointer"
              >
                <Mail className="w-5 h-5" />
                <span>mail@nexgenint.com</span>
              </div>

              <div
                onClick={handleClick}
                className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                <span>+91 98731 77449</span>
              </div>

              <div
                onClick={handleClick}
                className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors cursor-pointer"
              >
                <MapPin className="w-5 h-5" />
                <span>Noida-201309, UP, India</span>
              </div>
            </div>
          </motion.div>

          {/* FOOTER LINKS */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <span className="text-lg font-bold mb-4 block">
                {section.title}
              </span>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={handleClick}
                      className="text-blue-200 hover:text-white transition-colors hover:translate-x-1 inline-block text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-blue-800/30 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-blue-300 text-sm">
              © 2026 Academic Research Institute. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.button
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -4 }}
                  onClick={handleClick}
                  aria-label={social.label}
                  className="w-10 h-10 bg-blue-800/30 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm text-blue-300">
              <button
                onClick={handleClick}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={handleClick}
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SCROLL TO TOP */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -4 }}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 z-50"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  );
};

export default Footer;