import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft, faArrowRight,
  faBrain, faClockRotateLeft, faLink, faCompass,
  faUser, faBuilding, faBriefcase,
  faCube, faRocket, faInfinity,
  faGears, faGraduationCap, faFlask, faHandshake,
  faCircleCheck, faArrowTrendUp, faStar, faBoltLightning,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const P  = '#7B2FBE'
const PL = '#F3E8FF'

// ─── Data ─────────────────────────────────────────────────────────────────────
const PROBLEMS = [
  {
    icon: faClockRotateLeft,
    title: 'Intercambias tiempo por dinero',
    desc: 'La mayoría vive atada a un horario, un jefe o un cliente. El tiempo es el único recurso no renovable, y el sistema está diseñado para consumirlo.',
  },
  {
    icon: faLink,
    title: 'Dependen de un solo ingreso',
    desc: 'Un solo flujo de ingresos es una vulnerabilidad crítica. Cuando falla, todo falla. Ricae construye múltiples capas de independencia económica.',
  },
  {
    icon: faCompass,
    title: 'No tienen un sistema',
    desc: 'La mayoría no tiene un sistema — solo esfuerzo. Ricae es la diferencia entre trabajar duro y trabajar con inteligencia.',
  },
]

const FOR_WHOM = [
  {
    icon: faUser,
    title: 'El que quiere salir del ciclo',
    desc: 'Personas que vienen de clase media-baja pero aspiran al top 1%. Que trabajan duro pero sienten que el sistema no está diseñado para ellos.',
  },
  {
    icon: faBuilding,
    title: 'El emprendedor sin estructura',
    desc: 'Tiene ideas, tiene ganas. Le falta el sistema que conecte todo: ingreso, automatización, escalabilidad.',
  },
  {
    icon: faBriefcase,
    title: 'El profesional que genera pero no acumula',
    desc: 'Trabaja, gana, gasta. El ciclo se repite. Ricae es el sistema que cierra esa brecha: de generar ingresos a construir libertad en las 18 dimensiones.',
  },
]

const DIFFS = [
  {
    icon: faCube,
    title: '18 dimensiones de soberanía',
    desc: 'Temporal, Geográfica, Creativa, De Expresión, Educativa, Financiera, Relacional, Mental, Espiritual y 9 más. El mapa completo de la libertad total — más allá de la libertad financiera.',
  },
  {
    icon: faBrain,
    title: 'Rica — IA con nombre propio',
    desc: 'Un asistente de inteligencia artificial que aprende y se adapta al usuario, mejorando constantemente.',
  },
  {
    icon: faRocket,
    title: 'Motor real: Business IA',
    desc: 'El enjambre multi-agente con orquestador central y 4 cadenas de producción opera como el motor de ingresos de Ricae.',
  },
  {
    icon: faInfinity,
    title: 'Corporación sistémica',
    desc: 'No vende un servicio. Construye un sistema que genera libertad de forma autónoma y sostenida.',
  },
]

const TIMELINE = [
  {
    period: 'Antes de 2024',
    title: 'La filosofía nace',
    desc: 'Las 18 dimensiones de Libertad Total y el concepto de Ricae Corporation se construyen conceptualmente en paralelo a Nanotecks y Cimoves. La idea: que nadie tenga que trabajar en lo que no le gusta.',
  },
  {
    period: '17 Mayo 2024',
    title: 'Ricae Corporation se funda',
    desc: 'Primera fecha formal de registro. Ricae se convierte en entidad con identidad propia: una corporación sistémica con propósito declarado y metodologías documentadas.',
  },
  {
    period: '2024–2025',
    title: 'Pausa estratégica',
    desc: 'Sin infraestructura suficiente para operar, Ricae entra en pausa. El motor necesitaba construirse antes de encender la máquina.',
  },
  {
    period: '2025',
    title: 'Business IA nace en Nano Lab',
    desc: 'El enjambre multi-agente con 4 cadenas de producción (CV, Tarjetas, Auditoría Web, BrandBook) se desarrolla como proyecto interno de Nano Lab.',
  },
  {
    period: '2026',
    title: 'Business IA se integra a Ricae',
    desc: 'El motor más avanzado del ecosistema se cede a Ricae. La infraestructura de Business IA pasa a ser el corazón operativo de Ricae Corporation. Cuatro cadenas. Un orquestador central. Protocolo de Cero Ventas Cruzadas.',
  },
  {
    period: 'Hoy',
    title: 'Reactivada. Construyendo.',
    desc: 'Ricae opera con su motor (Business IA), su sistema educativo (Ricae Education), su asistente (Rica) y su subsidiaria experimental (Ricae Benefits). Plan de negocio completo en actualización con variables 2026.',
  },
]

