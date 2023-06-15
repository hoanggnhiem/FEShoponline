import Header from "~/components/Layouts/DefaultLayout/Header";
import Navigation from "~/components/Layouts/DefaultLayout/Navigation";

import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import config from "~/config";
import routes from "~/config/routes";

import Contact from "~/components/Layouts/DefaultLayout/Contact";
import Footer from "~/components/Layouts/DefaultLayout/Footer";

const cx = classNames.bind(styles);

function Login() {
  return (
    <div>
      <Header />
      <Navigation />

      <div className={cx("loginHeader")}>
        <h1>LOGIN</h1>
        <div className={cx("link")}>
          <Link to={config.routes.home} className={cx("linkHome")}>
            HOME
          </Link>{" "}
          <span>/ LOGIN</span>
        </div>
      </div>

      <div className={cx("wrapperLogin")}>
        <div className={cx("login")}>
          <form className={cx("formLogin")}>
            <div className={cx("email")}>
              <p className={cx("emailTitle")}>Email *</p>
              <input
                type="email"
                name="email"
                className={cx("emailInput")}
                required
              />
            </div>
            <div className={cx("password")}>
              <p className={cx("passwordTitle")}>Password *</p>
              <input
                type="password"
                name="password"
                className={cx("passwordsInput")}
                required
              />
            </div>
            <div className={cx("Singin")}>
              <button type="submit" className={cx("btnSingin")}>
                SIGNIN
              </button>
            </div>

            <div className={cx("btnOther")}>
              <Link to={routes.signup} href="#" className={cx("linkCreate")}>
                CREATE A ACCOUNT
              </Link>
              <a href="#" className={cx("linkForget")}>
                FORGET PASSWORD?
              </a>
            </div>
          </form>
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
}

export default Login;
