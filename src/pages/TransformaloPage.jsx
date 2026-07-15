import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft, faArrowRight, faRobot, faPuzzlePiece, faChartLine,
  faBriefcase, faUsers, faBuilding, faFingerprint, faRocket,
  faShieldHalved, faArrowTrendUp, faMagnifyingGlass, faPenNib,
  faGears, faFlask, faCircleCheck,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const P  = '#00B4D8'
const PL = '#E0F7FA'

// ─── Data ─────────────────────────────────────────────────────────────────────
const PROBLEMS = [
  {
    icon: faRobot,
    title: 'IA que no conoce tu industria',
    desc: 'ChatGPT y Copilot son herramientas genéricas. No conocen tu vocabulario técnico, tus procesos internos ni tus clientes. El resultado: respuestas que suenen bien pero no sirven.',
  },
  {
    icon: faPuzzlePiece,
    title: 'Consultoras que no implementan',
    desc: 'Las consultoras tradicionales entienden el negocio pero no tocan la tecnología. Las empresas de software implementan pero no entienden el negocio. Nadie hace las dos cosas.',
  },
  {
    icon: faChartLine,
    title: 'Automatización que no escala',
    desc: 'Implementar IA sin un framework probado es costoso y lento. Cada empresa reinventa la rueda y paga el precio de los errores de otros.',
  },
]

const FOR_WHOM = [
  {
    icon: faBriefcase,
    title: 'El directivo de Pyme',
    desc: '5 a 30 empleados. Procesos repetitivos que consumen horas. Ya usan herramientas cloud o CRM. Saben que la IA puede ayudar pero no saben por dónde empezar.',
  },
  {
    icon: faUsers,
    title: 'El equipo con cuellos de botella',
    desc: 'Equipos que pierden horas en tareas repetibles: responder FAQs, clasificar leads, redactar propuestas, analizar datos. Quieren automatizar sin sustituir personas.',
  },
  {
    icon: faBuilding,
    title: 'La empresa que quiere diferenciarse',
    desc: 'Compite en mercados donde todos ofrecen lo mismo. Un asistente IA con su marca, su vocabulario y su forma de responder es una ventaja competitiva que los competidores no tienen.',
  },
]

const DIFFERENTIATORS = [
  {
    icon: faFingerprint,
    title: 'Diseñado para tu industria',
    desc: 'No configuramos una plantilla. Construimos el Brand Context Module de tu empresa: vocabulario técnico, herramientas del sector, forma de responder. Tu IA suena como tú.',
  },
  {
    icon: faRocket,
    title: '30 días de entrega',
    desc: '5 días de diagnóstico + 5 de diseño + 10 de configuración + 5 de beta + 5 de lanzamiento. Sin proyectos de 6 meses. Sin excusas de complejidad.',
  },
  {
    icon: faShieldHalved,
    title: 'Framework probado',
    desc: 'El mismo framework que opera internamente en el ecosistema Nano. Cimoves AI es el primer caso de estudio. Cada cliente nuevo financia mejoras que benefician a todos.',
  },
  {
    icon: faArrowTrendUp,
    title: 'ROI en 90 días',
    desc: 'Si el asistente ahorra 2 horas al día a un equipo de 5 personas, se paga en menos de 3 meses. Argumento medible, no promesa de marketing.',
  },
]

const TIMELINE = [
  {
    period: 'Jun 2023',
    title: 'Primera etapa — extensión de Nanotecks',
    desc: 'Transfórmalo nace como extensión directa de Nanotecks (fundada en noviembre 2020). Primera enfoque: comunicación digital y transformación de negocios. La semilla de lo que sería la consultoría B2B.',
  },
  {
    period: 'Ene 2024',
    title: 'Cierre primera etapa',
    desc: 'La marca cierra su primera versión. El aprendizaje: sin un framework propio y sin especialización clara, la consultoría genérica no escala. El próximo ciclo tiene que ser diferente.',
  },
  {
    period: '2024–2025',
    title: 'El framework se construye',
    desc: 'En el ecosistema Nano, se desarrolla la infraestructura de IA que eventualmente será el producto de Transfórmalo: enjambre multi-agente, cadenas de producción, Brand Context Module.',
  },
  {
    period: 'Jun 2026',
    title: 'Reactivación — pivote a IA B2B',
    desc: 'MR13 (23 de junio de 2026): Transfórmalo recibe su nueva definición. El ángulo específico: construir e integrar asistentes IA a medida para empresas. La posición en el mercado: entre consultoras (que no implementan) y empresas de software (que no entienden el negocio).',
  },
  {
    period: 'Hoy',
    title: 'Construyendo el primer caso de estudio',
    desc: 'La oferta de lanzamiento: deployment a precio reducido a cambio de caso de estudio público y testimonial en video. El framework está listo. Solo falta el primer cliente.',
  },
]

