import type { FC } from "react";
import { motion } from "framer-motion";
import { Award, Users, Briefcase, Target } from "lucide-react";
import { useToast } from "../components/ui/use-toast";

const Team: FC = () => {
  const { toast } = useToast();

  const handleClick = (): void => {
    toast({
      title: "This feature isn't implemented yet",
    });
  };

  return (
    <>
      {/* ================= TEAM HERO ================= */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-widest uppercase"
          >
            Our People
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight"
          >
            Experts Behind Our
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Market Intelligence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-3xl mx-auto text-lg text-slate-600"
          >
            Our team brings together experienced researchers, analysts,
            consultants, and strategists dedicated to delivering actionable
            insights and measurable business impact.
          </motion.p>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our leadership combines deep industry experience with strong
              research, analytics, and strategic consulting expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Mr. Mahesh Mahtoliya",
                role: "Founder & Chief Research Officer",
                desc: "20+ years in market research, strategy consulting, and analytics leadership.",
              },
              {
                name: "Mr. Devendra Bhatt",
                role: "COO",
                desc: "Specialist in consumer behavior, brand strategy, and qualitative research.",
              },
              {
                name: "Mr. Tarun Mahtoliya",
                role: "Senior Manager",
                desc: "Lead the Team from the top of the department.",
              },
              {
                name: "Mr. Mahesh Mahtoliya",
                role: "Founder & Chief Research Officer",
                desc: "20+ years in market research, strategy consulting, and analytics leadership.",
              },
              {
                name: "Mr. Devendra Bhatt",
                role: "COO",
                desc: "Specialist in consumer behavior, brand strategy, and qualitative research.",
              },
              {
                name: "Mr. Tarun Mahtoliya",
                role: "Senior Manager",
                desc: "Lead the Team from the top of the department.",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl border border-slate-200 p-8 bg-slate-50 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                  {member.name.charAt(0)}
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RESEARCH & ANALYTICS TEAM ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-extrabold text-slate-900">
              Research & Analytics Specialists
            </h2>
            <p className="text-lg text-slate-600">
              Our multidisciplinary team works across quantitative research,
              qualitative studies, competitive intelligence, and advanced
              analytics to deliver reliable insights.
            </p>

            <ul className="space-y-3 text-slate-700">
              <li className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Dedicated sector-focused research teams
              </li>
              <li className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-600" />
                Strong consulting & problem-solving approach
              </li>
              <li className="flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" />
                Insights aligned to business decisions
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {[
              { label: "Researchers", value: "45+" },
              { label: "Analysts", value: "30+" },
              { label: "Industries Covered", value: "25+" },
              { label: "Global Projects", value: "300+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white border border-slate-200 p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-slate-900">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CULTURE & VALUES ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              Our Culture & Values
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We foster a culture of integrity, curiosity, collaboration,
              and continuous learning.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Research Excellence",
                desc: "High standards of rigor, accuracy, and methodological integrity.",
              },
              {
                icon: Users,
                title: "Collaboration",
                desc: "Cross-functional teamwork to deliver deeper insights.",
              },
              {
                icon: Target,
                title: "Client Impact",
                desc: "Focused on outcomes that drive real business value.",
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
                <item.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleClick}
            className="mt-14 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all"
          >
            Join Our Team
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default Team;
// end
