import React, { Component } from "react";
import "./header.scss";
import { darkmode, Logo } from "../../assets/images/index_img";
export default class Header extends Component {
  render() {
    return (
      <header className="header py-3">
        <div className="container d-flex justify-content-between">
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <nav className="navbar ">
            <ul className=" nav_list d-flex justify-content-between align-items-center gap-3 ">
              <li className="list_item">
                <a className="list_item_href" href="/">
                  Продукция
                </a>
              </li>
              <li className="list_item">
                <a className="list_item_href" href="/about">
                  Сертификаты
                </a>
              </li>
              <li className="list_item">
                <a className="list_item_href" href="/services">
                  Наша команда
                </a>
              </li>
              <li className="list_item">
                <a className="list_item_href" href="/portfolio">
                  О нас
                </a>
              </li>
              <li className="list_item">
                <a className="list_item_href" href="/contact">
                  Новости
                </a>
              </li>
              <li className="list_item">
                <a className="list_item_href" href="/contact">
                  Вакансии
                </a>
              </li>
              <li className="list_item">
                <a className="list_item_href" href="/contact">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
          <div className="mode-btn">
            <a href="/contact">
              <img width={32} src={darkmode} alt="mode" />
            </a>
          </div>
        </div>
      </header>
    );
  }
}
