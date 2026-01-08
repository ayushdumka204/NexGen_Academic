import type { FC } from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  ShieldCheck,
  Zap,
  Users,
  Globe,
  ArrowRight,
  Lightbulb,
  Award
} from "lucide-react";

const MissionVisionPage: FC = () => {
  // Animation variants for consistency
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="font-sans bg-white text-slate-900">
      
      {/* ================= HERO SECTION (UPDATED: Text Left, Image Right) ================= */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-indigo-100/30 to-transparent" />

        {/* Animated Background Blobs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT COLUMN: Text Content */}
            <div className="space-y-8">
              {/* Page Tag/Category */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                <Award className="w-4 h-4" />
                <span>[ PAGE CATEGORY / TAG ]</span>
              </motion.span>

              {/* Main Hero Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] text-slate-900"
              >
                [ MISSION PAGE HEADLINE ] <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  [ HIGHLIGHTED KEYWORD ]
                </span>
              </motion.h1>

              {/* Intro Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-slate-600 leading-relaxed"
              >
                [ Brief introductory text explaining the organization's purpose, scope, and high-level goals. Explain what drives the company forward. ]
              </motion.p>

              {/* Optional CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  [ CTA Button Text ]
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="[ Image Description: Team or Vision concept ]"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= SPLIT SECTION (Mission/Vision) ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* --- LEFT SIDE: MISSION --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="absolute -left-4 -top-4 w-20 h-20 bg-orange-100 rounded-full blur-2xl opacity-60" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 border border-orange-100 shadow-sm">
                <Target className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">[ MISSION TITLE ]</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              [ Detailed mission statement describing the organization's immediate purpose, who it serves, and what it aims to achieve in the present. ]
            </p>
            <ul className="space-y-4">
              {[
                "[ Key Mission Point 1 ]",
                "[ Key Mission Point 2 ]",
                "[ Key Mission Point 3 ]"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-orange-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* --- RIGHT SIDE: VISION --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-indigo-100 rounded-full blur-2xl opacity-60" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 border border-indigo-100 shadow-sm">
                <Eye className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">[ VISION TITLE ]</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              [ Detailed vision statement describing the future state the organization aspires to create and its long-term impact on the industry or world. ]
            </p>
            <ul className="space-y-4">
              {[
                "[ Key Vision Point 1 ]",
                "[ Key Vision Point 2 ]",
                "[ Key Vision Point 3 ]"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </section>

      {/* ================= GRID SECTION (Core Values) ================= */}
      <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="uppercase tracking-widest text-sm font-semibold text-indigo-600">
              [ SECTION TAGLINE ]
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
              [ SECTION HEADLINE ]
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              [ Brief description of the core values, principles, or pillars that guide the organization's culture and decision-making. ]
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "[ Value Title 1 ]",
                desc: "[ Description of value 1. Explain why this is important to the organization. ]",
                color: "text-emerald-600",
                bg: "bg-emerald-50"
              },
              {
                icon: Award,
                title: "[ Value Title 2 ]",
                desc: "[ Description of value 2. Explain why this is important to the organization. ]",
                color: "text-amber-600",
                bg: "bg-amber-50"
              },
              {
                icon: Lightbulb,
                title: "[ Value Title 3 ]",
                desc: "[ Description of value 3. Explain why this is important to the organization. ]",
                color: "text-purple-600",
                bg: "bg-purple-50"
              },
              {
                icon: Users,
                title: "[ Value Title 4 ]",
                desc: "[ Description of value 4. Explain why this is important to the organization. ]",
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                icon: Globe,
                title: "[ Value Title 5 ]",
                desc: "[ Description of value 5. Explain why this is important to the organization. ]",
                color: "text-cyan-600",
                bg: "bg-cyan-50"
              },
              {
                icon: Zap,
                title: "[ Value Title 6 ]",
                desc: "[ Description of value 6. Explain why this is important to the organization. ]",
                color: "text-rose-600",
                bg: "bg-rose-50"
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { delay: i * 0.1, duration: 0.6 } 
                  }
                }}
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 ${value.bg} ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BANNER SECTION (Closing Statement) ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
           className="bg-white rounded-3xl p-8 sm:p-16 text-center relative overflow-hidden border border-slate-200 shadow-2xl"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-100 rounded-full blur-[80px] opacity-60 pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100 rounded-full blur-[80px] opacity-60 pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
              [ CLOSING HEADLINE / COMMITMENT ]
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              "[ Final inspiring message or call to action text reinforcing the organization's dedication to its mission and the user's success. ]"
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 hover:scale-105 transition-all duration-300 shadow-lg">
              [ CTA BUTTON TEXT ]
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default MissionVisionPage;