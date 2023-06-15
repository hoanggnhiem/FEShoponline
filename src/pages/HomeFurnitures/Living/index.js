import Header from "~/components/Layouts/DefaultLayout/Header";
import Navigation from "~/components/Layouts/DefaultLayout/Navigation";

import classNames from "classnames/bind";
import styles from "./Living.module.scss";
import { Link } from "react-router-dom";
import config from "~/config";
import Contact from "~/components/Layouts/DefaultLayout/Contact";
import Footer from "~/components/Layouts/DefaultLayout/Footer";
import { living } from "~/pages/datas";
import RenderProduct from "~/components/Layouts/component/Filter";

const cx = classNames.bind(styles);

function Living() {
  return (
    <div>
      <Header />
      <Navigation />

      <div className={cx("livingHeader")}>
        <h1>LIVING</h1>
        <div className={cx("link")}>
          <Link to={config.routes.home} className={cx("linkHome")}>
            HOME
          </Link>{" "}
          <span>/ LIVING</span>
        </div>
      </div>

      <RenderProduct data={living} count={living.length} />

      <Contact />
      <Footer />
    </div>
  );
}

export default Living;
