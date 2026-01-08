import type { FC } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileSearch,
  Lock,
  Scale,
  CheckCircle,
  ArrowRight,
  Eye,
  FileCheck,
  Server,
  Cpu,
  BarChart3,
  BookCheck,
  FileText
} from "lucide-react";
import { useToast } from "../components/ui/use-toast";

const QualityEthics: FC = () => {
  const { toast } = useToast();

  const handleClick = (): void => {
    toast({
      title: "Button Clicked",
      description: "Action triggered placeholder.",
    });
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="font-sans bg-white text-slate-900">
      
      {/* ================= HERO SECTION (Text Left, Image Right) ================= */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-indigo-100/30 to-transparent" />

        {/* Abstract Background Shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text */}
            <div className="text-left space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide border border-blue-200"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>[ SECTION TAG / LABEL ]</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight"
              >
                [ HEADING 1: MAIN TITLE ] <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  [ HIGHLIGHTED SUB-TEXT ]
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-slate-600 leading-relaxed"
              >
                [ Brief introductory paragraph explaining the core focus of this page. This text sets the context for quality assurance and ethics. ]
              </motion.p>
            </div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-indigo-600 rounded-2xl transform rotate-3 scale-[0.98] opacity-10" />
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
                alt="[ Image Description ]"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 1: CORE PILLARS ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Pillar 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
              <FileSearch className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">[ CORE PILLAR TITLE 1 ]</h3>
            <p className="text-slate-600 leading-relaxed">
              [ Description of the first core pillar or value. Explain the standard maintained here. ]
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
              <Lock className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">[ CORE PILLAR TITLE 2 ]</h3>
            <p className="text-slate-600 leading-relaxed">
              [ Description of the second core pillar or value. Explain the security or privacy aspect here. ]
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
              <Scale className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">[ CORE PILLAR TITLE 3 ]</h3>
            <p className="text-slate-600 leading-relaxed">
              [ Description of the third core pillar or value. Explain the integrity or compliance aspect here. ]
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= SECTION 2: PROCESS FLOW ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <span className="uppercase tracking-widest text-sm font-semibold text-indigo-600">
              [ SUB-HEADING / CATEGORY ]
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
              [ HEADING 2: PROCESS TITLE ]
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              [ Brief description of the workflow or quality control steps taken. ]
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-200 -z-10" />

            {[
              {
                step: "01",
                title: "[ Step 1 Title ]",
                desc: "[ Description of step 1 ]",
                icon: FileCheck
              },
              {
                step: "02",
                title: "[ Step 2 Title ]",
                desc: "[ Description of step 2 ]",
                icon: Server
              },
              {
                step: "03",
                title: "[ Step 3 Title ]",
                desc: "[ Description of step 3 ]",
                icon: Eye
              },
              {
                step: "04",
                title: "[ Step 4 Title ]",
                desc: "[ Description of step 4 ]",
                icon: CheckCircle
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative"
              >
                <div className="w-16 h-16 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 mx-auto md:mx-0">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="absolute top-6 right-6 text-4xl font-bold text-slate-100 select-none">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: ETHICAL STATEMENT (White BG) ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
           className="text-center"
        >
          <div className="relative z-10">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-600">
                <Scale className="w-8 h-8" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
              [ HEADING 3: ETHICAL STANCE ]
            </h2>
            
            <div className="text-lg text-slate-600 max-w-3xl mx-auto space-y-6 leading-relaxed">
              <p>
                [ Primary paragraph detailing the organization's ethical commitment. <span className="text-indigo-600 font-bold">[ Bold Key Phrase ]</span> used for emphasis. ]
              </p>
              <p>
                [ Secondary paragraph expanding on the philosophy, integrity, or compliance standards adhered to. ]
              </p>
            </div>
            
            <div className="mt-10">
                <button 
                    onClick={handleClick}
                    className="inline-flex items-center gap-2 text-indigo-600 font-semibold border-b-2 border-indigo-100 pb-1 hover:border-indigo-600 transition-colors"
                >
                    [ Action Link Text ]
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= SECTION 4: TOOLS & TECHNOLOGIES ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-slate-900">[ HEADING 4: TOOLS TITLE ]</h2>
                <p className="mt-3 text-slate-600">[ Subtitle description for the tools section. ]</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        name: "[ Tool Name 1 ]",
                        desc: "[ Description of Tool 1 and its function. ]",
                        icon: FileSearch,
                        color: "text-blue-600",
                        bg: "bg-blue-50"
                    },
                    {
                        name: "[ Tool Name 2 ]",
                        desc: "[ Description of Tool 2 and its function. ]",
                        icon: BookCheck,
                        color: "text-green-600",
                        bg: "bg-green-50"
                    },
                    {
                        name: "[ Tool Name 3 ]",
                        desc: "[ Description of Tool 3 and its function. ]",
                        icon: BarChart3,
                        color: "text-indigo-600",
                        bg: "bg-indigo-50"
                    },
                    {
                        name: "[ Tool Name 4 ]",
                        desc: "[ Description of Tool 4 and its function. ]",
                        icon: FileText,
                        color: "text-purple-600",
                        bg: "bg-purple-50"
                    },
                    {
                        name: "[ Tool Name 5 ]",
                        desc: "[ Description of Tool 5 and its function. ]",
                        icon: Cpu,
                        color: "text-orange-600",
                        bg: "bg-orange-50"
                    },
                    {
                        name: "[ Tool Name 6 ]",
                        desc: "[ Description of Tool 6 and its function. ]",
                        icon: Server,
                        color: "text-cyan-600",
                        bg: "bg-cyan-50"
                    }
                ].map((tool) => (
                    <motion.div 
                        key={tool.name}
                        whileHover={{ y: -5 }}
                        className="flex items-start gap-4 p-6 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 bg-slate-50/50"
                    >
                        <div className={`w-12 h-12 rounded-lg ${tool.bg} ${tool.color} flex items-center justify-center shrink-0`}>
                            <tool.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg">{tool.name}</h3>
                            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                                {tool.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

    </div>
  );
};

export default QualityEthics;