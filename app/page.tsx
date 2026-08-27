const services = [
  {
    number: '01',
    title: 'Diseño web',
    description:
      'Interfaces limpias y memorables que cuentan tu historia con intención.',
  },
  {
    number: '02',
    title: 'Experiencia de usuario',
    description:
      'Recorridos simples, accesibles y pensados para convertir visitas en acción.',
  },
  {
    number: '03',
    title: 'Desarrollo frontend',
    description:
      'Sitios rápidos y responsivos, construidos con una base lista para crecer.',
  },
];

const process = [
  ['Entender', 'Aterrizamos el objetivo, la audiencia y lo que hace única a tu idea.'],
  ['Diseñar', 'Convertimos la estrategia en una experiencia clara y atractiva.'],
  ['Construir', 'Desarrollamos, probamos y dejamos todo listo para salir al mundo.'],
];

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <nav className="shell nav" aria-label="Navegación principal">
          <a className="brand" href="#inicio" aria-label="Nexo, ir al inicio">
            <span className="brand-mark" aria-hidden="true">
              N
            </span>
            <span>Nexo</span>
          </a>

          <div className="nav-links">
            <a href="#servicios">Servicios</a>
            <a href="#proceso">Proceso</a>
            <a href="#contacto">Contacto</a>
          </div>

          <a className="button button-small button-dark" href="mailto:hola@nexo.pe">
            Hablemos <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="shell hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            Estudio digital · Lima, Perú
          </p>
          <h1>
            Ideas claras.
            <br />
            Experiencias que <em>mueven.</em>
          </h1>
          <p className="hero-description">
            Diseñamos y construimos sitios web que se sienten simples, se ven
            distintos y ayudan a tu negocio a dar el siguiente paso.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contacto">
              Empezar un proyecto <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#servicios">
              Conocer servicios
            </a>
          </div>
          <div className="trust-row" aria-label="Principios de nuestro trabajo">
            <span>Diseño con propósito</span>
            <span>Desarrollo ágil</span>
            <span>Resultados medibles</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Vista previa de un proyecto digital">
          <div className="visual-orbit orbit-one" aria-hidden="true" />
          <div className="visual-orbit orbit-two" aria-hidden="true" />
          <div className="project-card">
            <div className="window-bar">
              <span />
              <span />
              <span />
              <p>nexo / proyecto</p>
            </div>
            <div className="project-stage">
              <div className="stage-topline">
                <span>ESTRATEGIA · DISEÑO · CÓDIGO</span>
                <span className="status-pill">EN LÍNEA</span>
              </div>
              <div className="stage-title">Construimos lo que sigue.</div>
              <div className="stage-grid">
                <div className="stage-block stage-block-main">
                  <span className="stage-label">Impacto</span>
                  <strong>+64%</strong>
                  <span className="stage-note">más interacción</span>
                </div>
                <div className="stage-block stage-block-accent">
                  <span className="shape-circle" aria-hidden="true" />
                  <span className="shape-line" aria-hidden="true" />
                </div>
              </div>
              <div className="stage-footer">
                <span>01</span>
                <span>Una web que trabaja contigo</span>
                <span aria-hidden="true">↗</span>
              </div>
            </div>
          </div>
          <div className="floating-note floating-note-top">
            <span aria-hidden="true">✦</span> Ideas en movimiento
          </div>
          <div className="floating-note floating-note-bottom">
            <strong>4.9</strong>
            <span>Experiencia promedio</span>
          </div>
        </div>
      </section>

      <section className="section shell" id="servicios">
        <div className="section-heading">
          <p className="eyebrow">Lo que hacemos</p>
          <h2>Lo esencial, bien hecho.</h2>
          <p>
            Estrategia, diseño y tecnología conectados para crear una presencia
            digital que sí se sienta tuya.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-topline">
                <span>{service.number}</span>
                <span aria-hidden="true">↗</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell process-section" id="proceso">
        <div className="results-panel">
          <p className="eyebrow eyebrow-light">Nuestro enfoque</p>
          <h2>Menos ruido. Más dirección.</h2>
          <p>
            Cada decisión tiene una razón: hacer que tu marca sea más fácil de
            entender, recordar y elegir.
          </p>
          <div className="result-metrics">
            <div>
              <strong>100%</strong>
              <span>hecho a medida</span>
            </div>
            <div>
              <strong>3×</strong>
              <span>más claridad</span>
            </div>
          </div>
        </div>

        <div className="process-list">
          <p className="eyebrow">Cómo trabajamos</p>
          {process.map(([title, description], index) => (
            <article className="process-item" key={title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell contact" id="contacto">
        <div>
          <p className="eyebrow eyebrow-light">¿Tienes una idea?</p>
          <h2>Hagamos que avance.</h2>
        </div>
        <a className="button button-light" href="mailto:hola@nexo.pe">
          hola@nexo.pe <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className="shell footer">
        <a className="brand" href="#inicio" aria-label="Nexo, volver al inicio">
          <span className="brand-mark" aria-hidden="true">
            N
          </span>
          <span>Nexo</span>
        </a>
        <p>Diseño y desarrollo digital con intención.</p>
        <p>© 2026 Nexo.</p>
      </footer>
    </main>
  );
}
