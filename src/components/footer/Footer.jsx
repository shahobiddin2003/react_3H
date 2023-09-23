import React, { Component } from "react";
import "./footer.scss";
import { Logo, facebook, linkedn, vk } from "../../assets/images/index_img";
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div className="footer_top d-flex justify-content-between align-items-center">
          <div className="logo">
            <a href="/" className="logo_href">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <div className="footer_websites d-flex gap-3">
            <a href="vkontakte.com" className="logo_href">
              <img src={vk} alt="logo" />
            </a>
            <a href="facebook.com" className="logo_href">
              <img src={facebook} alt="logo" />
            </a>
            <a href="linkedn.com" className="logo_href">
              <img src={linkedn} alt="logo" />
            </a>
          </div>
        </div>
        <hr />
        <div className="footer_main d-flex  justify-content-between">
          <div className="products">
            <h3 className="title">Продукты</h3>
            <p className="product_options">Ламинатные тубы</p>
            <p className="product_options">Экструзионные тубы </p>
            <p className="product_options">Другая упаковка </p>
          </div>
          <div className="company">
            <h3 className="title">Компания</h3>
            <p className="company_options">О нас</p>
            <p className="company_options">Наша команда </p>
            <p className="company_options">Сертификаты </p>
          </div>
          <div className="info">
            <h3 className="title">Разделы</h3>
            <p className="info_options">Контакты </p>
            <p className="info_options">Новости </p>
            <p className="info_options">Вакансии </p>
          </div>
          <div className="contacts">
            <div className="country">
              <h6 className="country_name">Беларусь</h6>
              <p className="number">+375 (17) 270 53 77</p>
              <p className="number">+375 (17) 270 53 78</p>
            </div>
            <div className="country">
              <h6 className="country_name">Москва</h6>
              <p className="number">+7 (495) 280 73 44</p>
              <p className="number">+7 (495) 280 73 44</p>
            </div>
          </div>
          <div className="contacts">
            <div className="country">
              <h6 className="country_name">Европа</h6>
              <p className="number">+48 73 1111 044</p>
            </div>
            <div className="country">
              <h6 className="country_name">Екатеринбург</h6>
              <p className="number">+7 (343) 346 82 06</p>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <p className="author">
            © 2022 Leangroup. All Rights Reserved. <br />
            Разработка и продвижение сайтов SkyWeb.by
          </p>
        </div>
      </footer>
    );
  }
}
