import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faArrowRight,
  faBuilding,
  faMap,
  faFileCircleXmark,
  faCompassDrafting,
  faSeedling,
  faArrowTrendUp,
  faGlobe,
  faRocket,
  faDiagramProject,
  faNetworkWired,
  faHandshake,
  faMapPin,
  faSitemap,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const P  = '#F97316'
const PL = '#FFF3E8'

export default function FundesingPage() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Back nav */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <Link
            to="/marcas"
            className="inline-flex items-center gap-2 text-[12px] font-semibold text-gray-400 hover:text-gray-700 transition-colors no-underline"
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Todas las marcas
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#0A0A0A] text-white">
        <div className="max-w-6xl mx-auto px-8 pt-20 pb-24">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
            style={{ background: P }}
          >
            <FontAwesomeIcon icon={faBuilding} className="text-white text-2xl" />
          </div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold mb-6"
            style={{ background: 'rgba(255,255,255,0.08)', color: '#ABABAB' }}
          >
            DISENO EMPRESARIAL · ESTRUCTURACION
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none">Fundesing.</h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-4 leading-relaxed">
            Transforma tu idea en una empresa solida, rentable y escalable.
          </p>
          <p className="text-base text-gray-400 max-w-2xl mb-10 leading-relaxed">
            Fundesing no funda empresas legalmente ni firma papeles. Disena el organismo — la estructura, la estrategia y el sistema operativo que hace posible que una idea se convierta en una Corporacion Moderna.
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

      {/* Problem */}
      <section className="bg-[#F5F5F5] py-24">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-black text-[#0A0A0A] mb-4 max-w-2xl leading-tight">
            La mayoria de las ideas mueren antes de convertirse en empresa.
          </h2>
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-16">
            El problema
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: faMap,
                title: 'Sin claridad estructural',
                desc: 'Muchos emprendedores no saben por donde comenzar al crear una empresa. El entusiasmo inicial no basta — se necesita una arquitectura que aguante el primer ano real.',
              },
              {
                icon: faFileCircleXmark,
                title: 'Estructura mal diseniada desde el inicio',
                desc: 'Roles sin definir, relaciones entre socios no formalizadas, jerarquias inexistentes. Un organismo mal diseniado no escala — colapsa ante la primera presion real.',
              },
              {
                icon: faCompassDrafting,
                title: 'Falta de estrategia de inicio',
                desc: 'Sin una vision clara de como estructurar y operar el negocio desde el dia uno, los emprendedores improvisan. Y la improvisacion es cara.',
              },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-8 border border-gray-100">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: PL }}
                >
                  <FontAwesomeIcon icon={card.icon} style={{ color: P }} className="text-lg" />
                </div>
                <h3 className="text-[#0A0A0A] font-bold text-lg mb-3">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Para quien
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A0A0A] mb-16 max-w-xl leading-tight">
            Tres perfiles. Un sistema que funciona para todos.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: faSeedling,
                title: 'El emprendedor con una idea',
                desc: 'Tiene la vision. Le falta la estructura. Quiere construir algo solido, no solo una empresa de papel que sobreviva un ano y cierre.',
              },
              {
                icon: faArrowTrendUp,
                title: 'El negocio que quiere escalar',
                desc: 'Ya tiene operaciones. Pero la estructura original no aguanta el crecimiento. Necesita una reorganizacion que le permita escalar sin colapsar.',
              },
              {
                icon: faGlobe,
                title: 'El que quiere escalar sin caos',
                desc: 'Tiene un negocio que funciona pero no tiene sistema. Cada decision depende de él. Fundesing disenia la estructura que le permite crecer sin ser el unico que sabe como funciona todo.',
              },
            ].map((profile) => (
              <div key={profile.title} className="rounded-2xl p-8 border border-gray-100">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: PL }}
                >
                  <FontAwesomeIcon icon={profile.icon} style={{ color: P }} className="text-lg" />
                </div>
                <h3 className="text-[#0A0A0A] font-bold text-lg mb-3">{profile.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{profile.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-[#0A0A0A] text-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-[#ABABAB] text-sm font-semibold uppercase tracking-widest mb-4">
            Diferenciadores
          </p>
          <h2 className="text-3xl md:text-4xl font-black mb-16 max-w-xl leading-tight">
            Corporaciones Modernas. No empresas de papel.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: faRocket,
                title: 'Metodologia Startup Corporation',
                desc: 'Combina la agilidad de las startups con la solidez estructural de las corporaciones. Una empresa que puede adaptarse rapido sin perder su arquitectura.',
              },
              {
                icon: faDiagramProject,
                title: 'SPIC — el punto de entrada correcto',
                desc: 'Servicio, Producto, Informacion, Comunicacion. El marco que guia como validar una idea de negocio y elegir el punto de entrada mas rentable.',
              },
              {
                icon: faNetworkWired,
                title: 'Holding + subsidiarias especializadas',
                desc: 'La estructura holding (matriz principal) con subsidiarias especializadas en ventas, comunicacion, operaciones. No una empresa monolitica — un sistema modular.',
              },
              {
                icon: faHandshake,
                title: 'Acceso a redes desde el dia uno',
                desc: 'Contactos, socios estrategicos, inversores. La estructura correcta abre puertas que una empresa sin arquitectura no puede cruzar.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-8"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: 'rgba(249,115,22,0.15)' }}
                >
                  <FontAwesomeIcon icon={item.icon} style={{ color: P }} className="text-lg" />
                </div>
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Historia
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A0A0A] mb-16 max-w-xl leading-tight">
            Como nacio Fundesing.
          </h2>
          <div className="relative">
            <div
              className="absolute left-0 top-0 bottom-0 w-0.5"
              style={{ background: P }}
            />
            <div className="pl-10 space-y-12">
              {[
                {
                  period: 'El nombre',
                  title: 'Foundation + Designing',
                  desc: 'Fundesing nace de la fusion de dos palabras en ingles: Foundation (fundacion) y Designing (disenar). El resultado: una marca que disenha empresas — no las funda legalmente, no firma papeles. Disenha el organismo. La estructura que hace posible que una idea se convierta en una corporacion moderna.',
                },
                {
                  period: 'La vision',
                  title: 'El problema que Fundesing resuelve',
                  desc: 'Orlando identifica el problema: millones de emprendedores con ideas brillantes y cero estructura. No por falta de ganas — por falta de un sistema que los guie desde la idea hasta la empresa operativa.',
                },
                {
                  period: 'Dic 2025',
                  title: 'El dossier fundacional',
                  desc: '19 de diciembre de 2025. Se documenta la identidad estrategica completa de Fundesing: proposito, vision, mision, valores, metodologias SPIC y Startup Corporation, y el concepto de Corporaciones Modernas.',
                },
                {
                  period: '2026',
                  title: 'El rol estructural en el ecosistema',
                  desc: 'Fundesing emerge como la marca con mayor ambicion estructural del ecosistema. En las sesiones de trabajo se propone como el holding legal que contiene y da soporte a las demas marcas: Cimoves, Ricae, Nanotecks. La infraestructura que hace posible el ecosistema.',
                },
                {
                  period: 'Hoy',
                  title: 'Metodologia lista. Estructura en construccion.',
                  desc: 'El marco conceptual esta completo. SPIC y Startup Corporation son metodologias documentadas y validadas. Lo que falta: la identidad visual propia y el primer cliente que permita demostrar el sistema en vivo.',
                },
              ].map((entry) => (
                <div key={entry.period} className="relative">
                  <div
                    className="absolute -left-[42px] w-4 h-4 rounded-full border-2 border-white"
                    style={{ background: P, top: '4px' }}
                  />
                  <p className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: P }}>
                    {entry.period}
                  </p>
                  <h3 className="text-[#0A0A0A] font-bold text-lg mb-2">{entry.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">{entry.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-[#F5F5F5] py-24">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Metodologia
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A0A0A] mb-16 max-w-xl leading-tight">
            Dos metodologias. Un sistema.
          </h2>

          {/* Big methodology cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: faRocket,
                title: 'Startup Corporation',
                desc: 'Combina metodologia agil de startups (adaptacion y experimentacion rapida) con la solidez estructural de las corporaciones (organizacion robusta y escalable). Resultado: Corporaciones Modernas.',
              },
              {
                icon: faDiagramProject,
                title: 'SPIC',
                desc: 'Servicio · Producto · Informacion · Comunicacion. El acronimo que guia la validacion de ideas empresariales para comenzar de la forma mas rentable posible.',
              },
            ].map((method) => (
              <div key={method.title} className="bg-white rounded-2xl p-10 border border-gray-100">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: PL }}
                >
                  <FontAwesomeIcon icon={method.icon} style={{ color: P }} className="text-xl" />
                </div>
                <h3 className="text-[#0A0A0A] font-black text-2xl mb-4">{method.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{method.desc}</p>
              </div>
            ))}
          </div>

          {/* Smaller service area cards */}
          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                icon: faMapPin,
                title: 'Diseno del organismo',
                desc: 'El "quienes somos", el "como funcionamos" y el "hacia donde vamos". La estructura conceptual y operativa de la empresa antes de que exista en papel.',
              },
              {
                icon: faCompassDrafting,
                title: 'Estrategia inicial',
                desc: 'Validacion de ideas con metodologia SPIC. El punto de entrada correcto antes de invertir tiempo y dinero.',
              },
              {
                icon: faSitemap,
                title: 'Estructuracion organizacional',
                desc: 'Roles, jerarquias, manuales operativos. La empresa que sabe quien hace que sobrevive el primer ano.',
              },
              {
                icon: faGraduationCap,
                title: 'Educacion empresarial',
                desc: 'Capacitacion en metodologia Startup Corporation. El sistema que convierte emprendedores en constructores de organizaciones.',
              },
            ].map((area) => (
              <div key={area.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: PL }}
                >
                  <FontAwesomeIcon icon={area.icon} style={{ color: P }} className="text-base" />
                </div>
                <h3 className="text-[#0A0A0A] font-bold text-sm mb-2">{area.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight max-w-2xl mx-auto">
            Una idea sin estructura es un sueno. Con Fundesing, es una empresa.
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Desde la conceptualizacion hasta la implementacion operativa — en cualquier parte del mundo.
          </p>
          <Link
            to="/marcas"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-white no-underline"
            style={{ background: P }}
          >
            Ver ecosistema <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>

    </div>
  )
}
