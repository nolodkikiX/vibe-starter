const tiers = [
  {
    name: 'Start',
    price: '12 000₽',
    points: ['1 hour in studio', 'moodboard alignment', '10 edited photos'],
  },
  {
    name: 'Signature',
    price: '24 000₽',
    points: ['2.5 hours', 'creative direction', '25 edited photos'],
    featured: true,
  },
  {
    name: 'Campaign',
    price: 'from 45 000₽',
    points: ['brand-oriented shoot', 'team workflow', 'custom production scope'],
  },
]

export function PricingSection() {
  return (
    <section className="section" id="pricing">
      <span className="eyebrow">Pricing</span>
      <h2 className="section-title">Простой прайс, который ощущается как premium service.</h2>
      <p className="section-copy">
        Без лишнего шума. На уровне лендинга лучше показать аккуратную, уверенную структуру, чем перегрузить.
      </p>
      <div className="price-grid">
        {tiers.map((tier) => (
          <article key={tier.name} className={`price-card ${tier.featured ? 'featured' : ''}`}>
            <span className="service-note">{tier.featured ? 'most requested' : 'studio plan'}</span>
            <h3>{tier.name}</h3>
            <div className="price">{tier.price}</div>
            <ul className="muted-list">
              {tier.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
