import Header from "~/components/Layouts/DefaultLayout/Header";
import Navigation from "~/components/Layouts/DefaultLayout/Navigation";

import classNames from "classnames/bind";
import styles from "./HospitalUtility.module.scss";
import { Link } from "react-router-dom";
import config from "~/config";
import Contact from "~/components/Layouts/DefaultLayout/Contact";
import Footer from "~/components/Layouts/DefaultLayout/Footer";
import { hospitalUtility } from "~/pages/datas";
import RenderProduct from "~/components/Layouts/component/Filter";

const cx = classNames.bind(styles);

function HospitalUtility() {
  return (
    <div>
      <Header />
      <Navigation />

      <div className={cx("hospitalUtilityHeader")}>
        <h1>HOSPITAL UTILITY</h1>
        <div className={cx("link")}>
          <Link to={config.routes.home} className={cx("linkHome")}>
            HOME
          </Link>{" "}
          <span>/ HOSPITAL UTILITY</span>
        </div>
      </div>

      <RenderProduct data={hospitalUtility} count={hospitalUtility.length} />

      <Contact />
      <Footer />
    </div>
  );
}

export default HospitalUtility;
