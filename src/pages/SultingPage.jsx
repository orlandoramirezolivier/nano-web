import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faArrowRight,
  faComments,
  faClock,
  faFileCircleXmark,
  faPersonCircleQuestion,
  faUser,
  faBuilding,
  faSeedling,
  faBullseye,
  faClipboardList,
  faMobileScreen,
  faArrowTrendUp,
  faPersonRunning,
  faHeartPulse,
  faUsers,
  faGears,
  faLaptop,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const P  = '#0EA5E9'
const PL = '#E0F2FE'

export default function SultingPage() {
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
            <FontAwesomeIcon icon={faComments} className="text-white text-2xl" />
          </div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold mb-6"
            style={{ background: 'rgba(255,255,255,0.08)', color: '#ABABAB' }}
          >
            CONSULTORÍA · STARTUP
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none">Sulting.</h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-4 leading-relaxed">
            Tu problema tiene solución. En una sesión.
          </p>
          <p className="text-base text-gray-400 max-w-2xl mb-10 leading-relaxed">
            Asesoramiento personalizado enfocado en resolver problemas concretos. Sin paquetes genéricos. Sin contratos largos. Una sesión de 30 minutos con plan de acción inmediata.
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
            La consultoría tradicional tarda meses. Sulting tarda 30 minutos.
          </h2>
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-16">
            El problema
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: faClock,
                title: 'Procesos lentos y costosos',
                desc: 'Las consultoras tradicionales tienen procesos de meses, retainers de miles de euros y propuestas que tardan más que la solución. El problema no puede esperar.',
              },
              {
                icon: faFileCircleXmark,
                title: 'Planes genéricos',
                desc: 'Te entregan un PDF de 80 páginas que no aplica a tu situación real. Sulting parte de tu problema específico, no de una plantilla.',
              },
              {
                icon: faPersonCircleQuestion,
                title: 'No sabes por dónde empezar',
                desc: 'El problema real no es la falta de recursos — es la falta de claridad. Una sesión diagnóstico bien ejecutada vale más que seis meses de análisis paralelo.',
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
            Para quién
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A0A0A] mb-16 max-w-xl leading-tight">
            Una sesión. Tres perfiles que la necesitan.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: faUser,
                title: 'El profesional con un problema concreto',
                desc: 'Necesita reorganizar su rutina, mejorar su productividad o resolver un cuello de botella específico. Quiere un plan de acción, no teoría.',
              },
              {
                icon: faBuilding,
                title: 'El equipo que quiere optimizarse',
                desc: 'Empresa pequeña que quiere mejorar sus procesos internos, el bienestar laboral o integrar herramientas digitales. Sin presupuesto para grandes consultoras.',
              },
              {
                icon: faSeedling,
                title: 'El emprendedor en fase inicial',
                desc: 'Acaba de empezar y necesita orientación estratégica rápida. Sulting le da la claridad que necesita para dar el siguiente paso correcto.',
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
            Claridad primero. Acción después.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: faBullseye,
                title: 'Sesión diagnóstico de 15–20 min',
                desc: 'Antes de cualquier consultoría, identifica el problema principal. Sin diagnóstico no hay solución. Gratis o con costo simbólico — el filtro de calidad que garantiza el resultado.',
              },
              {
                icon: faClipboardList,
                title: 'Plan de acción concreto',
                desc: 'Al final de la sesión, el cliente se va con un plan ejecutable. No un documento. Un mapa de pasos inmediatos adaptado a su situación real.',
              },
              {
                icon: faMobileScreen,
                title: 'Infraestructura mínima',
                desc: 'Calendly + Zoom + Google Docs + WhatsApp Business. Cero burocracia. Máxima disponibilidad. Sulting puede operar con inversión inicial de cero.',
              },
              {
                icon: faArrowTrendUp,
                title: 'Escalabilidad incorporada',
                desc: 'Consultoría individual → paquetes de seguimiento → cursos y workshops grupales. El modelo crece con la demanda sin requerir más infraestructura.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-8"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: 'rgba(14,165,233,0.15)' }}
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

      {/* 5-Phase Process */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-4">
            El proceso
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A0A0A] mb-4 max-w-xl leading-tight">
            5 fases. Una consultoría que resuelve.
          </h2>
          <p className="text-gray-400 max-w-xl mb-14 text-sm leading-relaxed">
            El mismo proceso que las grandes consultoras aplican en meses, Sulting lo condensa en una sesión bien ejecutada.
          </p>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5" style={{ background: PL }} />
            <div className="space-y-10 pl-16">
              {[
                {
                  n: '01',
                  title: 'Iniciación',
                  desc: 'Definición del alcance, identificación de objetivos, relación de confianza con el cliente. La claridad antes de la acción.',
                },
                {
                  n: '02',
                  title: 'Diagnóstico',
                  desc: 'Análisis exhaustivo: entrevistas, observaciones, revisión del contexto del cliente. Se identifican las causas reales, no los síntomas superficiales.',
                },
                {
                  n: '03',
                  title: 'Planificación',
                  desc: 'Estrategias y soluciones concretas. Objetivos claros, recursos asignados, cronograma ejecutable. Sin ambigüedad.',
                },
                {
                  n: '04',
                  title: 'Implementación',
                  desc: 'Ejecución de las acciones. El consultor puede participar activamente o actuar como asesor — según lo que el cliente necesite.',
                },
                {
                  n: '05',
                  title: 'Evaluación y cierre',
                  desc: 'Medir resultados vs. objetivos. Documentar lecciones. Transferir el conocimiento al cliente para que pueda continuar solo.',
                },
              ].map((step) => (
                <div key={step.n} className="relative">
                  <div
                    className="absolute -left-11 w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-black border-2 border-white"
                    style={{ background: P, color: '#fff', top: '0px' }}
                  >
                    {step.n}
                  </div>
                  <h3 className="text-[#0A0A0A] font-bold text-base mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#F5F5F5] py-24">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Historia
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A0A0A] mb-16 max-w-xl leading-tight">
            Cómo nació Sulting.
          </h2>
          <div className="relative">
            <div
              className="absolute left-0 top-0 bottom-0 w-0.5"
              style={{ background: P }}
            />
            <div className="pl-10 space-y-12">
              {[
                {
                  period: 'El origen',
                  title: "De 'consulting' a Sulting",
                  desc: "El nombre nació como 'Zulting' en una sesión de trabajo donde Orlando buscaba un negocio de cero inversión inicial con ingresos rápidos. La Z evolucionó a S. El concepto: consultoría enfocada, sin excesos.",
                },
                {
                  period: 'El concepto',
                  title: 'Asesoramiento con cero inversión inicial',
                  desc: 'Google Meet, WhatsApp, Zoom. Sin oficina, sin equipo, sin infraestructura física. Sulting demuestra que la consultoría de valor puede comenzar desde cero si el conocimiento es real.',
                },
                {
                  period: 'La estructura',
                  title: 'B2B y B2C simultáneos',
                  desc: 'Productividad personal y organizacional, bienestar laboral, transformación digital. Dos mercados, un modelo. Las áreas de consultoría se eligieron con honestidad: solo donde hay experiencia real y resultados demostrables.',
                },
                {
                  period: 'Hoy',
                  title: 'Concepto con estructura. En espera de activación.',
                  desc: 'La arquitectura de servicio está definida. El modelo de precios está documentado. Lo que falta: el nicho final confirmado y la identidad visual. Sulting está lista para activarse cuando el ecosistema lo requiera.',
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

      {/* Areas */}
      <section className="bg-[#F5F5F5] py-24">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Servicios
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A0A0A] mb-16 max-w-xl leading-tight">
            Areas de consultoría
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: faPersonRunning,
                title: 'Productividad personal',
                desc: 'Sistemas de organización, gestión del tiempo, eliminación de cuellos de botella personales. Herramientas adaptadas a cada perfil.',
              },
              {
                icon: faHeartPulse,
                title: 'Bienestar personal',
                desc: 'Hábitos, rutinas, salud integral. No coaching genérico — intervenciones concretas con impacto medible.',
              },
              {
                icon: faUsers,
                title: 'Bienestar laboral',
                desc: 'Cultura de equipo, gestión del estrés, productividad colectiva. Empresas que cuidan a su gente retienen talento y producen más.',
              },
              {
                icon: faGears,
                title: 'Optimización de procesos',
                desc: 'Diagnóstico de procesos internos, identificación de fricciones, propuesta de mejora ejecutable en semanas.',
              },
              {
                icon: faLaptop,
                title: 'Transformación digital',
                desc: 'Integración de herramientas digitales en equipos analógicos. Sin jerga técnica — solo soluciones que el equipo adopta de verdad.',
              },
              {
                icon: faTriangleExclamation,
                title: 'Fuera del alcance',
                desc: 'Negocios/emprendimiento y finanzas están fuera del alcance actual. Solo se consulta donde hay resultados reales que respalden el asesoramiento.',
              },
            ].map((area) => (
              <div key={area.title} className="bg-white rounded-2xl p-8 border border-gray-100">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: PL }}
                >
                  <FontAwesomeIcon icon={area.icon} style={{ color: P }} className="text-lg" />
                </div>
                <h3 className="text-[#0A0A0A] font-bold text-base mb-2">{area.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Tu problema tiene una sesión.
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Sulting no es una agencia. Es una sesión de 30 minutos que cambia el siguiente paso.
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
