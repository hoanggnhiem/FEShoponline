import Header from "~/components/Layouts/DefaultLayout/Header";
import Navigation from "~/components/Layouts/DefaultLayout/Navigation";

import classNames from "classnames/bind";
import styles from "./Lounge.module.scss";
import { Link } from "react-router-dom";
import config from "~/config";
import Contact from "~/components/Layouts/DefaultLayout/Contact";
import Footer from "~/components/Layouts/DefaultLayout/Footer";
import { lounge } from "~/pages/datas";
import RenderProduct from "~/components/Layouts/component/Filter";

const cx = classNames.bind(styles);

function Lounge() {
  return (
    <div>
      <Header />
      <Navigation />

      <div className={cx("loungeHeader")}>
        <h1>LOUNGE</h1>
        <div className={cx("link")}>
          <Link to={config.routes.home} className={cx("linkHome")}>
            HOME
          </Link>{" "}
          <span>/ LOUNGE</span>
        </div>
      </div>

      <RenderProduct data={lounge} count={lounge.length} />

      <Contact />
      <Footer />
    </div>
  );
}

export default Lounge;
