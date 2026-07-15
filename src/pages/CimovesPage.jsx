import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft, faArrowRight, faArrowUpRightFromSquare,
  faCircleCheck, faFlask, faRocket, faLayerGroup,
  faMagnifyingGlass, faVideo, faPenNib, faPalette,
  faChartBar, faBullhorn, faUsers, faGraduationCap,
  faStore, faBriefcase, faGears, faInfinity, faBolt,
  faBuilding, faChartLine, faHandshake,
  faGavel, faServer,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const P  = '#8C52FF'
const PL = '#F3ECFF'

// ─── Timeline ─────────────────────────────────────────────────────────────────
const TIMELINE = [
  {
    period: 'Origen',
    title: 'Las primeras investigaciones',
    desc: 'Todo empezó con preguntas sobre cinematografía — la regla de los 9 planos, los formatos de YouTube, la adaptación al vertical. A partir de esas sesiones de investigación con IA, Orlando comenzó a construir sistemas metodológicos de producción de contenido. Cada sistema documentado era un ladrillo. El conjunto no tenía nombre todavía.',
  },
  {
    period: 'Ago 2025',
    title: 'Nace Cimoves — del sistema a la marca',
    desc: 'Los sistemas maduran y se formalizan como Cimoves. Se sistematiza el Dossier Maestro Estratégico v1.0 (10 de agosto de 2025). Nace el Método CIMOVES 4.0 con su arquitectura de 13 sub-marcas, las cuatro Vs (Viralidad, Valor, Venta, Validación) y el concepto de Libertad Publicitaria.',
  },
  {
    period: 'Dic 2025',
    title: 'La triada: Cimoves · Canaliz · Convirty',
    desc: 'La visión se expande: se crean Canaliz (distribución omnicanal) y Convirty (conversión y ventas) como marcas especializadas. El ciclo completo: Cimoves crea → Canaliz difunde → Convirty convierte. Eventualmente las tres se reintegran bajo Cimoves, donde Diffusion y Advertising pasan a ser sub-marcas internas.',
  },
  {
    period: '7 Jun 2026',
    title: 'Brand Book oficial y Design System',
    desc: 'Se lanza el Brand Book v1.0 y el Design System completo: purple #8C52FF, Roboto, Minimalismo Persuasivo, 13 iconos producto en squircle, 9 variantes de logotipo. Cimoves pasa de metodología a identidad profesional completa.',
  },
  {
    period: '20 Jun 2026',
    title: 'cimoves.com en vivo',
    desc: 'Sitio web público operativo en cimoves.com. Stack: React + Vite + Tailwind + FontAwesome. Hosting: Cloudflare Pages — auto-deploy en cada push a GitHub. SSL activo.',
  },
  {
    period: 'Hoy',
    title: 'Plataforma + productos en construcción',
    desc: 'Cimoves opera como plataforma de comunicación estratégica con servicios activos (333–999 €/mes), Cimoves Auditor y Cimoves Research en construcción, y Creator Bank en concepto. Sistema operativo y listo para escalar.',
  },
]

// ─── Sub-brands ───────────────────────────────────────────────────────────────
const SUBS = [
  { icon: faMagnifyingGlass, name: 'Research',       desc: 'Investigación de audiencia, competencia y tendencias — punto de entrada de todo' },
  { icon: faVideo,           name: 'Studios',        desc: 'Producción audiovisual, documentales, guionización cinematográfica' },
  { icon: faPenNib,          name: 'Content',        desc: 'Editorial, copies, distribución y reciclaje multiformato' },
  { icon: faPalette,         name: 'Design',         desc: 'Identidad visual, animaciones, banners, sistemas de imagen' },
  { icon: faChartBar,        name: 'Insights',       desc: 'Análisis de métricas, auditorías de canales, benchmarks competitivos' },
  { icon: faLayerGroup,      name: 'Diffusion',      desc: 'Distribución orgánica omnicanal, SEO, programación y gestión de redes' },
  { icon: faBullhorn,        name: 'Advertising',    desc: 'Paid media, Meta/Google/TikTok, funnels y landing pages de conversión' },
  { icon: faUsers,           name: 'Community',      desc: 'Gestión de comunidades, engagement, fidelización de audiencias' },
  { icon: faInfinity,        name: 'Collaborations', desc: 'Alianzas con creadores, co-creación de marca y activaciones' },
  { icon: faGraduationCap,   name: 'Academy',        desc: 'Cursos, talleres, webinars y certificaciones del sistema CIMOVES' },
  { icon: faStore,           name: 'Store',          desc: 'Plantillas de diseño, guías, recursos descargables — freemium y premium' },
  { icon: faBriefcase,       name: 'Business',       desc: 'Dashboard de KPIs, estrategia empresarial y reporting mensual' },
  { icon: faFlask,           name: 'Experiments',    desc: 'Laboratorio de ideas, sistemas experimentales, innovación metodológica' },
]

