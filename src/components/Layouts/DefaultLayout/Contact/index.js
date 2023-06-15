import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  // faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);

function Contact() {
  const onClickNavigate = (link)=> {
    window.open(link, "_blank");
  };

  return (
    <div className={cx("contact")}>
      <div className={cx("container")}>
        <div className={cx("aboutUs")}>
          <h2 className={cx("title")}>ABOUT US</h2>
          <p className={cx("des")}>
            Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
            incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud.
          </p>
          <div className={cx("socialIcon")}>
            <button
              className={cx("iconBtn")}
              onClick={() => onClickNavigate("https://fb.com")}
            >
              <FontAwesomeIcon className={cx("iconLink")} icon={faFacebook} />
            </button>
            <button
              className={cx("iconBtn")}
              onClick={() => onClickNavigate("https://twitter.com")}
            >
              <FontAwesomeIcon className={cx("iconLink")} icon={faTwitter} />
            </button>
            <button
              className={cx("iconBtn")}
              onClick={() => onClickNavigate("https://instagram.com")}
            >
              <FontAwesomeIcon className={cx("iconLink")} icon={faInstagram} />
            </button>
            <button
              className={cx("iconBtn")}
              onClick={() => onClickNavigate("https://youtube.com")}
            >
              <FontAwesomeIcon className={cx("iconLink")} icon={faYoutube} />
            </button>
            {/* <button className={cx("iconBtn")}>
              <FontAwesomeIcon className={cx("iconLink")} icon={faPinterest} />
            </button> */}
          </div>
        </div>
        {/* <div className={cx("infomation")}>
          <h2 className={cx("title")}>IMFORMATION</h2>
          <ul className={cx("listInfo")}>
            <li className={cx("infoItem")}>
              <a className={cx("infoLink")} href="about">
                About Us
              </a>
            </li>
            <li className={cx("infoItem")}>
              <a className={cx("infoLink")} href="login">
                Manufactures
              </a>
            </li>
            <li className={cx("infoItem")}>
              <a className={cx("infoLink")} href="cartpage">
                Tracking Oders
              </a>
            </li>
            <li className={cx("infoItem")}>
              <a className={cx("infoLink")} href="#">
                Privacy & Policy
              </a>
            </li>
            <li className={cx("infoItem")}>
              <a className={cx("infoLink")} href="#">
                Term & Conditions
              </a>
            </li>
          </ul>
        </div> */}
        <div className={cx("account")}>
          <h2 className={cx("title")}>MY ACCOUNT</h2>
          <ul className={cx("listAccount")}>
            <li className={cx("accountItem")}>
              <a className={cx("accountLink")} href="login">
                Login
              </a>
            </li>
            <li className={cx("accountItem")}>
              <a className={cx("accountLink")} href="cartpage">
                My Cart
              </a>
            </li>
            <li className={cx("accountItem")}>
              <a className={cx("accountLink")} href="#">
                Wishlist
              </a>
            </li>
            <li className={cx("accountItem")}>
              <a className={cx("accountLink")} href="#">
                Compare
              </a>
            </li>
            <li className={cx("accountItem")}>
              <a className={cx("accountLink")} href="login">
                My Account
              </a>
            </li>
          </ul>
        </div>
        <div className={cx("newLetters")}>
          <h2 className={cx("title")}>NEWLETTERS</h2>
          <div className={cx("divSub")}>
            <input
              className={cx("input")}
              type="text"
              placeholder="Enter E-Mail Edress"
            />
            <button className={cx("btnSub")}> Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;