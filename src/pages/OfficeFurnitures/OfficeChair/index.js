import Header from "~/components/Layouts/DefaultLayout/Header";
import Navigation from "~/components/Layouts/DefaultLayout/Navigation";

import classNames from "classnames/bind";
import styles from "./OfficeChair.module.scss";
import { Link } from "react-router-dom";
import config from "~/config";
import Contact from "~/components/Layouts/DefaultLayout/Contact";
import Footer from "~/components/Layouts/DefaultLayout/Footer";
import { officeChair } from "~/pages/datas";
import RenderProduct from "~/components/Layouts/component/Filter";

const cx = classNames.bind(styles);

function OfficeChair() {
  return (
    <div>
      <Header />
      <Navigation />

      <div className={cx("officeChairHeader")}>
        <h1>OFFICE CHAIR</h1>
        <div className={cx("link")}>
          <Link to={config.routes.home} className={cx("linkHome")}>
            HOME
          </Link>{" "}
          <span>/ OFFICE CHAIR</span>
        </div>
      </div>

      <RenderProduct data={officeChair} count={officeChair.length} />

      <Contact />
      <Footer />
    </div>
  );
}

export default OfficeChair;
