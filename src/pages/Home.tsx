import type { FC } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  BatteryFull, 
  Wifi, 
  FileText, 
  CheckCircle, 
  Users, 
  Globe, 
  Award, 
  BookOpen, 
  Star, 
  Quote,
  GraduationCap
} from "lucide-react";

const HeroWithPreview: FC = () => {
  return (
    <div className="font-sans">

      {/* ================= WRAPPER: HERO + LAPTOP (Blue Background) ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 pb-28">

        {/* Background Glows */}
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

        {/* ================= 1. HERO TEXT (Random/Placeholder) ================= */}
        <div className="relative z-10 min-h-[80vh] flex items-center justify-center px-4 text-center pt-32 sm:pt-10">
          <div className="max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-6 px-6 py-2 rounded-full bg-white/10 text-blue-200 text-sm tracking-widest uppercase backdrop-blur-sm border border-white/10"
            >
              Your Brand Name
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-wide leading-tight"
            >
              LOREM IPSUM DOLOR
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                SIT AMET CONSECTETUR
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-6 text-base sm:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </motion.p>

            {/* Buttons (Colors Preserved) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold tracking-wide hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-2">
                ACTION BUTTON
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 border-2 border-green-300 text-green-300 rounded-xl font-semibold tracking-wide hover:bg-green-400 hover:text-slate-900 transition-all duration-300">
                SECONDARY ACTION
              </button>
            </motion.div>
          </div>
        </div>

        {/* ================= 2. LAPTOP PREVIEW (Random Content) ================= */}
        <div className="relative z-10 px-4 mt-10 sm:mt-0">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -translate-y-20">
            <p className="text-[6rem] md:text-[10rem] font-extrabold uppercase tracking-widest text-transparent stroke-white/10 select-none">
              Random <br /> Thing
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
                    FILENAME_PLACEHOLDER.DOCX
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Generic Title Header
                  </h3>

                  <div className="flex gap-3">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Tag One</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">Tag Two</span>
                  </div>

                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-slate-700">
                    <li>Random List Item One</li>
                    <li>Random List Item Two</li>
                    <li>Random List Item Three</li>
                    <li>Random List Item Four</li>
                  </ul>

                  <div className="h-24 sm:h-32" />
                  <p className="text-sm text-slate-500">Page 1 of 100</p>
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
                  <span className="text-xs font-medium">100%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* ================= 3. WELCOME SECTION (White BG) ================= */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-10 h-[2px] bg-indigo-600"></span>
                <span className="uppercase tracking-widest text-sm font-bold text-indigo-600">
                  Welcome Section
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Header Text Goes <br/>
                <span className="text-indigo-600">Right Here.</span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: CheckCircle, label: "Feature Point A" },
                  { icon: GraduationCap, label: "Feature Point B" },
                  { icon: Users, label: "Feature Point C" },
                  { icon: Award, label: "Feature Point D" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className="w-6 h-6 text-indigo-500" />
                    <span className="font-semibold text-slate-800">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Visual/Stats */}
            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative"
            >
              <div className="absolute inset-0 bg-indigo-50 rounded-3xl transform rotate-3 scale-95" />
              <div className="relative bg-white border border-slate-100 shadow-xl rounded-3xl p-8 sm:p-12">
                <div className="grid grid-cols-2 gap-8 text-center">
                  {[
                    { val: "100+", label: "Random Stat" },
                    { val: "99%", label: "Another Stat" },
                    { val: "500+", label: "Generic Count" },
                    { val: "24/7", label: "Availability" },
                  ].map((stat, i) => (
                    <div key={i} className="p-4 border-b border-r last:border-0 border-slate-100">
                      <div className="text-4xl font-extrabold text-indigo-600 mb-2">{stat.val}</div>
                      <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= 4. VALUES SECTION ================= */}
      <div className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="uppercase tracking-widest text-sm font-semibold text-indigo-600">
              Our Values
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
              Why Choose Us
            </h2>
            <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Benefit Number One",
                desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
              },
              {
                title: "Benefit Number Two",
                desc: "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus.",
              },
              {
                title: "Benefit Number Three",
                desc: "Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
                    <CheckCircle className="w-6 h-6" />
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
      </div>

      {/* ================= 5. DOMAINS/GRID SECTION ================= */}
      <div className="relative bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="uppercase tracking-widest text-sm font-semibold text-indigo-600">
              Categories
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
              Wide Range of Topics
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Category One",
              "Category Two",
              "Category Three",
              "Category Four",
              "Category Five",
              "Category Six",
              "Category Seven",
              "Category Eight",
            ].map((domain, i) => (
              <motion.div
                key={domain}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 group cursor-default"
              >
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">
                  {domain}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= 6. SOLUTIONS/SERVICES SECTION ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="uppercase tracking-widest text-sm font-semibold text-indigo-600">
              Our Services
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-slate-900">
              What We Offer
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Service Alpha",
                desc: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias.",
                icon: BookOpen
              },
              {
                title: "Service Beta",
                desc: "Perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit.",
                icon: FileText
              },
              {
                title: "Service Gamma",
                desc: "Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
                icon: Star
              },
              {
                title: "Service Delta",
                desc: "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.",
                icon: GraduationCap
              },
              {
                title: "Service Epsilon",
                desc: "Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.",
                icon: CheckCircle
              },
              {
                title: "Service Zeta",
                desc: "Ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.",
                icon: Globe
              }
            ].map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <sol.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{sol.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {sol.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 7. TESTIMONIALS SECTION ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
              What People Say
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Feedback from our random clients and users.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
             {[
               {
                 quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                 author: "John Doe",
                 role: "CEO, Company A",
                 stars: 5
               },
               {
                 quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                 author: "Jane Smith",
                 role: "Manager, Company B",
                 stars: 5
               },
               {
                 quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                 author: "Robert Brown",
                 role: "Director, Company C",
                 stars: 5
               }
             ].map((story, i) => (
               <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className="bg-slate-50 p-8 rounded-2xl relative border border-slate-100"
               >
                 <Quote className="w-10 h-10 text-indigo-200 absolute top-6 left-6" />
                 <div className="flex gap-1 mb-6 relative z-10 pl-2">
                   {[...Array(story.stars)].map((_, s) => (
                     <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                   ))}
                 </div>
                 <p className="text-slate-700 italic mb-6 relative z-10 leading-relaxed">
                   "{story.quote}"
                 </p>
                 <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                   <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                     {story.author.charAt(0)}
                   </div>
                   <div>
                     <div className="font-bold text-slate-900">{story.author}</div>
                     <div className="text-xs text-slate-500 uppercase font-semibold">{story.role}</div>
                   </div>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* ================= 8. CTA SECTION (White BG) ================= */}
      <div className="relative bg-white py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900"
          >
            Ready to Get Started?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-slate-600 leading-relaxed"
          >
            Contact us today to learn more about our random services and offerings.
            We are here to help you achieve your generic goals.
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

    </div>
  );
};

export default HeroWithPreview;