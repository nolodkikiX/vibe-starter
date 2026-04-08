export function BookingSection() {
  return (
    <section className="section two-col" id="booking">
      <div>
        <span className="eyebrow">Booking</span>
        <h2 className="section-title">Соберём съёмку под настроение, задачу и визуальный темперамент.</h2>
        <p className="section-copy">
          Оставь тип съёмки, желаемое настроение и удобную дату, а мы предложим формат, время и комфортный
          сценарий съёмки под твою задачу.
        </p>
        <div className="booking-steps">
          <div className="booking-step"><strong>1.</strong><span>Пишешь задачу и желаемое настроение</span></div>
          <div className="booking-step"><strong>2.</strong><span>Мы предлагаем формат, тайминг и световую подачу</span></div>
          <div className="booking-step"><strong>3.</strong><span>Подтверждаем дату и спокойно выходим на съёмку</span></div>
        </div>
        <p className="footer-note">Обычно отвечаем в течение дня и быстро помогаем собрать понятный формат съёмки.</p>
      </div>
      <div className="glass-card booking-card booking-glass">
        <span className="service-note">быстрый контакт</span>
        <h3>Быстрый старт</h3>
        <p className="small-copy">
          Напиши тип съёмки, желаемое настроение и ориентир по дате. Этого уже хватит, чтобы начать диалог.
        </p>
        <ul className="booking-checklist muted-list">
          <li>подойдёт для личных, брендовых и контент-съёмок</li>
          <li>можно сразу прислать референсы и желаемую дату</li>
          <li>если формат не ясен, поможем собрать его вместе</li>
        </ul>
        <div className="booking-pill-row">
          <span className="booking-pill">портрет</span>
          <span className="booking-pill">бренд</span>
          <span className="booking-pill">контент</span>
        </div>
        <div className="actions">
          <a className="button primary" href="mailto:hello@luma-atelier.com">hello@luma-atelier.com</a>
          <a className="button secondary" href="https://t.me/yourstudio">Telegram</a>
        </div>
      </div>
    </section>
  )
}
