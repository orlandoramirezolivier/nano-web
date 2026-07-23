import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding, faHammer, faRocket, faAtom,
  faRotate, faSun, faHandshake, faPalette,
  faHotel, faBullhorn, faArrowRight, faCircleNodes,
} from '@fortawesome/free-solid-svg-icons'

// ─── Status meta ──────────────────────────────────────────────────────────────
const STATUS_META = {
  activa:      { label: 'Activa',          dot: '#059669', bg: '#ECFDF5', text: '#065F46' },
  desarrollo:  { label: 'En Desarrollo',   dot: '#D97706', bg: '#FFFBEB', text: '#92400E' },
  reactivada:  { label: 'Reactivada',      dot: '#7C3AED', bg: '#F5F3FF', text: '#5B21B6' },
  concepto:    { label: 'Concepto',        dot: '#6B7280', bg: '#F9FAFB', text: '#374151' },
  pausada:     { label: 'Pausada',         dot: '#9CA3AF', bg: '#F3F4F6', text: '#6B7280' },
  pivotando:   { label: 'Por definir',     dot: '#FBBF24', bg: '#FFFBEB', text: '#92400E' },
}

// ─── Brands registry ─────────────────────────────────────────────────────────
const MARCAS = [
  // ── NANO (RAÍZ) — hub del ecosistema, no una startup del portafolio ────────
  {
    id: 'nano',
    name: 'Nano',
    tagline: 'Marca personal de Orlando Ramírez — hub y family office que coordina y distribuye todas las demás marcas',
    sector: 'Family Office · Hub',
    status: 'activa',
    color: '#0A0A0A',
    icon: faCircleNodes,
    group: 'activa',
  },

  // ── ACTIVAS ────────────────────────────────────────────────────────────────
  {
    id: 'cimoves',
    name: 'Cimoves',
    tagline: 'Plataforma de comunicación y servicios digitales',
    sector: 'Comunicación · Contenido',
    status: 'activa',
    color: '#0A0A0A',
    icon: faBuilding,
    group: 'activa',
  },
  {
    id: 'oro-constructores',
    name: 'Oro Constructores',
    tagline: 'Construcción y remodelación de espacios',
    sector: 'Construcción',
    status: 'activa',
    color: '#78350F',
    icon: faHammer,
    group: 'activa',
  },

  // ── REACTIVADAS / EN DESARROLLO ───────────────────────────────────────────
  {
    id: 'ricae',
    name: 'Ricae',
    tagline: 'Corporación para la libertad total. Las personas no deberían trabajar en lo que no les gusta.',
    sector: 'Corporación · Autonomía',
    status: 'reactivada',
    color: '#1E1B4B',
    icon: faRocket,
    group: 'desarrollo',
  },
  {
    id: 'nanotecks',
    name: 'Nanotecks',
    tagline: 'Nanotecnología digital — componentes atómicos reutilizables del ecosistema',
    sector: 'Tecnología · Infraestructura',
    status: 'reactivada',
    color: '#0F172A',
    icon: faAtom,
    group: 'desarrollo',
  },
  {
    id: 'transformalo',
    name: 'Transfórmalo',
    tagline: 'Transformación digital con IA — convierte empresas y procesos al entorno digital',
    sector: 'Consultoría Digital · IA',
    status: 'reactivada',
    color: '#134E4A',
    icon: faRotate,
    group: 'desarrollo',
  },
  {
    id: 'lifeming',
    name: 'Lifeming',
    tagline: 'Marca de estilo de vida y bienestar integral con un socio',
    sector: 'Lifestyle · Bienestar',
    status: 'desarrollo',
    color: '#1C3A2A',
    icon: faSun,
    group: 'desarrollo',
  },

  // ── CONCEPTO / DEFINICIÓN PENDIENTE ──────────────────────────────────────
  {
    id: 'sulting',
    name: 'Sulting',
    tagline: 'Marca de consultoría de negocios — en proceso de definición',
    sector: 'Consultoría',
    status: 'concepto',
    color: '#1F2937',
    icon: faHandshake,
    group: 'concepto',
  },
  {
    id: 'fundesing',
    name: 'Fundesing',
    tagline: 'Diseño con propósito y fundamento — más información en Nano Memory',
    sector: 'Diseño',
    status: 'concepto',
    color: '#1F2937',
    icon: faPalette,
    group: 'concepto',
  },
  {
    id: 'huesped',
    name: 'Huésped',
    tagline: 'Hospitalidad, pisos turísticos y propiedades de alquiler — pausada por recursos',
    sector: 'Hospitalidad · Alquiler',
    status: 'pausada',
    color: '#1F2937',
    icon: faHotel,
    group: 'concepto',
  },
  {
    id: 'comduce',
    name: 'Comduce',
    tagline: 'Marca de conducción, vehículos y automoción — nueva oportunidad activa',
    sector: 'Automoción · Transporte',
    status: 'concepto',
    color: '#1F2937',
    icon: faBullhorn,
    group: 'concepto',
  },

]

