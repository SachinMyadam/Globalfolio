import { notFound } from 'next/navigation';
import LanguageSwitcher from '../components/LanguageSwitcher';
import AiButton from '../components/AiButton';
import * as motion from "framer-motion/client";

// Import Data
import dictEN from "../../i18n/en.json";
import dictES from "../../i18n/es.json";

const dictionaries: any = { en: dictEN, es: dictES };

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = dictionaries[lang];

  // Debugger to ensure language is loading correctly
  console.log("------------------------------------------------");
  console.log("🌍 CURRENT LANGUAGE:", lang);
  console.log("------------------------------------------------");

  if (!dict) return notFound();

  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-purple-100">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="flex justify-between items-center p-6 max-w-6xl mx-auto">
          
          <div className="font-bold text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 cursor-pointer flex items-center gap-2">
            ⚡️ Globalfolio
          </div>

          <LanguageSwitcher />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mt-20 px-6 text-center mb-32">
        
        {/* Animated Title */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-6xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 pb-2">
            {dict.hero.title}
          </h1>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            {dict.hero.subtitle}
          </p>
        </motion.div>

        {/* 👇 FINAL FIXED BUTTON SECTION 👇 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.4 }}
          // Full width on mobile, auto-width on desktop
          className="flex flex-col sm:flex-row justify-center items-start gap-4 w-full px-6 sm:w-auto sm:px-0"
        >
          {/* Button 1: Standard CTA */}
          <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all hover:scale-105 shadow-lg h-12 whitespace-nowrap w-full sm:w-auto">
            {dict.hero.cta} →
          </button>

          {/* Button 2: AI Agent */}
          <AiButton 
            label={lang === 'en' ? "Ask AI About Me" : "Preguntar a la IA"}
            alertMessage={lang === 'en' ? "🤖 AI Analysis: Top 5% candidate for Full-Stack roles. Strong Next.js proficiency." : "🤖 Análisis de IA: Candidato Top 5% para roles Full-Stack. Fuerte dominio de Next.js."}
          />
        </motion.div>
      </section>

      {/* Projects Grid Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 border-l-4 border-purple-600 pl-4">
          {dict.projectsSection.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.projects.map((project: any, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="h-12 w-12 bg-blue-100 rounded-lg mb-6 flex items-center justify-center text-2xl">
                🚀
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed min-h-[80px]">
                {project.desc}
              </p>
              <div className="text-sm font-mono text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-block">
                {project.tech}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}