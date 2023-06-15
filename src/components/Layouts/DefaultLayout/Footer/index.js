import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import ModalCart from "../../component/ModalCart";
const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("Footer")}>
      <div className={cx("wrapper")}>
        <p>© 2023, Furns. </p>
        <img src="https://furns-react.netlify.app/_next/image?url=%2Fimages%2Ficons%2Fpayment.png&w=256&q=75" />
      </div>

      {/* <ModalCart /> */}
    </div>
  );
}

export default Footer;
