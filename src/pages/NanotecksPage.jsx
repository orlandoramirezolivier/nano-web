import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft, faArrowRight,
  faMicrochip, faCode, faLayerGroup, faRotate,
  faUsers, faRobot,
  faAtom, faCube, faInfinity,
  faFileInvoice, faFilePdf, faTableCells, faMicrophone, faFlask,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const P  = '#3572EF'
const PL = '#EBF0FD'

// ─── Data ─────────────────────────────────────────────────────────────────────
const PROBLEMS = [
  {
    icon: faCode,
    title: 'Reinvencion constante',
    desc: 'Cada proyecto empieza desde cero. Los mismos componentes se construyen una y otra vez, consumiendo tiempo y recursos que podrian dedicarse a crecer.',
  },
  {
    icon: faLayerGroup,
    title: 'Sin capa de infraestructura',
    desc: 'Sin un stock tecnologico compartido, el ecosistema escala con friccion. Cada marca reinventa su propia rueda digital.',
  },
  {
    icon: faRotate,
    title: 'Costo que no baja',
    desc: 'La falta de reutilizacion mantiene el costo de produccion digital elevado. La automatizacion necesita componentes atomicos, no construcciones monoliticas.',
  },
]

const FOR_WHOM = [
  {
    icon: faUsers,
    title: 'Las marcas del ecosistema Nano',
    desc: 'Cada sub-marca consume el stock tecnologico de Nanotecks. De Cimoves a Ricae, de Oro Constructores a Transformalo — todas se benefician de la infraestructura compartida.',
  },
  {
    icon: faRobot,
    title: 'Los agentes de IA',
    desc: 'La IA necesita componentes atomicos para ensamblar sistemas complejos. Nanotecks es la libreria que hace posible la automatizacion de alto nivel.',
  },
  {
    icon: faCode,
    title: 'El constructor interno',
    desc: 'El equipo tecnico del ecosistema que necesita acelerar el desarrollo reutilizando componentes validados en lugar de construir desde cero.',
  },
]

const DIFFS = [
  {
    icon: faAtom,
    title: 'Bips como atomos digitales',
    desc: 'La nanotecnologia digital parte de la misma premisa que la fisica: la materia se construye desde sus unidades minimas. En el digital, son los bips (0 y 1).',
  },
  {
    icon: faCube,
    title: 'Componentes atomicos reutilizables',
    desc: 'No se construye una vez — se ensambla muchas. Cada componente que entra al stock de Nanotecks reduce el costo marginal de cada nueva marca.',
  },
  {
    icon: faInfinity,
    title: 'Singularidad digital',
    desc: 'El punto donde los sistemas pueden disenar, ensamblar, optimizar y escalar otros sistemas de forma completamente autonoma. No es ciencia ficcion — es la direccion en que se mueve la infraestructura del ecosistema.',
  },
  {
    icon: faLayerGroup,
    title: 'No solo una vision futurista',
    desc: '"Nanotecks no es simplemente una vision futurista. Es el resultado de una evolucion practica que conecta teoria, experiencia profesional y observacion tecnologica." — Orlando Ramirez, paper fundacional.',
  },
]

const TIMELINE = [
  {
    period: 'Nov 2020',
    title: 'Nanotecks — el primer proyecto',
    desc: 'Primer proyecto formal de Orlando. Comienza como agencia de marketing digital, evoluciona a agencia de transformacion digital, luego a organizacion de transformacion digital.',
  },
  {
    period: '2020–2023',
    title: 'La teoria nace',
    desc: 'Entre clientes y proyectos, Orlando desarrolla un marco teorico privado: si la nanotecnologia fisica manipula atomos, la nanotecnologia digital manipula bips. Los componentes modulares son los bloques de construccion del universo digital.',
  },
  {
    period: 'May 2023',
    title: 'Cierre y pausa',
    desc: 'Nanotecks cierra su primera etapa. La decision fue explicita: mantener la investigacion como privada, sin integrarla aun al ecosistema.',
  },
  {
    period: '2024',
    title: 'Reactivacion como incubadora',
    desc: 'Nanotecks renace con una mision practica: dejar de ser teoria y convertirse en infraestructura. Se crean los primeros sistemas activos del ecosistema bajo su paraguas.',
  },
  {
    period: '2026',
    title: 'Stock tecnologico del ecosistema',
    desc: 'Cuatro sistemas activos: NanoVision (video→HTML con Gemini 2.5 Flash), NanoComponents (libreria atomica), NanoPDF (documentos con marca), NanoRAG (busqueda semantica). La capa invisible que hace posible todo lo demas.',
  },
]

