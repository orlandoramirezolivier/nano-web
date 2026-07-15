import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft, faArrowRight, faSeedling,
  faTriangleExclamation, faQuestion, faRepeat,
  faUser, faBrain, faHeartPulse,
  faDumbbell, faStar, faHeart,
  faCircleCheck, faLayerGroup,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const P  = '#2D9B6E'
const PL = '#E8F5EE'

// ─── Data ─────────────────────────────────────────────────────────────────────
const PROBLEMS = [
  {
    icon: faTriangleExclamation,
    title: 'Soluciones fragmentadas',
    desc: 'El gym para el cuerpo. El terapeuta para la mente. La meditación para el alma. Cada parte por separado nunca construye el todo. El equilibrio real requiere un sistema integrado.',
  },
  {
    icon: faQuestion,
    title: 'Sin propósito claro',
    desc: 'Millones de personas sienten que les falta algo sin saber exactamente qué. El propósito no se encuentra — se construye con método, con práctica y con honestidad sobre uno mismo.',
  },
  {
    icon: faRepeat,
    title: 'Ciclos que se repiten',
    desc: 'Las mismas barreras, los mismos bloqueos, los mismos patrones. Sin un marco integral que trabaje todos los planos simultáneamente, el cambio real no llega.',
  },
]

const FOR_WHOM = [
  {
    icon: faUser,
    title: 'El que busca propósito',
    desc: 'Tiene trabajo, tiene rutina. Pero siente que le falta significado. Quiere vivir con propósito, no solo existir con comodidad.',
  },
  {
    icon: faBrain,
    title: 'El que quiere más',
    desc: 'Viene de clase media y aspira al top 1%. No en términos de dinero solamente — en bienestar real, en libertad, en presencia. Sabe que tiene que trabajar en sí mismo.',
  },
  {
    icon: faHeartPulse,
    title: 'El que está en transición',
    desc: 'Cambio de trabajo, de país, de relación, de identidad. Momentos de inflexión donde un sistema de desarrollo personal hace la diferencia entre derivar o crecer.',
  },
]

const PILLARS = [
  {
    icon: faDumbbell,
    title: 'Físico',
    desc: 'El cuerpo es el fundamento de la vida. Fomenta hábitos saludables: ejercicio, alimentación balanceada y cuidado del descanso. Un cuerpo en armonía potencia todas las áreas de la vida.',
    label: 'El cuerpo sostiene la acción.',
  },
  {
    icon: faBrain,
    title: 'Mental',
    desc: 'La mente es el motor que dirige la intención y la acción. Invita a desarrollar claridad mental, inteligencia emocional y una mentalidad positiva que rompe los patrones limitantes.',
    label: 'La mente guía el enfoque.',
  },
  {
    icon: faStar,
    title: 'Espiritual',
    desc: 'La conexión con el propósito más profundo de la existencia — a través de la meditación, la reflexión y la gratitud. El "Ming": el mandato del propio destino.',
    label: 'El alma define el propósito.',
  },
  {
    icon: faHeart,
    title: 'Emocional',
    desc: 'Las emociones como brújula para la autenticidad. Promueve el manejo emocional consciente, la empatía y la capacidad de construir relaciones sanas y significativas.',
    label: 'El corazón marca el rumbo.',
  },
]

