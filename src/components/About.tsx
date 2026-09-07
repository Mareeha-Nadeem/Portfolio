export default function About() {
  return (
    <section id="about" className="w-full px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-theme-bg border-t border-theme-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="col-span-1 lg:col-span-5">
          <h2 className="text-theme-accent text-xs uppercase tracking-[0.3em] mb-6">02 / About Me</h2>
          <p className="text-2xl leading-relaxed text-theme-text mb-8">
            Uncovering hidden patterns to drive <span className="italic text-theme-accent font-light">strategic decisions.</span>
          </p>
          <div className="flex gap-8 md:gap-12 pt-8 border-t border-theme-border">
            <div>
              <h4 className="text-4xl font-light text-theme-text">50+</h4>
              <p className="text-[10px] uppercase tracking-[0.2em] text-theme-muted mt-2">Models Deployed</p>
            </div>
            <div>
              <h4 className="text-4xl font-light text-theme-text">15+</h4>
              <p className="text-[10px] uppercase tracking-[0.2em] text-theme-muted mt-2">Partners</p>
            </div>
          </div>
        </div>
        
        <div className="col-span-1 lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="bg-white p-8 rounded-2xl">
               <h5 className="text-sm uppercase tracking-widest text-theme-text mb-4">Problem Solver</h5>
               <p className="text-theme-muted leading-relaxed">Analytical mindset with a focus on optimization.</p>
             </div>
             <div className="bg-theme-alt p-8 rounded-2xl sm:mt-12 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 border border-theme-text opacity-20 rounded-full translate-x-1/2 -translate-y-1/2"></div>
               <h5 className="text-sm uppercase tracking-widest text-theme-text mb-4 relative z-10">Storyteller</h5>
               <p className="text-theme-text/80 leading-relaxed relative z-10">Making data accessible through clear visualization.</p>
             </div>
             <div className="bg-theme-border p-8 rounded-2xl">
               <h5 className="text-sm uppercase tracking-widest text-theme-text mb-4">Innovator</h5>
               <p className="text-theme-muted leading-relaxed">Constantly exploring new ML architectures.</p>
             </div>
             <div className="bg-white p-8 rounded-2xl sm:mt-12 border border-theme-border">
               <h5 className="text-sm uppercase tracking-widest text-theme-text mb-4">Collaborator</h5>
               <p className="text-theme-muted leading-relaxed">Bridging technical and business teams.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
