export function HeroSection() {
  return (
    <section className="section hero-grid">
      <div>
        <span className="eyebrow">Granite mood • warm studio light • Moscow</span>
        <h1 className="hero-title">Тёплый свет, тёмный гранит, кадры с уютной глубиной.</h1>
        <p className="hero-copy">
          Фотостудия на Тверской с комфортным вайбом, современным стилем и визуалом, который работает на тебя.
          Мягкий ламповый свет, фактурное пространство и подача, которая одинаково хорошо работает для людей, брендов и контента.
        </p>
        <div className="actions">
          <a className="button primary" href="#booking">Забронировать съёмку</a>
          <a className="button secondary" href="#portfolio">Смотреть портфолио</a>
        </div>
        <div className="stat-row">
          <div className="card">
            <h3>Granite</h3>
            <p>глубокая тёмно-серая база с дорогой фактурой и спокойным контрастом</p>
          </div>
          <div className="card">
            <h3>Warm light</h3>
            <p>тёплые ламповые акценты, как отражения от студийных источников света</p>
          </div>
          <div className="card">
            <h3>Modern comfort</h3>
            <p>современный дизайн без холода, с ощущением уюта и визуального воздуха</p>
          </div>
        </div>
      </div>
      <div className="scene-card">
        <div className="ring" />
        <div className="orb" />
        <div className="scene-label">
          <span>granite + tungsten mood</span>
          <span>warm reflections • soft glow</span>
        </div>
      </div>
    </section>
  )
}
