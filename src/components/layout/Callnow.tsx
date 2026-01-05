import type { FC } from "react";
import { useState } from "react";
import { Phone, MessageSquareText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CallNowButton: FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="
        hidden md:flex           /* 👈 HIDDEN on mobile, FLEX on desktop (md+) */
        fixed top-[92px] right-0 
        z-[60] 
        items-center justify-end
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. THE TEXT PART (Connect with us) -> Redirects to Form */}
      <AnimatePresence>
        {isHovered && (
          <motion.a
            href="/contact-us" // Change this to your form page URL
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="
              bg-white 
              text-blue-600 
              border-y border-l border-blue-600/20
              py-3 pl-4 
              rounded-l-xl
              shadow-lg
              font-semibold
              whitespace-nowrap
              flex items-center gap-2
              hover:bg-blue-50
              -mr-4
              pr-8 
            "
          >
            <MessageSquareText className="w-4 h-4" /> 
            Connect with us
          </motion.a>
        )}
      </AnimatePresence>

      {/* 2. THE PHONE LOGO PART -> Triggers Call */}
      <motion.a
        href="tel:+15551234567"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="
          relative 
          z-10 
          flex items-center justify-center 
          bg-gradient-to-r from-blue-600 to-indigo-600
          text-white
          w-14 h-12
          rounded-l-xl
          shadow-2xl
          cursor-pointer
        "
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </div>
  );
};

export default CallNowButton;