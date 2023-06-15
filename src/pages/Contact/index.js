import Header from "~/components/Layouts/DefaultLayout/Header";
import Navigation from "~/components/Layouts/DefaultLayout/Navigation";

import classNames from "classnames/bind";
import styles from "./ContactPage.module.scss";
import { Link } from "react-router-dom";
import config from "~/config";
import routes from "~/config/routes";

import Contact from "~/components/Layouts/DefaultLayout/Contact";
import Footer from "~/components/Layouts/DefaultLayout/Footer";

const cx = classNames.bind(styles);

function ContactPage() {
  return (
    <div>
      <Header />
      <Navigation />

      <div className={cx("contactHeader")}>
        <h1>CONTACT</h1>
        <div className={cx("link")}>
          <Link to={config.routes.home} className={cx("linkHome")}>
            HOME
          </Link>{" "}
          <span>/ LOGIN</span>
        </div>
      </div>
      <div className={cx("wrapper")}>
        <div className={cx("contactInfo")}>
          <h1 className={cx("h1")}> Contact Info</h1>
          <div className={cx("phone")}>
            <div className={cx("phoneTitle")}>Phone:</div>
            <div className={cx("phoneNumbers")}>
              <a href="tel:+8433 444 5678" className={cx("phoneNumber")}>
                +8433 444 5678
              </a>
              <a href="tel:+8499 878 9999" className={cx("phoneNumber")}>
                +8499 878 9999
              </a>
            </div>
          </div>
          <div className={cx("email")}>
            <div className={cx("emailTitle")}>email:</div>
            <div className={cx("emailAddresses")}>
              <a
                href="mailto:hoangnx22@gmail.com"
                className={cx("emailAddress")}
              >
                hoangnx22@gmail.com
              </a>
              <a
                href="mailto:hoangnx23@gmail.com"
                className={cx("emailAddress")}
              >
                hoangnx23@gmail.com
              </a>
            </div>
          </div>
          <div className={cx("address")}>
            <div className={cx("addressTitle")}>address:</div>
            <div className={cx("txtAddresses")}>
              <p className={cx("txtAddress")}>TP Hà Nội,</p>
              <p className={cx("txtAddress")}>TP Từ Sơn</p>
            </div>
          </div>
        </div>
        <form className={cx("getInTouch")}>
          <h1 className={cx("h1")}>Get In Touch</h1>
          <div className={cx("name")}>
            <div className={cx("firstName")}>
              <label htmlFor="txtFirstName" className={cx("firstNameTitle")}>
                First Name
              </label>
              <input
                type="text"
                id="txtFirstName"
                name="txtName"
                className={cx("nameInput")}
                required
              />
            </div>
            <div className={cx("lastName")}>
              <label htmlFor="txtLastName" className={cx("lastNameTitle")}>
                Last Name
              </label>
              <input
                type="text"
                id="txtLastName"
                name="txtName"
                className={cx("nameInput")}
                required
              />
            </div>
          </div>
          <div className={cx("subject")}>
            <label htmlFor="subject" className={cx("subjectTitle")}>
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className={cx("subjectInput")}
            />
          </div>
          <div className={cx("message")}>
            <label htmlFor="message" className={cx("messageTitle")}>
              Message
            </label>
            <textarea
              rows={8}
              name="message"
              id="message"
              className={cx("messageInput")}
              required
            />
          </div>

          <button type="submit" className={cx("btnSend")}>
            SEND MESSAGE
          </button>
        </form>
      </div>

      <Contact />
      <Footer />
    </div>
  );
}

export default ContactPage;
