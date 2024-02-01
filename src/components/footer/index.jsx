import React from "react";
import "./style.css";
import Twitter from "../../assets /icon/twitterr.png";
import Facebook from "../../assets /icon/facebook.png";
import Instagram from "../../assets /icon/instagram.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__col">
        <ul className="footer__col-list">
          <li className="footer__col-list-item">
            <a className="footer__col-list-item-link" href="#">
              Home
            </a>
          </li>
          <li className="footer__col-list-item">
            <a className="footer__col-list-item-link" href="#">
              Contact us
            </a>
          </li>
          <li className="footer__col-list-item">
            <a className="footer__col-list-item-link" href="#">
              About us
            </a>
          </li>
          <li className="footer__col-list-item">
            <a className="footer__col-list-item-link" href="#">
              Payments & delivery
            </a>
          </li>
        </ul>

        <ul className="footer__col-list">
          <p>Need help?</p>
          <a className="footer__col-list-item-link" href="#">
            help@augustine.com
          </a>
          <div className="footer__col-list-icon">
            <a href="#">
              <img src={Twitter} alt="twitter" />
            </a>
            <a href="#">
              <img src={Facebook} alt="facebook" />
            </a>
            <a href="#">
              <img src={Instagram} alt="instagram" />
            </a>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
