import { useState } from "react";

function Contacts() {

  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "1fbeacb1-44be-49d8-90ea-a5216a342bc2");


    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        console.log("Форма успешно отправлена!");
        event.currentTarget.reset();
      } else {
        console.log("Ошибка отправки формы", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Ошибка запроса", error);
      setResult("Ошибка отправки. Попробуйте позже.");
    }
  };

  return (
    <div className="contacts_section">
      <img src="/assets/Contact_assets/contact_photo.avif" className="contact_photo" />

      <form className="contact_form" onSubmit={onSubmit}>
        <div className="contacts_items">
          <span className="contacts_title">Booking</span>

          <div className="contacts_text">
            <div className="form">
              <input placeholder="" id="name" name="name" type="text" autoComplete="off" required />

              <label htmlFor="name" className="label-name">
                <span className="content-name">Имя *</span>
              </label>
            </div>
          </div>

          <div className="contacts_text">
            <div className="form">
              <input placeholder="" id="email" name="email" type="email" autoComplete="off" required />

              <label htmlFor="email" className="label-name">
                <span className="content-name">Email *</span>
              </label>
            </div>
          </div>

          <div className="contacts_text">
            <div className="form">
              <input placeholder="" id="message" name="phone" type="text" autoComplete="off" required />

              <label htmlFor="message" className="label-name">
                <span className="content-name">Ваш телефон *</span>
              </label>
            </div>
          </div>
          <div className="contacts_text">
            <div className="form">
              <input placeholder="" id="message" name="socila_media" type="text" autoComplete="off" />

              <label htmlFor="social_media" className="label-name">
                <span className="content-name">Ссылка на социальную сеть</span>
              </label>
            </div>
          </div>
          <div className="contacts_text">
            <div className="form">
              <input placeholder="" id="message" name="date" type="text" autoComplete="off" required />

              <label htmlFor="message" className="label-name">
                <span className="content-name">Дата события *</span>
              </label>
            </div>
          </div>
          <div className="contacts_text">
            <div className="form">
              <input placeholder="" id="message" name="message" type="text" autoComplete="off" />

              <label htmlFor="message" className="label-name">
                <span className="content-name">Сообщение</span>
              </label>
            </div>
          </div>
          <button type="submit">Отправить</button>
        </div>
      </form>
    </div>
  );
}

export default Contacts;
