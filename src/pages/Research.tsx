import type { FC } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  BadgeDollarSign,
  Truck,
  Globe,
  Cpu,
  Activity,
  Plane,
  Lightbulb,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

// ================= DATA: RESEARCH DOMAINS =================
const researchDomains = [
  {
    id: "marketing",
    title: "Marketing Management",
    icon: TrendingUp,
    color: "text-pink-600",
    bg: "bg-pink-50",
    desc: "Exploring the dynamics of consumer psychology, digital transformation, and brand equity in a competitive marketplace.",
    topics: [
      "Consumer Behavior & Neuromarketing",
      "Digital Marketing & Social Media Analytics",
      "Green Marketing & Sustainability",
      "Brand Equity & Customer Loyalty",
      "Service Quality (SERVQUAL Models)",
    ],
  },
  {
    id: "hr",
    title: "Human Resource Management",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-50",
    desc: "Analyzing organizational culture, employee retention strategies, and the impact of remote work on productivity.",
    topics: [
      "Employee Engagement & Job Satisfaction",
      "Performance Appraisal Systems",
      "Work-Life Balance & Remote Culture",
      "Diversity, Equity, and Inclusion (DEI)",
      "Organizational Citizenship Behavior",
    ],
  },
  {
    id: "finance",
    title: "Financial Management",
    icon: BadgeDollarSign,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    desc: "Investigating market volatility, fintech innovations, investment behaviors, and corporate financial health.",
    topics: [
      "Behavioral Finance & Investor Psychology",
      "Fintech & Cryptocurrency Adoption",
      "Risk Management & Derivatives",
      "Corporate Governance & Ethics",
      "Microfinance & Financial Inclusion",
    ],
  },
  {
    id: "operations",
    title: "Operations & Supply Chain",
    icon: Truck,
    color: "text-orange-600",
    bg: "bg-orange-50",
    desc: "Optimizing logistics, production efficiency, and supply chain resilience in a globalized economy.",
    topics: [
      "Supply Chain Resilience & Risk",
      "Green Supply Chain Management",
      "Six Sigma & Total Quality Management",
      "Inventory Optimization Models",
      "Logistics & Last-Mile Delivery",
    ],
  },
  {
    id: "ib",
    title: "International Business",
    icon: Globe,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    desc: "Understanding cross-cultural management, foreign trade policies, and global market entry strategies.",
    topics: [
      "Cross-Cultural Management Strategies",
      "Foreign Direct Investment (FDI) Trends",
      "Global Market Entry Strategies",
      "Export-Import Dynamics",
      "Geopolitics & International Trade",
    ],
  },
  {
    id: "it",
    title: "IT Management",
    icon: Cpu,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    desc: "Bridging the gap between technology and business strategy through AI, cloud computing, and cybersecurity.",
    topics: [
      "Artificial Intelligence in Business",
      "Cloud Computing & SaaS Adoption",
      "Cybersecurity & Data Privacy",
      "Blockchain Applications in Management",
      "Digital Transformation Strategies",
    ],
  },
  {
    id: "hospital",
    title: "Hospital Management",
    icon: Activity,
    color: "text-red-600",
    bg: "bg-red-50",
    desc: "Improving patient care quality, healthcare administration efficiency, and medical infrastructure management.",
    topics: [
      "Patient Satisfaction & Experience",
      "Healthcare Informatics & EHR",
      "Hospital Waste Management",
      "Telemedicine & Remote Health",
      "Quality Accreditation (NABH/JCI)",
    ],
  },
  {
    id: "tourism",
    title: "Travel & Tourism",
    icon: Plane,
    color: "text-sky-600",
    bg: "bg-sky-50",
    desc: "Studying sustainable tourism, destination branding, and the economic impact of the hospitality industry.",
    topics: [
      "Sustainable & Ecotourism",
      "Destination Branding & Marketing",
      "Impact of Technology on Travel",
      "Medical Tourism Trends",
      "Heritage & Cultural Tourism",
    ],
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship & Family Business",
    icon: Lightbulb,
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    desc: "Researching startup ecosystems, innovation management, and succession planning in family-owned enterprises.",
    topics: [
      "Startup Ecosystems & Incubation",
      "Social Entrepreneurship",
      "Succession Planning in Family Business",
      "Innovation & Design Thinking",
      "Women Entrepreneurship",
    ],
  },
];

// ================= ANIMATION VARIANTS =================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ================= COMPONENT =================
const ResearchAreasPage: FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 pt-12 pb-12 sm:pt-14 sm:pb-16 px-4">
        
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.2, 0.12] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px]"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.18, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[150px]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/10 border border-white/10 text-blue-200 text-xs font-semibold tracking-wider uppercase backdrop-blur-md"
          >
            Academic Expertise
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Our Research <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Domains & Areas
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed"
          >
            Specialized academic support tailored to your discipline and university standards.
          </motion.p>
        </div>
      </section>

      {/* ================= INTRO TEXT SECTION (HIDDEN ON MOBILE) ================= */}
      {/* Using 'hidden sm:block' to completely remove this section on mobile */}
      <section className="hidden sm:block bg-white py-14 px-4 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Comprehensive Support Across Key Disciplines
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We understand that every research project is unique, requiring deep subject matter expertise and precise methodological execution. 
              Whether you are conducting quantitative analysis in Finance or qualitative case studies in Human Resources, our specialized teams are equipped to guide you. 
              Explore our core research domains below to find the perfect alignment for your thesis or dissertation topic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= DOMAINS GRID ================= */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {researchDomains.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 flex flex-col"
              >
                {/* Header of Card */}
                <div className={`p-8 ${item.bg} border-b border-slate-100`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 bg-white rounded-xl shadow-sm ${item.color}`}>
                      <item.icon className="w-8 h-8" />
                    </div>
                    <span className="text-4xl font-bold text-slate-200 group-hover:text-slate-300 transition-colors">
                      0{researchDomains.indexOf(item) + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Body of Card */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                    
                    {/* Detailed Topics List */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                        Key Research Topics:
                      </h4>
                      <ul className="space-y-2">
                        {item.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 mt-6 border-t border-slate-100">
                    <button className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:gap-4 transition-all group-hover:text-blue-700">
                      Explore Projects <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE SECTION ================= */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
                Why Conduct Research in These Areas With Us?
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Academic research requires precision, updated literature, and robust statistical analysis. 
                Our team of subject matter experts ensures your research stands out.
              </p>
              
              <div className="space-y-4">
                {[
                  "Access to Paid Journals (Scopus, Web of Science)",
                  "Expert Statistical Analysis (SPSS, AMOS, R, Python)",
                  "Plagiarism-Free & AI-Free Writing Guarantees",
                  "Dedicated Supervisor for Each Domain"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                    <span className="text-slate-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl transform rotate-3" />
              <div className="relative bg-slate-900 text-white p-10 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Need a Custom Topic?</h3>
                <p className="text-slate-300 mb-8">
                  If your research area isn't listed here, don't worry. We handle niche and 
                  interdisciplinary topics tailored to your university requirements.
                </p>
                <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/50">
                  Consult With an Expert
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ResearchAreasPage;