import type { FC } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FlaskConical,
  Users,
  Award,
  BookOpen,
  FileText,
  CheckCircle,
  Globe
} from "lucide-react";
import { useToast } from "../components/ui/use-toast";

const Home: FC = () => {
  const { toast } = useToast();

  const handleClick = (): void => {
    toast({
      title: "Button Clicked",
      description: "This is where the button action happens.",
    });
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-indigo-100/30 to-transparent" />

        {/* Animated Background Blobs (Design Element) */}
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
              {/* Tagline / Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                <Award className="w-4 h-4" />
                <span>[ SHORT TAGLINE OR BRAND CATEGORY ]</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] text-slate-900">
                [ MAIN HERO HEADLINE ]
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  [ HIGHLIGHTED KEYWORD PHRASE ]
                </span>
              </motion.h1>

              {/* Sub-headline / Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-slate-600 leading-relaxed"
              >
                [ Detailed sub-headline goes here. Explain what you do, who you help, and the primary value proposition of your service in 1-2 sentences. ]
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={handleClick}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  [ Primary CTA ]
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleClick}
                  className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                >
                  [ Secondary CTA ]
                </button>
              </motion.div>

              {/* Trust Indicators / Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-center gap-8 pt-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">[ Number ]+</p>
                    <p className="text-sm text-slate-600">[ Stat Label 1 ]</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">[ Number ]+</p>
                    <p className="text-sm text-slate-600">[ Stat Label 2 ]</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                alt="[ Image Description ]"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES / FEATURES GRID ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              [ Main Section Title ]
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              [ Brief introductory text explaining the range of services or key features offered by the organization. ]
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "[ Service Title 1 ]",
                desc: "[ Brief description of service 1 goes here. Explain the benefit. ]",
                icon: BookOpen
              },
              {
                title: "[ Service Title 2 ]",
                desc: "[ Brief description of service 2 goes here. Explain the benefit. ]",
                icon: FileText
              },
              {
                title: "[ Service Title 3 ]",
                desc: "[ Brief description of service 3 goes here. Explain the benefit. ]",
                icon: FlaskConical
              },
              {
                title: "[ Service Title 4 ]",
                desc: "[ Brief description of service 4 goes here. Explain the benefit. ]",
                icon: Globe
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
                    <item.icon className="w-6 h-6" />
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
        </div>
      </section>

      {/* ================= METHODOLOGY / METRICS SECTION ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text List */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-extrabold text-slate-900">
              [ Methodology / Approach Title ]
            </h2>
            <p className="text-lg text-slate-600 max-w-xl">
              [ Description of how you work, your process, or why your approach is superior. ]
            </p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500"/> [ Key Point / Benefit 1 ]</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500"/> [ Key Point / Benefit 2 ]</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500"/> [ Key Point / Benefit 3 ]</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500"/> [ Key Point / Benefit 4 ]</li>
            </ul>
          </motion.div>

          {/* Right Side: Animated Stats/Bars */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="bg-slate-900 text-white rounded-2xl shadow-2xl p-8"
          >
            {[
              { label: "[ Metric Label A ]", value: 98, color: "bg-blue-500" },
              { label: "[ Metric Label B ]", value: 100, color: "bg-indigo-500" },
              { label: "[ Metric Label C ]", value: 95, color: "bg-cyan-500" },
              { label: "[ Metric Label D ]", value: 100, color: "bg-emerald-500" },
            ].map((item, index) => (
              <div key={item.label} className="mb-5">
                <div className="flex justify-between text-sm mb-1">
                  <span>{item.label}</span>
                  <span className="text-slate-300">{item.value}%</span>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className={`h-full ${item.color}`}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;