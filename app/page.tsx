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
  Globe,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function NexusFlowWeb() {
  
  const services = [
    {
      title: "Sistemas para Barberías",
      desc: "Control de citas, inventario y comisiones para barberos en tiempo real.",
      icon: <Scissors className="w-12 h-12 text-blue-500" />,
      link: "/servicios/barberia",
      color: "border-blue-500/20"
    },
    {
      title: "Soluciones Médicas",
      desc: "Gestión de expedientes clínicos, recetas electrónicas y agenda médica.",
      icon: <Stethoscope className="w-12 h-12 text-emerald-500" />,
      link: "/servicios/medicina",
      color: "border-emerald-500/20"
    },
    {
      title: "ERP & Contabilidad",
      desc: "Sistemas administrativos a medida para optimizar los ingresos de tu empresa.",
      icon: <BarChart3 className="w-12 h-12 text-purple-500" />,
      link: "/servicios/erp",
      color: "border-purple-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* --- NAVEGACIÓN --- */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <Zap className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-blue-600">NEXUS FLOW</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#servicios" className="hover:text-blue-600 transition-colors">Servicios</a>
            <a href="#nosotros" className="hover:text-blue-600 transition-colors">Nosotros</a>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Cotizar Proyecto
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
            Agencia de Desarrollo de Software
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight leading-[0.9]">
            Flujos que impulsan <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
              tu crecimiento.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-500 mb-10 leading-relaxed">
            Creamos software a medida para negocios exigentes. Desde barberías locales hasta sistemas ERP corporativos.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#servicios" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
              Explorar Soluciones <ArrowRight className="w-5 h-5" />
            </a>
            <div className="flex items-center justify-center gap-4 px-8 py-4">
              <span className="text-slate-400 font-medium text-sm">SÍGUENOS:</span>
              <a href="#" className="p-2 hover:text-blue-600 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 hover:text-pink-600 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 hover:text-slate-900 transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path><line x1="12" y1="1" x2="12" y2="11"></line></svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* --- SERVICIOS --- */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-4">Soluciones Especializadas</h2>
              <p className="text-slate-500">Haz clic en "Saber más" para ver los detalles de cada sistema.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className={`p-10 rounded-[32px] border-2 ${s.color} hover:shadow-2xl hover:shadow-blue-100 transition-all group`}>
                <div className="mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">{s.desc}</p>
                <a href={s.link} className="flex items-center gap-2 font-bold text-blue-600 hover:gap-4 transition-all">
                  Saber más <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="text-blue-500 w-8 h-8" />
                <span className="text-2xl font-black tracking-tighter text-white">NEXUS FLOW</span>
              </div>
              <p className="max-w-sm mb-8 text-lg">
                Transformando ideas en flujos de trabajo digitales eficientes.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                   {/* Icono TikTok manual */}
                   <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path><line x1="12" y1="1" x2="12" y2="11"></line></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Servicios</h4>
              <ul className="space-y-4">
                <li><a href="/servicios/barberia" className="hover:text-blue-500">Barberías</a></li>
                <li><a href="/servicios/medicina" className="hover:text-blue-500">Medicina</a></li>
                <li><a href="/servicios/erp" className="hover:text-blue-500">ERP Corporativo</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contacto</h4>
              <p className="mb-4 text-sm">¿Tienes un proyecto en mente?</p>
              <button className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-emerald-600 transition-all">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </button>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center text-sm">
            © {new Date().getFullYear()} Nexus Flow. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}