import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "tippy.js/dist/tippy.css";

import classNames from "classnames/bind";
import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";
import config from "~/config";
const cx = classNames.bind(styles);

function Navigation() {
  return (
    <div className={cx("wrapper")}>
      <ul className={cx("menu")}>
        <li className={cx("menuTitle")}>
          <Link to={config.routes.home}>Home</Link>
        </li>
        <li className={cx("menuTitle")}>
          <Link to={config.routes.about}>About</Link>
        </li>
        <li className={cx("menuTitle")}>
          <Link to={config.routes.home}>
            Home Furniture
            <FontAwesomeIcon className={cx("down-icon")} icon={faChevronDown} />
          </Link>
          <ul className={cx("menuItem")}>
            <li>
              <Link to={config.routes.bedroom}>Bedroom</Link>
            </li>
            <li>
              <Link to={config.routes.dining}>Dining</Link>
            </li>
            <li>
              <Link to={config.routes.living}>Living</Link>
            </li>
          </ul>
        </li>
        <li className={cx("menuTitle")}>
          <Link to={config.routes.home}>
            Office Furniture
            <FontAwesomeIcon className={cx("down-icon")} icon={faChevronDown} />
          </Link>
          <ul className={cx("menuItem")}>
            <li>
              <Link to={config.routes.lounge}>Lounge</Link>
            </li>
            <li>
              <Link to={config.routes.officechair}>Office Chair</Link>
            </li>
            <li>
              <Link to={config.routes.officetable}>Office Table</Link>
            </li>
          </ul>
        </li>
        <li className={cx("menuTitle")}>
          <Link to={config.routes.home}>
            Hospital Furniture
            <FontAwesomeIcon className={cx("down-icon")} icon={faChevronDown} />
          </Link>
          <ul className={cx("menuItem")}>
            <li>
              <Link to={config.routes.hospitalBed}>Hospital Bed </Link>
            </li>
            <li>
              <Link to={config.routes.hospitalUtility}>Hospital Unility </Link>
            </li>
          </ul>
        </li>
        <li className={cx("menuTitle")}>
          <Link to={config.routes.contact}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