// ─── Method steps ─────────────────────────────────────────────────────────────
const STEPS = [
  { code: 'RLVT', name: 'Revisión Literaria y Validación de Tema',    desc: 'Investigación documental rigurosa antes de producir una sola pieza. Bases verificadas, datos actualizados, ángulo validado.' },
  { code: 'DI',   name: 'Documentación Integral',                      desc: '"Document, Don\'t Create" — registrar el proceso, los desafíos, los aprendizajes. Humaniza la narrativa y genera contenido real.' },
  { code: 'GD',   name: 'Guionización Dinámica',                       desc: 'El Guion Perfecto en 4 capas: Literario + Técnico + Visual/Storyboard + Edición. Nada se graba sin guion.' },
  { code: 'PRO',  name: 'Producción y Control de Calidad',             desc: 'Grabación con metodología cinematográfica — planos definidos, iluminación, audio. Clips dopamínicos planificados desde el guion.' },
  { code: 'POST', name: 'Postproducción y Optimización',               desc: 'Edición, diseño sonoro, mezcla, motion y subtítulos. La pieza pilar queda lista para fragmentar.' },
  { code: 'NO',   name: 'Narrativa Omnicanal — Reciclaje Quirúrgico', desc: 'Un contenido pilar se convierte en 10+ activos: Clips, Reels, Shorts, Carruseles, Artículos, Infografías, Title Cards.' },
  { code: 'CIRR', name: 'Contenido Instantáneo de Respuesta Rápida',  desc: 'Publicación estratégica por plataforma con timing óptimo + respuesta rápida a tendencias del momento.' },
  { code: 'IM',   name: 'Integración Multiformato y Análisis Continuo', desc: 'Monitoreo de métricas, optimización iterativa y acumulación de activos que trabajan solos a largo plazo.' },
]

