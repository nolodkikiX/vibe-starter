const portfolioSets = [
  {
    note: 'editorial portrait',
    title: 'Редакционный портрет',
    copy: 'Мягкий свет, чистая композиция и портреты, где клиент выглядит собранно, уверенно и живо.',
    image: '/images/portfolio-reference-1.jpg',
  },
  {
    note: 'brand series',
    title: 'Серия для бренда',
    copy: 'Контент для брендов и экспертов, где важно ощущение доверия, современности и визуальной дисциплины.',
    image: '/images/portfolio-reference-2.jpg',
  },
  {
    note: 'light studies',
    title: 'Тест света и фактуры',
    copy: 'Съёмки, в которых материал пространства работает почти так же сильно, как и сам герой кадра.',
    image: '/images/portfolio-reference-3.jpg',
  },
]

export default function PortfolioPage() {
  return (
    <main className="page-shell inner-page-shell">
      <section className="section page-intro portfolio-page-hero">
        <span className="eyebrow">Портфолио</span>
        <h1 className="section-title">Серии, в которых свет, фактура и настроение работают как часть истории.</h1>
        <p className="section-copy page-intro-copy">
          Здесь собраны направления визуала студии: редакционные портреты, брендовые серии, тесты света и
          съёмки с более арт-дирекшн подачей. Задача каждой серии не просто показать лицо или продукт, а создать
          образ, который выглядит собранно и дорого.
        </p>
      </section>
      <section className="section portfolio-proof-layout">
        <article className="portfolio-proof-main glass-card image-proof-card">
          <div className="proof-image" style={{ backgroundImage: "url('/images/portfolio-reference-1.jpg')" }} />
          <div className="proof-copy">
            <span className="service-note">featured case</span>
            <h2>Главный визуальный кейс студии</h2>
            <p>
              Крупная серия, после которой клиент сразу понимает уровень кадра, света и общей режиссуры визуала.
              Это не просто сетка картинок, а главный аргумент в пользу студии.
            </p>
          </div>
        </article>
        <div className="proof-grid">
          {portfolioSets.map((item) => (
            <article key={item.title} className="card proof-card proof-card-photo">
              <div className="proof-thumb" style={{ backgroundImage: `url('${item.image}')` }} />
              <span className="service-note">{item.note}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
