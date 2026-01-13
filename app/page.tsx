'use client';
import React, { useState } from 'react';
import { ShoppingCart, MessageCircle, BarChart, Calendar, Package, Users, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';

const NexusFlowLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Tus productos estrella
  const products = [
    {
      id: 1,
      title: "BarberBot Pro",
      tagline: "Tu recepcionista digital 24/7",
      desc: "Sistema de registro automático con Bot de Telegram integrado. Olvídate de interrumpir cortes para contestar el teléfono.",
      price: "$29/mes",
      features: ["Agenda automática", "Recordatorios por Telegram", "Base de datos de clientes"],
      icon: <Users className="w-10 h-10 text-cyan-400" />
    },
    {
      id: 2,
      title: "LogiTrack ERP",
      tagline: "El cerebro de tu logística",
      desc: "ERP especializado para empresas de paquetería. Controla cada envío desde la recolección hasta la entrega final.",
      price: "$99/mes",
      features: ["Rastreo en tiempo real", "Gestión de flota", "Facturación automática"],
      icon: <Package className="w-10 h-10 text-purple-400" />
    },
    {
      id: 3,
      title: "MediCitas Cloud",
      tagline: "Salud y orden en un solo lugar",
      desc: "Gestión de consultas médicas simplificada. Historial clínico digital y agenda inteligente para doctores modernos.",
      price: "$49/mes",
      features: ["Expediente digital", "Recetas electrónicas", "Control de pagos"],
      icon: <Calendar className="w-10 h-10 text-emerald-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      
      {/* NAV BAR */}
      <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tighter text-white">NEXUS<span className="text-cyan-400">FLOW</span></h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#soluciones" className="hover:text-cyan-400 transition">Soluciones</a>
            <a href="#nosotros" className="hover:text-cyan-400 transition">Nosotros</a>
            <a href="#casos" className="hover:text-cyan-400 transition">Casos de Éxito</a>
            <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-5 py-2 rounded-full font-bold transition">
              <ShoppingCart size={18} /> Tienda
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative pt-32 pb-20 px-6 text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black -z-10"></div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Deja de gestionar el caos. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Empieza a escalar.
          </span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Sistemas de automatización a medida para Barberías, Logística y Salud. 
          Recupera tu tiempo y aumenta tus ganancias hoy mismo.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition flex items-center justify-center gap-2">
            Ver Sistemas <ArrowRight size={20} />
          </button>
          <button className="border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 px-8 py-4 rounded-full font-bold text-lg transition flex items-center justify-center gap-2">
            <MessageCircle size={20} /> Hablemos por WhatsApp
          </button>
        </div>
      </header>

      {/* PRODUCTOS (GRID) */}
      <section id="soluciones" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Nuestras Soluciones</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {products.map((product) => (
              <div key={product.id} className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/20 group">
                <div className="mb-6">{product.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                <p className="text-cyan-400 text-sm font-semibold mb-4">{product.tagline}</p>
                <p className="text-slate-400 mb-6">{product.desc}</p>
                <ul className="mb-8 space-y-2">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle size={14} className="text-green-400" /> {feat}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-2xl font-bold text-white">{product.price}</span>
                  <button className="bg-slate-800 group-hover:bg-cyan-500 group-hover:text-slate-900 text-white px-4 py-2 rounded-lg transition">
                    Comprar Ahora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF & STATS */}
      <section id="casos" className="py-20 px-6">
        <div className="container mx-auto bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-3xl p-10 md:p-16 border border-slate-700">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Resultados Reales</h2>
              <p className="text-lg text-slate-300 mb-8">
                "Desde que implementamos el sistema BarberBot, las citas perdidas bajaron un 90% y nuestros barberos facturan un 25% más."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-600 rounded-full"></div> {/* Placeholder img */}
                <div>
                  <p className="font-bold">Carlos M.</p>
                  <p className="text-sm text-slate-400">Dueño de "Estilo Urbano"</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-900/80 p-6 rounded-xl text-center">
                <BarChart className="mx-auto mb-2 text-cyan-400" />
                <h3 className="text-3xl font-bold">+45%</h3>
                <p className="text-sm text-slate-400">Productividad</p>
              </div>
              <div className="bg-slate-900/80 p-6 rounded-xl text-center">
                <Users className="mx-auto mb-2 text-purple-400" />
                <h3 className="text-3xl font-bold">10k+</h3>
                <p className="text-sm text-slate-400">Usuarios Activos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER & CONTACT */}
      <footer className="bg-black py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center md:text-left grid md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">NEXUS<span className="text-cyan-400">FLOW</span></h2>
            <p className="text-slate-500 text-sm">Innovación que impulsa negocios.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-white">Productos</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-cyan-400">BarberBot Pro</a></li>
              <li><a href="#" className="hover:text-cyan-400">LogiTrack ERP</a></li>
              <li><a href="#" className="hover:text-cyan-400">MediCitas Cloud</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-white">Contacto Directo</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex items-center gap-2 justify-center md:justify-start">
                 Telegram Oficial
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                 WhatsApp Soporte
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-white">Métodos de Pago</h3>
            <div className="flex gap-2 justify-center md:justify-start">
              {/* Placeholders for icons like Visa/Mastercard/Crypto */}
              <div className="w-10 h-6 bg-slate-700 rounded"></div>
              <div className="w-10 h-6 bg-slate-700 rounded"></div>
              <div className="w-10 h-6 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 text-slate-600 text-xs">
          © 2024 Nexus Flow. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default NexusFlowLanding;