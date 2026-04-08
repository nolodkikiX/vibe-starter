const items = [
  'Редакционный портрет',
  'Детали fashion-съёмки',
  'Кампания для бренда',
  'Тест света в студии',
  'Пластика и движение',
]

export function PortfolioSection() {
  return (
    <section className="section" id="portfolio">
      <span className="eyebrow">Портфолио</span>
      <h2 className="section-title">Кадры, в которых свет ощущается почти физически.</h2>
      <p className="section-copy">
        Здесь пока мокап-сетка, но уже с настроением: крупная типографика, тёплые рефлексы и ощущение
        материала. Потом сюда встанут реальные фотографии студии.
      </p>
      <div className="portfolio-grid">
        {items.map((item, index) => (
          <article key={item} className={`portfolio-card ${index === 0 ? 'large hero-case liquid-frame' : ''}`}>
            <div className="portfolio-overlay" />
            {index === 0 ? <div className="portfolio-depth" /> : null}
            <div className="portfolio-meta">
              <small>{index === 0 ? 'ключевой кейс' : 'серия студии'}</small>
              <span>{item}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