// ─── Filter config ────────────────────────────────────────────────────────────
const FILTERS = [
  { id: 'todo',       label: 'Todo' },
  { id: 'activa',     label: 'Activas' },
  { id: 'desarrollo', label: 'En Desarrollo' },
  { id: 'concepto',   label: 'Concepto' },
]

// ─── Card component ───────────────────────────────────────────────────────────
function MarcaCard({ marca }) {
  const sm = STATUS_META[marca.status]

  return (
    <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_1px_4px_rgba(0,0,0,.06)] hover:shadow-[0_8px_28px_rgba(0,0,0,.10)] hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer flex flex-col">

      {/* ── Top color area ─────────────────────────────────────────────── */}
      <div
        className="h-[140px] flex items-center justify-center relative overflow-hidden flex-shrink-0"
        style={{ background: marca.color }}
      >
        {marca.logo ? (
          <img
            src={marca.logo}
            alt={marca.name}
            className={`w-full h-full group-hover:scale-105 transition-transform duration-300 ${
              marca.logoFit === 'cover' ? 'object-cover' : 'object-contain p-6'
            }`}
          />
        ) : (
          <>
            <div className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  'radial-gradient(ellipse at 25% 30%, white 0%, transparent 55%), ' +
                  'radial-gradient(ellipse at 75% 70%, white 0%, transparent 45%)',
              }}
            />
            <FontAwesomeIcon
              icon={marca.icon}
              className="relative z-10 text-white text-[42px] opacity-95 group-hover:scale-105 transition-transform duration-300 drop-shadow-lg"
            />
          </>
        )}
      </div>

      {/* ── Content area ───────────────────────────────────────────────── */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.1em] mb-1.5 truncate">
          {marca.sector}
        </p>
        <h3 className="text-[15px] font-black text-[#0A0A0A] leading-tight mb-1.5 truncate">
          {marca.name}
        </h3>
        <p className="text-[11px] text-gray-400 leading-snug line-clamp-2 flex-1" style={{ minHeight: '32px' }}>
          {marca.tagline}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span
            className="text-[9px] font-bold px-2 py-1 rounded-full"
            style={{ color: sm.text, background: sm.bg }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle"
              style={{ background: sm.dot }}
            />
            {sm.label}
          </span>
          <span className="text-[11px] text-gray-200 group-hover:text-gray-400 transition-colors">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
      </div>
    </article>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function MarcasPage() {
  const [filter, setFilter] = useState('todo')

  const filtered = filter === 'todo'
    ? MARCAS
    : MARCAS.filter(m => m.group === filter)

  const counts = Object.fromEntries(
    FILTERS.map(f => [f.id, f.id === 'todo' ? MARCAS.length : MARCAS.filter(m => m.group === f.id).length])
  )

  return (
    <div className="min-h-screen bg-[#F6F7F8]">

      {/* ── Page header ──────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-8 pt-12 pb-0">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[.12em] mb-3">
            Ecosistema Orlando Ramírez
          </p>
          <h1 className="text-[42px] font-black text-[#0A0A0A] tracking-tight leading-none mb-3">
            Marcas & Startups
          </h1>
          <p className="text-[15px] text-[#787878] max-w-2xl leading-relaxed mb-8">
            Cada marca es una unidad estratégica independiente.&nbsp;
            <span className="text-[#0A0A0A] font-semibold">{MARCAS.length} marcas</span> en distintas
            etapas — desde activas generando ingresos hasta conceptos por explorar.
          </p>

          {/* Filter tabs */}
          <div className="flex gap-0 overflow-x-auto pb-0 -mb-px scrollbar-hide">
            {FILTERS.map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-3 text-[13px] font-semibold border-b-2 transition-colors whitespace-nowrap flex-shrink-0 ${
                  filter === f.id
                    ? 'border-[#0A0A0A] text-[#0A0A0A]'
                    : 'border-transparent text-[#ABABAB] hover:text-[#3C3C3C]'
                }`}
              >
                {f.label}
                <span className={`ml-1.5 text-[10px] font-bold ${filter === f.id ? 'text-[#ABABAB]' : 'text-[#D8D8D8]'}`}>
                  {counts[f.id]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Grid ─────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map(marca => (
            <Link
              key={marca.id}
              to={`/marcas/${marca.id}`}
              className="block no-underline"
            >
              <MarcaCard marca={marca} />
            </Link>
          ))}
        </div>

        <p className="text-center text-[11px] text-[#D8D8D8] mt-10">
          Mostrando {filtered.length} de {MARCAS.length} marcas
        </p>
      </div>
    </div>
  )
}
