import { useState, type FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PieChart, Users, Coins, Truck, Globe2, Cpu, HeartPulse, Plane, Rocket,
  CheckCircle, BarChart3, Search, ArrowRight, Layers,
  Network, Leaf, Zap, ShieldCheck
} from "lucide-react";

// ================= DATA (UNCHANGED) =================
const researchData = [
  {
    id: "marketing",
    title: "Marketing Management",
    icon: PieChart,
    color: "from-pink-500 to-rose-500",
    overview: "We analyze the psychological and behavioral patterns of consumers to decode market trends.",
    whatWeDo: [
      "Consumer Neuroscience & Eye Tracking Studies",
      "Brand Equity & Architecture Analysis",
      "Digital Marketing ROI & Attribution Modeling",
      "Customer Lifetime Value (CLV) Prediction"
    ],
    howWeDoIt: [
      "Quantitative Surveys (N=500+)",
      "SEM (Structural Equation Modeling) on AMOS",
      "Social Media Sentiment Analysis using Python",
      "Experimental Design (A/B Testing)"
    ]
  },
  {
    id: "hr",
    title: "Human Resource (HRM)",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    overview: "Focusing on the human capital asset, bridging the gap between organizational goals and employee well-being.",
    whatWeDo: [
      "Organizational Culture & Climate Surveys",
      "Diversity, Equity & Inclusion (DEI) Impact",
      "HR Analytics & Predictive Attrition Models",
      "Performance Appraisal Effectiveness"
    ],
    howWeDoIt: [
      "Qualitative Interviews (Phenomenology)",
      "Factor Analysis (EFA/CFA) on SPSS",
      "Case Study Methodology",
      "Employee Net Promoter Score (eNPS)"
    ]
  },
  {
    id: "finance",
    title: "Financial Management",
    icon: Coins,
    color: "from-emerald-500 to-green-500",
    overview: "Rigorous quantitative analysis of markets, assets, and economic policies to manage risk and return.",
    whatWeDo: [
      "Asset Pricing & Portfolio Optimization",
      "Behavioral Finance (Investor Psychology)",
      "Fintech Adoption & Blockchain Utility",
      "Corporate Governance & Firm Performance"
    ],
    howWeDoIt: [
      "Time Series Analysis (ARIMA/GARCH)",
      "Panel Data Regression (Fixed/Random Effects)",
      "Secondary Data Analysis (Bloomberg/Prowess)",
      "Monte Carlo Simulations"
    ]
  },
  {
    id: "operations",
    title: "Operations & Supply Chain",
    icon: Truck,
    color: "from-orange-500 to-amber-500",
    overview: "Optimizing the flow of goods and services through data-driven logistical frameworks.",
    whatWeDo: [
      "Green Supply Chain Management (GSCM)",
      "Lean Six Sigma Implementation",
      "Logistics Network Optimization",
      "Quality Management Systems (TQM)"
    ],
    howWeDoIt: [
      "Linear Programming & Optimization Models",
      "Simulation Modeling (Arena/AnyLogic)",
      "Value Stream Mapping",
      "Statistical Process Control (SPC)"
    ]
  },
  {
    id: "ib",
    title: "International Business",
    icon: Globe2,
    color: "from-indigo-500 to-violet-500",
    overview: "Navigating the complexities of global trade, cross-cultural management, and geopolitics.",
    whatWeDo: [
      "Foreign Market Entry Strategies",
      "Cross-Cultural Leadership Dynamics",
      "Global Value Chain Analysis",
      "Impact of Trade Tariffs & Policies"
    ],
    howWeDoIt: [
      "Comparative Case Studies",
      "Gravity Models of Trade",
      "Hofstede’s Cultural Dimensions Analysis",
      "Mixed Method Approaches"
    ]
  },
  {
    id: "it",
    title: "IT Management",
    icon: Cpu,
    color: "from-purple-500 to-fuchsia-500",
    overview: "Bridging the gap between technical innovation and business strategic value.",
    whatWeDo: [
      "AI & Machine Learning in Decision Making",
      "Enterprise Resource Planning (ERP) Success",
      "Cybersecurity Governance Frameworks",
      "Cloud Computing Adoption Models"
    ],
    howWeDoIt: [
      "Technology Acceptance Model (TAM/UTAUT)",
      "Big Data Analytics",
      "Systematic Literature Reviews (SLR)",
      "Prototyping & Usability Testing"
    ]
  },
  {
    id: "hospital",
    title: "Hospital Management",
    icon: HeartPulse,
    color: "from-red-500 to-rose-500",
    overview: "Enhancing patient care delivery through efficient healthcare administration.",
    whatWeDo: [
      "Patient Satisfaction & Experience Metrics",
      "Hospital Waste Management Protocols",
      "Electronic Health Records (EHR) Utility",
      "Accreditation Compliance (NABH/JCI)"
    ],
    howWeDoIt: [
      "SERVQUAL Gap Analysis",
      "Operational Flowcharts",
      "Health Informatics Data Analysis",
      "Cross-Sectional Surveys"
    ]
  },
  {
    id: "tourism",
    title: "Travel & Tourism",
    icon: Plane,
    color: "from-sky-500 to-blue-500",
    overview: "Exploring the economic and social impacts of travel in a post-pandemic world.",
    whatWeDo: [
      "Sustainable & Ecotourism Development",
      "Destination Branding & Marketing",
      "Medical & Wellness Tourism Trends",
      "Smart Tourism Technologies"
    ],
    howWeDoIt: [
      "Geospatial Analysis (GIS)",
      "Tourist Sentiment Analysis",
      "Impact Assessment Studies",
      "Cluster Analysis"
    ]
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship",
    icon: Rocket,
    color: "from-yellow-500 to-amber-600",
    overview: "Fostering innovation and understanding the lifecycle of startups and family businesses.",
    whatWeDo: [
      "Startup Ecosystem & Incubation Support",
      "Succession Planning in Family Firms",
      "Social Entrepreneurship Impact",
      "Venture Capital Funding Dynamics"
    ],
    howWeDoIt: [
      "Longitudinal Studies",
      "Narrative Inquiry & Interviews",
      "Business Model Canvas Analysis",
      "Grounded Theory Approach"
    ]
  }
];

