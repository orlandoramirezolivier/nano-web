import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faArrowRight,
  faCar,
  faRoad,
  faMicrophone,
  faVideo,
  faTruck,
  faPersonRunning,
  faFire,
  faFilm,
  faRotate,
  faBoltLightning,
  faBolt,
  faLink,
  faLightbulb,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const P  = '#DC2626'
const PL = '#FEE2E2'

export default function ComducePage() {
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
            <FontAwesomeIcon icon={faCar} className="text-white text-2xl" />
          </div>

          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold mb-6"
            style={{ background: 'rgba(255,255,255,0.08)', color: '#ABABAB' }}
          >
            CONTENIDO &middot; AUTOMOCI&Oacute;N &middot; CONCEPTO
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none">
            Comduce.
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-4 leading-relaxed">
            Para todos los que conducen. Un veh&iacute;culo. O su propia vida.
          </p>
          <p className="text-base text-gray-400 max-w-2xl mb-10 leading-relaxed">
            Canal de contenido TikTok para los que manejan &mdash; coche, moto, cami&oacute;n &mdash;
            y para los que "conducen" sus decisiones y su destino. Comduce, donde cada historia nos lleva m&aacute;s lejos.
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

      {/* Concept section */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <p
            className="text-[11px] font-semibold tracking-widest uppercase mb-4"
            style={{ color: P }}
          >
            El concepto
          </p>
          <h2 className="text-4xl font-black text-[#0A0A0A] mb-4 leading-tight">
            El conductor tiene su propio mundo. Nadie lo estaba contando.
          </h2>
          <p className="text-gray-400 max-w-xl mb-6 text-base leading-relaxed">
            Un canal de nicho con identidad definida, estructura de contenido clara
            y una audiencia que nadie en el contenido digital estaba atendiendo bien.
          </p>
          <div
            className="max-w-xl mb-14 px-6 py-5 rounded-2xl border-l-4"
            style={{ background: PL, borderColor: P }}
          >
            <p className="text-[#0A0A0A] text-sm leading-relaxed italic font-medium">
              "&iquest;Sab&iacute;as que todos somos conductores de algo en nuestras vidas? No solo de un veh&iacute;culo, sino tambi&eacute;n de nuestros propios destinos."
            </p>
            <p className="text-gray-500 text-xs mt-2 font-semibold uppercase tracking-wider">
              Guion del primer video &mdash; Comduce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: faRoad,
                title: 'Sentido de pertenencia',
                body: 'Conducir es una identidad. Los que manejan saben que hay un lenguaje entre conductores que los de afuera no entienden. Comduce es ese espacio.',
              },
              {
                icon: faMicrophone,
                title: 'El doble sentido',
                body: 'Conducir veh&iacute;culos y conducir la vida. Comduce juega con los dos planos: el asfalto y las decisiones. La carretera como met&aacute;fora del control.',
              },
              {
                icon: faVideo,
                title: 'Contenido de 1 minuto',
                body: 'TikTok como plataforma principal. Videos sin cara &mdash; solo narraci&oacute;n y cinematograf&iacute;a de banco. Estructura definida: Hook &rarr; Relieve &rarr; Valor &rarr; CTA. M&aacute;ximo impacto, m&iacute;nima fricci&oacute;n.',
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
            Audiencia
          </p>
          <h2 className="text-4xl font-black text-[#0A0A0A] mb-14 leading-tight">
            Para los que conducen y los que se conducen.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: faCar,
                title: 'El conductor habitual',
                body: 'Cualquiera que maneje a diario &mdash; al trabajo, de reparto, por placer. Que tiene opiniones sobre el tr&aacute;fico, sobre los dem&aacute;s conductores, sobre la carretera. Comduce habla su idioma.',
              },
              {
                icon: faTruck,
                title: 'El profesional de la carretera',
                body: 'Camioneros, repartidores, taxistas, conductores de app. Un mundo espec&iacute;fico con sus propias reglas, sus propios retos y sus propias historias. Un mercado que el contenido digital casi no toca.',
              },
              {
                icon: faPersonRunning,
                title: 'El que "conduce su vida"',
                body: 'Personas en transici&oacute;n, tomando el control de sus decisiones, aprendiendo a ser piloto de su propia historia. La met&aacute;fora del conducir llega m&aacute;s all&aacute; del volante.',
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
            Diferenciadores
          </p>
          <h2 className="text-4xl font-black mb-14 leading-tight">
            Un canal de nicho. Una comunidad de conductores.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: faFire,
                title: 'Hook afirmativo',
                body: 'No preguntas &mdash; afirmaciones que generan intriga. &ldquo;Conducir no es solo una habilidad&hellip; es un lenguaje secreto que pocos entienden realmente.&rdquo; El contenido que para el scroll.',
              },
              {
                icon: faFilm,
                title: 'Sin cara. Con alma.',
                body: 'Producci&oacute;n sin revelar identidad: voz en off + banco de videos cinematogr&aacute;fico. El conductor como protagonista, no el creador.',
              },
              {
                icon: faRotate,
                title: 'Estructura narrativa probada',
                body: 'Hook afirmativo &rarr; Relieve (historia que engancha) &rarr; Aporte de valor (consejos, datos, perspectivas) &rarr; CTA. Un minuto que tiene principio, medio y fin.',
              },
              {
                icon: faBoltLightning,
                title: 'Doble motor de contenido',
                body: 'Conductor de veh&iacute;culos + conductor de vida. Dos audiencias con un punto de conexi&oacute;n: el control. La met&aacute;fora que ampl&iacute;a el alcance sin diluir la identidad.',
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl p-8"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: 'rgba(220,38,38,0.15)' }}
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
            C&oacute;mo lleg&oacute; Comduce hasta aqu&iacute;.
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
                  label: 'El concepto',
                  title: 'Un canal para los que manejan',
                  body: 'Comduce nace como canal de contenido nicho con una idea clara: el sentido de pertenencia de conducir. Un espacio para todo el que maneje, sea coche, moto o cami&oacute;n.',
                  current: false,
                },
                {
                  label: 'La estructura de contenido',
                  title: 'Videos de un minuto',
                  body: 'Se define la metodolog&iacute;a: TikTok como plataforma principal, videos de m&aacute;ximo un minuto, producci&oacute;n sin cara (solo voz y banco de video), estructura Hook &rarr; Relieve &rarr; Valor &rarr; CTA. El tono: energ&eacute;tico, afirmativo, millennial.',
                  current: false,
                },
                {
                  label: 'Hoy &mdash; Nueva oportunidad',
                  title: 'De canal a marca en la industria',
                  body: 'Una oportunidad de negocio en la industria de automoci&oacute;n/transporte activa la posibilidad de reorientar Comduce. Orlando menciona: &ldquo;tengo que involucrar varias de mis marcas para poder proveer.&rdquo; Comduce podr&iacute;a evolucionar de canal de contenido a marca de servicios en la industria vehicular.',
                  current: true,
                },
              ].map(({ label, title, body, current }, i) => (
                <div key={i} className="relative">
                  <div
                    className="absolute -left-11 w-4 h-4 rounded-full border-2 border-white"
                    style={{ background: current ? P : '#D1D5DB', top: '4px' }}
                  />
                  <p
                    className="text-[11px] font-semibold tracking-widest uppercase mb-1"
                    style={{ color: current ? P : '#9CA3AF' }}
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

      {/* Content format section */}
      <section className="py-24" style={{ background: '#F5F5F5' }}>
        <div className="max-w-6xl mx-auto px-8">
          <p
            className="text-[11px] font-semibold tracking-widest uppercase mb-4"
            style={{ color: P }}
          >
            Formato
          </p>
          <h2 className="text-4xl font-black text-[#0A0A0A] mb-4 leading-tight">
            La f&oacute;rmula del contenido Comduce.
          </h2>
          <p className="text-gray-400 max-w-xl mb-14 text-base leading-relaxed">
            Cuatro piezas que forman un video de un minuto que para el scroll,
            engancha y deja algo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: faBolt,
                num: '01',
                title: 'Hook afirmativo',
                body: 'La primera frase afirma algo que el conductor siente pero no ha verbalizado. Crea identificaci&oacute;n inmediata. El scroll para aqu&iacute;.',
              },
              {
                icon: faLink,
                num: '02',
                title: 'Relieve',
                body: 'La historia que conecta el hook con el mensaje. Un momento, una situaci&oacute;n, una tensi&oacute;n real del mundo de los conductores.',
              },
              {
                icon: faLightbulb,
                num: '03',
                title: 'Aporte de valor',
                body: 'Consejos pr&aacute;cticos, datos curiosos, perspectivas &uacute;nicas sobre conducir. El contenido que el espectador quiere compartir.',
              },
              {
                icon: faBullhorn,
                num: '04',
                title: 'CTA',
                body: 'La llamada a la acci&oacute;n que cierra el ciclo. Seguir el canal, guardar el video, compartir con otro conductor. Simple y directa.',
              },
              {
                icon: faFilm,
                num: '05',
                title: 'Cinematograf&iacute;a de banco',
                body: 'Sin cara del creador &mdash; el mundo de la carretera como protagonista visual. La narraci&oacute;n hace el trabajo; las im&aacute;genes construyen la atm&oacute;sfera.',
              },
            ].map(({ icon, num, title, body }) => (
              <div
                key={num}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: PL }}
                  >
                    <FontAwesomeIcon icon={icon} style={{ color: P }} />
                  </div>
                  <span
                    className="text-[11px] font-black tracking-widest mt-3"
                    style={{ color: '#D1D5DB' }}
                  >
                    {num}
                  </span>
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
            Comduce, donde cada historia nos lleva m&aacute;s lejos.
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-10 text-base leading-relaxed">
            Un canal de contenido para los que saben que conducir es m&aacute;s que llegar
            a un destino.
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
