'use client'

export function HeroSection() {
  return (
    <section className="section hero-grid hero-shell">
      <div className="hero-copy-column">
        <span className="eyebrow">Тверская, Москва • мягкий свет • спокойный продакшн</span>
        <h1 className="hero-title">Luma Atelier</h1>
        <p className="hero-copy">
          Фотостудия для портретов, брендов и визуала с тёплым светом, фактурным интерьером и уверенной, спокойной подачей.
        </p>
        <div className="actions">
          <a className="button primary" href="/booking">Забронировать съёмку</a>
          <a className="button secondary" href="/portfolio">Смотреть портфолио</a>
        </div>
        <div className="hero-feature-row">
          <div className="glass-card mini">
            <span className="service-note">формат</span>
            <h3>Портреты и lifestyle</h3>
            <p>Личные съёмки, парные кадры и визуал, в котором человек выглядит естественно и собранно.</p>
          </div>
          <div className="glass-card mini">
            <span className="service-note">для брендов</span>
            <h3>Контент, который выглядит дороже</h3>
            <p>Для экспертов, брендов и продуктов, которым нужен современный визуал с ощущением доверия.</p>
          </div>
        </div>
      </div>
      <div className="scene-card hero-visual hero-photo-shell hero-beacon-scene">
        <div className="hero-photo-layer" style={{ backgroundImage: "url('/images/hero-reference.jpg')" }} />
        <div className="hero-scene-vignette" />
        <div className="hero-beacon-wrap is-state-0">
          <div className="ring beacon-ring" />
          <div className="orb beacon-orb" />
          <div className="beacon-pulse" />
          <div className="beacon-aura" />
        </div>
      </div>
    </section>
  )
}