const TIMELINE = [
  {
    period: 'El origen del nombre',
    title: 'La fusión',
    desc: 'Orlando busca una palabra que signifique "vida" en diferentes culturas y rime con life. Encuentra "Ming" (命) — mandato, destino, propósito en chino. La fusión da lugar a Lifeming: la vida como destino construido, no heredado.',
  },
  {
    period: 'La filosofía',
    title: '4 pilares documentados',
    desc: 'Se documenta el sistema integral: Físico (Aristóteles, OMS), Mental (Seligman, neuroplasticidad), Espiritual (Frankl, "El hombre en busca de sentido"), Emocional (Goleman, Rogers, Maslow). La base filosófica y científica está construida.',
  },
  {
    period: 'Co-fundación',
    title: 'Orlando + Jonny',
    desc: 'Lifeming se concibe como proyecto co-fundado. Dos personas con habilidades diferentes, sin capital inicial, comenzando en digital. La landing page inicial se construye como primer paso.',
  },
  {
    period: 'Hoy',
    title: 'Concepto vivo, en construcción',
    desc: 'La filosofía está documentada. El modelo de negocio —cursos, coaching, comunidad— está pendiente de definir. Lifeming espera ser la siguiente prioridad activa del ecosistema. La base filosófica ya está construida.',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────
export default function LifemingPage() {
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
            <FontAwesomeIcon icon={faSeedling} className="text-white text-2xl" />
          </div>

          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold mb-6"
            style={{ background: 'rgba(255,255,255,0.08)', color: '#ABABAB' }}
          >
            BIENESTAR &middot; DESARROLLO PERSONAL
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none">
            Lifeming.
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-4 leading-relaxed">
            Alcanza tu destino transformando cada aspecto de tu vida.
          </p>
          <p className="text-base text-gray-400 max-w-2xl mb-6 leading-relaxed">
            Life (vida) + Ming (命, destino — chino). Una filosofía moderna para quienes buscan trascender sus limitaciones, conectando con su destino y viviendo una vida plena, significativa y alineada con su esencia.
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
              Por qué existe Lifeming
            </p>
            <h2 className="text-[36px] font-black text-[#0A0A0A] tracking-tight leading-tight max-w-2xl">
              La mayoría busca equilibrio en las partes. Lifeming lo construye en el todo.
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
              Tres momentos. Un sistema.
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

      {/* ── 4 Pilares — dark ─────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0A0A0A] text-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-14">
            <p
              className="text-[11px] font-bold uppercase tracking-[.15em] mb-3"
              style={{ color: P }}
            >
              El sistema
            </p>
            <h2 className="text-[34px] font-black leading-tight mb-3">
              4 pilares. Un sistema. Tu versión más completa.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="flex gap-5 border border-white/10 rounded-2xl p-7"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: P }}
                >
                  <FontAwesomeIcon icon={pillar.icon} className="text-white" />
                </div>
                <div>
                  <h3 className="text-[16px] font-black text-white mb-2">{pillar.title}</h3>
                  <p className="text-[13px] text-gray-400 leading-relaxed mb-3">{pillar.desc}</p>
                  <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: P }}>{pillar.label}</p>
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
              Cómo nació Lifeming
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

      {/* ── Estado actual ────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12">
            <p
              className="text-[11px] font-bold uppercase tracking-[.15em] mb-3"
              style={{ color: P }}
            >
              Estado actual
            </p>
            <h2 className="text-[34px] font-black text-[#0A0A0A] tracking-tight mb-4">
              Filosofia documentada. Modelo en construccion.
            </h2>
            <p className="text-[15px] text-gray-500 max-w-xl leading-relaxed">
              La base filosofica de Lifeming esta completa. Los 4 pilares, la etimologia del nombre y el sistema de desarrollo integral estan documentados. El modelo de negocio — cursos, coaching, comunidad — se definira cuando Lifeming sea la siguiente prioridad activa del ecosistema.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: faCircleCheck,
                title: 'Filosofia completa',
                desc: 'Los 4 pilares (Fisico, Mental, Espiritual, Emocional), el significado del nombre (Life + Ming/命) y la vision de desarrollo integral estan totalmente documentados.',
              },
              {
                icon: faLayerGroup,
                title: 'Co-fundada con Jonny',
                desc: 'Lifeming fue concebida como proyecto co-fundado entre Orlando y Jonny. Dos personas con habilidades diferentes, sin capital inicial, comenzando en digital.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-gray-100 p-8">
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

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A0A0A] text-white text-center">
        <div className="max-w-2xl mx-auto px-8">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-8"
            style={{ background: P }}
          >
            <FontAwesomeIcon icon={faSeedling} className="text-white text-xl" />
          </div>
          <h2 className="text-[38px] font-black leading-tight tracking-tight mb-3">
            Tu destino no es un lugar. Es quien decides ser.
          </h2>
          <p className="text-[16px] font-semibold mb-5" style={{ color: P }}>
            Lifeming es el sistema que conecta cada aspecto de tu vida hacia una versión más completa de ti.
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