const COMPONENTS = [
  {
    icon: faGears,
    name: 'Ricae System',
    desc: 'Sistema integral de metodologías ágiles, recursos educativos y herramientas tecnológicas avanzadas.',
  },
  {
    icon: faBrain,
    name: 'Rica',
    desc: 'Asistente de inteligencia artificial con nombre propio. Aprende. Se adapta. Mejora.',
  },
  {
    icon: faGraduationCap,
    name: 'Ricae Education',
    desc: 'Nuevo sistema educativo circular diseñado para la libertad total educativa.',
  },
  {
    icon: faBuilding,
    name: 'Ricae Corporation',
    desc: 'La entidad legal. La estructura. El paraguas que contiene y protege todo.',
  },
  {
    icon: faFlask,
    name: 'Business IA',
    desc: 'Motor de ingresos: 4 cadenas automatizadas (CV, Tarjetas, Auditoría, BrandBook). Orquestador central. Protocolo Financiación a Demanda.',
  },
  {
    icon: faHandshake,
    name: 'Ricae Benefits',
    desc: "Subsidiaria experimental de contenido aspiracional bilingüe. El nombre 'Veneficios' es un error ortográfico intencional — con V.",
  },
]

const ELIT3_PILLARS = [
  {
    icon: faArrowTrendUp,
    title: 'Evolución',
    desc: 'Ningún activo de Ricae puede permanecer estático. El crecimiento perpetuo (Kaizen) es el protocolo. Cada sistema mejora de forma iterativa constante.',
  },
  {
    icon: faStar,
    title: 'Excelencia',
    desc: 'Rechazo absoluto a la mediocridad. El estándar aspiracional es siempre la maestría — en tecnología, en contenido, en experiencia del usuario.',
  },
  {
    icon: faBoltLightning,
    title: 'Extraordinario',
    desc: 'Fuera de la norma estadística. Ricae no compite en mercados saturados. Construye nuevas categorías de valor. El objetivo: outliers, no promedios.',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────
export default function RicaePage() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── Back nav ─────────────────────────────────────────────────────── */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <Link
            to="/marcas"
            className="inline-flex items-center gap-2 text-[12px] font-semibold text-gray-400 hover:text-gray-700 transition-colors no-underline"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Todas las marcas
          </Link>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] text-white">
        <div className="max-w-6xl mx-auto px-8 pt-20 pb-24">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
            style={{ background: P }}
          >
            <FontAwesomeIcon icon={faBrain} className="text-white text-2xl" />
          </div>

          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold mb-6"
            style={{ background: 'rgba(255,255,255,0.08)', color: '#ABABAB' }}
          >
            ACTIVA · EN CONSTRUCCION
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none">Ricae.</h1>

          <p className="text-xl text-gray-300 max-w-2xl mb-4 leading-relaxed">
            Libertad total en todos los aspectos de la vida.
          </p>
          <p className="text-[16px] text-gray-500 max-w-2xl leading-relaxed mb-10">
            No es una agencia. No es un producto. Es una corporación sistémica con 18 dimensiones de soberanía: Temporal, Geográfica, Creativa, De Expresión, Educativa y 13 más. Construida para que las personas alcancen la libertad total en todos los aspectos de la vida.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/marcas"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white no-underline"
              style={{ background: P }}
            >
              Ver ecosistema <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          <div className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-white/10">
            {[
              { n: '2024', l: 'Fundacion formal' },
              { n: '18',   l: 'Dimensiones de libertad' },
              { n: '4',    l: 'Cadenas de produccion IA' },
              { n: '1',    l: 'Corporacion sistémica' },
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
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3" style={{ color: P }}>
              Por que existe Ricae
            </p>
            <h2 className="text-[36px] font-black text-[#0A0A0A] tracking-tight leading-tight max-w-xl">
              El sistema actual te ata.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROBLEMS.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-8">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: PL }}>
                  <FontAwesomeIcon icon={p.icon} style={{ color: P }} />
                </div>
                <h3 className="text-[18px] font-black text-[#0A0A0A] leading-tight mb-3">{p.title}</h3>
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
            <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3" style={{ color: P }}>
              Para quién es
            </p>
            <h2 className="text-[34px] font-black text-[#0A0A0A] tracking-tight">
              Tres perfiles. Un sistema.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FOR_WHOM.map((item) => (
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

      {/* ── Diferenciadores ──────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0A0A0A] text-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3" style={{ color: P }}>
              El diferenciador
            </p>
            <h2 className="text-[34px] font-black leading-tight mb-3">
              Ricae no es lo que conoces.
            </h2>
            <p className="text-[15px] text-gray-400 max-w-xl">
              No hay un servicio que comprar. Hay un sistema que instalar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DIFFS.map((d) => (
              <div key={d.title} className="border border-white/10 rounded-2xl p-7 flex gap-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: P }}
                >
                  <FontAwesomeIcon icon={d.icon} className="text-white" />
                </div>
                <div>
                  <h3 className="text-[16px] font-black text-white mb-2">{d.title}</h3>
                  <p className="text-[13px] text-gray-400 leading-relaxed">{d.desc}</p>
                </div>
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
              Como nacio Ricae
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
                    <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: P }}>
                      {item.period}
                    </div>
                    <h3 className="text-[17px] font-black text-[#0A0A0A] mb-2">{item.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Componentes ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3" style={{ color: P }}>
              La corporacion
            </p>
            <h2 className="text-[34px] font-black text-[#0A0A0A] tracking-tight mb-3">
              Seis unidades. Un sistema.
            </h2>
            <p className="text-[15px] text-gray-500 max-w-xl">
              Ricae Corporation no es una marca — es la estructura que contiene todo. Cada unidad tiene su rol especifico dentro del sistema.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMPONENTS.map((comp) => (
              <div key={comp.name} className="bg-white border border-gray-100 rounded-2xl p-6 flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: PL }}
                >
                  <FontAwesomeIcon icon={comp.icon} style={{ color: P }} />
                </div>
                <div>
                  <h3 className="text-[14px] font-black text-[#0A0A0A] mb-1">{comp.name}</h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">{comp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ELIT3 ────────────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3" style={{ color: P }}>
              Sistema de valores
            </p>
            <h2 className="text-[34px] font-black text-[#0A0A0A] tracking-tight mb-3">
              ELIT3 — El Sistema de Valores
            </h2>
            <p className="text-[13px] font-medium uppercase tracking-widest text-gray-400 mb-2">
              Experiencia de Logros Integrales para la Transformación hacia la Evolución y Excelencia Extraordinaria
            </p>
            <p className="text-[15px] text-gray-500 max-w-xl mt-4">
              Cada decisión en Ricae pasa por este filtro.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ELIT3_PILLARS.map((pillar) => (
              <div key={pillar.title} className="border border-gray-100 rounded-2xl p-8">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: P }}
                >
                  <FontAwesomeIcon icon={pillar.icon} className="text-white text-lg" />
                </div>
                <h3 className="text-[20px] font-black text-[#0A0A0A] mb-3">{pillar.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A0A0A] text-white text-center">
        <div className="max-w-2xl mx-auto px-8">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-8"
            style={{ background: P }}
          >
            <FontAwesomeIcon icon={faInfinity} className="text-white text-xl" />
          </div>
          <h2 className="text-[38px] font-black leading-tight tracking-tight mb-3">
            Una corporacion construida para la libertad.
          </h2>
          <p className="text-[16px] font-semibold mb-5" style={{ color: P }}>
            El sistema que conecta personas con su version mas libre.
          </p>
          <p className="text-[15px] text-gray-400 leading-relaxed mb-10">
            Ricae Corporation es el sistema que conecta personas con su version mas libre.
          </p>
          <Link
            to="/marcas"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[14px] text-white no-underline transition-opacity hover:opacity-90"
            style={{ background: P }}
          >
            Ver ecosistema
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>

    </div>
  )
}