const emergingFields = [
  {
    title: "Fintech & Blockchain",
    desc: "Merging Finance and IT to study decentralized ledgers, crypto assets, and automated trading algorithms.",
    icon: Network,
    color: "text-cyan-600",
    bg: "bg-cyan-50"
  },
  {
    title: "Green Marketing & ESG",
    desc: "Combining Marketing and Environmental Science to analyze sustainable consumerism and corporate responsibility.",
    icon: Leaf,
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    title: "AI in Healthcare Mgmt",
    desc: "Intersecting Hospital Management and Data Science to predict patient outcomes and optimize resource allocation.",
    icon: Zap,
    color: "text-yellow-600",
    bg: "bg-yellow-50"
  },
  {
    title: "Cyber-Psychology",
    desc: "A blend of HR, Psychology, and IT, studying the impact of remote work tools and digital burnout.",
    icon: ShieldCheck,
    color: "text-pink-600",
    bg: "bg-pink-50"
  }
];

// ================= COMPONENT =================
const ResearchDetailTabs: FC = () => {
  const [activeTab, setActiveTab] = useState(researchData[0]);

  return (
    <div className="font-sans selection:bg-indigo-500/30">
      
      {/* ================= 1. HERO SECTION (DARK BLUE BACKGROUND) ================= */}
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white pt-20 pb-24 px-6 text-center overflow-hidden">
        
        {/* Background Glows (For Hero Only) */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[160px] pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[160px] pointer-events-none"
        />

        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight"
          >
            Research Areas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Decoded</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-blue-200 max-w-2xl mx-auto text-lg"
          >
            Select a domain to explore our in-depth research methodologies, scope, and technical frameworks.
          </motion.p>
        </div>
      </div>

      {/* ================= 2. MAIN CONTENT (WHITE BACKGROUND) ================= */}
      <div className="bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-18 pb-20 relative z-20">
          <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
            
            {/* --- LEFT COLUMN: NAVIGATION (Light Theme) --- */}
            <div className="lg:w-1/3 flex flex-col gap-4 pt-10">
              
              {/* Header for Left Side */}
              <div className="px-2">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-slate-300"></span>
                  Select Your Path
                </h3>
                <p className="text-xs text-slate-400 mt-1 pl-10">
                  Choose a specialized domain
                </p>
              </div>

              <div className="flex flex-col gap-2 h-fit lg:sticky lg:top-10 overflow-y-auto max-h-[80vh] pr-2 custom-scrollbar">
                {researchData.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item)}
                    className={`relative group flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 border ${
                      activeTab.id === item.id
                        ? "bg-slate-100 border-indigo-200 shadow-sm"
                        : "bg-white border-transparent hover:bg-slate-50 hover:border-slate-100"
                    }`}
                  >
                    {/* Active Indicator Line */}
                    {activeTab.id === item.id && (
                      <motion.div
                        layoutId="active-indicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600 rounded-l-xl"
                      />
                    )}
                    
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color} shadow-md`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <div>
                      <h3 className={`font-bold ${activeTab.id === item.id ? "text-indigo-900" : "text-slate-600 group-hover:text-slate-900"}`}>
                        {item.title}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* --- RIGHT COLUMN: CONTENT CARD (DARK THEME as requested) --- */}
            <div className="lg:w-2/3 relative flex flex-col gap-4 pt-10">
              
              {/* Header for Right Side */}
              <div className="px-2 lg:pl-6">
                <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-indigo-200"></span>
                  Domain Insights & Methodology
                </h3>
                <p className="text-xs text-slate-500 mt-1 pl-10">
                  Detailed scope, tools, and framework analysis
                </p>
              </div>

              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab.id}
                    initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    // 👇 DARK CARD ON WHITE BACKGROUND
                    className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-10 shadow-2xl shadow-slate-200"
                  >
                    {/* Panel Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 flex items-center gap-3">
                          {activeTab.title}
                        </h2>
                        <p className="text-lg text-slate-300 leading-relaxed">
                          {activeTab.overview}
                        </p>
                      </div>
                      <div className={`hidden sm:flex p-4 rounded-2xl bg-gradient-to-br ${activeTab.color} shadow-2xl transform rotate-3`}>
                        <activeTab.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      
                      {/* Section 1: What We Do */}
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors">
                        <div className="flex items-center gap-2 mb-4 text-indigo-300">
                          <Layers className="w-5 h-5" />
                          <h3 className="font-bold text-lg uppercase tracking-wider">Research Scope</h3>
                        </div>
                        <ul className="space-y-4">
                          {activeTab.whatWeDo.map((point, i) => (
                            <li key={i} className="flex gap-3 text-slate-300 text-sm sm:text-base">
                              <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Section 2: How We Do It */}
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors">
                        <div className="flex items-center gap-2 mb-4 text-pink-300">
                          <Search className="w-5 h-5" />
                          <h3 className="font-bold text-lg uppercase tracking-wider">Methodologies</h3>
                        </div>
                        <ul className="space-y-4">
                          {activeTab.howWeDoIt.map((point, i) => (
                            <li key={i} className="flex gap-3 text-slate-300 text-sm sm:text-base">
                              <BarChart3 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-sm text-slate-400 italic">
                        *Projects in this domain are supervised by PhD experts.
                      </p>
                      <button className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center gap-2 shadow-lg">
                        Start {activeTab.title} Research
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 3. EMERGING FIELDS (LIGHT GREY BACKGROUND) ================= */}
      <div className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Interdisciplinary & Emerging Fields
            </h2>
            <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
              Modern research rarely fits into a single box. We specialize in crossing boundaries 
              to explore the intersection of technology, business, and society.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergingFields.map((field, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg ${field.bg} flex items-center justify-center mb-4 ${field.color}`}>
                  <field.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{field.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {field.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default ResearchDetailTabs;