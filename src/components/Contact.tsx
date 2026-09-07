import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="w-full px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-theme-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="col-span-1 lg:col-span-8">
          <h2 className="text-theme-accent text-xs uppercase tracking-[0.3em] mb-6">05 / Get in Touch</h2>
          <p className="text-4xl md:text-5xl lg:text-7xl leading-tight text-theme-text font-light">
            Let's <span className="italic text-theme-accent">collaborate</span> on your next <span className="italic text-theme-accent">data</span> project.
          </p>
        </div>
        
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-8 md:pb-4">
           <a href="mailto:mareehanadeem@gmail.com" className="group flex items-center justify-between border-b border-theme-text pb-4 text-theme-text hover:text-theme-accent transition-colors">
             <span className="text-base md:text-lg break-all">mareehanadeem@gmail.com</span>
             <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </a>
           <div className="flex items-center justify-between border-b border-theme-text pb-4 text-theme-text">
             <span className="text-lg">Remote / Open to Relocate</span>
           </div>
        </div>
      </div>
    </section>
  );
}
