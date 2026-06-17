const METODOLOGIAS = [
  { short: 'Libertad Total', name: 'Doctrina de la Libertad Total', desc: '18 dimensiones de soberanía integral: Temporal · Geográfica · Creativa · De Expresión · Educativa y 13 más. La marca produce transformación, no entretenimiento.' },
  { short: 'Startup Corp.',  name: 'Startup Corporation',           desc: 'Velocidad de startup + solidez de corporación. Sin capital semilla externo. Construir sin pedir permiso ni inversión a terceros.' },
  { short: 'Anti-Unicornio', name: 'Startups SRM',                  desc: 'Un "Monstruo" = entidad rentable desde el día 1. Flujo de caja positivo inmediato. No buscar VC para sobrevivir.' },
  { short: 'Validación',     name: 'Matriz SPIC',                   desc: 'Servicio / Producto / Información / Comunicación. Si la idea no cabe en los 4 cuadrantes con claridad, no avanza.' },
  { short: 'Guiones',        name: 'SICGO',                         desc: 'Sistema Integral de Creación de Guiones Originales. 4 fases: Documentación → GGO → Vistas → Optimización. Hook en los primeros 5 segundos.' },
  { short: 'Holding final',  name: 'Nano Legacy',                   desc: 'El destino patrimonial: bienes raíces, patentes, bolsa. El contenido es el motor — el patrimonio es el fin.' },
]

const META_CRISIS = [
  'Pobreza y desigualdad económica estructural',
  'IA, automatización y desplazamiento laboral sin ética',
  'Educación obsoleta y falta de conocimiento crítico real',
  'Crisis existencial y pérdida de valores humanos fundamentales',
  'Corrupción sistémica y mal gobierno institucional',
]

