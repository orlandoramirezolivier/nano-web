import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft, faArrowRight, faArrowUpRightFromSquare,
  faCircleCheck, faHammer, faWrench, faBolt,
  faPaintRoller, faUtensils, faBath, faTriangleExclamation,
  faLayerGroup, faStore, faDroplet, faHouse,
  faPersonDigging, faIndustry, faStar, faUsers,
  faPhone, faEnvelope, faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const GOLD  = '#FDBF00'
const GOLDD = '#E5AC00'
const GOLDL = '#FFFBEC'
const INK   = '#0A0A0A'

// ─── Timeline ─────────────────────────────────────────────────────────────────
const TIMELINE = [
  {
    period: 'Mar 2025',
    title: 'El nombre antes del negocio',
    desc: 'El hijo de Orlando Ramírez Sánchez — maestro de obra con 30+ años de experiencia en Venezuela, Ecuador y España — decide crear una estructura para amplificar y proteger el legado de su padre. El nombre: ORO. Las iniciales del maestro. La visión futura contempla una estructura holding con distribución accionaria familiar: el negocio construido para durar generaciones.',
  },
  {
    period: 'Dic 2025',
    title: 'Primera documentación estratégica',
    desc: 'Se sistematizan los primeros dossiers corporativos: identidad de marca, catálogo de servicios, ecosistema digital. Primer catálogo estructurado de servicios por categorías. La empresa existe en los documentos; falta construirla en digital.',
  },
  {
    period: '5 Jun 2026',
    title: 'Las primeras herramientas digitales',
    desc: 'Se crean los primeros skills internos: procesar_visita_obra, redactar_presupuesto_pdf, redactar_factura_pdf. Scripts Python para generación automática de presupuestos y facturas. Workspace operativo con identidad visual completa.',
  },
  {
    period: '7 Jun 2026',
    title: 'Oro Presupuestos PWA — operativa',
    desc: 'Aplicación de 9 pantallas: grabador de voz en obra → transcripción con Whisper → structuración con Claude → presupuesto PDF → envío por WhatsApp. El padre graba en la obra; el sistema genera el documento y lo envía al cliente.',
  },
  {
    period: '20 Jun 2026',
    title: 'oroconstructores.com en vivo',
    desc: 'Web migrada a stack moderno (React 19 + Vite + Tailwind + FontAwesome). Desplegada en Cloudflare Pages con auto-deploy desde GitHub. SSL activo. 10 páginas, catálogo de 141 micro-servicios en 14 verticales y landing especializada para hostelería.',
  },
  {
    period: 'Hoy',
    title: 'Sistema activo y en crecimiento',
    desc: 'Web live. PWA operativa. Scraper de restaurantes de Madrid activo. 7 investigaciones de mercado publicadas. CRM inicializado. Primer ciclo cliente documentado. La empresa opera con maestros reales y un sistema digital que la hace visible y escalable.',
  },
]

// ─── Service verticals ────────────────────────────────────────────────────────
const VERTICALES = [
  { icon: faHouse,              label: 'Reformas Integrales',    desc: 'Viviendas y locales — desde 6.500€' },
  { icon: faIndustry,           label: 'Albañilería',            desc: 'Tabiques, grietas, nivelaciones, distribución' },
  { icon: faUtensils,           label: 'Cocinas',                desc: 'Reforma integral desde 2.000€' },
  { icon: faBath,               label: 'Baños',                  desc: 'Reforma completa desde 1.500€' },
  { icon: faDroplet,            label: 'Fontanería',             desc: 'Fugas, tuberías, calentadores — urgencias 24-48h' },
  { icon: faBolt,               label: 'Electricidad',           desc: 'Instalación, cuadros, puntos de luz, locales' },
  { icon: faPaintRoller,        label: 'Pintura',                desc: 'Viviendas, locales, fachadas, antihumedad' },
  { icon: faLayerGroup,         label: 'Alicatado y Cerámica',  desc: 'Baño, cocina, exteriores, microcemento' },
  { icon: faHammer,             label: 'Carpintería',            desc: 'Puertas, ventanas, tarima, rodapiés' },
  { icon: faLayerGroup,         label: 'Pladur y Techos',        desc: 'Techos y tabiques de pladur' },
  { icon: faWrench,             label: 'Suelos',                 desc: 'Tarima flotante, cerámica, microcemento' },
  { icon: faPersonDigging,      label: 'Fachadas',              desc: 'Ladrillo tosco, gotelé, revestimientos exteriores' },
  { icon: faTriangleExclamation,label: 'Urgencias',             desc: 'Fontanería y electricidad en 24-48h' },
  { icon: faStore,              label: 'Hostelería',             desc: 'Reforma integral de restaurantes y bares' },
]

