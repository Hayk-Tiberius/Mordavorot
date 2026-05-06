import "./main.css";
import { CIcon } from "@coreui/icons-react";
import { cibTelegram, cibInstagram } from "@coreui/icons";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <main>
      <section className="section1">
        <div className="menu">
          <span>
            <Link to="/">Главная</Link>
          </span>
          <span>
            <Link to="/gallery">Галерея</Link>
          </span>
          <span>
            <Link to="/about">Обо мне</Link>
          </span>
          <span>
            <Link to="/services">Услуги</Link>
          </span>
          <span>
            <Link to="/contacts">Контакты</Link>
          </span>
        </div>
        <div>
          <span className="all_photos">All</span>
        </div>
        <div className="author_name">Mordavorot</div>
      </section>

      <section className="section2">
        <Outlet />
      </section>

      <section className="section3">
        <span className="email_text">
          <a href="mailto:I@mordavorot.ru">I@mordavorot.ru</a>
        </span>
        <div className="icons">
          <CIcon className="icon_item" icon={cibTelegram} />
          <CIcon icon={cibInstagram} />
        </div>
        <span>
          *Профиль в Instagram, соцсеть признана <br /> экстремистской организацией и запрещена в РФ
        </span>
      </section>
    </main>
  );
}

export default App;
