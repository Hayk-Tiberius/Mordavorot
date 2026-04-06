import { Link } from "react-router-dom";
// import service1 from "../assets/img/services_page/services_photo.jpg";
// import service2 from "../assets/img/services_page/services_video.jpg";
// import service3 from "../assets/img/services_page/services_ai.jpg";

function Services() {
  return (
    <>
      <div className="services">
        <div className="services_title">{"{ Услуги }"}</div>
        <div className="services_container">
          <div className="services_items">
            <div className="services_items_photo">{/* <img src={service1} alt="" /> */}</div>
            <div className="services_items_text">
              <span className="services_items_text_title">Фото</span>
              <span className="services_items_text_info">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ipsa sunt, sed nihil
                dicta, sit itaque illo aliquid sapiente quia necessitatibus quasi vitae impedit
                aperiam dignissimos laborum consequatur dolorum. Non. Nemo error ipsum cumque quam
                voluptatibus nesciunt mollitia ex, similique non fugit soluta aut quas dolorum
                reiciendis?
              </span>
              <Link to="/contacts">
                <button type="submit" className="btn-17">
                  <span className="text-container">
                    <span className="text">Отправить заявку</span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="services_items">
            <div className="services_items_photo">{/* <img src={service2} alt="" /> */}</div>
            <div className="services_items_text">
              <span className="services_items_text_title">Видео</span>
              <span className="services_items_text_info">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ipsa sunt, sed nihil
                dicta, sit itaque illo aliquid sapiente quia necessitatibus quasi vitae impedit
                aperiam dignissimos laborum consequatur dolorum. Non. Nemo error ipsum cumque quam
                voluptatibus nesciunt mollitia ex, similique non fugit soluta aut quas dolorum
                reiciendis?
              </span>
              <Link to="/contacts">
                <button type="submit" className="btn-17">
                  <span className="text-container">
                    <span className="text">Отправить заявку</span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="services_items">
            <div className="services_items_photo">
              {/* <img className="photo_test" src={service3} alt="" /> */}
            </div>
            <div className="services_items_text">
              <span className="services_items_text_title">ИИ</span>
              <span className="services_items_text_info">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ipsa sunt, sed nihil
                dicta, sit itaque illo aliquid sapiente quia necessitatibus quasi vitae impedit
                aperiam dignissimos laborum consequatur dolorum. Non. Nemo error ipsum cumque quam
                voluptatibus nesciunt mollitia ex, similique non fugit soluta aut quas dolorum
                reiciendis?
              </span>
              <Link to="/contacts">
                <button type="submit" className="btn-17">
                  <span className="text-container">
                    <span className="text">Отправить заявку</span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
