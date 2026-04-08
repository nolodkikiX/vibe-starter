export function BookingSection() {
  return (
    <section className="section two-col" id="booking">
      <div>
        <span className="eyebrow">Booking</span>
        <h2 className="section-title">Соберём съёмку под настроение, задачу и визуальный темперамент.</h2>
        <p className="section-copy">
          Этот блок можно превратить в форму, Telegram-бота, калькулятор или быструю заявку. Пока он служит
          спокойным premium CTA в конце страницы.
        </p>
        <p className="footer-note">Следующим шагом можно подключить реальную форму и CRM.</p>
      </div>
      <div className="card booking-card">
        <span className="service-note">fast contact</span>
        <h3>Быстрый старт</h3>
        <p className="small-copy">
          Напиши тип съёмки, желаемое настроение и ориентир по дате. Этого уже хватит, чтобы начать диалог.
        </p>
        <div className="actions">
          <a className="button primary" href="mailto:hello@luma-atelier.com">hello@luma-atelier.com</a>
          <a className="button secondary" href="https://t.me/yourstudio">Telegram</a>
        </div>
      </div>
    </section>
  )
}
