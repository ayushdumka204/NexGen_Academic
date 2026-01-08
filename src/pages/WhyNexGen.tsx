import type { FC } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Users,
  Award,
  Headphones,
  CheckCircle,
  ArrowRight,
  Lock,
  FileText
} from "lucide-react";

const WhyChooseUs: FC = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="font-sans bg-white text-slate-900">
      
      {/* ================= HERO SECTION ================= */}
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
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                <Award className="w-4 h-4" />
                <span>[ HERO TAGLINE / CATEGORY ]</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] text-slate-900"
              >
                [ MAIN HERO HEADING ] <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  [ HIGHLIGHTED KEYWORD ]
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-slate-600 leading-relaxed"
              >
                [ Brief introductory text explaining the core value proposition. Why should the user choose this service over others? ]
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  [ Primary CTA Button ]
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
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                alt="[ Image Description ]"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 1: BENEFITS GRID ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            [ SECTION 1 TITLE ]
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            [ Subtitle explaining the commitment to quality or specific standards set by the organization. ]
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "[ Benefit Title 1 ]",
              desc: "[ Description of benefit 1. Explain the team qualification or expertise level. ]",
              color: "text-blue-600",
              bg: "bg-blue-50"
            },
            {
              icon: Clock,
              title: "[ Benefit Title 2 ]",
              desc: "[ Description of benefit 2. Explain the turnaround time or speed efficiency. ]",
              color: "text-indigo-600",
              bg: "bg-indigo-50"
            },
            {
              icon: ShieldCheck,
              title: "[ Benefit Title 3 ]",
              desc: "[ Description of benefit 3. Explain the guarantee or quality assurance policy. ]",
              color: "text-emerald-600",
              bg: "bg-emerald-50"
            },
            {
              icon: Lock,
              title: "[ Benefit Title 4 ]",
              desc: "[ Description of benefit 4. Explain privacy, security, or confidentiality measures. ]",
              color: "text-amber-600",
              bg: "bg-amber-50"
            },
            {
              icon: FileText,
              title: "[ Benefit Title 5 ]",
              desc: "[ Description of benefit 5. Explain the comprehensive nature of the service. ]",
              color: "text-purple-600",
              bg: "bg-purple-50"
            },
            {
              icon: Headphones,
              title: "[ Benefit Title 6 ]",
              desc: "[ Description of benefit 6. Explain the support availability or customer service. ]",
              color: "text-rose-600",
              bg: "bg-rose-50"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }
              }}
              className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 2: COMPARISON ================= */}
      <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInUp}
             className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Comparison Text */}
            <div>
              <span className="uppercase tracking-widest text-sm font-semibold text-indigo-600">
                [ SECTION TAG ]
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
                [ COMPARISON HEADING ]
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                [ Detailed text comparing this service against competitors or alternatives. Explain the unique selling point (USP). ]
              </p>
              
              <ul className="space-y-4">
                {[
                  "[ Key Differentiator 1 ]",
                  "[ Key Differentiator 2 ]",
                  "[ Key Differentiator 3 ]",
                  "[ Key Differentiator 4 ]"
                ].map((point, i) => (
                   <li key={i} className="flex items-center gap-3">
                     <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                       <CheckCircle className="w-4 h-4" />
                     </div>
                     <span className="text-slate-700 font-medium">{point}</span>
                   </li>
                ))}
              </ul>
            </div>

            {/* Comparison Card/Visual */}
            <div className="relative">
              {/* Abstract decorative background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-indigo-200 rounded-3xl transform rotate-3 blur-sm" />
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                <div className="space-y-6">
                  {/* Row 1 */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <span className="font-semibold text-slate-600">[ Criteria 1 ]</span>
                    <div className="flex items-center gap-8">
                      <span className="text-sm text-red-400">[ Low Status ]</span>
                      <span className="text-sm font-bold text-green-600">[ High Status ]</span>
                    </div>
                  </div>
                   {/* Row 2 */}
                   <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <span className="font-semibold text-slate-600">[ Criteria 2 ]</span>
                    <div className="flex items-center gap-8">
                      <span className="text-sm text-red-400">[ Risk Status ]</span>
                      <span className="text-sm font-bold text-green-600">[ Safe Status ]</span>
                    </div>
                  </div>
                   {/* Row 3 */}
                   <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <span className="font-semibold text-slate-600">[ Criteria 3 ]</span>
                    <div className="flex items-center gap-8">
                      <span className="text-sm text-red-400">[ Variable Status ]</span>
                      <span className="text-sm font-bold text-green-600">[ Expert Status ]</span>
                    </div>
                  </div>
                   {/* Row 4 */}
                   <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-600">[ Criteria 4 ]</span>
                    <div className="flex items-center gap-8">
                      <span className="text-sm text-red-400">[ Limited Status ]</span>
                      <span className="text-sm font-bold text-green-600">[ Full Status ]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 3: STATS ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "[ Stat Label 1 ]", value: "[ Value 1 ]" },
              { label: "[ Stat Label 2 ]", value: "[ Value 2 ]" },
              { label: "[ Stat Label 3 ]", value: "[ Value 3 ]" },
              { label: "[ Stat Label 4 ]", value: "[ Value 4 ]" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6"
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-500 font-medium uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
              [ FINAL CTA HEADING ]
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              [ Concluding text encouraging the user to take action. Mention free consultations, quotes, or joining the successful client base. ]
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300">
                [ Primary Action ]
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all duration-300">
                [ Secondary Action ]
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default WhyChooseUs;