const COMPONENTS = [
  {
    icon: faCode,
    name: 'NanoVision',
    desc: 'Video → HTML con Gemini 2.5 Flash. Convierte cualquier video del ecosistema en una pagina web replicada. v2.0 activo.',
  },
  {
    icon: faTableCells,
    name: 'NanoComponents',
    desc: 'Biblioteca atomica de componentes HTML+CSS reutilizables. La capa que implementa el principio DRY a escala de ecosistema.',
  },
  {
    icon: faFilePdf,
    name: 'NanoPDF',
    desc: 'Generacion de documentos PDF con identidad de marca. Facturas, dossiers, informes. Componente compartido entre todas las marcas.',
  },
  {
    icon: faMicrophone,
    name: 'NanoRAG',
    desc: 'Motor de busqueda semantica sobre el conocimiento del ecosistema. Activo en localhost:5050. 10.685 chunks indexados.',
  },
  {
    icon: faFlask,
    name: 'apple-replica',
    desc: 'Libreria de componentes estilo Apple (Vite+React+Tailwind). Primera libreria externa construida sobre la infraestructura de Nanotecks.',
  },
  {
    icon: faFileInvoice,
    name: 'factura_engine',
    desc: 'Motor de generacion de facturas. Componente atomico reutilizable en cualquier marca con modelo de ingresos activo.',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────
export default function NanotecksPage() {
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
            style={{ background: '#1C1C1C', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            <FontAwesomeIcon icon={faMicrochip} className="text-white text-2xl" />
          </div>

          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold mb-6"
            style={{ background: 'rgba(255,255,255,0.08)', color: '#ABABAB' }}
          >
            INFRAESTRUCTURA · ECOSISTEMA
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none">Nanotecks.</h1>

          <p className="text-xl text-gray-300 max-w-2xl mb-4 leading-relaxed">
            La nanotecnologia del universo digital.
          </p>
          <p className="text-[16px] text-gray-500 max-w-2xl leading-relaxed mb-10">
            Asi como los atomos construyen la materia, los bips (0 y 1) son las unidades minimas del universo digital. Nanotecks los ensambla en componentes reutilizables que alimentan todo el ecosistema Nano.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/marcas"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white no-underline"
              style={{ background: '#3C3C3C' }}
            >
              Ver ecosistema <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          <div className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-white/10">
            {[
              { n: 'Nov 2020', l: 'Primer proyecto de Orlando' },
              { n: '3',        l: 'Fases de transformacion digital' },
              { n: 'DRY',      l: 'Principio de reutilizacion' },
              { n: '4',        l: 'Sistemas activos en 2026' },
            ].map(s => (
              <div key={s.l}>
                <div className="text-[32px] font-black leading-none text-white">{s.n}</div>
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
            <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3 text-[#3C3C3C]">
              Por que existe Nanotecks
            </p>
            <h2 className="text-[36px] font-black text-[#0A0A0A] tracking-tight leading-tight max-w-xl">
              El ecosistema digital se repite.
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
            <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3 text-[#3C3C3C]">
              Para quien es
            </p>
            <h2 className="text-[34px] font-black text-[#0A0A0A] tracking-tight">
              Tres consumidores. Una libreria.
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
            <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3 text-gray-500">
              La vision
            </p>
            <h2 className="text-[34px] font-black leading-tight mb-3">
              Bips como unidades de construccion.
            </h2>
            <p className="text-[15px] text-gray-400 max-w-xl">
              La fisica ensambla atomos. Nanotecks ensambla bips. El principio es el mismo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DIFFS.map((d) => (
              <div key={d.title} className="border border-white/10 rounded-2xl p-7 flex gap-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: '#3C3C3C' }}
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

      {/* ── Las 3 fases ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3 text-[#3C3C3C]">
              La teoria de Nanotecks
            </p>
            <h2 className="text-[34px] font-black text-[#0A0A0A] tracking-tight mb-3">
              Tres fases. Una transformacion.
            </h2>
            <p className="text-[15px] text-gray-500 max-w-xl">
              Todo proceso de transformacion digital pasa por tres etapas. Nanotecks opera en todas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                n: '01',
                title: 'Digitacion',
                desc: 'Conversion de informacion analogica en bips: texto, imagen, audio, video → 0 y 1. El primer paso: lo fisico se convierte en digital.',
              },
              {
                n: '02',
                title: 'Digitalizacion',
                desc: 'Uso de informacion digitalizada para crear procesos, plataformas e interfaces. La informacion ya existe como bips — ahora se usa para construir.',
              },
              {
                n: '03',
                title: 'Transformacion digital',
                desc: 'Reconfiguracion completa de modelos tradicionales con tecnologia nueva. No es hacer lo mismo con ordenadores — es reinventar el modelo desde adentro.',
              },
            ].map((phase) => (
              <div key={phase.n} className="border border-gray-100 rounded-2xl p-7">
                <div
                  className="text-[28px] font-black mb-4"
                  style={{ color: P }}
                >
                  {phase.n}
                </div>
                <h3 className="text-[17px] font-black text-[#0A0A0A] mb-3">{phase.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Historia ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3 text-[#3C3C3C]">
              Historia
            </p>
            <h2 className="text-[34px] font-black text-[#0A0A0A] tracking-tight">
              Como nacio Nanotecks
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
                      style={{ background: i === TIMELINE.length - 1 ? '#1C1C1C' : '#0A0A0A', border: i === TIMELINE.length - 1 ? '2px solid #3C3C3C' : 'none' }}
                    >
                      {i === TIMELINE.length - 1 ? <FontAwesomeIcon icon={faCircleCheck} /> : (i + 1)}
                    </div>
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="text-[10px] font-bold uppercase tracking-widest mb-1 text-[#3C3C3C]">
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

      {/* ── Stock tecnologico ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[.15em] mb-3 text-[#3C3C3C]">
              El stock tecnologico
            </p>
            <h2 className="text-[34px] font-black text-[#0A0A0A] tracking-tight mb-3">
              4 sistemas activos. 2 en construccion.
            </h2>
            <p className="text-[15px] text-gray-500 max-w-xl">
              Los sistemas de Nanotecks no son conceptos — son herramientas operativas que el ecosistema usa hoy. Cada uno reduce el costo marginal de cada nueva marca.
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
                  <h3 className="text-[13px] font-black text-[#0A0A0A] mb-1 font-mono">{comp.name}</h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">{comp.desc}</p>
                </div>
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
            style={{ background: '#1C1C1C', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            <FontAwesomeIcon icon={faAtom} className="text-white text-xl" />
          </div>
          <h2 className="text-[38px] font-black leading-tight tracking-tight mb-3">
            La infraestructura que todo ecosistema necesita.
          </h2>
          <p className="text-[16px] font-semibold mb-5 text-gray-400">
            No genera ingresos propios. Su valor es que reduce el costo de todo lo demas.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-10">
            Nanotecks no genera ingresos propios. Su valor es que reduce el costo de todo lo demas.
          </p>
          <Link
            to="/marcas"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[14px] text-white no-underline transition-opacity hover:opacity-90"
            style={{ background: '#3C3C3C' }}
          >
            Ver ecosistema
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>

    </div>
  )
}
