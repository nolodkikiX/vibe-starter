const services = [
  {
    title: 'Портретные съёмки',
    copy: 'Портретные съёмки с мягким светом, фактурной тенью и спокойной дорогой атмосферой.',
    note: 'личные • парные • атмосферные',
  },
  {
    title: 'Контент для брендов',
    copy: 'Контент для брендов, экспертов и продуктов, где важно ощущение качества и визуального доверия.',
    note: 'бренды • beauty • product • social',
  },
  {
    title: 'Креативные концепты',
    copy: 'Креативные съёмки с арт-дирекшеном, цветовым настроением и сильной обложечной подачей.',
    note: 'кампании • концепты • editorial',
  },
]

export function ServicesSection() {
  return (
    <section className="section" id="services">
      <span className="eyebrow">Форматы съёмок</span>
      <h2 className="section-title">Форматы съёмок с тёплым светом и выверенной подачей.</h2>
      <p className="section-copy">
        Визуал строится не только вокруг камеры, но и вокруг настроения пространства. Наша задача, сделать
        так, чтобы кадры ощущались живыми, дорогими и спокойными.
      </p>
      <div className="trust-strip">
        <div className="trust-item">
          <strong>Тверская, центр</strong>
          <span>удобно клиентам и командам</span>
        </div>
        <div className="trust-item">
          <strong>Подготовка mood и света</strong>
          <span>перед съёмкой согласуем задачу</span>
        </div>
        <div className="trust-item">
          <strong>Комфортный продакшн</strong>
          <span>без хаоса, с понятным процессом</span>
        </div>
      </div>
      <div className="card-grid">
        {services.map((service) => (
          <article key={service.title} className="card service-card">
            <span className="service-note">{service.note}</span>
            <h3>{service.title}</h3>
            <p>{service.copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
