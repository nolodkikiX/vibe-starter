const tiers = [
  {
    name: 'Старт',
    price: '12 000₽',
    points: ['1 час в студии', 'согласование настроения съёмки', '10 обработанных кадров'],
  },
  {
    name: 'Сигнатурный',
    price: '24 000₽',
    points: ['2.5 часа', 'креативное направление', '25 обработанных кадров'],
    featured: true,
  },
  {
    name: 'Кампания',
    price: 'от 45 000₽',
    points: ['съёмка под бренд-задачу', 'работа с командой', 'индивидуальный объём продакшена'],
  },
]

export function PricingSection() {
  return (
    <section className="section" id="pricing">
      <span className="eyebrow">Стоимость</span>
      <h2 className="section-title">Прайс, который выглядит понятно и ощущается как хороший сервис.</h2>
      <p className="section-copy">
        Без лишнего шума. На уровне лендинга лучше показать аккуратную, уверенную структуру, чем перегрузить.
      </p>
      <p className="footer-note">В стоимость уже заложены подготовка по настроению, работа со светом и базовая ретушь.</p>
      <div className="price-grid">
        {tiers.map((tier) => (
          <article key={tier.name} className={`price-card ${tier.featured ? 'featured' : ''}`}>
            <span className="service-note">{tier.featured ? 'самый частый выбор' : 'формат студии'}</span>
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
