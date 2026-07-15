import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faArrowRight,
  faBed,
  faCity,
  faCalendarCheck,
  faPersonWalking,
  faUsers,
  faCalendarDays,
  faCalculator,
  faMobileScreen,
  faShieldHalved,
  faArrowTrendUp,
  faEuroSign,
  faKey,
  faCheckDouble,
  faClock,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const P  = '#14B8A6'
const PL = '#CCFBF1'

export default function HuespedPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: '#F5F5F5' }}>

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
            <FontAwesomeIcon icon={faBed} className="text-white text-2xl" />
          </div>

          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold mb-6"
            style={{ background: 'rgba(255,255,255,0.08)', color: '#ABABAB' }}
          >
            HOSPITALIDAD &middot; MADRID &middot; EN PAUSA
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none">
            Hu&eacute;sped.
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-4 leading-relaxed">
            Hospitalidad que se siente como hogar.
          </p>
          <p className="text-base text-gray-400 max-w-2xl mb-6 leading-relaxed">
            Operaci&oacute;n de alojamientos de corta estancia en Madrid. Pisos tur&iacute;sticos,
            hostales, experiencias reales para viajeros que buscan m&aacute;s que una habitaci&oacute;n.
          </p>

          {/* Honest status pill */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-semibold mb-10"
            style={{ background: 'rgba(20,184,166,0.12)', color: P, border: '1px solid rgba(20,184,166,0.25)' }}
          >
            <FontAwesomeIcon icon={faClock} className="text-[10px]" />
            Estado: En pausa &middot; Reactivaci&oacute;n pendiente de capital inicial
          </div>

          <div>
            <Link
              to="/marcas"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white no-underline"
              style={{ background: P }}
            >
              Ver ecosistema <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* Concept section */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <p
            className="text-[11px] font-semibold tracking-widest uppercase mb-4"
            style={{ color: P }}
          >
            La oportunidad
          </p>
          <h2 className="text-4xl font-black text-[#0A0A0A] mb-4 leading-tight">
            La oportunidad que espera.
          </h2>
          <p className="text-gray-400 max-w-xl mb-14 text-base leading-relaxed">
            El modelo existe. El mercado existe. El plan financiero est&aacute; hecho.
            Solo falta el capital para activarlo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: faCity,
                title: 'Madrid como mercado',
                body: 'Millones de turistas al a&ntilde;o. Temporadas marcadas. Plataformas como Booking y Airbnb democratizaron la distribuci&oacute;n. La oportunidad siempre estuvo ah&iacute; &mdash; faltaba el capital para tomarla.',
              },
              {
                icon: faBed,
                title: 'El modelo hostal',
                body: '3 habitaciones &times; 8 literas = 24 camas por piso. A &euro;20/noche con 60% de ocupaci&oacute;n: &euro;9.000/mes bruto. Margen operativo estimado: &euro;4.000&ndash;&euro;5.000/mes despu&eacute;s de alquiler, limpieza, suministros y comisiones de plataformas.',
              },
              {
                icon: faCalendarCheck,
                title: 'Ingresos predecibles',
                body: 'Temporada normal (&euro;15&ndash;&euro;20/cama), temporada alta (&euro;40+/cama), distribuci&oacute;n en Booking.com (15% comisi&oacute;n) y Airbnb (3% comisi&oacute;n). Dos canales, un mismo inventario, ocupaci&oacute;n maximizada.',
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl p-8 border border-gray-100"
                style={{ background: '#F5F5F5' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: PL }}
                >
                  <FontAwesomeIcon icon={icon} style={{ color: P }} />
                </div>
                <h3 className="text-[15px] font-bold text-[#0A0A0A] mb-3">{title}</h3>
                <p
                  className="text-[13px] text-gray-500 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-24" style={{ background: '#F5F5F5' }}>
        <div className="max-w-6xl mx-auto px-8">
          <p
            className="text-[11px] font-semibold tracking-widest uppercase mb-4"
            style={{ color: P }}
          >
            Para qui&eacute;n
          </p>
          <h2 className="text-4xl font-black text-[#0A0A0A] mb-14 leading-tight">
            Los hu&eacute;spedes de Hu&eacute;sped.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: faPersonWalking,
                title: 'El viajero econ&oacute;mico inteligente',
                body: 'Busca alojamiento en Madrid sin pagar hotel de 4 estrellas. Funcional, limpio, bien ubicado. Una base desde la que explorar la ciudad, no un destino en s&iacute; mismo.',
              },
              {
                icon: faUsers,
                title: 'Grupos y mochileros',
                body: 'El hostal como experiencia social. Personas que viajan solas y quieren conectar. Habitaciones compartidas con literas &mdash; el formato que construye comunidad en tr&aacute;nsito.',
              },
              {
                icon: faCalendarDays,
                title: 'El visitante de negocios de bajo presupuesto',
                body: 'Eventos, ferias, congresos en Madrid. Necesita alojamiento temporal limpio y bien conectado sin el precio de un hotel de empresa.',
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: PL }}
                >
                  <FontAwesomeIcon icon={icon} style={{ color: P }} />
                </div>
                <h3
                  className="text-[15px] font-bold text-[#0A0A0A] mb-3"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <p
                  className="text-[13px] text-gray-500 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators — dark */}
      <section className="bg-[#0A0A0A] text-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <p
            className="text-[11px] font-semibold tracking-widest uppercase mb-4"
            style={{ color: P }}
          >
            El modelo
          </p>
          <h2 className="text-4xl font-black mb-14 leading-tight">
            Un negocio probado. Un modelo calculado.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: faCalculator,
                title: 'Proyecci&oacute;n financiera completa',
                body: 'Ingresos calculados por temporada, gastos operativos anuales documentados, retorno estimado. No es especulaci&oacute;n &mdash; es un modelo de negocio con n&uacute;meros reales.',
              },
              {
                icon: faMobileScreen,
                title: 'Distribuci&oacute;n en dos plataformas',
                body: 'Booking.com (15% de comisi&oacute;n, m&aacute;ximo alcance) + Airbnb (3% de comisi&oacute;n, perfil de hu&eacute;sped diferente). Dos canales, un mismo inventario, ocupaci&oacute;n maximizada.',
              },
              {
                icon: faShieldHalved,
                title: 'Permisolog&iacute;a identificada',
                body: 'Licencia de Actividad, Registro en Turismo de Madrid, inspecci&oacute;n de seguridad. El proceso administrativo est&aacute; mapeado antes de empezar.',
              },
              {
                icon: faArrowTrendUp,
                title: 'Escalabilidad clara',
                body: 'Un piso probado y rentable &rarr; segundo piso &rarr; modelo de portfolio. La hospitalidad escala cuando el primer activo demuestra el modelo.',
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl p-8"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: 'rgba(20,184,166,0.15)' }}
                >
                  <FontAwesomeIcon icon={icon} style={{ color: P }} />
                </div>
                <h3
                  className="text-[15px] font-bold text-white mb-3"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <p
                  className="text-[13px] text-gray-400 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <p
            className="text-[11px] font-semibold tracking-widest uppercase mb-4"
            style={{ color: P }}
          >
            Historia
          </p>
          <h2 className="text-4xl font-black text-[#0A0A0A] mb-14 leading-tight">
            C&oacute;mo lleg&oacute; Hu&eacute;sped hasta aqu&iacute;.
          </h2>

          <div className="relative">
            {/* vertical line */}
            <div
              className="absolute left-5 top-0 bottom-0 w-px"
              style={{ background: '#E5E7EB' }}
            />

            <div className="space-y-12 pl-16">
              {[
                {
                  label: 'El nombre',
                  title: 'De Wespet a Hu&eacute;sped',
                  body: 'La marca se llam&oacute; inicialmente "Wespet" durante la investigaci&oacute;n. Orlando decidi&oacute; cambiarlo a "Hu&eacute;sped" (con acento) &mdash; m&aacute;s honesto, m&aacute;s directo, m&aacute;s espa&ntilde;ol. El concepto no cambi&oacute;. El nombre s&iacute;.',
                },
                {
                  label: 'La investigaci&oacute;n',
                  title: 'Un plan completo con n&uacute;meros reales',
                  body: 'Se documenta el modelo completo: 3 habitaciones, 8 literas cada una, 24 camas totales. Precio promedio: &euro;20/noche. Ocupaci&oacute;n del 60%: &euro;9.000/mes bruto. Margen estimado: &euro;4.000&ndash;&euro;5.000/mes. Inversi&oacute;n total requerida: ~&euro;28.000.',
                },
                {
                  label: 'Hoy &mdash; En pausa',
                  title: 'Bloqueada por capital inicial',
                  body: 'La investigaci&oacute;n est&aacute; hecha. Los n&uacute;meros est&aacute;n calculados. Hu&eacute;sped espera el momento en que los recursos est&eacute;n disponibles. El modelo propuesto: tickets de inversi&oacute;n de &euro;1.000&ndash;&euro;2.500 para financiar el primer piso entre inversores.',
                },
              ].map(({ label, title, body }, i) => (
                <div key={i} className="relative">
                  <div
                    className="absolute -left-11 w-4 h-4 rounded-full border-2 border-white"
                    style={{ background: i === 2 ? '#D1D5DB' : P, top: '4px' }}
                  />
                  <p
                    className="text-[11px] font-semibold tracking-widest uppercase mb-1"
                    style={{ color: i === 2 ? '#9CA3AF' : P }}
                    dangerouslySetInnerHTML={{ __html: label }}
                  />
                  <h3 className="text-[16px] font-bold text-[#0A0A0A] mb-2">{title}</h3>
                  <p
                    className="text-[13px] text-gray-500 leading-relaxed max-w-xl"
                    dangerouslySetInnerHTML={{ __html: body }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capital section — honest estado actual */}
      <section className="py-24" style={{ background: '#F5F5F5' }}>
        <div className="max-w-6xl mx-auto px-8">
          <p
            className="text-[11px] font-semibold tracking-widest uppercase mb-4"
            style={{ color: P }}
          >
            Estado actual
          </p>
          <h2 className="text-4xl font-black text-[#0A0A0A] mb-4 leading-tight">
            Lo que hace falta para activar.
          </h2>
          <p className="text-gray-400 max-w-xl mb-14 text-base leading-relaxed">
            Hu&eacute;sped est&aacute; en pausa, no abandonada. Estos son los tres requisitos
            concretos para que el primer hostal arranque.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: faEuroSign,
                title: 'Inversi&oacute;n inicial documentada',
                body: '~&euro;18.000 en arrendamiento anual + ~&euro;10.000 en reforma y equipamiento = ~&euro;28.000 total. Modelo propuesto: tickets de &euro;1.000&ndash;&euro;2.500 por inversor (entre 10 y 28 socios para cubrir la inversi&oacute;n completa).',
              },
              {
                icon: faKey,
                title: 'Primer contrato de arrendamiento',
                body: 'Un piso en Madrid con permiso de uso tur&iacute;stico. El primer contrato es el punto de partida &mdash; todo lo dem&aacute;s puede ejecutarse en paralelo.',
              },
              {
                icon: faCheckDouble,
                title: 'Permisos en Madrid',
                body: 'Licencia de Actividad y Funcionamiento, Registro en Turismo de Madrid, inspecci&oacute;n de seguridad. Proceso conocido, ejecutable en semanas una vez iniciado.',
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: PL }}
                >
                  <FontAwesomeIcon icon={icon} style={{ color: P }} />
                </div>
                <h3
                  className="text-[15px] font-bold text-[#0A0A0A] mb-3"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <p
                  className="text-[13px] text-gray-500 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA dark */}
      <section className="bg-[#0A0A0A] text-white py-24">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            El plan existe. La oportunidad tambi&eacute;n.
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-10 text-base leading-relaxed">
            Hu&eacute;sped est&aacute; en pausa &mdash; no abandonada. Cuando los recursos lleguen,
            el modelo est&aacute; listo para activarse.
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
