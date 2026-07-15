import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFilm, faBrain, faStar, faBuilding, faRobot,
  faMicrophone, faIdCard, faBolt,
  faArrowRight, faArrowDown, faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import AtomIcon from '../components/AtomIcon'

// ── Scroll-reveal observer ────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

// ── Data ──────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 'cimoves',
    name: 'Cimoves',
    cat: 'Producción & Comunicación',
    desc: 'Agencia interna de producción de contenido. Gestiona los canales y comunica el ecosistema.',
    status: 'activo',
    icon: faFilm,
  },
  {
    id: 'ricae',
    name: 'Ricae Corporation',
    cat: 'IA Empresarial',
    desc: 'Plataforma de IA para empresas. Fusionada con Business IA. Misión: que las personas trabajen en lo que les apasiona.',
    status: 'desarrollo',
    icon: faBrain,
  },
  {
    id: 'personas-extraordinarias',
    name: 'Personas Extraordinarias',
    cat: 'Desarrollo Personal',
    desc: 'Sistema de empoderamiento integral. Tres pilares: Evolución, Excelencia, Extraordinario. Antes conocido como ELIT3.',
    status: 'desarrollo',
    icon: faStar,
  },
  {
    id: 'startups-corporations',
    name: 'Startups Corporations',
    cat: 'Metodología de Negocio',
    desc: 'Metodología para construir empresas rentables desde el día 1 sin inversión externa. Incluye la Matriz SPIC.',
    status: 'metodologia',
    icon: faBuilding,
  },
  {
    id: 'ecosistema-ia',
    name: 'Ecosistema IA',
    cat: 'Infraestructura',
    desc: 'Red de agentes de IA que coordinan y automatizan las operaciones del ecosistema Nano.',
    status: 'desarrollo',
    icon: faRobot,
  },
  {
    id: 'sipai',
    name: 'SIPAI',
    cat: 'Investigación',
    desc: 'Sistemas de Interfaces Interactivas de Audio con Inteligencia Artificial.',
    status: 'investigacion',
    icon: faMicrophone,
  },
  {
    id: 'gap',
    name: 'GAP',
    cat: 'Herramienta',
    desc: 'General Analysis Profile. Alternativa al currículum — análisis multidimensional de una persona.',
    status: 'concepto',
    icon: faIdCard,
  },
  {
    id: 'np4',
    name: '!NP4',
    cat: 'Sistema de Publicaciones',
    desc: '!NPORTANTE · !NPACTANTE · !NPOSIBLE · !NPRESIONANTE. Cuatro canales de comunicación y publicación.',
    status: 'evaluacion',
    icon: faBolt,
  },
]

const STATUS_MAP = {
  activo:        { label: 'Activo',            filled: true  },
  desarrollo:    { label: 'En desarrollo',      filled: false },
  metodologia:   { label: 'Metodología activa', filled: true  },
  investigacion: { label: 'Investigación',      filled: false },
  concepto:      { label: 'Concepto definido',  filled: false },
  evaluacion:    { label: 'En evaluación',      filled: false },
}

const CHANNELS = [
  { name: 'Nano',         handle: '@NanoOlivier',          desc: 'Motor de viralidad + storytelling documental',        url: 'https://youtube.com/@NanoOlivier'          },
  { name: 'Nano Videos',  handle: '@nanoenvideos',          desc: '"Document, Don\'t Create" — vlogs del proceso real',  url: 'https://youtube.com/@nanoenvideos'          },
  { name: 'Orlando R.O.', handle: '@orlandoramirezolivier', desc: 'Marca corporativa — Venture Capital e inversión',      url: 'https://youtube.com/@orlandoramirezolivier' },
]

const ELIT3 = [
  { code: 'E1', name: 'Evolución',      desc: 'Kaizen perpetuo. El creador y el contenido mejoran sin parar. Sin evolución visible, no hay marca.' },
  { code: 'E2', name: 'Excelencia',     desc: 'Rechazo a la mediocridad. Si no supera el estándar propio, no se publica. La audiencia lo percibe.' },
  { code: 'E3', name: 'Extraordinario', desc: 'No competir en mercados saturados. Crear categorías propias. Ser el primero en algo específico.'    },
]