const PROCESS = [
  {
    icon: faMagnifyingGlass,
    title: 'Diagnóstico de industria',
    desc: '3–5 entrevistas. Las 10 preguntas clave. Procesos que consumen más tiempo. Herramientas que ya usan.',
  },
  {
    icon: faPenNib,
    title: 'Diseño del asistente',
    desc: 'Brand Context Module + Tools Registry. El cliente aprueba antes de construir. Cero sorpresas.',
  },
  {
    icon: faGears,
    title: 'Configuración del framework',
    desc: 'No desde cero — sobre el framework base probado. 7–10 días de configuración con branding del cliente.',
  },
  {
    icon: faFlask,
    title: 'Beta y ajustes',
    desc: '5–10 empleados prueban durante 5 días. Feedback real. Ajustes antes del lanzamiento.',
  },
  {
    icon: faRocket,
    title: 'Lanzamiento',
    desc: 'Deploy en ai.clienteX.com. Taller de formación 2h. Documentación entregada. Plan de mantenimiento activo.',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────
export default function TransformaloPage() {
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
            <FontAwesomeIcon icon={faRobot} className="text-white text-2xl" />
          </div>

          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold mb-6"
            style={{ background: 'rgba(255,255,255,0.08)', color: '#ABABAB' }}
          >
            B2B &middot; IA A MEDIDA
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none">
            Transfórmalo.
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-4 leading-relaxed">
            Tu empresa, con su propia inteligencia artificial.
          </p>
          <p className="text-base text-gray-400 max-w-2xl mb-10 leading-relaxed">
            Especializada. Con tu marca. Lista en 30 días.
          </p>

          <Link
            to="/marcas"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white no-underline"
            style={{ background: P }}
          >
            Ver ecosistema <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>

      {/* ── Problema ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12">
            <p
              className="text-[11px] font-bold uppercase tracking-[.15em] mb-3"
              style={{ color: P }}
            >
              Por qué existe Transfórmalo
            </p>
            <h2 className="text-[36px] font-black text-[#0A0A0A] tracking-tight leading-tight max-w-xl">
              La IA genérica no entiende tu negocio.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl border border-gray-100 p-8">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: PL }}
                >
                  <FontAwesomeIcon icon={p.icon} style={{ color: P }} />
                </div>
                <h3 className="text-[18px] font-black text-[#0A0A0A] leading-tight mb-3">
                  {p.title}
                </h3>
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
            <p
              className="text-[11px] font-bold uppercase tracking-[.15em] mb-3"
              style={{ color: P }}
            >
              Para quién es
            </p>
            <h2 className="text-[34px] font-black text-[#0A0A0A] tracking-tight">
              Tres perfiles. Un sistema.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FOR_WHOM.map((item) => (
              <div key={item.title} className="border border-gray-100 rounded-2xl p-7">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: PL }}
                >
                  <FontAwesomeIcon icon={item.icon} style={{ color: P }} />
                </div>
                <h3 className="text-[17px] font-black text-[#0A0A0A] mb-3">{item.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Diferenciadores — dark ────────────────────────────────────────── */}
      <section className="py-20 bg-[#0A0A0A] text-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-14">
            <p
              className="text-[11px] font-bold uppercase tracking-[.15em] mb-3"
              style={{ color: P }}
            >
              El diferenciador
            </p>
            <h2 className="text-[34px] font-black leading-tight mb-3">
              No es software genérico. Es tu IA.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DIFFERENTIATORS.map((d) => (
              <div
                key={d.title}
                className="flex gap-5 border border-white/10 rounded-2xl p-7"
              >
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

      {/* ── Historia / Timeline ───────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-14">
            <p
              className="text-[11px] font-bold uppercase tracking-[.15em] mb-3"
              style={{ color: P }}
            >
              Historia
            </p>
            <h2 className="text-[34px] font-black text-[#0A0A0A] tracking-tight">
              Cómo nació Transfórmalo
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
                      {i === TIMELINE.length - 1
                        ? <FontAwesomeIcon icon={faCircleCheck} />
                        : (i + 1)}
                    </div>
                  </div>
                  <div className="flex-1 pb-8">
                    <div
                      className="text-[10px] font-bold uppercase tracking-widest mb-1"
                      style={{ color: P }}
                    >
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

      {/* ── Proceso / Herramientas ────────────────────────────────────────── */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12">
            <p
              className="text-[11px] font-bold uppercase tracking-[.15em] mb-3"
              style={{ color: P }}
            >
              El proceso
            </p>
            <h2 className="text-[34px] font-black text-[#0A0A0A] tracking-tight">
              30 días. 5 pasos. Sin improvisación.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS.map((step, i) => (
              <div key={step.title} className="bg-white rounded-2xl border border-gray-100 p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: PL }}
                  >
                    <FontAwesomeIcon icon={step.icon} style={{ color: P }} className="text-sm" />
                  </div>
                  <span
                    className="text-[10px] font-black uppercase tracking-widest"
                    style={{ color: P }}
                  >
                    Paso {i + 1}
                  </span>
                </div>
                <h3 className="text-[15px] font-black text-[#0A0A0A] mb-2">{step.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{step.desc}</p>
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
            <FontAwesomeIcon icon={faRobot} className="text-white text-xl" />
          </div>
          <h2 className="text-[38px] font-black leading-tight tracking-tight mb-3">
            De empresa a empresa con IA propia.
          </h2>
          <p className="text-[16px] font-semibold mb-5" style={{ color: P }}>
            No hablamos de estrategia. Construimos. Desplegamos. Medimos.
          </p>
          <Link
            to="/marcas"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[14px] text-white no-underline transition-opacity hover:opacity-90"
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
