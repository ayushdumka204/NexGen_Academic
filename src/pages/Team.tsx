import type { FC } from "react";
import { motion } from "framer-motion";
import { Award, Users, Briefcase, Target, ArrowRight } from "lucide-react";
import { useToast } from "../components/ui/use-toast";

const Team: FC = () => {
  const { toast } = useToast();

  const handleClick = (): void => {
    toast({
      title: "Join Team",
      description: "Redirecting to careers page...",
    });
  };

  return (
    <div className="font-sans bg-white text-slate-900">
      
      {/* ================= TEAM HERO ================= */}
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide border border-blue-200"
              >
                <Users className="w-4 h-4" />
                <span>Our People</span>
              </motion.div>

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
                className="text-xl text-slate-600 leading-relaxed"
              >
                Our team brings together experienced researchers, analysts,
                consultants, and strategists dedicated to delivering actionable
                insights and measurable business impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <button 
                  onClick={handleClick}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  Join Our Team
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Team Image (Structure kept, only URL changed) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-indigo-600 rounded-2xl transform rotate-3 scale-[0.98] opacity-10" />
              <img
                // CHANGED IMAGE URL
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="NexGen Professional Team Meeting"
                // SAME CLASSES AS BEFORE FOR SAME SIZE/STYLE
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
                desc: "Leading the operational team and ensuring project delivery excellence.",
              },
              {
                name: "Mrs. Nisha Joshi",
                role: "Head of Strategy",
                desc: "Expert in data interpretation, business intelligence, and client relations.",
              },
              {
                name: "Dr. A. K. Sharma",
                role: "Lead Analyst",
                desc: "PhD in Statistics with a focus on predictive modeling and data mining.",
              },
              {
                name: "Ms. Riya Singh",
                role: "Research Consultant",
                desc: "Specializes in academic writing, editing, and publication support.",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl border border-slate-200 p-8 bg-slate-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                  {member.name.charAt(0)}
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3 text-sm uppercase tracking-wide">
                  {member.role}
                </p>
                <p className="text-slate-600 leading-relaxed text-sm">
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

            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-blue-600" />
                </div>
                <span className="font-medium">Dedicated sector-focused research teams</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-indigo-600" />
                </div>
                <span className="font-medium">Strong consulting & problem-solving approach</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-blue-600" />
                </div>
                <span className="font-medium">Insights aligned to business decisions</span>
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
                className="rounded-xl bg-white border border-slate-200 p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-slate-500 mt-2 uppercase tracking-wider">
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
                <div className="w-14 h-14 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <item.icon className="w-7 h-7" />
                </div>
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
            className="mt-16 px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all"
          >
            Join Our Team
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Team;