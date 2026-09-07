import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Aegis: RAG Injection Shield",
    description: "4-layer prompt injection defense for RAG pipelines; dropped Attack Success Rate from 1.0 to 0.06 (F1 0.88, ROC-AUC 0.91).",
    tags: ["Python", "DeBERTa", "SetFit", "FAISS", "LangChain", "CrossEncoder"],
    color: "bg-theme-alt",
    category: "Security",
    link: "https://github.com/Mareeha-Nadeem/Aegis"
  },
  {
    title: "Customer Churn Prediction",
    description: "Full-stack retail platform with churn prediction (Decision Tree + SMOTE, 94.8% accuracy) and a Power BI dashboard.",
    tags: ["Python", "Scikit-learn", "Power BI", "Supabase", "Next.js"],
    color: "bg-theme-border",
    category: "Full-Stack ML",
    link: "https://github.com/Mareeha-Nadeem/Electronics"
  },
  {
    title: "Savuk",
    description: "AI irrigation advisor for smallholder farmers. Satellite NDVI + FAO-56 models + LLM advice, delivered via Android app in Urdu.",
    tags: ["Python", "FastAPI", "Kotlin", "Google Earth Engine", "Qwen-Plus"],
    color: "bg-white",
    category: "AI & Mobile",
    link: "https://github.com/Mareeha-Nadeem/Savuk"
  },
  {
    title: "Bank Stress-Testing Simulator",
    description: "Simulates 40 Pakistani banks against 500 macro shock scenarios to predict Healthy, Stressed, or Critical outcomes.",
    tags: ["Python", "Pandas", "SQL"],
    color: "bg-theme-alt",
    category: "Finance & Data",
    link: "https://github.com/Mareeha-Nadeem/bank-stress-testing-simulator"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-theme-bg border-t border-theme-border">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-theme-accent text-xs uppercase tracking-[0.3em]">03 / Selected Projects</h2>
          <div className="text-theme-muted text-sm italic">Scroll for more</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <a href={project.link} target="_blank" rel="noopener noreferrer" key={idx} className={`group cursor-pointer flex flex-col ${idx % 2 !== 0 ? 'md:pt-12' : ''}`}>
              <div className={`flex-1 min-h-[350px] ${project.color} rounded-3xl overflow-hidden mb-6 relative p-8 md:p-10 flex flex-col justify-between border ${project.color === 'bg-white' ? 'border-theme-border' : 'border-transparent'}`}>
                
                {/* Abstract geometric shapes per project */}
                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                   {idx === 0 && <div className="w-48 h-48 rounded-full border border-theme-text opacity-20"></div>}
                   {idx === 1 && <div className="w-64 h-1 bg-theme-bg rotate-45"></div>}
                   {idx === 2 && <div className="w-32 h-32 bg-theme-alt rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-50"></div>}
                   {idx === 3 && <div className="w-40 h-40 border-2 border-theme-text opacity-10 rotate-12"></div>}
                </div>
                
                <div className="relative z-10 flex justify-between items-start">
                   <span className="text-2xl font-serif font-light text-theme-text">0{idx + 1}</span>
                   <div className="w-12 h-12 bg-theme-bg/50 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300">
                     <ArrowUpRight className="text-theme-text" size={24} />
                   </div>
                </div>
                
                <div className="relative z-10">
                   <p className="text-theme-text/80 text-[15px] leading-relaxed mb-6 max-w-sm">{project.description}</p>
                   <div className="flex flex-wrap gap-2">
                     {project.tags.slice(0,4).map(tag => (
                       <span key={tag} className="text-[10px] uppercase tracking-widest text-theme-text border border-theme-text/20 px-3 py-1.5 rounded-full bg-white/50 backdrop-blur-sm">{tag}</span>
                     ))}
                   </div>
                </div>
                
                <div className="absolute top-8 right-8 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest text-theme-text z-10">{project.category}</div>
              </div>
              <h3 className="text-2xl font-serif text-theme-text mb-2 px-2 group-hover:text-theme-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-theme-muted px-2">{project.tags.join(' • ')}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
