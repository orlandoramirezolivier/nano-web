import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AtomIcon from '../components/AtomIcon'

// ─── App registry — añadir nuevas apps aquí ───────────────────────
const APPS = [
  {
    id: 'brandbook',
    name: 'Brand Book',
    desc: 'Identidad visual, verbal y estratégica de Nano',
    status: 'live',
    navigateTo: '/brandbook',
    Icon: ({ size = 28 }) => <AtomIcon fill="white" size={size} />,
    iconBg: '#0A0A0A',
  },
  {
    id: 'nanoclips',
    name: 'Nano Clips',
    desc: 'Procesamiento automático de videos con IA',
    status: 'soon',
    Icon: ({ size = 28 }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
    iconBg: '#EA580C',
  },
  {
    id: 'rag',
    name: 'Nano Memory',
    desc: 'Base de conocimiento vectorial del ecosistema',
    status: 'soon',
    Icon: ({ size = 28 }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    iconBg: '#7C3AED',
  },
  {
    id: 'metadatos',
    name: 'Meta YouTube',
    desc: 'Generador de títulos, descripciones y tags SEO',
    status: 'soon',
    Icon: ({ size = 28 }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
    iconBg: '#0891B2',
  },
  {
    id: 'cimoves',
    name: 'Cimoves CRM',
    desc: 'Gestión de leads y funnel de ventas B2B',
    status: 'soon',
    Icon: ({ size = 28 }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    iconBg: '#16A34A',
  },
  {
    id: 'analytics',
    name: 'Canal Stats',
    desc: 'Métricas unificadas de todos los canales',
    status: 'soon',
    Icon: ({ size = 28 }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    iconBg: '#D97706',
  },
]

// ─── Sidebar registry — el usuario añade secciones aquí ───────────
// Para añadir una sección: { id, label, icon }
// El contenido de cada sección se define en SECTION_CONTENT abajo.
const SIDEBAR_SECTIONS = [
  { id: 'dashboard', label: 'Dashboard', icon: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  )},
]

// ─── Shared primitives ────────────────────────────────────────────
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,.05)] ${className}`}>
    {children}
  </div>
)

// ─── App card ─────────────────────────────────────────────────────
function AppCard({ app, onClick }) {
  const isLive = app.status === 'live'
  return (
    <button
      onClick={isLive ? onClick : undefined}
      className={`group flex flex-col items-center p-5 rounded-2xl border transition-all text-center ${
        isLive
          ? 'bg-white border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,.10)] hover:-translate-y-0.5 cursor-pointer'
          : 'bg-gray-50 border-gray-100 cursor-default opacity-60'
      }`}
    >
      {/* App icon */}
      <div
        className="w-14 h-14 rounded-[16px] flex items-center justify-center mb-3 shadow-[0_2px_8px_rgba(0,0,0,.15)]"
        style={{ background: isLive ? app.iconBg : '#D1D5DB' }}
      >
        <app.Icon size={26} />
      </div>

      {/* Name */}
      <div className="text-[13px] font-bold text-gray-900 mb-0.5">{app.name}</div>

      {/* Desc */}
      <p className="text-[10px] text-gray-400 leading-snug line-clamp-2 max-w-[110px]">{app.desc}</p>

      {/* Status badge */}
      {isLive ? (
        <span className="mt-2.5 text-[9px] font-bold px-2 py-0.5 rounded-full bg-green-50 text-green-600">Activo</span>
      ) : (
        <span className="mt-2.5 text-[9px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-400">Próximamente</span>
      )}
    </button>
  )
}

// ─── Dashboard content ────────────────────────────────────────────
function Dashboard() {
  const navigate = useNavigate()
  const now = new Date()
  const hour = now.getHours()
  const greeting = hour < 13 ? 'Buenos días' : hour < 20 ? 'Buenas tardes' : 'Buenas noches'

  return (
    <div className="p-6 max-w-[860px]">
      {/* Header */}
      <div className="mb-8">
        <p className="text-[13px] text-gray-400 mb-0.5">{greeting}, Orlando</p>
        <h1 className="text-[26px] font-black text-gray-900 tracking-tight">Ecosistema Nano</h1>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-4 gap-3 mb-8">
        {[
          { value: '16',   label: 'Canales',        sub: 'total en el ecosistema' },
          { value: '4',    label: 'Activos',         sub: 'con contenido publicado' },
          { value: '37',   label: 'Suscriptores',    sub: 'suma todos los canales' },
          { value: '6',    label: 'Metodologías',    sub: 'propias documentadas' },
        ].map(({ value, label, sub }) => (
          <Card key={label} className="p-4">
            <div className="text-[28px] font-black text-gray-900 leading-none mb-0.5">{value}</div>
            <div className="text-[12px] font-semibold text-gray-700">{label}</div>
            <div className="text-[10px] text-gray-400 mt-0.5">{sub}</div>
          </Card>
        ))}
      </div>

      {/* Recent activity placeholder */}
      <div className="mt-8">
        <h2 className="text-[15px] font-bold text-gray-900 mb-4">Actividad reciente</h2>
        <Card className="p-0 overflow-hidden">
          {[
            { icon: '◎', text: 'BrandBook System v2.3 — auditado y documentado', time: 'Jun 12', color: '#0A0A0A' },
            { icon: '◎', text: 'RAG Nano Memory operativo — 10.685 chunks indexados', time: 'Jun 11', color: '#7C3AED' },
            { icon: '◎', text: 'Web pública construida — pendiente deploy a Hostinger', time: 'Jun 12', color: '#0891B2' },
            { icon: '◎', text: 'Muletillas extraídas del RAG — 14 expresiones documentadas', time: 'Jun 12', color: '#16A34A' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 px-5 py-3.5 border-b border-gray-50 last:border-0">
              <span className="text-[10px] flex-shrink-0" style={{ color: item.color }}>{item.icon}</span>
              <span className="text-[12px] text-gray-700 flex-1 leading-snug">{item.text}</span>
              <span className="text-[10px] text-gray-400 flex-shrink-0">{item.time}</span>
            </div>
          ))}
        </Card>
      </div>

      {/* Roadmap quick view */}
      <div className="mt-6">
        <h2 className="text-[15px] font-bold text-gray-900 mb-4">Próximos pasos</h2>
        <Card className="p-0 overflow-hidden">
          {[
            { task: 'Publicar prólogo "10 Días con IA"',    urgency: 'Crítico',  status: 'pending' },
            { task: 'Deploy web a Hostinger',               urgency: 'Alto',     status: 'pending' },
            { task: 'Ejecutar Nano Clips (instalar.sh)',    urgency: 'Alto',     status: 'pending' },
            { task: 'Confirmar tagline definitivo',         urgency: 'Medio',    status: 'pending' },
            { task: 'Crear avatar social 400×400px',        urgency: 'Medio',    status: 'pending' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 px-5 py-3.5 border-b border-gray-50 last:border-0">
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${
                item.urgency === 'Crítico' ? 'bg-red-50 text-red-600' :
                item.urgency === 'Alto'   ? 'bg-amber-50 text-amber-600' :
                                            'bg-gray-100 text-gray-500'
              }`}>{item.urgency}</span>
              <span className="text-[12px] text-gray-700 flex-1">{item.task}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-200 flex-shrink-0" />
            </div>
          ))}
        </Card>
      </div>
    </div>
  )
}

