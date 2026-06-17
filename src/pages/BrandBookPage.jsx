import { useState, useMemo } from 'react'
import AtomIcon from '../components/AtomIcon'

// ─── STATUS ──────────────────────────────────────────────────────
const ST = {
  done:     { label: 'Completo',    dot: '#22C55E', pill: 'bg-green-50 text-green-700' },
  progress: { label: 'En progreso', dot: '#F59E0B', pill: 'bg-amber-50 text-amber-700' },
  pending:  { label: 'Pendiente',   dot: '#D1D5DB', pill: 'bg-gray-100 text-gray-500' },
}

function StatusDot({ s }) {
  return <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 inline-block" style={{ background: ST[s]?.dot || ST.pending.dot }} />
}

// ─── SHARED UI PRIMITIVES ─────────────────────────────────────────
const Label = ({ children }) => (
  <span className="block text-[10px] font-bold tracking-[.13em] uppercase text-gray-400 mb-3">{children}</span>
)

const Card = ({ children, className = '', col2 = false }) => (
  <div className={`bg-white rounded-2xl border border-gray-100 p-5 shadow-[0_1px_3px_rgba(0,0,0,.05)] ${col2 ? 'col-span-2' : ''} ${className}`}>
    {children}
  </div>
)

const Row = ({ label, value, mono = false }) => (
  <div className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0 gap-4">
    <span className="text-[12px] text-gray-500 flex-shrink-0">{label}</span>
    <span className={`text-[12px] font-medium text-gray-900 text-right ${mono ? 'font-mono' : ''}`}>{value}</span>
  </div>
)

const Check = ({ ok = false, children }) => (
  <div className="flex items-start gap-2 py-1.5">
    <span className={`text-[10px] mt-0.5 flex-shrink-0 ${ok ? 'text-green-500' : 'text-gray-300'}`}>{ok ? '✓' : '○'}</span>
    <span className={`text-[12px] leading-snug ${ok ? 'text-gray-800' : 'text-gray-400'}`}>{children}</span>
  </div>
)

const BigStat = ({ value, label, sub, color = '#111827' }) => (
  <Card>
    <div className="text-[36px] font-black leading-none mb-1" style={{ color }}>{value}</div>
    <div className="text-[13px] font-semibold text-gray-700">{label}</div>
    {sub && <div className="text-[11px] text-gray-400 mt-0.5">{sub}</div>}
  </Card>
)

const InfoRow = ({ items }) => (
  <div className={`grid gap-3`} style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}>
    {items.map(({ label, value }) => (
      <div key={label} className="bg-gray-50 rounded-xl p-4">
        <div className="text-[11px] text-gray-400 mb-0.5">{label}</div>
        <div className="text-[13px] font-bold text-gray-900">{value}</div>
      </div>
    ))}
  </div>
)

// ─── SECTION COMPONENTS ───────────────────────────────────────────

// S01.1 — Inventario de activos
function S0101() {
  const items = [
    { cat: 'Identidad visual',  asset: 'Logo átomo SVG oficial',              ok: true,  note: 'BrandBook v2.3' },
    { cat: 'Identidad visual',  asset: 'Paleta monocromo (tokens CSS)',        ok: true,  note: 'Definida y documentada' },
    { cat: 'Identidad visual',  asset: 'Tipografía oficial Open Sans',         ok: true,  note: 'Google Fonts · variable' },
    { cat: 'Identidad visual',  asset: 'Lockup logo + wordmark',               ok: true,  note: 'Positivo y negativo' },
    { cat: 'Identidad visual',  asset: 'Guía de usos incorrectos',             ok: true,  note: 'Documentado en S04' },
    { cat: 'Identidad verbal',  asset: 'Nombre oficial confirmado',            ok: true,  note: '"Nano" · mayúscula inicial' },
    { cat: 'Identidad verbal',  asset: 'Tagline definitivo',                   ok: false, note: 'Pendiente de curación' },
    { cat: 'Identidad verbal',  asset: 'Tono de voz documentado',              ok: true,  note: 'Extraído del RAG · Jun 2026' },
    { cat: 'Identidad verbal',  asset: '14 muletillas reales',                 ok: true,  note: '10.685 chunks · colección orlando' },
    { cat: 'Identidad verbal',  asset: 'Elevator pitch (<30 seg)',             ok: false, note: 'Pendiente de redactar' },
    { cat: 'Presencia digital', asset: 'Web orlandoramirez.com',               ok: false, note: 'Construida · falta deploy Hostinger' },
    { cat: 'Presencia digital', asset: 'Canal @NanoOlivier (matriz)',          ok: false, note: '0 subs · 0 videos publicados' },
    { cat: 'Presencia digital', asset: 'Canal @nanoenvideos',                  ok: true,  note: '4 subs · activo' },
    { cat: 'Presencia digital', asset: 'Canal @orlandoramirezolivier',         ok: true,  note: '31 subs · activo' },
    { cat: 'Contenido',         asset: 'Primer video canal matriz publicado',  ok: false, note: '5 actos grabados · falta ensamblar' },
    { cat: 'Contenido',         asset: 'Nano Clips (automatización)',          ok: false, note: 'Script listo · falta ejecutar' },
    { cat: 'Infraestructura',   asset: 'RAG Nano Memory operativo',            ok: true,  note: '10.685 chunks · localhost:5050' },
    { cat: 'Documentos',        asset: 'BrandBook System HTML v2.3',           ok: true,  note: 'Fuente única de verdad oficial' },
    { cat: 'Documentos',        asset: 'brandbook_personal.md',                ok: true,  note: 'Extracto para agentes IA' },
  ]
  const cats = [...new Set(items.map(i => i.cat))]
  const done = items.filter(i => i.ok).length

  return (
    <div className="grid grid-cols-2 gap-3">
      <BigStat value={done} label="Activos confirmados" sub={`de ${items.length} revisados`} color="#22C55E" />
      <BigStat value={`${Math.round(done / items.length * 100)}%`} label="Completitud general" sub="marca raíz Nano" color="#2563EB" />
      {cats.map(cat => (
        <Card key={cat} col2>
          <Label>{cat}</Label>
          {items.filter(i => i.cat === cat).map(item => (
            <div key={item.asset} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
              <span className={`text-[11px] w-3 flex-shrink-0 ${item.ok ? 'text-green-500' : 'text-gray-300'}`}>{item.ok ? '✓' : '○'}</span>
              <span className={`text-[12px] flex-1 ${item.ok ? 'text-gray-900' : 'text-gray-400'}`}>{item.asset}</span>
              <span className="text-[10px] text-gray-400 text-right max-w-[180px] leading-snug">{item.note}</span>
            </div>
          ))}
        </Card>
      ))}
    </div>
  )
}

