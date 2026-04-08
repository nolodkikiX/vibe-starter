const items = [
  'Editorial Portrait',
  'Fashion Detail',
  'Brand Campaign',
  'Studio Light Test',
  'Creative Motion',
]

export function PortfolioSection() {
  return (
    <section className="section" id="portfolio">
      <span className="eyebrow">Portfolio</span>
      <h2 className="section-title">Кадры, в которых свет ощущается почти физически.</h2>
      <p className="section-copy">
        Здесь пока мокап-сетка, но уже с настроением: крупная типографика, тёплые рефлексы и ощущение
        материала. Потом сюда встанут реальные фотографии студии.
      </p>
      <div className="portfolio-grid">
        {items.map((item, index) => (
          <article key={item} className={`portfolio-card ${index === 0 ? 'large' : ''}`}>
            <div className="portfolio-overlay" />
            <div className="portfolio-meta">
              <small>studio series</small>
              <span>{item}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