// ─── Section content map — añadir nuevas secciones aquí ──────────
// Para añadir una sección: crear componente y mapearlo aquí
function SectionContent({ sectionId }) {
  if (sectionId === 'dashboard') return <Dashboard />
  return (
    <div className="p-6">
      <div className="text-[13px] text-gray-400">Sección en construcción — {sectionId}</div>
    </div>
  )
}

// ─── Sidebar ─────────────────────────────────────────────────────
function Sidebar({ active, onSelect }) {
  return (
    <aside className="w-[200px] flex-shrink-0 bg-white border-r border-gray-100 flex flex-col h-full">
      {/* Brand header */}
      <div className="px-4 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
            <AtomIcon fill="white" size={14} />
          </div>
          <div>
            <div className="text-[12px] font-black text-gray-900">Ecosistema</div>
            <div className="text-[9px] text-gray-400">Nano · Jun 2026</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto p-2">
        {SIDEBAR_SECTIONS.map(sec => (
          <button
            key={sec.id}
            onClick={() => onSelect(sec.id)}
            className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left transition-colors mb-0.5 ${
              active === sec.id
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <span className={active === sec.id ? 'text-white' : 'text-gray-400'}>{sec.icon}</span>
            <span className="text-[12px] font-semibold">{sec.label}</span>
          </button>
        ))}
      </nav>

      {/* Footer version */}
      <div className="px-4 py-3 border-t border-gray-100">
        <div className="text-[10px] text-gray-400">Ecosistema Nano v1.0</div>
        <div className="text-[9px] text-gray-300 mt-0.5">16 canales · 6 metodologías</div>
      </div>
    </aside>
  )
}

// ─── Main export ─────────────────────────────────────────────────
export default function EcosistemaPage() {
  const [active, setActive] = useState('dashboard')

  return (
    <div className="flex h-[calc(100vh-56px)] bg-[#F6F7F8] overflow-hidden">
      <Sidebar active={active} onSelect={setActive} />
      <main className="flex-1 overflow-y-auto">
        <SectionContent sectionId={active} />
      </main>
    </div>
  )
}