// S02.1 — Público objetivo
function S0201() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card col2>
        <Label>Perfil del público objetivo</Label>
        <InfoRow items={[
          { label: 'Edad', value: '20–38 años' },
          { label: 'Perfil', value: 'Emprendedor autodidacta' },
          { label: 'Nivel', value: 'Intermedio–Avanzado' },
          { label: 'Plataforma principal', value: 'YouTube · Español' },
        ]} />
      </Card>
      <Card>
        <Label>Intereses primarios</Label>
        {['Inteligencia Artificial y automatización', 'Libertad financiera y soberanía', 'Emprendimiento sin capital externo', 'Productividad y sistemas propios', 'Contenido auténtico, no motivacional'].map(i => (
          <div key={i} className="flex items-center gap-2 py-2 border-b border-gray-50 last:border-0">
            <span className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
            <span className="text-[12px] text-gray-700">{i}</span>
          </div>
        ))}
      </Card>
      <Card>
        <Label>Dolores principales del público</Label>
        {['No tienen capital para empezar', 'Desconfían de los "gurus"', 'Quieren construir, no solo aprender', 'Necesitan ver el proceso real', 'Buscan modelos replicables, no teoría'].map(i => (
          <div key={i} className="flex items-center gap-2 py-2 border-b border-gray-50 last:border-0">
            <span className="text-[10px] text-red-400 flex-shrink-0">✗</span>
            <span className="text-[12px] text-gray-700">{i}</span>
          </div>
        ))}
      </Card>
      <Card col2>
        <Label>Buyer persona principal</Label>
        <div className="flex items-start gap-5 mt-2">
          <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-2xl flex-shrink-0">👤</div>
          <div className="flex-1">
            <div className="text-[16px] font-bold text-gray-900">Carlos · 27 años · México</div>
            <div className="text-[12px] text-gray-500 mt-0.5 mb-3">Trabaja en corporativo. Quiere salir. Sigue canales de emprendimiento pero no confía en nadie que venda un curso.</div>
            <div className="grid grid-cols-3 gap-2 text-[11px]">
              {[['Frustraciones', 'No sabe cómo empezar sin dinero. Todo parece trampa.'], ['Deseos', 'Ver a alguien construir en tiempo real, con honestidad.'], ['Comportamiento', 'Ve YouTube 1–2h/día. Pausa, toma notas. Implementa si confía.']].map(([t, d]) => (
                <div key={t} className="bg-gray-50 rounded-lg p-3">
                  <div className="font-bold text-gray-700 mb-1">{t}</div>
                  <div className="text-gray-500 leading-snug">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

// S02.2 — Propuesta de valor
function S0202() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card col2>
        <Label>Propuesta de valor única (PVU)</Label>
        <blockquote className="mt-2 border-l-4 border-gray-900 pl-5 py-1">
          <p className="text-[20px] font-bold text-gray-900 leading-snug">"Construir un ecosistema real desde cero, sin pedir dinero prestado, sin mentir sobre los resultados."</p>
        </blockquote>
      </Card>
      <Card>
        <Label>Por qué funciona</Label>
        {[['Específico', 'No "gana dinero" — construye un ecosistema de 16 canales'], ['Verificable', 'El proceso se documenta en vivo, en tiempo real'], ['Diferenciador', 'Incluye fracasos. Nadie más hace eso con esa honestidad'], ['Accionable', 'Da un modelo que el espectador puede replicar']].map(([k, v]) => (
          <div key={k} className="py-2 border-b border-gray-50 last:border-0">
            <span className="text-[11px] font-bold text-gray-900">{k}: </span>
            <span className="text-[11px] text-gray-500">{v}</span>
          </div>
        ))}
      </Card>
      <Card>
        <Label>Contra quién nos diferenciamos</Label>
        {[['Gurus de cursos', 'Ellos venden el destino. Nano muestra el camino.'], ['Canales motivacionales', 'Ellos inspiran. Nano documenta con datos reales.'], ['Emprendedores VC-backed', 'Ellos tienen capital. Nano construye sin él.']].map(([c, d]) => (
          <div key={c} className="py-2.5 border-b border-gray-50 last:border-0">
            <div className="text-[11px] font-bold text-gray-700">{c}</div>
            <div className="text-[11px] text-gray-500 mt-0.5">{d}</div>
          </div>
        ))}
      </Card>
    </div>
  )
}

// S02.3 — Posicionamiento
function S0203() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card col2>
        <Label>Declaración de posicionamiento</Label>
        <p className="mt-2 text-[15px] text-gray-700 leading-relaxed">
          <strong className="text-gray-900">Para</strong> emprendedores autodidactas de 20–38 años que quieren construir sin capital externo, <strong className="text-gray-900">Nano</strong> es el único ecosistema de contenido que <strong className="text-gray-900">documenta el proceso real</strong> — incluyendo los fracasos — <strong className="text-gray-900">porque</strong> el fracaso honesto genera más confianza que cualquier caso de éxito fabricado.
        </p>
      </Card>
      <Card>
        <Label>Categoría que creamos</Label>
        <div className="mt-2 bg-gray-900 rounded-xl p-4 mb-3">
          <div className="text-[11px] text-white/40 mb-1 font-mono">categoría_propia</div>
          <div className="text-[16px] font-bold text-white">"Documental de emprendimiento en tiempo real"</div>
        </div>
        <p className="text-[11px] text-gray-500 leading-relaxed">No es un tutorial, no es motivación, no es un vlog de lifestyle. Es documentar la construcción de un ecosistema real, con todos los datos visibles.</p>
      </Card>
      <Card>
        <Label>Ejes de diferenciación</Label>
        {[['Autenticidad radical', 'El proceso real, fracasos incluidos. Sin editar la realidad.'], ['Sin capital externo', 'Todo construido desde €0. Modelo replicable.'], ['Ecosistema visible', '16 canales con arquitectura pública y transparente.'], ['IA como herramienta', 'No como tema de guru, sino como herramienta de construcción.']].map(([e, d]) => (
          <div key={e} className="py-2.5 border-b border-gray-50 last:border-0">
            <div className="text-[12px] font-bold text-gray-900">{e}</div>
            <div className="text-[11px] text-gray-500 mt-0.5">{d}</div>
          </div>
        ))}
      </Card>
    </div>
  )
}

