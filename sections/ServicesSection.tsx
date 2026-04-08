const services = [
  {
    title: 'Portrait sessions',
    copy: 'Портретные съёмки с мягким светом, фактурной тенью и спокойной дорогой атмосферой.',
    note: 'personal • couple • artist mood',
  },
  {
    title: 'Brand content',
    copy: 'Контент для брендов, экспертов и продуктов, где важно ощущение качества и визуального доверия.',
    note: 'fashion • beauty • product • social',
  },
  {
    title: 'Editorial concepts',
    copy: 'Креативные съёмки с арт-дирекшеном, цветовым настроением и сильной обложечной подачей.',
    note: 'campaign • concept • magazine vibe',
  },
]

export function ServicesSection() {
  return (
    <section className="section" id="services">
      <span className="eyebrow">Services</span>
      <h2 className="section-title">Форматы съёмок с тёплым светом и выверенной подачей.</h2>
      <p className="section-copy">
        Визуал строится не только вокруг камеры, но и вокруг настроения пространства. Наша задача, сделать
        так, чтобы кадры ощущались живыми, дорогими и спокойными.
      </p>
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
