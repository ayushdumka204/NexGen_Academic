import type { FC } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BatteryFull, Wifi, FileText } from "lucide-react";

const HeroWithPreview: FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900">

      {/* ================= BACKGROUND GLOWS ================= */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[160px]"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[160px]"
      />

      {/* ================= HERO ================= */}
      {/* 👇 CHANGE 1: Added 'pt-32 sm:pt-0' for mobile navbar spacing */}
      <div className="relative z-10 min-h-[85vh] flex items-center justify-center px-4 text-center pt-4 sm:pt-0">
        <div className="max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 px-6 py-2 rounded-full bg-white/10 text-blue-200 text-sm tracking-widest uppercase"
          >
            NexGen Academic Research
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-wide leading-snug sm:leading-tight"
          >
            ADVANCING KNOWLEDGE
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              THROUGH RESEARCH & INNOVATION
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-6 text-base sm:text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed"
          >
            A PREMIER INSTITUTION DEDICATED TO HIGH-IMPACT RESEARCH,
            DATA-DRIVEN DISCOVERY, AND GLOBAL ACADEMIC COLLABORATION.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold tracking-wide hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-2">
              EXPLORE RESEARCH
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-8 py-4 border-2 border-green-300 text-green-300 rounded-xl font-semibold tracking-wide hover:bg-blue-400 hover:text-slate-900 transition-all duration-300">
              VIEW PROJECTS
            </button>
          </motion.div>
        </div>
      </div>

      {/* ================= LAPTOP SECTION ================= */}
      {/* 👇 CHANGE 2: Added 'mt-20 sm:mt-0' for spacing between buttons and laptop on mobile */}
      <div className="relative z-10 pb-28 px-4 mt-20 sm:mt-0">

        {/* LINE SKELETON TEXT */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="text-[7rem] md:text-[11rem] font-extrabold uppercase tracking-widest text-transparent stroke-white/20">
            Research <br /> Document
          </p>
        </div>

        <div className="relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="w-full max-w-4xl"
          >
            {/* Laptop top */}
            <div className="bg-slate-200 rounded-t-2xl shadow-2xl border border-slate-300 p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="w-3 h-3 bg-green-500 rounded-full" />
              </div>

              <div className="bg-white rounded-xl h-[260px] sm:h-[420px] overflow-y-auto p-4 sm:p-8 text-slate-800 space-y-6">
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  <FileText className="w-5 h-5" />
                  RESEARCH_SUMMARY_2026.DOCX
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Executive Research Overview
                </h3>

                <p>
                  This document outlines the core objectives, methodologies,
                  and findings of interdisciplinary research initiatives.
                </p>

                <ul className="list-disc list-inside space-y-2">
                  <li>Research Objectives</li>
                  <li>Methodological Framework</li>
                  <li>Data Collection & Validation</li>
                  <li>Preliminary Findings</li>
                </ul>

                <div className="h-24 sm:h-32" />
                <p className="text-sm text-slate-500">Page 1 of 12</p>
              </div>
            </div>

            {/* Laptop bottom */}
            <div className="flex items-center justify-between bg-slate-300 px-4 py-2 rounded-b-2xl border border-slate-400">
              <div className="flex gap-3">
                <span className="w-2 h-2 bg-slate-600 rounded-full" />
                <span className="w-2 h-2 bg-slate-600 rounded-full" />
                <span className="w-2 h-2 bg-slate-600 rounded-full" />
              </div>

              <div className="flex items-center gap-3 text-slate-700">
                <Wifi className="w-4 h-4" />
                <BatteryFull className="w-4 h-4" />
                <span className="text-xs font-medium">96%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= OUR COMPANY SECTION ================= */}
      <div className="relative bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="uppercase tracking-widest text-sm font-semibold text-blue-600">
              Our Company
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
              Building Research With Purpose
            </h2>

            <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
              NexGen Academic Research is committed to advancing knowledge
              through ethical, data-driven, and globally collaborative
              research practices.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Research Excellence",
                desc: "High-impact, peer-reviewed research backed by robust academic governance.",
              },
              {
                title: "Data-Driven Approach",
                desc: "Structured quantitative and qualitative analysis for reproducible outcomes.",
              },
              {
                title: "Global Collaboration",
                desc: "Partnering with institutions and researchers worldwide.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
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
      </div>

      {/* ================= RESEARCH DOMAINS ================= */}
      <div className="relative bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="uppercase tracking-widest text-sm font-semibold text-indigo-600">
              Research Domains
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
              Areas We Specialize In
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
              Our research spans across multiple disciplines, enabling
              interdisciplinary innovation and real-world impact.
            </p>
          </motion.div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Artificial Intelligence",
              "Data Science & Analytics",
              "Healthcare Research",
              "Social & Behavioral Studies",
              "Sustainable Development",
              "Educational Technology",
              "Business & Economics",
              "Cybersecurity & Systems",
            ].map((domain, i) => (
              <motion.div
                key={domain}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {domain}
                </h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  In-depth academic research backed by structured methodology,
                  peer review, and ethical compliance.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= PROCESS SECTION ================= */}
      <div className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <span className="uppercase tracking-widest text-sm text-indigo-300">
              Our Methodology
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              Structured Research Process
            </h2>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-4">
            {[
              { step: "01", title: "Problem Identification" },
              { step: "02", title: "Literature Review" },
              { step: "03", title: "Data Collection" },
              { step: "04", title: "Analysis & Publication" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <span className="text-5xl font-extrabold text-indigo-300">
                  {item.step}
                </span>
                <h3 className="mt-4 text-xl font-bold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-indigo-100 leading-relaxed">
                  Each phase is carefully monitored to ensure accuracy,
                  reproducibility, and global academic standards.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= CTA SECTION ================= */}
      <div className="relative bg-white py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900"
          >
            Collaborate With NexGen Academic Research
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-slate-600 leading-relaxed"
          >
            Whether you are a researcher, institution, or organization,
            we invite you to collaborate and contribute to impactful research
            initiatives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex justify-center gap-6"
          >
            <button className="px-10 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 hover:scale-105 transition-all duration-300 shadow-lg">
              Get In Touch
            </button>
            <button className="px-10 py-4 border-2 border-slate-300 rounded-xl font-semibold text-slate-700 hover:bg-slate-100 transition-all duration-300">
              Download Brochure
            </button>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroWithPreview;