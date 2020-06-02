import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-2">ghbdrgb</div>
          <div className="row">
            <div className="col-md-6">
              <nav>
                <ul className="menu2 row">
                  <li><a href="url">Главная</a></li>
                  <li><a href="url">Наши работы</a></li>
                  <li><a href="url">Отзывы</a></li>
                  <li><a href="url">Цены и услуги</a></li>
                  <li><a href="url">Новости</a></li>
                  <li><a href="url">Контакты</a></li>
                </ul>
              </nav>
            </div>
            <div className="row">
              <div className="col-md-2">
                <div className="contacts">
                  <div>+38(093) 788-98-98</div>
                  <div>smm-lab-group</div>
                  <div>info@smm-lab.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
