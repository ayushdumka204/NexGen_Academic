import type { FC } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FlaskConical,
  Users,
  Award,
  Brain,
  Dna,
  Microscope,
  Atom,
  Cpu,
  Leaf,
} from "lucide-react";
import { useToast } from "../components/ui/use-toast";

/* ---------- TYPES ---------- */
type ResearchArea = {
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
  color: string;
};

/* ---------- COMPONENT ---------- */
const Home: FC = () => {
  const { toast } = useToast();

  const handleClick = (): void => {
    toast({
      title: "🚧 This feature isn't implemented yet",
    });
  };

  const areas: ResearchArea[] = [
    {
      icon: Brain,
      title: "Cognitive Science",
      description:
        "Exploring the mechanisms of human cognition and brain function",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Dna,
      title: "Biotechnology",
      description: "Advancing genetic research and medical innovations",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Microscope,
      title: "Materials Science",
      description: "Developing next-generation materials and compounds",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Atom,
      title: "Quantum Physics",
      description: "Investigating quantum phenomena and applications",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Creating intelligent systems and algorithms",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Leaf,
      title: "Environmental Studies",
      description: "Researching sustainability and climate solutions",
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-indigo-100/30 to-transparent" />

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
            {/* LEFT */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                <Award className="w-4 h-4" />
                <span>Leading Research Excellence Since 2005</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-slate-900"
              >
                Advancing Knowledge Through
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Innovation
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-slate-600 leading-relaxed"
              >
                A premier academic research institute dedicated to groundbreaking
                research, data-driven insights, and collaborative partnerships
                that shape the future of science and technology.
              </motion.p>

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
                  Explore Research
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleClick}
                  className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                >
                  View Projects
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-center gap-8 pt-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FlaskConical className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">150+</p>
                    <p className="text-sm text-slate-600">Research Projects</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">80+</p>
                    <p className="text-sm text-slate-600">Researchers</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1701848055770-effbdb148e15"
                alt="Research laboratory"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl opacity-20 blur-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= RESEARCH AREAS SECTION ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Research Areas
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our interdisciplinary research spans multiple cutting-edge fields,
              driving innovation and discovery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={handleClick}
                className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl border border-slate-200"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <area.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {area.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
// end
