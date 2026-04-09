export default function AboutPage() {
  return (
    <main className="page-shell inner-page-shell">
      <section className="section page-intro">
        <span className="eyebrow">О студии</span>
        <h1 className="section-title">Студия с тёплым светом, фактурным интерьером и спокойным процессом съёмки.</h1>
        <p className="section-copy page-intro-copy">
          Luma Atelier строится вокруг атмосферы, в которой клиенту легко расслабиться, а команде легко собрать
          сильный кадр. Здесь важны не только техника и свет, но и ощущение комфорта, темп и визуальная цельность.
        </p>
      </section>
      <section className="section about-photo-banner">
        <div className="about-photo" style={{ backgroundImage: "url('/images/about-reference.jpg')" }} />
      </section>
      <section className="section card-grid about-grid-single">
        <article className="card">
          <span className="service-note">подход</span>
          <h3>Сначала настроение, потом кадр</h3>
          <p>Мы собираем свет, фактуру и темп так, чтобы съёмка ощущалась уверенно, а результат выглядел цельно.</p>
        </article>
        <article className="card">
          <span className="service-note">пространство</span>
          <h3>Тверская, центр Москвы</h3>
          <p>Удобная точка для личных и брендовых съёмок, где не нужно тратить лишнюю энергию на логистику.</p>
        </article>
        <article className="card">
          <span className="service-note">процесс</span>
          <h3>Спокойный продакшн без хаоса</h3>
          <p>От референсов и настроения до понятного тайминга и финальной серии кадров, всё выстраивается заранее.</p>
        </article>
      </section>
      <section className="section two-col about-story-grid">
        <div className="card">
          <span className="service-note">как проходит съёмка</span>
          <h3>Понятный ритм без лишнего напряжения</h3>
          <p>Сначала собираем задачу, настроение и референсы, потом подбираем свет, темп и логику кадров. Это помогает клиенту чувствовать себя спокойно, а команде работать собранно.</p>
        </div>
        <div className="glass-card">
          <span className="service-note">что чувствует клиент</span>
          <h3>Не просто студия, а комфортная рабочая атмосфера</h3>
          <p>Пространство работает на ощущение уверенности. Это важно и для личного портрета, и для брендовой съёмки, и для контента, где нужно выглядеть естественно, но дорого.</p>
        </div>
      </section>
    </main>
  )
}