// S02.4 — Valores y personalidad
function S0204() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card>
        <Label>5 Valores nucleares</Label>
        {[
          ['Autenticidad radical', 'El proceso real, fracasos incluidos. Sin filtro de relaciones públicas.'],
          ['Libertad como destino', '18 dimensiones de soberanía integral: temporal, geográfica, creativa...'],
          ['Acción sin permiso', 'Construir sin esperar capital, validación ni autorización externa.'],
          ['Excelencia progresiva', 'Kaizen perpetuo. El estándar propio mejora cada iteración.'],
          ['Propósito patrimonial', 'El contenido como motor hacia el Nano Legacy (bienes, patentes, bolsa).'],
        ].map(([v, d], i) => (
          <div key={v} className="flex items-start gap-3 py-3 border-b border-gray-50 last:border-0">
            <span className="text-[10px] font-black text-gray-300 mt-1 w-4 flex-shrink-0">{String(i+1).padStart(2,'0')}</span>
            <div>
              <div className="text-[12px] font-bold text-gray-900">{v}</div>
              <div className="text-[11px] text-gray-500 mt-0.5 leading-snug">{d}</div>
            </div>
          </div>
        ))}
      </Card>
      <Card>
        <Label>Personalidad de marca · 5 arquetipos</Label>
        {[
          ['Explorador', 'Siempre en modo beta. Experimenta antes de teorizar.'],
          ['Vulnerable', 'Comparte el proceso sin filtros. La debilidad es fuerza.'],
          ['Pragmático', 'Soluciones concretas. Cero teoría sin aplicación real.'],
          ['Provocador', 'Desafía el statu quo del emprendimiento clásico.'],
          ['Constructor', 'Hace más de lo que habla. Los resultados hablan primero.'],
        ].map(([v, d]) => (
          <div key={v} className="flex items-start gap-3 py-3 border-b border-gray-50 last:border-0">
            <span className="text-[10px] text-gray-300 mt-1.5 flex-shrink-0">◆</span>
            <div>
              <div className="text-[12px] font-bold text-gray-900">{v}</div>
              <div className="text-[11px] text-gray-500 mt-0.5 leading-snug">{d}</div>
            </div>
          </div>
        ))}
      </Card>
      <Card col2>
        <Label>Arquitectura dual de identidad · regla de separación estricta</Label>
        <div className="grid grid-cols-2 gap-3 mt-2">
          <div className="bg-gray-900 rounded-xl p-5">
            <div className="text-[9px] font-bold tracking-[.12em] uppercase text-white/30 mb-2">Alter ego creativo</div>
            <div className="text-[18px] font-black text-white mb-1">Nano</div>
            <div className="text-[10px] text-white/30 mb-3">@NanoOlivier</div>
            {['Inventor. Explorador. Vulnerable.', 'El fracaso documentado es activo.', 'Audiencia: 20–38 años.', 'Tono: natural, directo, con opinión.'].map(t => (
              <p key={t} className="text-[11px] text-white/50 mb-1">{t}</p>
            ))}
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <div className="text-[9px] font-bold tracking-[.12em] uppercase text-gray-400 mb-2">Identidad corporativa</div>
            <div className="text-[18px] font-black text-gray-900 leading-tight mb-1">Orlando<br/>Ramírez Olivier</div>
            <div className="text-[10px] text-gray-400 mb-3">@orlandoramirezolivier</div>
            {['Estratega. Capital e inversión.', 'Busca alianzas de alto nivel.', 'Audiencia: inversores, socios B2B.', 'Tono: formal, datos, sin vulnerabilidad.'].map(t => (
              <p key={t} className="text-[11px] text-gray-500 mb-1">{t}</p>
            ))}
          </div>
        </div>
        <div className="mt-3 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
          <span className="text-[11px] font-bold text-red-700">Regla: </span>
          <span className="text-[11px] text-red-600">Nunca mezclar el tono Nano con el tono Orlando en el mismo canal o pieza.</span>
        </div>
      </Card>
    </div>
  )
}

// S02.5 — Propósito de marca
function S0205() {
  const metacrisis = [
    'Pobreza y desigualdad económica estructural',
    'IA, automatización y desplazamiento laboral sin ética',
    'Educación obsoleta y falta de conocimiento crítico real',
    'Crisis existencial y pérdida de valores humanos fundamentales',
    'Corrupción sistémica y mal gobierno institucional',
  ]
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card col2>
        <Label>Propósito de largo plazo</Label>
        <p className="mt-2 text-[18px] font-bold text-gray-900 leading-snug max-w-[600px]">
          Demostrar que se puede construir un ecosistema de negocios y contenido desde lo mínimo, sin capital externo y sin mentir al camino.
        </p>
      </Card>
      <Card>
        <Label>5 Meta-crisis que Nano aborda</Label>
        {metacrisis.map((c, i) => (
          <div key={c} className="flex items-start gap-3 py-3 border-b border-gray-50 last:border-0">
            <span className="text-[10px] font-black text-gray-300 mt-0.5 flex-shrink-0">{String(i+1).padStart(2,'0')}</span>
            <p className="text-[12px] text-gray-700 leading-snug">{c}</p>
          </div>
        ))}
      </Card>
      <Card>
        <Label>Nano Legacy · el destino patrimonial</Label>
        <p className="mt-2 text-[13px] text-gray-700 leading-relaxed mb-3">El contenido es el motor. El patrimonio es el fin. Cada video publicado acerca a:</p>
        {[['Bienes raíces', 'Adquirir activos físicos con cash flow del contenido'], ['Patentes y PI', 'Proteger metodologías propias (SICGO, SPIC, ELIT3)'], ['Cartera bursátil', 'Inversión en ETFs y acciones con dividendos'], ['Nano Legacy Fund', 'Holding familiar multi-generacional']].map(([t, d]) => (
          <div key={t} className="flex items-start gap-2 py-2 border-b border-gray-50 last:border-0">
            <span className="text-[10px] text-gray-300 mt-1">→</span>
            <div>
              <span className="text-[12px] font-bold text-gray-900">{t}: </span>
              <span className="text-[12px] text-gray-500">{d}</span>
            </div>
          </div>
        ))}
      </Card>
    </div>
  )
}

// S03.1 — Nombre oficial
function S0301() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card>
        <Label>Datos del nombre</Label>
        <Row label="Nombre de marca" value="Nano" />
        <Row label="Escritura correcta" value='"Nano" — N mayúscula siempre' />
        <Row label="Nombre legal" value="Orlando Ramírez Olivier" />
        <Row label="Origen" value="Apodo de infancia · dado por su abuela" />
        <Row label="Filosofía" value="Desde lo más mínimo se construye todo" />
        <Row label="Idioma del uso" value="Español principal · inglés secundario" />
      </Card>
      <Card>
        <Label>Escrituras incorrectas · prohibidas</Label>
        {['"nano"', '"NANO"', '"Nano."', '"NanoOlivier" (solo en handle)', '"Nanoo"', '"el Nano"'].map(e => (
          <div key={e} className="flex items-center gap-2 py-2 border-b border-gray-50 last:border-0">
            <span className="text-red-400 text-[10px]">✗</span>
            <span className="text-[13px] font-mono text-gray-600">{e}</span>
          </div>
        ))}
      </Card>
    </div>
  )
}

