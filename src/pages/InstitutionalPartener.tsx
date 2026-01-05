import { type FC, useState } from "react";
import { motion } from "framer-motion";

/* ================= TYPES ================= */

type ResearchContent = Record<string, string>;

interface ResearchArea {
  id: string;
  title: string;
  sections: string[];
  content: ResearchContent;
}

/* ================= DATA ================= */

const researchData: ResearchArea[] = [
  {
    id: "ai",
    title: "Artificial Intelligence Research",
    sections: [
      "Introduction",
      "Problem Statement",
      "Literature Review",
      "Research Objectives",
      "Methodology",
      "Expected Outcomes",
      "Ethical Considerations",
    ],
    content: {
      Introduction: `
Artificial Intelligence (AI) research focuses on the design and development
of intelligent systems capable of mimicking human cognitive functions such as
learning, reasoning, and decision-making. Academic AI research contributes
to both theoretical advancements and applied innovation.
      `,
      "Problem Statement": `
Traditional computational systems struggle with unstructured, large-scale,
and dynamic data. This research investigates scalable, interpretable,
and ethically aligned AI models suitable for real-world deployment.
      `,
      "Literature Review": `
The literature review examines classical machine learning methods,
deep learning architectures, reinforcement learning, and recent
advancements in explainable and trustworthy AI.
      `,
      "Research Objectives": `
• Develop high-performance AI models  
• Improve interpretability and transparency  
• Reduce algorithmic bias  
• Enable academic and industrial applicability
      `,
      Methodology: `
A mixed-method research approach is adopted involving dataset acquisition,
model training, validation, benchmarking, and comparative evaluation using
standard performance metrics.
      `,
      "Expected Outcomes": `
The research aims to produce peer-reviewed publications, reproducible models,
and frameworks adaptable by academic institutions and industry partners.
      `,
      "Ethical Considerations": `
Ethical compliance includes data privacy, informed consent, bias mitigation,
and adherence to international AI governance standards.
      `,
    },
  },

  {
    id: "management",
    title: "Management & Business Research",
    sections: [
      "Overview",
      "Research Gap",
      "Theoretical Framework",
      "Data Collection",
      "Analysis Techniques",
      "Implications",
    ],
    content: {
      Overview: `
Management research investigates organizational behavior, leadership,
strategy, finance, and marketing practices to enhance institutional
decision-making and performance.
      `,
      "Research Gap": `
Despite extensive literature, gaps remain in adaptive leadership,
digital transformation strategies, and sustainable business models
within emerging economies.
      `,
      "Theoretical Framework": `
This research integrates classical management theories with modern
approaches such as the Resource-Based View (RBV) and Dynamic Capability Theory.
      `,
      "Data Collection": `
Primary data is collected through surveys and interviews, while secondary
data includes corporate reports, case studies, and institutional records.
      `,
      "Analysis Techniques": `
Quantitative techniques include regression analysis and SEM,
while qualitative insights are derived using thematic analysis.
      `,
      Implications: `
Findings contribute to academic literature and provide actionable insights
for policymakers, corporate leaders, and educational institutions.
      `,
    },
  },
];

/* ================= COMPONENT ================= */

const ResearchAreas: FC = () => {
  const [activeArea, setActiveArea] = useState<ResearchArea>(researchData[0]);
  const [activeSection, setActiveSection] = useState<string>(
    researchData[0].sections[0]
  );

  return (
    <section className="relative min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-4 gap-10">

        {/* ================= LEFT NAVIGATION ================= */}
        <motion.aside
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-1 bg-white rounded-2xl shadow-lg p-6 sticky top-24 h-fit"
        >
          <h3 className="text-lg font-bold text-slate-900 mb-6">
            Research Areas
          </h3>

          {researchData.map((area) => (
            <div key={area.id} className="mb-6">
              <button
                onClick={() => {
                  setActiveArea(area);
                  setActiveSection(area.sections[0]);
                }}
                className={`w-full text-left font-semibold mb-2 ${
                  activeArea.id === area.id
                    ? "text-indigo-600"
                    : "text-slate-700"
                }`}
              >
                {area.title}
              </button>

              {activeArea.id === area.id && (
                <ul className="ml-3 space-y-2">
                  {area.sections.map((sec) => (
                    <li key={sec}>
                      <button
                        onClick={() => setActiveSection(sec)}
                        className={`text-sm transition ${
                          activeSection === sec
                            ? "text-indigo-600 font-semibold"
                            : "text-slate-600 hover:text-slate-800"
                        }`}
                      >
                        • {sec}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </motion.aside>

        {/* ================= RIGHT CONTENT ================= */}
        <motion.main
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-10"
        >
          <h1 className="text-3xl font-extrabold text-slate-900 mb-4">
            {activeArea.title}
          </h1>

          <h2 className="text-xl font-semibold text-indigo-600 mb-6">
            {activeSection}
          </h2>

          <motion.p
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-slate-700 leading-relaxed whitespace-pre-line text-lg"
          >
            {activeArea.content[activeSection]}
          </motion.p>
        </motion.main>
      </div>
    </section>
  );
};

export default ResearchAreas;
// end
