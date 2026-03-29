import App from "./App";
import main1 from "../assets/img/main_page/main_1.jpg";
import main2 from "../assets/img/main_page/main_2.jpg";
import main3 from "../assets/img/main_page/main_3.jpg";
import main4 from "../assets/img/main_page/main_4.jpg";
import main5 from "../assets/img/main_page/main_5.jpg";
import main6 from "../assets/img/main_page/main_6.jpg";
import { useState } from "react";

function Major() {
  return (
    <>
      <section className="major_section">
        <div className="major_element">
          <img className="major_photo" src={main1} alt="" />
        </div>
        <div className="major_element">
          <img className="major_photo" src={main2} alt="" />
        </div>
        <div className="major_element">
          <img className="major_photo" src={main3} alt="" />
        </div>
        <div className="major_element">
          <img className="major_photo" src={main4} alt="" />
        </div>
        <div className="major_element">
          <img className="major_photo" src={main5} alt="" />
        </div>
        <div className="major_element">
          <img className="major_photo" src={main6} alt="" />
        </div>
      </section>
    </>
  );
}

export default Major;
