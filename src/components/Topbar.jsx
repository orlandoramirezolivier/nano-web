import { useState, useRef, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import AtomIcon from './AtomIcon'

const NAV = [
  { to: '/ecosistema', label: 'Ecosistema' },
  { to: '/filosofia',  label: 'Filosofía' },
]

const APPS = [
  {
    id: 'brandbook', label: 'Brand Book', to: '/brandbook', live: true,
    bg: '#0A0A0A',
    Icon: () => <AtomIcon fill="white" size={20} />,
  },
  {
    id: 'nanoclips', label: 'Nano Clips', live: false,
    bg: '#EA580C',
    Icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
    ),
  },
  {
    id: 'memory', label: 'Nano Memory', live: false,
    bg: '#7C3AED',
    Icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
    ),
  },
  {
    id: 'meta', label: 'Meta YouTube', live: false,
    bg: '#0891B2',
    Icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
    ),
  },
  {
    id: 'cimoves', label: 'Cimoves CRM', live: false,
    bg: '#16A34A',
    Icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  },
  {
    id: 'stats', label: 'Canal Stats', live: false,
    bg: '#D97706',
    Icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
    ),
  },
]

function AppLauncher({ onClose }) {
  const navigate = useNavigate()
  return (
    <div className="absolute right-0 top-[calc(100%+8px)] w-[300px] bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,.14)] border border-gray-100 overflow-hidden z-50">
      <div className="px-4 py-3 border-b border-gray-50">
        <div className="text-[11px] font-bold text-gray-400 uppercase tracking-[.1em]">Herramientas Nano</div>
      </div>
      <div className="grid grid-cols-3 gap-0 p-2">
        {APPS.map(app => (
          <button
            key={app.id}
            onClick={() => {
              if (app.live && app.to) { navigate(app.to); onClose() }
            }}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-colors ${
              app.live ? 'hover:bg-gray-50 cursor-pointer' : 'opacity-40 cursor-default'
            }`}
          >
            <div className="w-11 h-11 rounded-[12px] flex items-center justify-center shadow-[0_1px_4px_rgba(0,0,0,.18)]" style={{ background: app.bg }}>
              <app.Icon />
            </div>
            <span className="text-[10px] font-semibold text-gray-700 text-center leading-tight">{app.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Topbar({ minimal = false }) {
  const [launcherOpen, setLauncherOpen] = useState(false)
  const navigate = useNavigate()
  const ref = useRef(null)

  useEffect(() => {
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setLauncherOpen(false) }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  return (
    <nav className="sticky top-0 z-50 h-[56px] bg-white/90 backdrop-blur-xl border-b border-[#F0F0F0] flex items-center justify-between px-8">
      <button
        className="flex items-center gap-2.5 flex-shrink-0"
        onClick={() => navigate('/')}
      >
        <AtomIcon fill="#0A0A0A" size={20} />
        <span className="text-[14px] font-black tracking-tight text-[#0A0A0A]">Nano</span>
      </button>

      <div className="flex items-center gap-5">
        {!minimal && NAV.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `text-[13px] transition-colors whitespace-nowrap ${
                isActive ? 'font-semibold text-[#0A0A0A]' : 'font-normal text-[#ABABAB] hover:text-[#0A0A0A]'
              }`
            }
          >
            {label}
          </NavLink>
        ))}

        {/* 9-dot launcher */}
        <div className="relative" ref={ref}>
          <button
            onClick={() => setLauncherOpen(o => !o)}
            className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors ${
              launcherOpen ? 'bg-gray-100 text-gray-900' : 'text-gray-400 hover:bg-gray-50 hover:text-gray-700'
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <circle cx="2"  cy="2"  r="1.5"/>
              <circle cx="8"  cy="2"  r="1.5"/>
              <circle cx="14" cy="2"  r="1.5"/>
              <circle cx="2"  cy="8"  r="1.5"/>
              <circle cx="8"  cy="8"  r="1.5"/>
              <circle cx="14" cy="8"  r="1.5"/>
              <circle cx="2"  cy="14" r="1.5"/>
              <circle cx="8"  cy="14" r="1.5"/>
              <circle cx="14" cy="14" r="1.5"/>
            </svg>
          </button>
          {launcherOpen && <AppLauncher onClose={() => setLauncherOpen(false)} />}
        </div>
      </div>
    </nav>
  )
}
