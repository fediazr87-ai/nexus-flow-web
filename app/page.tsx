'use client';

import React from 'react';
import { 
  Scissors, 
  Stethoscope, 
  BarChart3, 
  Facebook, 
  Instagram, 
  MessageCircle, 
  ArrowRight,
  Zap
} from 'lucide-react';

export default function NexusFlowWeb() {
  
  const services = [
    {
      title: "Sistemas para Barberías",
      desc: "Control de citas, inventario y comisiones para barberos en tiempo real.",
      icon: <Scissors className="w-12 h-12 text-blue-500" />,
      link: "#",
      color: "border-blue-500/20"
    },
    {
      title: "Soluciones Médicas",
      desc: "Gestión de expedientes clínicos, recetas electrónicas y agenda médica.",
      icon: <Stethoscope className="w-12 h-12 text-emerald-500" />,
      link: "#",
      color: "border-emerald-500/20"
    },
    {
      title: "ERP & Contabilidad",
      desc: "Sistemas administrativos a medida para optimizar los ingresos de tu empresa.",
      icon: <BarChart3 className="w-12 h-12 text-purple-500" />,
      link: "#",
      color: "border-purple-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <Zap className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-blue-600">NEXUS FLOW</span>
          </div>
        </div>
      </nav>

      <header className="relative pt-20 pb-32 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl font-black mb-8 tracking-tight">
            Software que impulsa <br/>
            <span className="text-blue-600">tu crecimiento.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-500 mb-10">
            Creamos soluciones a medida: Barberías, Clínicas y ERPs.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="p-2 hover:text-blue-600 transition-colors"><Facebook /></a>
            <a href="#" className="p-2 hover:text-pink-600 transition-colors"><Instagram /></a>
            <a href="#" className="p-2 hover:text-slate-900 transition-colors">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path><line x1="12" y1="1" x2="12" y2="11"></line></svg>
            </a>
          </div>
        </div>
      </header>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className={`p-10 rounded-[32px] border-2 ${s.color} hover:shadow-xl transition-all`}>
              <div className="mb-6">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-slate-500 mb-8">{s.desc}</p>
              <button className="flex items-center gap-2 font-bold text-blue-600">
                Próximamente <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-10 text-center">
        <div className="flex justify-center gap-6 mb-4">
           <Facebook className="w-5 h-5 cursor-pointer hover:text-white" />
           <Instagram className="w-5 h-5 cursor-pointer hover:text-white" />
        </div>
        <p>© 2026 Nexus Flow. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}