// ─── Component ────────────────────────────────────────────────────────────────
export default function OroConstructoresPage() {
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
      <section style={{ background: INK }} className="text-white">
        <div className="max-w-6xl mx-auto px-8 pt-20 pb-24">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
            style={{ background: GOLD }}
          >
            <FontAwesomeIcon icon={faHammer} style={{ color: INK }} className="text-2xl" />
          </div>

          <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-4" style={{ color: GOLD }}>
            Madrid, España · 30+ años de oficio
          </p>

          <h1 className="text-[56px] font-black leading-[1.02] tracking-tight mb-6 max-w-3xl">
            Constructores<br />
            <span style={{ color: GOLD }}>que valen oro.</span>
          </h1>

          <p className="text-[18px] text-gray-300 max-w-2xl leading-relaxed mb-3">
            Reformas y construcción en Madrid. Maestros con 30+ años de oficio. Sin sorpresas. Sin letra pequeña.
          </p>
          <p className="text-[16px] font-semibold mb-10" style={{ color: GOLD }}>
            Tu tranquilidad es el plan.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://oroconstructores.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[13px] no-underline transition-opacity hover:opacity-90"
              style={{ background: GOLD, color: INK }}
            >
              Visitar oroconstructores.com
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-white/10">
            {[
              { n: '30+', l: 'Años de oficio del maestro' },
              { n: '14',  l: 'Verticales de construcción' },
              { n: '141', l: 'Micro-servicios en catálogo' },
              { n: '24h', l: 'Respuesta en urgencias' },
              { n: '1',   l: 'Primer proyecto documentado — Pedro Martínez, reforma de cocina' },
            ].map(s => (
              <div key={s.l}>
                <div className="text-[32px] font-black leading-none" style={{ color: GOLD }}>{s.n}</div>
                <div className="text-[11px] font-semibold text-gray-500 mt-1 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── El problema ──────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: '#F7F7F8' }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3" style={{ color: GOLD }}>
              Por qué existe Oro
            </p>
            <h2 className="text-[36px] font-black leading-tight tracking-tight max-w-xl" style={{ color: INK }}>
              Tienes un proyecto.<br />No sabes a quién confiar.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                n: '01',
                title: 'El precio cambia al final',
                desc: 'Te dan un presupuesto y al terminar la obra aparecen extras que nadie mencionó. Reformas que empiezan en 5.000€ y terminan en 9.000€ sin explicación.',
              },
              {
                n: '02',
                title: 'Subcontratan sin decirte',
                desc: 'Contratas a una empresa y aparecen desconocidos que no sabes quiénes son. Sin supervisión, sin responsabilidad directa, sin alguien que responda cuando algo sale mal.',
              },
              {
                n: '03',
                title: 'Desaparecen a mitad de obra',
                desc: 'El contratista empieza, cobra el primer plazo y la obra se para. Semanas sin noticias, sin avance, tu casa patas arriba y sin saber qué pasa.',
              },
            ].map(p => (
              <div key={p.n} className="bg-white rounded-2xl border border-gray-100 p-8">
                <div className="text-[11px] font-black uppercase tracking-widest mb-4" style={{ color: GOLD }}>{p.n}</div>
                <h3 className="text-[18px] font-black leading-tight mb-3" style={{ color: INK }}>{p.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Para quién ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3" style={{ color: GOLD }}>
              Para quién
            </p>
            <h2 className="text-[34px] font-black tracking-tight" style={{ color: INK }}>
              Dos perfiles. Una promesa.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: faHouse,
                title: 'Propietarios en Madrid',
                sub: 'Reforma de vivienda o local',
                desc: 'Llevas meses postergando la reforma porque no sabes a quién contratar. Tienes miedo de que te cobren de más o de que hagan un trabajo chapucero. Oro Constructores trabaja con presupuesto cerrado, equipo propio y seguimiento directo.',
                tags: ['Reformas integrales', 'Cocinas', 'Baños', 'Electricidad', 'Fontanería'],
              },
              {
                icon: faStore,
                title: 'Restaurantes y hostelería',
                sub: 'Reforma de local comercial',
                desc: 'Necesitas una reforma con mínimo tiempo de cierre y máxima calidad de ejecución. Cocinas industriales, barras, fachadas, instalaciones específicas. Experiencia real en proyectos de hostelería en Madrid.',
                tags: ['Reforma integral restaurante', 'Cocina industrial', 'Fachadas', 'Urgencias'],
              },
            ].map(item => (
              <div key={item.title} className="border border-gray-100 rounded-2xl p-8">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: GOLDL }}
                >
                  <FontAwesomeIcon icon={item.icon} style={{ color: GOLDD }} className="text-xl" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-widest mb-2 text-gray-400">{item.sub}</div>
                <h3 className="text-[20px] font-black mb-4" style={{ color: INK }}>{item.title}</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed mb-5">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(t => (
                    <span key={t} className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: GOLDL, color: '#8a6a00' }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sin sorpresas ────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3" style={{ color: GOLD }}>
              El diferenciador
            </p>
            <h2 className="text-[34px] font-black leading-tight text-white">
              Sin sorpresas.<br />Sin letra pequeña.
            </h2>
            <p className="text-[14px] text-gray-400 mt-4 max-w-lg mx-auto">
              "Si no está impecable, para nosotros no está terminado."
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 text-center mb-4 gap-4">
              <div className="text-[11px] font-black uppercase tracking-widest text-gray-600 py-2 bg-white/5 rounded-lg">Constructora típica</div>
              <div className="text-[11px] font-black uppercase tracking-widest py-2 rounded-lg" style={{ background: GOLD, color: INK }}>Oro Constructores</div>
            </div>
            <div className="space-y-2">
              {[
                { left: 'Presupuesto orientativo que cambia al final',    right: 'Presupuesto cerrado — lo que ves es lo que pagas' },
                { left: 'Subcontratan sin decirte a desconocidos',        right: 'Equipo propio con el maestro en cada obra' },
                { left: 'Desaparecen a mitad de proyecto',                right: 'Seguimiento activo y comunicación directa' },
                { left: 'Sin explicación cuando algo sale mal',           right: 'Si no está bien, lo rehacemos. Sin debate.' },
                { left: 'Años de empresa, cero experiencia real',        right: 'Maestro con 30+ años de oficio en cada trabajo' },
                { left: 'Tiempo de entrega vago o incumplido',           right: 'Plazo acordado en contrato y respetado' },
                { left: 'Jerga corporativa y promesas vacías',            right: 'Lenguaje directo. Honestidad radical con el cliente.' },
              ].map((d, i) => (
                <div key={i} className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl px-5 py-3.5 text-[13px] text-gray-600 line-through flex items-center">
                    {d.left}
                  </div>
                  <div className="bg-white/10 rounded-xl px-5 py-3.5 text-[13px] text-white font-semibold flex items-center gap-2">
                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: GOLD }} className="flex-shrink-0" />
                    {d.right}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 14 verticales ────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3" style={{ color: GOLD }}>
              Qué hacemos
            </p>
            <h2 className="text-[34px] font-black tracking-tight mb-3" style={{ color: INK }}>
              14 verticales.<br />141 servicios.
            </h2>
            <p className="text-[15px] text-gray-500 max-w-xl">
              Desde una fuga urgente hasta una reforma integral de restaurante. Un solo equipo, un maestro que supervisa, una empresa que responde.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {VERTICALES.map((v, i) => (
              <div
                key={v.label}
                className="flex items-start gap-4 p-5 rounded-xl border transition-colors"
                style={i < 2 ? { borderColor: '#FFE68A', background: GOLDL } : { borderColor: '#F0F0F0' }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: i < 2 ? GOLD : '#F5F5F7' }}
                >
                  <FontAwesomeIcon
                    icon={v.icon}
                    style={{ color: i < 2 ? INK : '#86868B' }}
                    className="text-sm"
                  />
                </div>
                <div>
                  <div className="text-[13px] font-bold mb-0.5" style={{ color: INK }}>{v.label}</div>
                  <div className="text-[11px] text-gray-500 leading-relaxed">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── La historia ──────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: '#F7F7F8' }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3" style={{ color: GOLD }}>
                El origen
              </p>
              <h2 className="text-[38px] font-black leading-tight tracking-tight mb-6" style={{ color: INK }}>
                Una historia escrita<br />a muchas manos.
              </h2>
              <p className="text-[16px] text-gray-500 leading-relaxed mb-5">
                Oro Constructores no es solo un nombre de empresa. Es la firma de mi padre en cada obra que entregamos.
              </p>
              <p className="text-[16px] text-gray-500 leading-relaxed mb-5">
                ORO son las iniciales de Orlando Ramírez — mi padre. Maestro de obra con más de 30 años de experiencia en Venezuela, Ecuador y España. El hijo creó la empresa para que ese oficio tuviera el lugar que merece: estructura, visibilidad y un sistema que lo haga crecer.
              </p>
              <p className="text-[16px] text-gray-500 leading-relaxed">
                Es un legado inverso: en vez de que el padre deje algo al hijo, el hijo construye la plataforma que amplifica el legado del padre.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: faStar,        text: '"El cemento seca. La experiencia perdura."' },
                { icon: faUsers,       text: '"Creemos en dignificar el oficio y en la sinceridad radical con el cliente."' },
                { icon: faCircleCheck, text: '"Aprendí que la calidad no es un estándar que decides tener — es una forma de hacer las cosas que no puedes dejar de aplicar."' },
              ].map((q, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: GOLDL }}>
                    <FontAwesomeIcon icon={q.icon} style={{ color: GOLDD }} className="text-sm" />
                  </div>
                  <p className="text-[13px] text-gray-600 leading-relaxed italic">{q.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gray-200 hidden md:block" />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-black text-[10px] z-10"
                      style={{
                        background: i === TIMELINE.length - 1 ? GOLD : INK,
                        color: i === TIMELINE.length - 1 ? INK : 'white',
                      }}
                    >
                      {i === TIMELINE.length - 1 ? <FontAwesomeIcon icon={faCircleCheck} /> : (i + 1)}
                    </div>
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: GOLD }}>{item.period}</div>
                    <h3 className="text-[17px] font-black mb-2" style={{ color: INK }}>{item.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Herramientas ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3" style={{ color: GOLD }}>
              Sistema digital
            </p>
            <h2 className="text-[34px] font-black tracking-tight" style={{ color: INK }}>
              Oficio con tecnología.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: faPersonDigging,
                name: 'Oro Presupuestos PWA',
                status: 'Operativa',
                desc: 'El maestro graba en obra, la app transcribe con Whisper, Claude estructura el presupuesto, el sistema genera el PDF y lo envía al cliente por WhatsApp. De la visita al presupuesto en minutos.',
              },
              {
                icon: faWrench,
                name: 'CRM de captación hostelería',
                status: 'En construcción',
                desc: 'Scraper de restaurantes y bares de Madrid activo. 2.000 contactos en proceso de captación. Templates de outreach validados. Pipeline de leads específico para reformas de hostelería.',
              },
              {
                icon: faHammer,
                name: 'Investigaciones de mercado',
                status: 'Live',
                desc: '7 investigaciones publicadas en oroconstructores.com/investigaciones: reforma de baño, cocina, piso completo, humedades, urgencias hostelería y pintura. SEO + autoridad de marca.',
              },
            ].map(p => (
              <div key={p.name} className="border border-gray-100 rounded-2xl p-7">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: GOLDL }}
                >
                  <FontAwesomeIcon icon={p.icon} style={{ color: GOLDD }} />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest mb-2 text-gray-400">{p.status}</div>
                <h3 className="text-[17px] font-black mb-3" style={{ color: INK }}>{p.name}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 text-white text-center" style={{ background: INK }}>
        <div className="max-w-2xl mx-auto px-8">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-8"
            style={{ background: GOLD }}
          >
            <FontAwesomeIcon icon={faHammer} style={{ color: INK }} className="text-xl" />
          </div>
          <h2 className="text-[38px] font-black leading-tight tracking-tight mb-3">
            Hacemos realidad<br />lo que tienes en mente.
          </h2>
          <p className="text-[16px] font-semibold mb-5" style={{ color: GOLD }}>
            Tu tranquilidad es el plan.
          </p>
          <p className="text-[15px] text-gray-400 leading-relaxed mb-10">
            Empoderar a quienes construyen con sus manos. Cada obra que entregamos lleva la firma de un maestro con 30 años de oficio y la transparencia radical de una empresa que no cree en las sorpresas.
          </p>
          <a
            href="https://oroconstructores.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[14px] no-underline transition-opacity hover:opacity-90"
            style={{ background: GOLD, color: INK }}
          >
            Conocer Oro Constructores
            <FontAwesomeIcon icon={faArrowRight} />
          </a>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { icon: faPhone,       text: '+34 624 00 45 90' },
              { icon: faEnvelope,    text: 'info.oroconstructores@gmail.com' },
              { icon: faLocationDot, text: 'Madrid, España' },
            ].map(item => (
              <div key={item.text} className="flex items-center gap-2 text-[13px] text-gray-300">
                <FontAwesomeIcon icon={item.icon} className="text-gray-500" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
