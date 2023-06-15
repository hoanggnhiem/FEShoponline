import Header from "~/components/Layouts/DefaultLayout/Header";
import Navigation from "~/components/Layouts/DefaultLayout/Navigation";

import classNames from "classnames/bind";
import styles from "./About.module.scss";
import { Link } from "react-router-dom";
import config from "~/config";
import Contact from "~/components/Layouts/DefaultLayout/Contact";
import Footer from "~/components/Layouts/DefaultLayout/Footer";

const cx = classNames.bind(styles);

function About() {
  return (
    <div>
      <Header />
      <Navigation />

      <div className={cx("aboutHeader")}>
        <h1>ABOUT US</h1>
        <div className={cx("link")}>
          <Link to={config.routes.home} className={cx("linkHome")}>
            HOME
          </Link>{" "}
          <span>/ ABOUT</span>
        </div>
      </div>

      <div className={cx("wrapper")}>
        <div className={cx("titleAbout")}>
          <h1>
            Furns is a global furniture destination for somethings. We sell
            cutting-edge furniture and offer a wide variety of fashion-related
            content.
          </h1>
        </div>
      </div>

      <div className={cx("images")}>
        <div className={cx("image")}>
          <img src="https://furns-react.netlify.app/_next/image?url=%2Fimages%2Fabout%2F02.jpg&w=1080&q=75" />
        </div>
        <div className={cx("image")}>
          <img src="https://furns-react.netlify.app/_next/image?url=%2Fimages%2Fabout%2F01.jpg&w=1080&q=75" />
        </div>
      </div>
      <div className={cx("desWapper")}>
        <div className={cx("des")}>
          <h3 className={cx("desTitle")}>OUR STORES</h3>
          <p className={cx("desContent")}>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet
            conse ctetur adipisicing elit, sed do eiusmod tempor.
          </p>
        </div>
        <div className={cx("des")}>
          <h3 className={cx("desTitle")}>OUR MISSION</h3>
          <p className={cx("desContent")}>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet
            conse ctetur adipisicing elit, sed do eiusmod tempor.
          </p>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default About;