// ── Component ─────────────────────────────────────────────────────
export default function HomePage() {
  const navigate = useNavigate()
  useReveal()

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div style={{ fontFamily: '-apple-system, "SF Pro Display", "Helvetica Neue", Arial, sans-serif' }}>

      {/* ══ 1 · HERO ══════════════════════════════════════════════ */}
      <section className="bg-[#0A0A0A] px-6 sm:px-12 pt-24 pb-32 relative overflow-hidden">
        <div
          className="absolute right-[-60px] sm:right-[40px] top-1/2 -translate-y-1/2 pointer-events-none select-none"
          style={{ opacity: 0.04 }}
          aria-hidden
        >
          <AtomIcon fill="white" size={560} />
        </div>

        <div className="max-w-[980px] mx-auto relative z-10">
          <p className="reveal text-[11px] font-semibold tracking-[.28em] uppercase text-[#787878] mb-16">
            Orlando Ramírez Olivier · Marca personal
          </p>

          <h1
            className="reveal text-white"
            style={{ fontSize: 'clamp(80px, 14vw, 160px)', fontWeight: 900, letterSpacing: '-0.045em', lineHeight: 0.86, marginBottom: '2rem' }}
          >
            Nano.
          </h1>

          <p
            className="reveal text-[#ABABAB]"
            style={{ fontSize: 'clamp(17px, 2.2vw, 21px)', lineHeight: 1.55, maxWidth: '520px', fontWeight: 300, marginBottom: '3.5rem' }}
          >
            Autodidacta. Creador de ecosistemas. Construyendo en modo difícil — documentado en tiempo real.
          </p>

          <div className="reveal flex flex-wrap gap-3">
            <a
              href="https://youtube.com/@NanoOlivier"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white text-[#0A0A0A] text-[14px] font-semibold px-6 py-3 rounded-full hover:bg-[#F0F0F0] transition-colors"
            >
              <FontAwesomeIcon icon={faYoutube} className="text-[15px]" />
              Suscribirse al canal
            </a>
            <button
              onClick={() => scrollTo('proyectos')}
              className="inline-flex items-center gap-2 text-[#787878] text-[14px] font-semibold px-6 py-3 rounded-full border border-white/10 hover:border-white/25 hover:text-white transition-all"
            >
              Ver proyectos
              <FontAwesomeIcon icon={faArrowDown} className="text-[13px]" />
            </button>
          </div>
        </div>
      </section>

      {/* ══ 2 · FILOSOFÍA SNAP ════════════════════════════════════ */}
      <section className="bg-white px-6 sm:px-12 py-24 border-b border-[#F0F0F0]">
        <div className="max-w-[980px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-16 items-start">

          <div className="reveal">
            <p className="text-[11px] font-semibold tracking-[.22em] uppercase text-[#ABABAB] mb-5">Principio de marca</p>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.028em', lineHeight: 1.04, color: '#0A0A0A' }}>
              Construido<br />desde lo mínimo.
            </h2>
          </div>

          <div className="reveal">
            <p className="text-[17px] text-[#787878] leading-[1.65] mb-5">
              Sin inversores. Sin permisos. Sin capital externo. Todo lo que ves aquí se construyó desde cero — en el orden más complicado posible.
            </p>
            <p className="text-[17px] text-[#787878] leading-[1.65]">
              Si esto es posible jugando en modo difícil, imagina lo que es posible en condiciones normales. Esa es la premisa de toda la marca.
            </p>
            <button
              onClick={() => navigate('/filosofia')}
              className="inline-flex items-center gap-2 mt-8 text-[14px] font-semibold text-[#0A0A0A] hover:text-[#787878] transition-colors"
            >
              Ver filosofía completa
              <FontAwesomeIcon icon={faArrowRight} className="text-[12px]" />
            </button>
          </div>

        </div>
      </section>

      {/* ══ 3 · PROYECTOS ════════════════════════════════════════ */}
      <section id="proyectos" className="bg-[#F5F5F5] px-6 sm:px-12 py-24">
        <div className="max-w-[980px] mx-auto">

          <div className="reveal mb-14">
            <p className="text-[11px] font-semibold tracking-[.22em] uppercase text-[#ABABAB] mb-4">Ecosistema activo</p>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, letterSpacing: '-0.022em', lineHeight: 1.08, color: '#0A0A0A' }}>
              Proyectos & marcas
            </h2>
            <p className="text-[15px] text-[#ABABAB] mt-3 max-w-[460px] leading-relaxed">
              Todo lo que está en construcción — activo, en desarrollo o en evaluación. Documentado en tiempo real.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PROJECTS.map((p) => {
              const st = STATUS_MAP[p.status]
              return (
                <div
                  key={p.id}
                  className="reveal bg-white rounded-[18px] p-6 flex flex-col border border-transparent hover:border-[#E8E8E8] transition-colors"
                >
                  <div className="w-9 h-9 rounded-[10px] bg-[#F5F5F5] flex items-center justify-center text-[#3C3C3C] mb-4 flex-shrink-0">
                    <FontAwesomeIcon icon={p.icon} className="text-[16px]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-semibold tracking-[.14em] uppercase text-[#ABABAB] mb-1">{p.cat}</p>
                    <h3 className="text-[15px] font-bold text-[#0A0A0A] mb-2 leading-snug">{p.name}</h3>
                    <p className="text-[13px] text-[#787878] leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-[#F5F5F5]">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${st.filled ? 'bg-[#0A0A0A] text-white' : 'bg-[#F0F0F0] text-[#787878]'}`}>
                      {st.label}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ══ 4 · NÚMEROS ══════════════════════════════════════════ */}
      <section className="bg-[#0A0A0A] px-6 sm:px-12 py-24">
        <div className="max-w-[980px] mx-auto">
          <p className="reveal text-[11px] font-semibold tracking-[.22em] uppercase text-[#787878] mb-20">
            El ecosistema en cifras
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-14">
            {[
              { n: '20', l: 'Marcas\ndel ecosistema'  },
              { n: '8',  l: 'Proyectos\nen marcha'    },
              { n: '6',  l: 'Metodologías\npropias'   },
              { n: '18', l: 'Dimensiones\nde libertad' },
            ].map(({ n, l }) => (
              <div key={l} className="reveal">
                <div style={{ fontSize: 'clamp(56px, 8vw, 92px)', fontWeight: 900, letterSpacing: '-0.035em', lineHeight: 1, color: '#FFFFFF' }}>
                  {n}
                </div>
                <div className="text-[13px] text-[#787878] mt-3 whitespace-pre-line leading-snug">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5 · ELIT3 ════════════════════════════════════════════ */}
      <section className="bg-white px-6 sm:px-12 py-24 border-t border-[#F0F0F0]">
        <div className="max-w-[980px] mx-auto">
          <div className="reveal mb-14">
            <p className="text-[11px] font-semibold tracking-[.22em] uppercase text-[#ABABAB] mb-4">
              Filtro de calidad · Todo el contenido pasa esto
            </p>
            <h2 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, color: '#0A0A0A' }}>
              ELIT3
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#F0F0F0]">
            {ELIT3.map(e => (
              <div key={e.code} className="reveal bg-white p-8 sm:p-10">
                <div className="text-[10px] font-black tracking-[.22em] uppercase text-[#D8D8D8] mb-8">{e.code}</div>
                <div className="text-[19px] font-bold text-[#0A0A0A] mb-4">{e.name}</div>
                <p className="text-[14px] text-[#787878] leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6 · CANALES ══════════════════════════════════════════ */}
      <section className="bg-[#F5F5F5] px-6 sm:px-12 py-24">
        <div className="max-w-[980px] mx-auto">
          <div className="reveal flex items-end justify-between mb-14 flex-wrap gap-6">
            <div>
              <p className="text-[11px] font-semibold tracking-[.22em] uppercase text-[#ABABAB] mb-4">Marcas del ecosistema</p>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, letterSpacing: '-0.022em', lineHeight: 1.08, color: '#0A0A0A' }}>
                Cada marca, su canal.<br />Una narrativa.
              </h2>
            </div>
            <button
              onClick={() => navigate('/ecosistema')}
              className="text-[14px] font-semibold text-[#0A0A0A] border-b border-[#0A0A0A] pb-0.5 hover:text-[#787878] hover:border-[#787878] transition-colors whitespace-nowrap self-end"
            >
              Ver ecosistema →
            </button>
          </div>

          <div className="reveal bg-white rounded-[18px] overflow-hidden border border-[#F0F0F0] divide-y divide-[#F5F5F5]">
            {CHANNELS.map(ch => (
              <a
                key={ch.handle}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-6 py-5 gap-6 hover:bg-[#F5F5F5] transition-colors"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-[#0A0A0A] flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faYoutube} className="text-white text-[14px]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[15px] font-semibold text-[#0A0A0A] leading-snug">{ch.name}</div>
                    <div className="text-[13px] text-[#ABABAB] truncate">{ch.desc}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-[12px] font-mono text-[#ABABAB] hidden sm:block">{ch.handle}</span>
                  <span className="text-[#D8D8D8] group-hover:text-[#ABABAB] transition-colors text-[13px]">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </span>
                </div>
              </a>
            ))}
            <div className="px-6 py-4 text-[13px] text-[#D8D8D8]">
              + el resto del ecosistema en construcción
            </div>
          </div>
        </div>
      </section>

      {/* ══ 7 · CTA FINAL ════════════════════════════════════════ */}
      <section className="bg-[#0A0A0A] px-6 sm:px-12 py-28 sm:py-36">
        <div className="max-w-[980px] mx-auto">
          <div className="reveal flex items-center gap-2.5 mb-10">
            <AtomIcon fill="white" size={17} />
            <span className="text-[13px] font-black text-white tracking-tight">Nano</span>
          </div>
          <h2
            className="reveal text-white"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.04, marginBottom: '1.25rem' }}
          >
            El proceso,<br />documentado en vivo.
          </h2>
          <p className="reveal text-[#787878] text-[17px] max-w-[420px] mb-12 leading-relaxed">
            Sigue la construcción del ecosistema desde adentro. Sin filtro. Sin editar.
          </p>
          <div className="reveal flex flex-wrap gap-3">
            <a
              href="https://youtube.com/@NanoOlivier"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white text-[#0A0A0A] text-[14px] font-semibold px-6 py-3 rounded-full hover:bg-[#F0F0F0] transition-colors"
            >
              <FontAwesomeIcon icon={faYoutube} className="text-[15px]" />
              Suscribirse gratis
            </a>
            <button
              onClick={() => navigate('/filosofia')}
              className="text-[#787878] text-[14px] font-semibold px-6 py-3 rounded-full border border-white/10 hover:border-white/25 hover:text-white transition-all"
            >
              Leer la filosofía
            </button>
          </div>
        </div>
      </section>

      {/* ══ 8 · FOOTER ═══════════════════════════════════════════ */}
      <footer className="bg-[#0A0A0A] border-t border-white/8 px-6 sm:px-12 py-10">
        <div className="max-w-[980px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <AtomIcon fill="white" size={14} />
            <span className="text-[13px] font-black text-white tracking-tight">Nano</span>
            <span className="text-[12px] text-white/20 ml-3">© 2026 Orlando Ramírez Olivier</span>
          </div>
          <div className="flex items-center flex-wrap gap-6">
            <a href="https://youtube.com/@NanoOlivier" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/70 transition-colors text-[15px]" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://instagram.com/nanoolivier" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/70 transition-colors text-[15px]" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://x.com/nanoolivier" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/70 transition-colors text-[15px]" aria-label="X">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <button onClick={() => navigate('/filosofia')} className="text-[12px] text-white/30 hover:text-white/70 transition-colors">Filosofía</button>
            <button onClick={() => navigate('/ecosistema')} className="text-[12px] text-white/30 hover:text-white/70 transition-colors">Ecosistema</button>
          </div>
        </div>
      </footer>

    </div>
  )
}
