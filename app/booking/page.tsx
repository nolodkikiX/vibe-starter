import { BookingSection } from '../../sections/BookingSection'
import { PricingSection } from '../../sections/PricingSection'

export default function BookingPage() {
  return (
    <main className="page-shell inner-page-shell">
      <section className="section page-intro">
        <span className="eyebrow">Бронирование</span>
        <h1 className="section-title">Понятный путь от идеи съёмки до подтверждённой даты.</h1>
        <p className="section-copy">
          Здесь собраны форматы, базовая стоимость и самый быстрый способ выйти на спокойный рабочий диалог по
          съёмке, бренду или контенту.
        </p>
      </section>
      <section className="section trust-strip booking-top-strip">
        <div className="trust-item">
          <strong>Отвечаем в течение дня</strong>
          <span>можно сразу прислать задачу, референсы и желаемую дату</span>
        </div>
        <div className="trust-item">
          <strong>Формат подбираем вместе</strong>
          <span>если не уверен в длительности или пакете, поможем выбрать</span>
        </div>
        <div className="trust-item">
          <strong>Работаем спокойно и прозрачно</strong>
          <span>сразу объясняем, что входит, как готовимся и как идём в съёмку</span>
        </div>
      </section>
      <PricingSection />
      <BookingSection />
    </main>
  )
}
