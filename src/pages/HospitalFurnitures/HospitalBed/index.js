import Header from "~/components/Layouts/DefaultLayout/Header";
import Navigation from "~/components/Layouts/DefaultLayout/Navigation";

import classNames from "classnames/bind";
import styles from "./HospitalBed.module.scss";
import { Link } from "react-router-dom";
import config from "~/config";
import Contact from "~/components/Layouts/DefaultLayout/Contact";
import Footer from "~/components/Layouts/DefaultLayout/Footer";
import { hospitalBed } from "~/pages/datas";
import RenderProduct from "~/components/Layouts/component/Filter";

const cx = classNames.bind(styles);

function HospitalBed() {
  return (
    <div>
      <Header />
      <Navigation />

      <div className={cx("hospitalBedHeader")}>
        <h1>HOSPITAL BED</h1>
        <div className={cx("link")}>
          <Link to={config.routes.home} className={cx("linkHome")}>
            HOME
          </Link>{" "}
          <span>/ HOSPITAL BED</span>
        </div>
      </div>

      <RenderProduct data={hospitalBed} count={hospitalBed.length} />

      <Contact />
      <Footer />
    </div>
  );
}

export default HospitalBed;