// S03.2 — Tagline
function S0302() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card col2>
        <Label>Taglines en evaluación</Label>
        <div className="flex flex-col gap-3 mt-2">
          {[
            { tag: '"Desde lo mínimo, construyo todo."', status: 'Propuesta principal', score: 92 },
            { tag: '"Construido sin permiso."', status: 'Alternativa corta', score: 85 },
            { tag: '"El proceso real. Sin editar."', status: 'Enfoque honestidad', score: 78 },
            { tag: '"16 canales. Una marca. Desde cero."', status: 'Enfoque ecosistema', score: 71 },
          ].map(({ tag, status, score }) => (
            <div key={tag} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="flex-1">
                <div className="text-[14px] font-bold text-gray-900">{tag}</div>
                <div className="text-[11px] text-gray-500 mt-0.5">{status}</div>
              </div>
              <div className="text-right">
                <div className="text-[16px] font-black text-gray-900">{score}</div>
                <div className="text-[9px] text-gray-400">/ 100</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
          <span className="text-[11px] font-bold text-amber-700">Estado: </span>
          <span className="text-[11px] text-amber-600">Pendiente de confirmación final por Orlando.</span>
        </div>
      </Card>
    </div>
  )
}

// S03.3 — Tono de voz
function S0303() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card col2>
        <Label>6 atributos del tono de voz · extraídos del RAG</Label>
        <div className="grid grid-cols-3 gap-3 mt-2">
          {[
            ['Conversacional', 'Como habla con un amigo. Nunca como presentación corporativa.'],
            ['Honesto sin filtros', 'Reconoce cuando no sabe, cuando algo es difícil. La vulnerabilidad es intencional.'],
            ['Pragmático', 'Siempre busca la solución concreta. No se queda en el problema ni en la teoría.'],
            ['Exploratorio', 'Pregunta, cuestiona, no da nada por sentado. Pensamiento en proceso.'],
            ['Auto-consciente', 'Reconoce sus propios procesos mentales mientras habla. Lo verbaliza.'],
            ['Orientado a acción', '"Acción sin sobrepensamiento." Anti-parálisis. Hace primero, piensa después.'],
          ].map(([t, d]) => (
            <div key={t} className="bg-gray-50 rounded-xl p-4">
              <div className="text-[12px] font-bold text-gray-900 mb-1">{t}</div>
              <p className="text-[11px] text-gray-500 leading-snug">{d}</p>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <Label>Siempre sonar</Label>
        {['Natural — como hablas en persona, no en teleprompter', 'Con opinión propia fundamentada en datos reales', 'Con energía fluida — no actuada, no forzada', 'Vulnerable cuando aplica — el fracaso es activo', 'Directo al punto — hook en los primeros 5 seg'].map(t => <Check key={t} ok>{t}</Check>)}
      </Card>
      <Card>
        <Label>Nunca sonar</Label>
        {['Corporativo o distante', 'Influencer genérico con frases vacías', 'Motivación hueca sin sustancia real', 'Exagerado o clickbait sin fondo', 'Vendedor de humo — si hay riesgo, se dice'].map(t => <Check key={t}>{t}</Check>)}
      </Card>
    </div>
  )
}

// S03.4 — Muletillas
function S0304() {
  const muletillas = [
    ['O sea', 'Abre casi todas las frases al explicar algo'],
    ['¿Verdad?', 'Al final de una explicación — busca validación'],
    ['Pues', 'Énfasis, cierre de idea o pausa reflexiva'],
    ['Bueno', 'Al concluir o antes de cambiar de tema'],
    ['No sé si me explico', 'Clausura cuando siente que no fue claro'],
    ['¿Cómo se llama?', 'Cuando busca la palabra exacta. Pensamiento en voz alta.'],
    ['Digo...', 'Inicio de pensamiento en voz alta. Reflexivo.'],
    ['¿Sabes?', 'Para conectar con la audiencia / interlocutor'],
    ['Vamos al lío', 'Apertura directa cuando va al grano'],
    ['Te doy contexto', 'Al introducir antecedentes necesarios'],
    ['Me salgo de contexto', 'Transición a otro tema. A veces lo convierte en CTA.'],
    ['Bendito/a', 'Frustración cariñosa. Regional venezolano.'],
    ['Y todo eso, pues', 'Cierre informal con pausa reflexiva'],
    ['Siguiendo adelante, pues', 'Cierre de sección o outro de video'],
  ]
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card col2>
        <Label>Muletillas reales · fuente RAG colección "orlando" · 10.685 chunks · Jun 2026</Label>
        <p className="text-[11px] text-gray-400 mb-4">Extraídas sin inventar. Si no estaba en el RAG, no está aquí.</p>
        <div className="grid grid-cols-2 gap-x-8">
          {muletillas.map(([expr, uso]) => (
            <div key={expr} className="flex items-start gap-3 py-2.5 border-b border-gray-50 last:border-0">
              <span className="text-[13px] font-bold text-blue-600 min-w-[140px] flex-shrink-0">"{expr}"</span>
              <span className="text-[11px] text-gray-500 leading-snug">{uso}</span>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <Label>Frases de apertura de video</Label>
        {['"En este video vas a ver cómo..."', '"¿Sabes cuál es...?" (pregunta que genera curiosidad)', '"Ay, de verdad que no sé qué hacer conmigo..."', '"Así que sin perder tiempo..."', '"Te doy contexto..."', '"Bueno, arrancó ayer, pero hoy es cuando grabamos..."'].map(f => (
          <div key={f} className="bg-gray-50 rounded-lg px-3 py-2 text-[12px] text-gray-700 italic mb-1">{f}</div>
        ))}
      </Card>
      <Card>
        <Label>Frases de cierre típicas</Label>
        {['"Y así es cómo logré..."', '"Siguiendo adelante, pues."', '"Y todo eso, pues."', '"Si llegaste hasta aquí, ya sabes lo que tienes que hacer."'].map(f => (
          <div key={f} className="bg-gray-50 rounded-lg px-3 py-2 text-[12px] text-gray-700 italic mb-1">{f}</div>
        ))}
      </Card>
    </div>
  )
}

// S03.5 — Elevator pitch
function S0305() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card col2>
        <Label>Elevator pitch · 30 segundos</Label>
        <blockquote className="mt-2 border-l-4 border-gray-900 pl-5 py-2">
          <p className="text-[16px] font-medium text-gray-800 leading-relaxed">"Soy Nano — creo un ecosistema de 16 canales sobre emprendimiento, IA y libertad. Sin inversores. Documento el proceso real, fracasos incluidos. Si yo puedo construirlo desde cero, tú también puedes verlo y replicarlo."</p>
        </blockquote>
      </Card>
      <Card>
        <Label>Bio corta · redes sociales (130 caracteres)</Label>
        <div className="mt-2 bg-gray-50 rounded-xl p-4 text-[14px] font-semibold text-gray-900">
          "Inventor, emprendedor y creador de sistemas. Construyo ecosistemas de negocios desde cero."
        </div>
        <div className="text-[10px] text-gray-400 mt-2">92 caracteres · apto para Twitter/X, Instagram, YouTube</div>
      </Card>
      <Card>
        <Label>Bio larga · LinkedIn / About</Label>
        <p className="mt-2 text-[12px] text-gray-700 leading-relaxed">
          Orlando "Nano" Ramírez Olivier es creador de contenido, emprendedor y constructor de ecosistemas. Desde 2024 documenta en tiempo real la construcción de un holding de 16 canales de YouTube sin capital externo. Fundador de Cimoves y Business IA, gestiona el Ecosistema Nano desde España. Su filosofía: construir sin permiso, documentar el proceso real —fracasos incluidos— y demostrar que desde lo mínimo se puede construir todo.
        </p>
      </Card>
    </div>
  )
}

// S04.1 — Símbolo principal
function S0401() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[
        { bg: '#0A0A0A', fill: 'white',   label: 'Símbolo · Positivo', sub: 'Sobre negro · Intros · Fondos oscuros' },
        { bg: '#FFFFFF',  fill: '#0A0A0A', label: 'Símbolo · Negativo', sub: 'Sobre blanco · Documentos · Web', border: true },
        { bg: '#0A0A0A', fill: 'white',   label: 'Lockup · Positivo', sub: 'Cabeceras · Miniaturas · Portadas', lockup: true },
        { bg: '#FFFFFF',  fill: '#0A0A0A', label: 'Lockup · Negativo', sub: 'Documentos · Firmas · Web', border: true, lockup: true },
      ].map(({ bg, fill, label, sub, border, lockup }) => (
        <Card key={label}>
          <Label>{label}</Label>
          <div className={`mt-2 h-[130px] rounded-xl flex items-center justify-center gap-3 ${border ? 'border border-gray-200' : ''}`} style={{ background: bg }}>
            <AtomIcon fill={fill} size={lockup ? 42 : 68} />
            {lockup && <span className="text-[24px] font-black tracking-tight" style={{ color: fill }}>Nano</span>}
          </div>
          <div className="text-[11px] text-gray-400 mt-2">{sub}</div>
        </Card>
      ))}
      <Card col2>
        <Label>Especificaciones técnicas del símbolo</Label>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <Row label="Tipo" value="Átomo SVG · 3 órbitas + núcleo" />
            <Row label="Formato entrega" value="SVG + PNG 400×400px" />
            <Row label="Área de respeto" value="= altura del símbolo × 1" />
            <Row label="Tamaño mínimo" value="16px · no escalar por debajo" />
          </div>
          <div>
            <Check ok>Solo sobre negro (#0A0A0A) o blanco (#FFFFFF)</Check>
            <Check ok>Escalar siempre proporcionalmente</Check>
            <Check>Sobre fondos de color</Check>
            <Check>Sombras, bordes o efectos visuales</Check>
            <Check>Deformar o estirar el átomo</Check>
          </div>
        </div>
      </Card>
    </div>
  )
}

