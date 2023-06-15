import Header from "~/components/Layouts/DefaultLayout/Header";
import Navigation from "~/components/Layouts/DefaultLayout/Navigation";

import classNames from "classnames/bind";
import styles from "./Dining.module.scss";
import { Link } from "react-router-dom";
import config from "~/config";
import Contact from "~/components/Layouts/DefaultLayout/Contact";
import Footer from "~/components/Layouts/DefaultLayout/Footer";
import { dining } from "~/pages/datas";
import RenderProduct from "~/components/Layouts/component/Filter";

const cx = classNames.bind(styles);

function Dining() {
  return (
    <div>
      <Header />
      <Navigation />

      <div className={cx("diningHeader")}>
        <h1>DINING</h1>
        <div className={cx("link")}>
          <Link to={config.routes.home} className={cx("linkHome")}>
            HOME
          </Link>{" "}
          <span>/ DINING</span>
        </div>
      </div>

      <RenderProduct data={dining} count={dining.length} />

      <Contact />
      <Footer />
    </div>
  );
}

export default Dining;
