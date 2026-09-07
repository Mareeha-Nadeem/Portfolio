export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["Python", "SQL", "Kotlin", "Next.js", "Angular", "FastAPI", "Jetpack Compose"]
    },
    {
      title: "Data & Machine Learning",
      skills: ["Pandas", "NumPy", "Scikit-learn", "LangChain", "FAISS", "DeBERTa", "SetFit"]
    },
    {
      title: "Databases & Cloud",
      skills: ["PostgreSQL", "Supabase", "REST APIs", "GitHub"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Power BI", "Matplotlib", "Seaborn", "Jupyter", "Google Earth Engine", "Dashscope API", "OpenWeather API"]
    }
  ];

  return (
    <section id="skills" className="w-full px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-theme-text text-theme-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16 md:mb-24">
          <h2 className="text-theme-alt text-xs uppercase tracking-[0.3em] mb-6">04 / Capabilities</h2>
          <p className="text-2xl leading-relaxed text-theme-bg max-w-2xl font-serif">
            A comprehensive toolkit for extracting value from complex data and deploying <span className="italic text-theme-alt font-light">scalable solutions.</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 md:gap-y-16">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="border-t border-theme-border/20 pt-8 relative">
              <div className="text-[10px] uppercase tracking-[0.2em] text-theme-alt mb-6">{category.title}</div>
              <ul className="space-y-4">
                {category.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-4">
                    <span className="text-theme-bg/90 font-light text-[15px]">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