// ─── Component ────────────────────────────────────────────────────────────────
export default function CimovesPage() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── Back nav ─────────────────────────────────────────────────────── */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <Link to="/marcas" className="inline-flex items-center gap-2 text-[12px] font-semibold text-gray-400 hover:text-gray-700 transition-colors no-underline">
            <FontAwesomeIcon icon={faArrowLeft} />
            Todas las marcas
          </Link>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] text-white">
        <div className="max-w-6xl mx-auto px-8 pt-20 pb-24">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8" style={{ background: P }}>
            <FontAwesomeIcon icon={faBolt} className="text-white text-2xl" />
          </div>

          <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-4" style={{ color: P }}>
            Madrid, España · Método CIMOVES 4.0
          </p>

          <h1 className="text-[56px] font-black leading-[1.02] tracking-tight mb-6 max-w-3xl">
            Transformamos ideas<br />
            <span style={{ color: P }}>en impacto.</span>
          </h1>

          <p className="text-[18px] text-gray-300 max-w-2xl leading-relaxed mb-4">
            Cimoves no es una agencia. Es un sistema — <strong className="text-white">CIMOVES 4.0</strong> — que convierte tu conocimiento e ideas en contenido estratégico que genera viralidad, valor, venta y validación.
          </p>
          <p className="text-[16px] text-gray-500 max-w-xl leading-relaxed mb-10">
            Una idea tiene el poder de transformar el mundo. Investigación primero. Producción después. Nunca al revés.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://cimoves.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[13px] text-white no-underline transition-opacity hover:opacity-90"
              style={{ background: P }}
            >
              Visitar cimoves.com
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>

          <div className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-white/10">
            {[
              { n: '2025', l: 'Origen del sistema' },
              { n: '13',   l: 'Sub-marcas especializadas' },
              { n: '4V',   l: 'Viralidad · Valor · Venta · Validación' },
              { n: '4.0',  l: 'Versión del método CIMOVES' },
              { n: '1',    l: 'Primera auditoría — JL Ruedas Motos Group SL, Madrid' },
            ].map(s => (
              <div key={s.l}>
                <div className="text-[32px] font-black leading-none" style={{ color: P }}>{s.n}</div>
                <div className="text-[11px] font-semibold text-gray-500 mt-1 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── El problema ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F7F7F8]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3" style={{ color: P }}>
              Por qué existe Cimoves
            </p>
            <h2 className="text-[36px] font-black text-[#0A0A0A] tracking-tight leading-tight max-w-xl">
              Las marcas publican.<br />Pero no comunican.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                n: '01',
                title: 'Produces sin investigar',
                desc: 'Contenido sin estrategia es solo ruido. Sin research previo no sabes qué busca tu audiencia, qué está funcionando ni por qué tu competencia te está ganando terreno.',
              },
              {
                n: '02',
                title: 'Una pieza, una vez, un canal',
                desc: 'Produces y publicas. Sin sistema que multiplique ese trabajo. Cada mes empiezas desde cero. No hay flujo que conecte investigación, producción, distribución y conversión.',
              },
              {
                n: '03',
                title: 'Sin pauta, sin alcance',
                desc: 'Cuando paras de invertir en ads, desapareces. Nunca has construido activos de contenido que trabajen solos. Eso no es libertad publicitaria.',
              },
            ].map(p => (
              <div key={p.n} className="bg-white rounded-2xl border border-gray-100 p-8">
                <div className="text-[11px] font-black uppercase tracking-widest mb-4" style={{ color: P }}>{p.n}</div>
                <h3 className="text-[18px] font-black text-[#0A0A0A] leading-tight mb-3">{p.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Para quién es ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3" style={{ color: P }}>
              Para quién es
            </p>
            <h2 className="text-[34px] font-black text-[#0A0A0A] tracking-tight">
              Tres perfiles. Un sistema.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: faBuilding,
                title: 'Negocios y PYMEs',
                desc: 'Tienen buen producto pero comunicación digital débil. Sin presencia, sin estrategia, sin sistema. Saben que necesitan contenido pero no saben por dónde empezar ni cómo mantenerlo.',
              },
              {
                icon: faRocket,
                title: 'Emprendedores y creadores',
                desc: 'Saben lo que valen pero no saben comunicarlo. Publican contenido que no crece ni convierte. Les falta el método para convertir su conocimiento en autoridad de marca.',
              },
              {
                icon: faChartLine,
                title: 'Marcas en crecimiento',
                desc: 'Ya tienen presencia digital pero no tienen sistema detrás. Sin datos, sin proceso, sin reciclaje de contenido. Producen más pero escalan menos de lo que deberían.',
              },
            ].map(item => (
              <div key={item.title} className="border border-gray-100 rounded-2xl p-7">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: PL }}>
                  <FontAwesomeIcon icon={item.icon} style={{ color: P }} />
                </div>
                <h3 className="text-[17px] font-black text-[#0A0A0A] mb-3">{item.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cimoves vs Agencia ────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F7F7F8]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3" style={{ color: P }}>
              El diferenciador
            </p>
            <h2 className="text-[34px] font-black text-[#0A0A0A] tracking-tight">
              Cimoves no es una agencia.<br />Es un sistema.
            </h2>
            <p className="text-[14px] text-gray-500 mt-4 max-w-lg mx-auto">
              "Una agencia te hace posts. Cimoves instala un sistema que investiga, produce, distribuye y mide."
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 text-center mb-4 gap-4">
              <div className="text-[11px] font-black uppercase tracking-widest text-gray-400 py-2 bg-gray-200 rounded-lg">Agencia tradicional</div>
              <div className="text-[11px] font-black uppercase tracking-widest text-white py-2 rounded-lg" style={{ background: P }}>Cimoves</div>
            </div>
            <div className="space-y-2">
              {[
                { left: 'Pagas por horas, reuniones y promesas',    right: 'Pagas por sistema, metodología y resultados' },
                { left: 'Contenido sin investigación previa',        right: 'Research primero. Producción después. Nunca al revés.' },
                { left: 'Una pieza, un canal, una vez',              right: 'Un contenido pilar → 10+ activos distribuidos' },
                { left: 'Proceso opaco, sin metodología visible',   right: 'Método CIMOVES 4.0: proceso documentado y medible' },
                { left: 'Cada mes empiezas desde cero',             right: 'Sistema que acumula activos y escala con el tiempo' },
                { left: 'Dependes de su equipo y su agenda',        right: 'El sistema trabaja con o sin ti — 24/7' },
                { left: 'Sin pauta, sin alcance',                    right: 'Libertad Publicitaria — orgánico que trabaja solo' },
              ].map((d, i) => (
                <div key={i} className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 rounded-xl px-5 py-3.5 text-[13px] text-gray-400 line-through flex items-center">
                    {d.left}
                  </div>
                  <div className="bg-white border border-gray-100 rounded-xl px-5 py-3.5 text-[13px] text-[#0A0A0A] font-semibold flex items-center gap-2">
                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: P }} className="flex-shrink-0" />
                    {d.right}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Método CIMOVES 4.0 ───────────────────────────────────────────── */}
      <section className="py-20 bg-[#0A0A0A] text-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3" style={{ color: P }}>
              La metodología
            </p>
            <h2 className="text-[34px] font-black leading-tight mb-3">
              Método CIMOVES 4.0 — 8 pasos, sin improvisación
            </h2>
            <p className="text-[15px] text-gray-400 max-w-xl">
              Sistema Integral Multiformato Omnicanal para Viralidad, Valor, Venta y Validación.
            </p>
          </div>

          {/* 4 Vs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {[
              { v: 'Viralidad',   desc: 'Diseñar contenido atractivo y compartible que genere alcance masivo' },
              { v: 'Valor',       desc: 'Contenido educativo de alta calidad que establezca autoridad en el nicho' },
              { v: 'Venta',       desc: 'Promover de forma natural, captando leads y fomentando conversiones' },
              { v: 'Validación',  desc: 'Todo respaldado por investigación y datos. Sin datos no hay estrategia' },
            ].map(item => (
              <div key={item.v} className="border border-white/10 rounded-2xl p-6">
                <div className="text-[22px] font-black mb-2" style={{ color: P }}>{item.v[0]}</div>
                <div className="text-[15px] font-black text-white mb-2">{item.v}</div>
                <div className="text-[12px] text-gray-500 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* 8 pasos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {STEPS.map((step, i) => (
              <div key={step.code} className="flex gap-4 border border-white/10 rounded-xl p-5">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black" style={{ background: P }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] font-black uppercase tracking-widest mb-1 text-gray-600">{step.code}</div>
                  <div className="text-[13px] font-bold text-white mb-1">{step.name}</div>
                  <div className="text-[11px] text-gray-500 leading-relaxed">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Las 13 sub-marcas ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3" style={{ color: P }}>
              El ecosistema
            </p>
            <h2 className="text-[34px] font-black text-[#0A0A0A] tracking-tight mb-3">
              13 especializaciones.<br />Un sistema coordinado.
            </h2>
            <p className="text-[15px] text-gray-500 max-w-xl">
              Cimoves es el puente entre lo que se imagina y lo que se comunica — 13 sub-marcas que operan en sinergia perfecta, sin redundancias.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SUBS.map((sub, i) => (
              <div
                key={sub.name}
                className="flex items-start gap-4 p-5 rounded-xl border transition-colors"
                style={i < 4 ? { borderColor: '#E8DCFF', background: '#FDFBFF' } : { borderColor: '#F0F0F0' }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: i < 4 ? PL : '#F5F5F7' }}
                >
                  <FontAwesomeIcon icon={sub.icon} style={{ color: i < 4 ? P : '#86868B' }} className="text-sm" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#0A0A0A] mb-0.5">
                    Cimoves {sub.name}
                    {i < 4 && (
                      <span className="ml-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider" style={{ background: PL, color: P }}>
                        Core
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-gray-500 leading-relaxed">{sub.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Productos en desarrollo ──────────────────────────────────────── */}
      <section className="py-24 bg-[#F7F7F8]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3" style={{ color: P }}>
              Productos en desarrollo
            </p>
            <h2 className="text-[34px] font-black text-[#0A0A0A] tracking-tight mb-3">
              El sistema se convierte en software
            </h2>
            <p className="text-[15px] text-gray-500 max-w-xl">
              Tres productos digitales nacidos directamente de la metodología CIMOVES 4.0. En construcción activa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: faGavel,
                name: 'Cimoves Auditor',
                status: 'MVP en desarrollo',
                desc: 'Auditoría Digital 360° automatizada. Motor de diagnóstico de marca: wizard guiado, análisis IA con criterio profesional, informe visual interactivo con score por área y plan de acción. Primera auditoría entregada a JL Ruedas Motos Group SL, Madrid.',
              },
              {
                icon: faMagnifyingGlass,
                name: 'Cimoves Research',
                status: 'En desarrollo',
                desc: 'Investigación profunda de mercados, audiencias y competidores. Nombre oficial del producto: "Investigación Profunda". Modelo: prepago sin suscripción — desde el primer encargo.',
              },
              {
                icon: faServer,
                name: 'Cimoves Spaces',
                status: 'Investigación completada (MR16)',
                desc: 'Almacenamiento inteligente de activos digitales con organización IA. Tiers: Starter / Pro / Agency. Investigación de mercado completada, pendiente de decisiones de lanzamiento.',
              },
            ].map(p => (
              <div key={p.name} className="border border-gray-100 bg-white rounded-2xl p-7">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: PL }}>
                  <FontAwesomeIcon icon={p.icon} style={{ color: P }} />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest mb-2 text-gray-400">{p.status}</div>
                <h3 className="text-[17px] font-black text-[#0A0A0A] mb-3">{p.name}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Historia ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3" style={{ color: P }}>
              Historia
            </p>
            <h2 className="text-[34px] font-black text-[#0A0A0A] tracking-tight">
              Cómo nació Cimoves
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gray-100 hidden md:block" />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-[10px] z-10"
                      style={{ background: i === TIMELINE.length - 1 ? P : '#0A0A0A' }}
                    >
                      {i === TIMELINE.length - 1 ? <FontAwesomeIcon icon={faCircleCheck} /> : (i + 1)}
                    </div>
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: P }}>{item.period}</div>
                    <h3 className="text-[17px] font-black text-[#0A0A0A] mb-2">{item.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── En concepto ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F7F7F8]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3" style={{ color: P }}>
              En concepto
            </p>
            <h2 className="text-[34px] font-black text-[#0A0A0A] tracking-tight">
              Lo que viene después
            </h2>
            <p className="text-[15px] text-gray-500 mt-3 max-w-xl">
              Ideas que ya tienen forma y esperan el momento correcto.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Cimoves Auditor',
                status: 'Motor de diagnóstico',
                desc: 'Wizard guiado → IA analiza con criterio profesional → informe visual interactivo con score por área, benchmark competitivo y plan de acción. MVP en desarrollo activo.',
                icon: faGavel,
              },
              {
                name: 'Cimoves Research',
                status: 'Investigación bajo demanda',
                desc: '8 tipos de investigación: audiencia, competencia, tendencias, mercado, propuesta de valor y más. Modelo prepago sin suscripción. Sin barreras de entrada.',
                icon: faMagnifyingGlass,
              },
              {
                name: 'Creator Bank',
                status: 'Concepto',
                desc: 'Repositorio de escenas, clips dopamínicos y assets videográficos reutilizables. Una producción de Studios → múltiples piezas cortas listas para distribuir.',
                icon: faLayerGroup,
              },
            ].map(p => (
              <div key={p.name} className="border border-gray-100 bg-white rounded-2xl p-7">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: PL }}>
                  <FontAwesomeIcon icon={p.icon} style={{ color: P }} />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest mb-2 text-gray-400">{p.status}</div>
                <h3 className="text-[17px] font-black text-[#0A0A0A] mb-3">{p.name}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A0A0A] text-white text-center">
        <div className="max-w-2xl mx-auto px-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-8" style={{ background: P }}>
            <FontAwesomeIcon icon={faRocket} className="text-white text-xl" />
          </div>
          <h2 className="text-[38px] font-black leading-tight tracking-tight mb-3">
            Mueve tus ideas.
          </h2>
          <p className="text-[16px] font-semibold mb-5" style={{ color: P }}>
            Con sistema. Con metodología. Con datos.
          </p>
          <p className="text-[15px] text-gray-400 leading-relaxed mb-10">
            El contenido ya no es solo visibilidad — es el motor central de tu estrategia de marca. Cimoves te da el sistema para construirlo con investigación, multiplicarlo con metodología y sostenerlo sin depender de pauta.
          </p>
          <a
            href="https://cimoves.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[14px] text-white no-underline transition-opacity hover:opacity-90"
            style={{ background: P }}
          >
            Conocer Cimoves
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </section>

    </div>
  )
}