// S04.2 — Sistema de sub-marcas
function S0402() {
  const brands = [
    { name: 'Nano',        hex: '#0A0A0A', status: 'done' },
    { name: 'Videos',      hex: '#1C1C1C', status: 'done' },
    { name: 'Business',    hex: '#2563EB', status: 'progress' },
    { name: 'Creator',     hex: '#7C3AED', status: 'pending' },
    { name: 'Discover',    hex: '#D97706', status: 'pending' },
    { name: 'Reacts',      hex: '#C026D3', status: 'pending' },
    { name: 'Fitness',     hex: '#EA580C', status: 'pending' },
    { name: 'Nutrition',   hex: '#16A34A', status: 'pending' },
    { name: 'Explorer',    hex: '#A16207', status: 'pending' },
    { name: 'Didactic',    hex: '#059669', status: 'pending' },
    { name: 'Altruistic',  hex: '#0891B2', status: 'pending' },
    { name: 'Legacy',      hex: '#6B7280', status: 'pending' },
    { name: 'Blueprint',   hex: '#ABABAB', status: 'pending' },
    { name: 'Reading',     hex: '#ABABAB', status: 'pending' },
    { name: 'Audios',      hex: '#ABABAB', status: 'pending' },
    { name: 'Nano AI',     hex: '#ABABAB', status: 'pending' },
  ]
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card col2>
        <Label>Sistema de color por sub-marca · el átomo adapta su color por división</Label>
        <div className="grid grid-cols-8 gap-3 mt-3">
          {brands.map(b => (
            <div key={b.name} className={`text-center ${b.status === 'pending' ? 'opacity-40' : ''}`}>
              <div className="h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center mb-1.5">
                <AtomIcon fill={b.hex} size={28} />
              </div>
              <div className="text-[9px] font-bold text-gray-700 leading-tight">{b.name}</div>
              <div className="text-[8px] font-mono text-gray-400 mt-0.5">{b.hex}</div>
              <StatusDot s={b.status} />
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <Label>Regla del camaleón</Label>
        <p className="mt-2 text-[12px] text-gray-700 leading-relaxed mb-3">La marca Nano raíz es monocromo estricto. No tiene color de acento propio. Adopta el color de cada subsidiaria cuando la representa.</p>
        <div className="bg-gray-50 rounded-lg p-3 mb-2">
          <div className="text-[11px] font-bold text-gray-900 mb-1">Nano raíz → siempre monocromo</div>
          <div className="text-[11px] text-gray-500">Negro + blanco + grises. Sin acento.</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-[11px] font-bold text-gray-900 mb-1">Nano Business → átomo azul</div>
          <div className="text-[11px] text-gray-500">El átomo adopta #2563EB. El resto sigue monocromo.</div>
        </div>
      </Card>
      <Card>
        <Label>Regla de nomenclatura</Label>
        <p className="mt-2 text-[12px] text-gray-700 mb-3">Siempre <strong>"Nano Especialidad"</strong> — espacio + mayúsculas iniciales en ambas palabras.</p>
        {[['Correcto', '"Nano Business", "Nano Creator"', true], ['Incorrecto', '"nanobusiness", "nano-creator"', false], ['Corporativo', 'Siempre nombre completo: "Orlando Ramírez Olivier"', true]].map(([t, v, ok]) => (
          <div key={t} className="flex items-start gap-2 py-2 border-b border-gray-50 last:border-0">
            <span className={`text-[10px] mt-0.5 ${ok ? 'text-green-500' : 'text-red-400'}`}>{ok ? '✓' : '✗'}</span>
            <div>
              <span className="text-[11px] font-bold text-gray-900">{t}: </span>
              <span className="text-[11px] text-gray-500">{v}</span>
            </div>
          </div>
        ))}
      </Card>
    </div>
  )
}

// S05.1 — Paleta principal
const TOKENS = [
  { name: 'Black',   token: '--black',   hex: '#0A0A0A', use: 'Hero · Íconos activos',  dark: true },
  { name: 'Gray-1',  token: '--g1',      hex: '#1C1C1C', use: 'Superficies oscuras',    dark: true },
  { name: 'Gray-2',  token: '--g2',      hex: '#3C3C3C', use: 'Texto principal',         dark: true },
  { name: 'Gray-3',  token: '--g3',      hex: '#787878', use: 'Texto secundario',        dark: false },
  { name: 'Gray-4',  token: '--g4',      hex: '#ABABAB', use: 'Deshabilitado',           dark: false },
  { name: 'Gray-5',  token: '--g5',      hex: '#D8D8D8', use: 'Borders · Tags',          dark: false },
  { name: 'Gray-6',  token: '--g6',      hex: '#F0F0F0', use: 'Surface secundaria',      dark: false },
  { name: 'Surface', token: '--surface', hex: '#FFFFFF', use: 'Cards · Modales',         dark: false },
  { name: 'BG',      token: '--bg',      hex: '#F5F5F5', use: 'Fondo general',           dark: false },
]

function S0501() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card col2>
        <Label>Paleta monocromo oficial · 9 tokens</Label>
        <div className="grid grid-cols-9 gap-2 mt-3">
          {TOKENS.map(t => (
            <div key={t.name} className="overflow-hidden rounded-xl border border-gray-100">
              <div className="h-14" style={{ background: t.hex }} />
              <div className="p-2 bg-white">
                <div className="text-[10px] font-bold text-gray-800">{t.name}</div>
                <div className="text-[9px] font-mono text-gray-400">{t.hex}</div>
                <div className="text-[9px] text-gray-400 mt-0.5 leading-tight">{t.use}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <Card col2>
        <Label>Tokens CSS · copiar en cualquier interfaz Nano</Label>
        <pre className="mt-2 bg-gray-900 text-green-400 rounded-xl p-4 text-[11px] font-mono leading-[1.9] overflow-x-auto">
{`/* NANO DESIGN TOKENS v2.3 */
--black:   #0A0A0A;  /* Hero · marca principal */
--g1:      #1C1C1C;  /* Superficies oscuras */
--g2:      #3C3C3C;  /* Texto principal */
--g3:      #787878;  /* Texto secundario */
--g4:      #ABABAB;  /* Texto terciario · disabled */
--g5:      #D8D8D8;  /* Borders · tags */
--g6:      #F0F0F0;  /* Surface secundaria */
--surface: #FFFFFF;  /* Cards principales */
--bg:      #F5F5F5;  /* Fondo general */`}
        </pre>
      </Card>
    </div>
  )
}

// S05.2 — Colores de estado
function S0502() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card col2>
        <Label>Colores de estado · solo para UI funcional · jamás en identidad de marca</Label>
        <div className="grid grid-cols-3 gap-3 mt-3">
          {[
            { name: 'Success',  hex: '#22C55E', bg: '#F0FDF4', border: '#BBF7D0', uso: 'Confirmado · Activo · Aprobado · OK' },
            { name: 'Warning',  hex: '#F59E0B', bg: '#FFFBEB', border: '#FDE68A', uso: 'En progreso · Atención · Revisar' },
            { name: 'Danger',   hex: '#EF4444', bg: '#FEF2F2', border: '#FECACA', uso: 'Error · Bloqueado · Eliminar · Crítico' },
            { name: 'Info',     hex: '#3B82F6', bg: '#EFF6FF', border: '#BFDBFE', uso: 'Información · Ayuda · Documentación' },
            { name: 'Neutral',  hex: '#6B7280', bg: '#F9FAFB', border: '#E5E7EB', uso: 'Inactivo · Sin clasificar · Archivado' },
          ].map(s => (
            <div key={s.name} className="overflow-hidden rounded-xl border" style={{ borderColor: s.border }}>
              <div className="h-10" style={{ background: s.bg }} />
              <div className="p-3 bg-white border-t" style={{ borderColor: s.border }}>
                <div className="text-[12px] font-bold" style={{ color: s.hex }}>{s.name}</div>
                <div className="text-[10px] font-mono text-gray-500">{s.hex}</div>
                <div className="text-[10px] text-gray-400 mt-0.5 leading-snug">{s.uso}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

// S06.1 — Tipografía
function S0601() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card col2>
        <Label>Fuente oficial · única en todo el ecosistema</Label>
        <div className="flex items-center gap-6 mt-2 p-5 bg-gray-900 rounded-xl">
          <span className="text-[56px] font-extrabold text-white tracking-tighter leading-none">Aa</span>
          <div>
            <div className="text-[22px] font-bold text-white">Open Sans</div>
            <div className="text-[11px] text-white/40 mt-0.5">Google Fonts · Variable · wght 300–800 · Gratuita</div>
            <div className="text-[11px] text-white/25 mt-0.5">Nunca sustituir por otra fuente, ni siquiera por fuentes similares</div>
          </div>
        </div>
      </Card>
      <Card col2>
        <Label>Jerarquía tipográfica completa</Label>
        <div className="mt-2 divide-y divide-gray-50">
          {[
            { lbl: 'Display / Hero',    px: 52, w: 800, ls: '-1.5px', demo: 'Nano.' },
            { lbl: 'H1 · Section',      px: 32, w: 700, ls: '-0.5px', demo: 'Filosofía de Marca' },
            { lbl: 'H2 · Card Title',   px: 20, w: 700, ls: '-0.3px', demo: 'Doctrina de la Libertad Total' },
            { lbl: 'H3 · Sub-heading',  px: 15, w: 600, ls: '-0.2px', demo: 'Sistema de identidad visual' },
            { lbl: 'Body · Text',       px: 14, w: 400, ls: 'normal', color: '#374151', lh: '1.65', demo: 'El contenido produce libertad — la libertad produce patrimonio.' },
            { lbl: 'Caption / Label',   px: 10, w: 700, ls: '.13em',  color: '#9CA3AF', upper: true, demo: 'Sección 01 · Identidad visual' },
          ].map(({ lbl, px, w, ls, demo, color, lh, upper }) => (
            <div key={lbl} className="py-4 grid gap-4 items-center" style={{ gridTemplateColumns: '150px 1fr 80px' }}>
              <span className="text-[10px] font-bold tracking-[.1em] uppercase text-gray-400">{lbl}</span>
              <span style={{ fontSize: px, fontWeight: w, letterSpacing: ls, color: color || '#111827', lineHeight: lh || 1.2, textTransform: upper ? 'uppercase' : 'none' }}>{demo}</span>
              <span className="text-[10px] font-mono text-gray-300 text-right">{px}px · {w}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

// S07.1 — Mood visual
function S0701() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card>
        <Label>Mood visual · referencias</Label>
        {[
          ['Premium minimalista', 'Apple.com, Linear, Notion — mucho aire, tipografía enorme, un mensaje por sección.'],
          ['Editorial negro/blanco', 'Alternancia de secciones oscuras y claras. El contraste es el diseño.'],
          ['Documental sin filtro', 'Contenido crudo, sin sobreproducción. La autenticidad es la estética.'],
          ['Spec sheet funcional', 'Apple product specs — bento grid, información densa pero escaneable.'],
        ].map(([t, d]) => (
          <div key={t} className="bg-gray-50 rounded-xl p-3 mb-2">
            <div className="text-[11px] font-bold text-gray-900 mb-0.5">{t}</div>
            <p className="text-[11px] text-gray-500 leading-snug">{d}</p>
          </div>
        ))}
      </Card>
      <Card>
        <Label>Principios visuales permanentes</Label>
        {[
          ['Monocromo en raíz', 'Sin color de acento propio en Nano core'],
          ['Un mensaje por bloque', 'Máx 3 oraciones por sección editorial'],
          ['Hero siempre negro', 'Primer bloque de cualquier web: #0A0A0A'],
          ['Sin gradientes', 'Monocromo puro en identidad base'],
          ['ADHD-friendly', 'Labels uppercase, info agrupada, escaneable'],
          ['FA6 Free solamente', 'Cero emojis en interfaces Nano'],
          ['Radius 12–20px', 'Tarjetas y contenedores con bordes redondeados'],
        ].map(([t, d]) => (
          <div key={t} className="flex items-start gap-2 py-2 border-b border-gray-50 last:border-0">
            <span className="text-[9px] text-gray-300 mt-1 flex-shrink-0">◆</span>
            <div>
              <span className="text-[11px] font-bold text-gray-900">{t}: </span>
              <span className="text-[11px] text-gray-500">{d}</span>
            </div>
          </div>
        ))}
      </Card>
    </div>
  )
}

// S08.1 — Aplicaciones
function S0801() {
  const apps = [
    { name: 'Favicon web',                   status: 'done',     spec: '32×32px SVG · Átomo negro sobre #0A0A0A', ch: 'orlandoramirez.com' },
    { name: 'Avatar social (isotipo)',        status: 'pending',  spec: '400×400px · Átomo sobre blanco · Sin texto', ch: 'Todos los canales' },
    { name: 'Banner @NanoOlivier',            status: 'pending',  spec: '2560×1440px · zona segura 1546×423px · Lockup + tagline', ch: '@NanoOlivier' },
    { name: 'Post tipo 1 — Quote',            status: 'pending',  spec: '1080×1080px · Fondo negro · Quote blanca · Átomo pequeño', ch: 'RRSS' },
    { name: 'Post tipo 2 — Stat',             status: 'pending',  spec: '1080×1080px · Número grande · Fondo blanco · Label uppercase', ch: 'RRSS' },
    { name: 'Post tipo 3 — Hook',             status: 'pending',  spec: '1080×1350px · Texto gancho + overlay negro 60%', ch: 'RRSS' },
    { name: 'Sistema de miniaturas YouTube',  status: 'pending',  spec: '1280×720px · Cara + texto + alto contraste', ch: '@NanoOlivier' },
    { name: 'Documento comercial base',       status: 'pending',  spec: 'A4 · Open Sans · Lockup en header · Paleta monocromo', ch: 'Cimoves / Business' },
  ]
  return (
    <div className="grid grid-cols-2 gap-3">
      <BigStat value={`${apps.filter(a => a.status === 'done').length}/${apps.length}`} label="Aplicaciones listas" sub="del kit mínimo" color="#22C55E" />
      <Card>
        <Label>Próximo paso inmediato</Label>
        <p className="mt-2 text-[13px] font-medium text-gray-900">Crear el avatar en Canva — átomo negro sobre fondo blanco, exportar SVG + PNG 400×400.</p>
        <p className="text-[11px] text-gray-500 mt-1">Desbloquea: todos los canales pueden tener identidad visual consistente.</p>
      </Card>
      <Card col2>
        <Label>Inventario de aplicaciones prioritarias</Label>
        {apps.map(a => (
          <div key={a.name} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl mb-1.5 last:mb-0">
            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${ST[a.status]?.pill}`}>
              {ST[a.status]?.label}
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-[12px] font-bold text-gray-900">{a.name}</div>
              <div className="text-[10px] text-gray-400 mt-0.5">{a.spec}</div>
            </div>
            <div className="text-[10px] text-gray-400 flex-shrink-0">{a.ch}</div>
          </div>
        ))}
      </Card>
    </div>
  )
}

// ─── SECTION REGISTRY ─────────────────────────────────────────────
// Adding a new section = add one entry here + one component above.
const REGISTRY = [
  {
    group: 'Diagnóstico', icon: '◎',
    sections: [
      { id: 's0101', code: '01.1', name: 'Inventario de activos', status: 'done',     Component: S0101 },
    ],
  },
  {
    group: 'Estrategia', icon: '◈',
    sections: [
      { id: 's0201', code: '02.1', name: 'Público objetivo',       status: 'done',     Component: S0201 },
      { id: 's0202', code: '02.2', name: 'Propuesta de valor',      status: 'done',     Component: S0202 },
      { id: 's0203', code: '02.3', name: 'Posicionamiento',         status: 'done',     Component: S0203 },
      { id: 's0204', code: '02.4', name: 'Valores y personalidad',  status: 'done',     Component: S0204 },
      { id: 's0205', code: '02.5', name: 'Propósito de marca',      status: 'done',     Component: S0205 },
    ],
  },
  {
    group: 'Identidad verbal', icon: '◇',
    sections: [
      { id: 's0301', code: '03.1', name: 'Nombre oficial',          status: 'done',     Component: S0301 },
      { id: 's0302', code: '03.2', name: 'Tagline',                 status: 'progress', Component: S0302 },
      { id: 's0303', code: '03.3', name: 'Tono de voz',             status: 'done',     Component: S0303 },
      { id: 's0304', code: '03.4', name: 'Muletillas y frases',     status: 'done',     Component: S0304 },
      { id: 's0305', code: '03.5', name: 'Elevator pitch',          status: 'done',     Component: S0305 },
    ],
  },
  {
    group: 'Sistema de logo', icon: '⊙',
    sections: [
      { id: 's0401', code: '04.1', name: 'Símbolo y lockup',        status: 'done',     Component: S0401 },
      { id: 's0402', code: '04.2', name: 'Sistema de sub-marcas',   status: 'done',     Component: S0402 },
    ],
  },
  {
    group: 'Sistema cromático', icon: '◐',
    sections: [
      { id: 's0501', code: '05.1', name: 'Paleta principal',        status: 'done',     Component: S0501 },
      { id: 's0502', code: '05.2', name: 'Colores de estado',       status: 'done',     Component: S0502 },
    ],
  },
  {
    group: 'Sistema tipográfico', icon: '◫',
    sections: [
      { id: 's0601', code: '06.1', name: 'Fuente y jerarquía',      status: 'done',     Component: S0601 },
    ],
  },
  {
    group: 'Sistema visual', icon: '◱',
    sections: [
      { id: 's0701', code: '07.1', name: 'Mood y principios',       status: 'progress', Component: S0701 },
    ],
  },
  {
    group: 'Aplicaciones', icon: '◧',
    sections: [
      { id: 's0801', code: '08.1', name: 'Kit de aplicaciones',     status: 'pending',  Component: S0801 },
    ],
  },
]

// Flat list for prev/next navigation
const ALL_SECTIONS = REGISTRY.flatMap(g => g.sections)

// ─── SIDEBAR ─────────────────────────────────────────────────────
function Sidebar({ active, onSelect, onBack }) {
  const [search, setSearch] = useState('')
  const [collapsed, setCollapsed] = useState({})

  const filtered = useMemo(() => {
    if (!search.trim()) return REGISTRY
    const q = search.toLowerCase()
    return REGISTRY.map(g => ({
      ...g,
      sections: g.sections.filter(s => s.name.toLowerCase().includes(q) || s.code.includes(q)),
    })).filter(g => g.sections.length > 0)
  }, [search])

  const toggleGroup = id => setCollapsed(c => ({ ...c, [id]: !c[id] }))
  const doneTotal = ALL_SECTIONS.filter(s => s.status === 'done').length

  return (
    <aside className="w-[220px] flex-shrink-0 bg-white border-r border-gray-100 flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-gray-100">
        <button onClick={onBack} className="text-[10px] font-bold tracking-[.08em] uppercase text-gray-400 hover:text-gray-800 transition-colors mb-3 flex items-center gap-1">
          ← Inicio
        </button>
        <div className="flex items-center gap-2 mb-0.5">
          <AtomIcon fill="#111827" size={14} />
          <span className="text-[13px] font-black text-gray-900">Brand Book</span>
        </div>
        <span className="text-[10px] text-gray-400">v2.3 · Nano · Jun 2026</span>
      </div>

      {/* Search */}
      <div className="px-3 py-2 border-b border-gray-100">
        <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-2.5 py-1.5">
          <span className="text-[11px] text-gray-400">⌕</span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar sección..."
            className="flex-1 bg-transparent text-[11px] text-gray-700 placeholder-gray-400 outline-none"
          />
        </div>
      </div>

      {/* Overview button */}
      <div className="px-2 pt-2">
        <button
          onClick={() => onSelect(null)}
          className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-colors ${
            active === null ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          }`}
        >
          <span className="text-[11px]">▦</span>
          <span className="text-[12px] font-semibold">Resumen general</span>
        </button>
      </div>

      {/* Nav groups */}
      <nav className="flex-1 overflow-y-auto px-2 py-1">
        {filtered.map(group => {
          const isCollapsed = collapsed[group.group]
          const hasActive = group.sections.some(s => s.id === active)
          return (
            <div key={group.group} className="mb-1">
              <button
                onClick={() => toggleGroup(group.group)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-gray-400">{group.icon}</span>
                  <span className="text-[11px] font-bold text-gray-500 uppercase tracking-[.06em]">{group.group}</span>
                </div>
                <span className={`text-[10px] text-gray-300 transition-transform ${isCollapsed ? '' : 'rotate-90'}`}>›</span>
              </button>
              {!isCollapsed && (
                <div className="ml-2">
                  {group.sections.map(sec => (
                    <button
                      key={sec.id}
                      onClick={() => onSelect(sec.id)}
                      className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-left transition-colors mb-0.5 ${
                        active === sec.id
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className={`text-[9px] font-mono flex-shrink-0 ${active === sec.id ? 'text-white/40' : 'text-gray-400'}`}>{sec.code}</span>
                        <span className="text-[11px] font-medium truncate">{sec.name}</span>
                      </div>
                      <StatusDot s={sec.status} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-gray-100">
        <div className="flex items-center gap-1.5 mb-1.5">
          {ALL_SECTIONS.map(s => (
            <div
              key={s.id}
              className="h-1 flex-1 rounded-full cursor-pointer transition-opacity hover:opacity-70"
              style={{ background: ST[s.status]?.dot || ST.pending.dot }}
              onClick={() => onSelect(s.id)}
            />
          ))}
        </div>
        <div className="text-[10px] text-gray-400">{doneTotal}/{ALL_SECTIONS.length} secciones completas</div>
      </div>
    </aside>
  )
}

// ─── HUB (overview) ───────────────────────────────────────────────
function Hub({ onSelect }) {
  const done = ALL_SECTIONS.filter(s => s.status === 'done').length
  const inProgress = ALL_SECTIONS.filter(s => s.status === 'progress').length
  return (
    <div className="p-6 max-w-[900px]">
      <div className="mb-6">
        <h1 className="text-[24px] font-black text-gray-900">Nano Brand Book System</h1>
        <p className="text-[13px] text-gray-500 mt-0.5">v2.3 · Fuente única de verdad de la marca · Jun 2026</p>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-[0_1px_3px_rgba(0,0,0,.05)]">
          <div className="text-[32px] font-black text-green-500">{done}</div>
          <div className="text-[13px] font-semibold text-gray-700">Secciones completas</div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-[0_1px_3px_rgba(0,0,0,.05)]">
          <div className="text-[32px] font-black text-amber-500">{inProgress}</div>
          <div className="text-[13px] font-semibold text-gray-700">En progreso</div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-[0_1px_3px_rgba(0,0,0,.05)]">
          <div className="text-[32px] font-black text-gray-400">{ALL_SECTIONS.length - done - inProgress}</div>
          <div className="text-[13px] font-semibold text-gray-700">Pendientes</div>
        </div>
      </div>

      {REGISTRY.map(group => (
        <div key={group.group} className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] text-gray-400">{group.icon}</span>
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[.08em]">{group.group}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {group.sections.map(sec => (
              <button
                key={sec.id}
                onClick={() => onSelect(sec.id)}
                className="bg-white rounded-xl border border-gray-100 p-4 text-left shadow-[0_1px_3px_rgba(0,0,0,.04)] hover:border-gray-300 hover:shadow-[0_4px_12px_rgba(0,0,0,.07)] transition-all group flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-gray-400">{sec.code}</span>
                  <span className="text-[13px] font-semibold text-gray-800">{sec.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <StatusDot s={sec.status} />
                  <span className="text-gray-300 group-hover:text-gray-500 transition-colors text-[12px]">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── SECTION DETAIL ───────────────────────────────────────────────
function SectionDetail({ sectionId, onSelect }) {
  const sec = ALL_SECTIONS.find(s => s.id === sectionId)
  const idx = ALL_SECTIONS.indexOf(sec)
  const prev = ALL_SECTIONS[idx - 1]
  const next = ALL_SECTIONS[idx + 1]
  const group = REGISTRY.find(g => g.sections.some(s => s.id === sectionId))
  const { Component } = sec

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[10px] font-mono text-gray-400">{sec.code}</span>
        <span className="text-[12px] text-gray-400">·</span>
        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[.06em]">{group?.group}</span>
        <span className="text-[12px] text-gray-400">·</span>
        <h1 className="text-[17px] font-bold text-gray-900">{sec.name}</h1>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${ST[sec.status]?.pill}`}>
          {ST[sec.status]?.label}
        </span>
      </div>

      <Component />

      <div className="flex justify-between mt-6 pt-4 border-t border-gray-100">
        <div>
          {prev && (
            <button onClick={() => onSelect(prev.id)} className="flex items-center gap-1.5 text-[12px] font-medium text-gray-400 hover:text-gray-900 transition-colors">
              <span>←</span>
              <span>{prev.code} {prev.name}</span>
            </button>
          )}
        </div>
        <div>
          {next && (
            <button onClick={() => onSelect(next.id)} className="flex items-center gap-1.5 text-[12px] font-medium text-gray-400 hover:text-gray-900 transition-colors">
              <span>{next.code} {next.name}</span>
              <span>→</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── MAIN ─────────────────────────────────────────────────────────
export default function BrandBookPage({ setPage }) {
  const [active, setActive] = useState(null)

  return (
    <div className="flex h-[calc(100vh-56px)] bg-[#F6F7F8] overflow-hidden">
      <Sidebar active={active} onSelect={setActive} onBack={() => setPage('home')} />
      <main className="flex-1 overflow-y-auto">
        {active === null
          ? <Hub onSelect={setActive} />
          : <SectionDetail sectionId={active} onSelect={setActive} />
        }
      </main>
    </div>
  )
}
