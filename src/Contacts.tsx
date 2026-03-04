function Contacts() {
  return (
    <div className="contacts_section">
      <img src="/assets/Contact_assets/contact_photo.avif" className="contact_photo" />

      <div className="contacts_items">
        <span className="contacts_title">Booking</span>

        <div className="contacts_text">
          <div className="form">
            <input placeholder="" id="name" type="text" autoComplete="off" required />

            <label htmlFor="name" className="label-name">
              <span className="content-name">Имя *</span>
            </label>
          </div>
        </div>

        <div className="contacts_text">
          <div className="form">
            <input placeholder="" id="email" type="email" autoComplete="off" required />

            <label htmlFor="email" className="label-name">
              <span className="content-name">Email *</span>
            </label>
          </div>
        </div>

        <div className="contacts_text">
          <div className="form">
            <input placeholder="" id="message" type="text" autoComplete="off" required />

            <label htmlFor="message" className="label-name">
              <span className="content-name">Ваш телефон *</span>
            </label>
          </div>
        </div>
        <div className="contacts_text">
          <div className="form">
            <input placeholder="" id="message" type="text" autoComplete="off" />

            <label htmlFor="social_media" className="label-name">
              <span className="content-name">Ссылка на социальную сеть</span>
            </label>
          </div>
        </div>
        <div className="contacts_text">
          <div className="form">
            <input placeholder="" id="message" type="text" autoComplete="off" required />

            <label htmlFor="message" className="label-name">
              <span className="content-name">Дата события *</span>
            </label>
          </div>
        </div>
        <div className="contacts_text">
          <div className="form">
            <input placeholder="" id="message" type="text" autoComplete="off" />

            <label htmlFor="message" className="label-name">
              <span className="content-name">Сообщение</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
