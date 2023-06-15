import Header from "~/components/Layouts/DefaultLayout/Header";
import Navigation from "~/components/Layouts/DefaultLayout/Navigation";

import classNames from "classnames/bind";
import styles from "./Bedroom.module.scss";
import { Link } from "react-router-dom";
import config from "~/config";
import Contact from "~/components/Layouts/DefaultLayout/Contact";
import Footer from "~/components/Layouts/DefaultLayout/Footer";
import { bedroom } from "~/pages/datas";
import RenderProduct from "~/components/Layouts/component/Filter";

const cx = classNames.bind(styles);

function Bedroom() {
  return (
    <div>
      <Header />
      <Navigation />

      <div className={cx("bedroomHeader")}>
        <h1>BEDROOM</h1>
        <div className={cx("link")}>
          <Link to={config.routes.home} className={cx("linkHome")}>
            HOME
          </Link>{" "}
          <span>/ BEDROOM</span>
        </div>
      </div>

      <RenderProduct data={bedroom} count={bedroom.length} />

      <Contact />
      <Footer />
    </div>
  );
}

export default Bedroom;
