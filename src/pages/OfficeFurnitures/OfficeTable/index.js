import Header from "~/components/Layouts/DefaultLayout/Header";
import Navigation from "~/components/Layouts/DefaultLayout/Navigation";

import classNames from "classnames/bind";
import styles from "./OfficeTable.module.scss";
import { Link } from "react-router-dom";
import config from "~/config";
import Contact from "~/components/Layouts/DefaultLayout/Contact";
import Footer from "~/components/Layouts/DefaultLayout/Footer";
import { officeTable } from "~/pages/datas";
import RenderProduct from "~/components/Layouts/component/Filter";

const cx = classNames.bind(styles);

function OfficeTable() {
  return (
    <div>
      <Header />
      <Navigation />

      <div className={cx("officeTableHeader")}>
        <h1>OFFICE TABLE</h1>
        <div className={cx("link")}>
          <Link to={config.routes.home} className={cx("linkHome")}>
            HOME
          </Link>{" "}
          <span>/ OFFICE TABLE</span>
        </div>
      </div>

      <RenderProduct data={officeTable} count={officeTable.length} />

      <Contact />
      <Footer />
    </div>
  );
}

export default OfficeTable;
