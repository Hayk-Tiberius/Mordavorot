import gallery1 from "../assets/img/gallery_page/gallery1.jpg";
import gallery2 from "../assets/img/gallery_page/gallery2.jpg";
import gallery3 from "../assets/img/gallery_page/gallery3.jpg";
import gallery4 from "../assets/img/gallery_page/gallery4.jpg";

function Gallery() {
  return (
    <>
      <div className="gallery">
        <div className="gallery_title">{"{ Галерея }"}</div>
        <div className="gallery_container">
          <div className="gallery_items">
            <span className="gallery_items_text">СТРИТ</span>
            <img src={gallery1} alt="" />
          </div>
          <div className="gallery_items">
            <span className="gallery_items_text">
              ФОТО- <br /> СЕССИЯ
            </span>
            <img src={gallery2} alt="" />
          </div>
          <div className="gallery_items">
            <span className="gallery_items_text">
              ФОТО- <br /> КНИГА
            </span>
            <img src={gallery3} alt="" />
          </div>
          <div className="gallery_items">
            <span className="gallery_items_text">ИИ</span>
            <img src={gallery4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