export default function FilosofiaPage() {
  return (
    <div>

      {/* Hero — blanco */}
      <section className="bg-white px-8 pt-20 pb-28">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[11px] font-bold tracking-[.22em] uppercase text-[#ABABAB] mb-12">
            Nano · Filosofía de marca
          </p>
          <h1 className="text-[72px] sm:text-[100px] font-black tracking-[-2.5px] leading-[0.92] text-[#0A0A0A] mb-10">
            Filosofía.
          </h1>
          <p className="text-[20px] font-light text-[#787878] leading-[1.5] max-w-[560px]">
            Un sistema de valores, metodologías y filtros que guían cada decisión de contenido, negocio y marca. Nada es improvisado.
          </p>
        </div>
      </section>

      {/* ELIT3 — negro */}
      <section className="bg-[#0A0A0A] px-8 py-28">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[11px] font-bold tracking-[.22em] uppercase text-white/30 mb-6">
            Filtro de calidad · Todo el contenido pasa esto sin excepción
          </p>
          <h2 className="text-[48px] sm:text-[72px] font-black tracking-[-2px] leading-[1] text-white mb-16">
            ELIT3
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10">
            {[
              { code: 'E1', name: 'Evolución',      desc: 'Kaizen perpetuo. El creador y el contenido mejoran de forma continua. El proceso importa tanto como el resultado.' },
              { code: 'E2', name: 'Excelencia',     desc: 'Rechazo total a la mediocridad. Maestría en la ejecución. Si no supera el estándar propio, no se publica.' },
              { code: 'E3', name: 'Extraordinario', desc: 'No competir en mercados saturados. Crear categorías propias. Ser el primero en algo específico, no el mejor en algo genérico.' },
            ].map(e => (
              <div key={e.code} className="bg-[#0A0A0A] p-10">
                <div className="text-[10px] font-black tracking-[.2em] uppercase text-white/25 mb-8">{e.code}</div>
                <div className="text-[22px] font-bold text-white mb-5">{e.name}</div>
                <p className="text-[14px] text-white/50 leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Identidad dual — blanco */}
      <section className="bg-white px-8 py-28">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[11px] font-bold tracking-[.22em] uppercase text-[#ABABAB] mb-6">
            Arquitectura de identidad
          </p>
          <h2 className="text-[40px] sm:text-[52px] font-black tracking-[-1.2px] leading-[1.05] text-[#0A0A0A] mb-14">
            Dualidad<br />Nano / Orlando.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#0A0A0A] rounded-[20px] p-10">
              <div className="text-[10px] font-bold tracking-[.2em] uppercase text-white/30 mb-6">Alter ego creativo</div>
              <div className="text-[32px] font-black text-white mb-2 tracking-tight">Nano</div>
              <div className="text-[12px] text-white/35 mb-8">@NanoOlivier</div>
              <div className="flex flex-col gap-3">
                {['Inventor. Explorador. Vulnerable.', 'El fracaso documentado es activo de marca.', 'Audiencia: emprendedores 20–38 años.', 'Tono: natural, directo, con opinión propia.'].map(t => (
                  <p key={t} className="text-[14px] text-white/60 leading-snug">{t}</p>
                ))}
              </div>
            </div>
            <div className="bg-[#F5F5F5] rounded-[20px] p-10 border border-[#E8E8E8]">
              <div className="text-[10px] font-bold tracking-[.2em] uppercase text-[#ABABAB] mb-6">Identidad corporativa</div>
              <div className="text-[32px] font-black text-[#0A0A0A] mb-2 tracking-tight leading-tight">Orlando<br />Ramírez Olivier</div>
              <div className="text-[12px] text-[#ABABAB] mb-8">@orlandoramirezolivier</div>
              <div className="flex flex-col gap-3">
                {['Estratega. Preciso. Capital e inversión.', 'Busca alianzas de alto nivel y Venture Capital.', 'Audiencia: inversores, socios B2B, fondos.', 'Tono: formal, datos, sin vulnerabilidad.'].map(t => (
                  <p key={t} className="text-[14px] text-[#787878] leading-snug">{t}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 bg-[#F0F0F0] rounded-[12px] p-5">
            <p className="text-[13px] text-[#787878]">
              <strong className="text-[#0A0A0A]">Regla de separación estricta:</strong> Nunca mezclar el tono Nano con el tono Orlando en el mismo canal o pieza de contenido.
            </p>
          </div>
        </div>
      </section>

      {/* Metodologías — negro */}
      <section className="bg-[#0A0A0A] px-8 py-28">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[11px] font-bold tracking-[.22em] uppercase text-white/30 mb-6">
            Metodologías propias
          </p>
          <h2 className="text-[40px] sm:text-[52px] font-black tracking-[-1.2px] leading-[1.05] text-white mb-14">
            6 sistemas.<br />
            <span className="text-white/25 font-light">Todos desarrollados desde cero.</span>
          </h2>
          <div className="flex flex-col divide-y divide-white/10">
            {METODOLOGIAS.map((m, i) => (
              <div key={m.name} className="flex flex-col sm:flex-row gap-6 py-8">
                <div className="sm:w-[220px] flex-shrink-0">
                  <div className="text-[10px] font-black text-white/20 tracking-wider uppercase mb-1">{String(i + 1).padStart(2, '0')}</div>
                  <div className="text-[11px] font-bold tracking-[.1em] uppercase text-white/40">{m.short}</div>
                </div>
                <div>
                  <div className="text-[17px] font-bold text-white mb-2">{m.name}</div>
                  <p className="text-[14px] text-white/50 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Meta-crisis — blanco */}
      <section className="bg-white px-8 py-28">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[11px] font-bold tracking-[.22em] uppercase text-[#ABABAB] mb-6">
            Propósito de la marca
          </p>
          <h2 className="text-[40px] sm:text-[52px] font-black tracking-[-1.2px] leading-[1.05] text-[#0A0A0A] mb-14">
            5 problemas que<br />Nano aborda.
          </h2>
          <div className="flex flex-col divide-y divide-[#F0F0F0]">
            {META_CRISIS.map((c, i) => (
              <div key={c} className="flex items-start gap-8 py-7">
                <span className="text-[11px] font-black text-[#D8D8D8] w-5 flex-shrink-0 pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-[18px] sm:text-[22px] font-light text-[#3C3C3C] leading-[1.3]">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voz — negro */}
      <section className="bg-[#0A0A0A] px-8 py-28">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[11px] font-bold tracking-[.22em] uppercase text-white/30 mb-6">
            Voz del creador
          </p>
          <h2 className="text-[40px] sm:text-[52px] font-black tracking-[-1.2px] leading-[1.05] text-white mb-14">
            Siempre · Nunca.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <p className="text-[11px] font-bold tracking-[.16em] uppercase text-white/30 mb-6">Siempre sonar</p>
              <div className="flex flex-col gap-4">
                {['Natural — como hablas en persona, no en teleprompter', 'Con opinión propia fundamentada en datos reales', 'Con energía fluida — no actuada, no forzada', 'Vulnerable cuando aplica — el fracaso es activo de marca', 'Directo al punto — hook en los primeros 5 segundos'].map(t => (
                  <div key={t} className="flex items-start gap-4">
                    <span className="text-white/30 text-[11px] font-black mt-0.5 flex-shrink-0">✓</span>
                    <p className="text-[14px] text-white/60 leading-snug">{t}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[.16em] uppercase text-white/30 mb-6">Nunca sonar</p>
              <div className="flex flex-col gap-4">
                {['Corporativo o distante (ese modo es solo para @orlandoramirezolivier)', 'Influencer genérico con frases vacías de motivación', 'Motivación hueca sin sustancia real detrás', 'Exagerado o clickbait sin contenido real', 'Vendedor de humo — si hay riesgo, se dice explícitamente'].map(t => (
                  <div key={t} className="flex items-start gap-4">
                    <span className="text-white/30 text-[11px] font-black mt-0.5 flex-shrink-0">✗</span>
                    <p className="text-[14px] text-white/40 leading-snug">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
