import Header from "~/components/Layouts/DefaultLayout/Header";
import Navigation from "~/components/Layouts/DefaultLayout/Navigation";

import classNames from "classnames/bind";
import styles from "./SignUp.module.scss";
import { Link } from "react-router-dom";
import config from "~/config";
import Contact from "~/components/Layouts/DefaultLayout/Contact";
import Footer from "~/components/Layouts/DefaultLayout/Footer";
import { hospitalBed } from "~/pages/datas";
import RenderProduct from "~/components/Layouts/component/Filter";
import { useState } from "react";

const cx = classNames.bind(styles);

function SignUp() {
  return (
    <div>
      <Header />
      <Navigation />

      <div className={cx("loginBedHeader")}>
        <h1>LOGIN</h1>
        <div className={cx("link")}>
          <Link to={config.routes.home} className={cx("linkHome")}>
            HOME
          </Link>{" "}
          <span>/ SIGN UP</span>
        </div>
      </div>

      <div className={cx("wrapperLogin")}>
        <div className={cx("login")}>
          <form className={cx("formLogin")}>
            <div className={cx("name")}>
              <div className={cx("firstName")}>
                <label htmlFor="txtFirstName" className={cx("firstNameTitle")}>
                  First Name *
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
                  Last Name *
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
            <div className={cx("email")}>
              <label htmlFor="email" className={cx("emailTitle")}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={cx("emailInput")}
                required
              />
            </div>
            <div className={cx("phone")}>
              <label htmlFor="phone" className={cx("phoneTitle")}>
                Phone *
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className={cx("phoneInput")}
                required
              />
            </div>
            <div className={cx("password")}>
              <label htmlFor="password" className={cx("passwordTitle")}>
                Password *
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={cx("passwordsInput")}
                required
              />
            </div>
            <div className={cx("confirmPassword")}>
              <label
                htmlFor="rePassword"
                className={cx("confirmPasswordTitle")}
              >
                Confirm Password *
              </label>
              <input
                type="Password"
                id="rePassword"
                name="confirmPassword"
                className={cx("confirmPasswordInput")}
                required
              />
            </div>
            <div className={cx("confirm")}>
              <input
                type="checkbox"
                id="confirm"
                name="confirm"
                className={cx("confirmInput")}
                required
              />
              <label htmlFor="confirm" className={cx("confirmText")}>
                I've read and accept the Privacy Policy
              </label>
            </div>
            <div className={cx("des")}>
              <p className={cx("txtDes")}>
                By signing up, you agree to our{" "}
                <a className={cx("linkDes")} href="#">
                  Terms of Service
                </a>
                . Learn how we collect and use your data in our{" "}
                <a className={cx("linkDes")} href="#">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
            <div className={cx("SignUp")}>
              <button type="submit" className={cx("btnSignUp")}>
                SIGNUP
              </button>
            </div>

            <div className={cx("btnOther")}>
              <a href="#" className={cx("linkSignin")}>
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

export default SignUp;
