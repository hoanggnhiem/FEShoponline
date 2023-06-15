import styles from "./Banner.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Banner() {
  const datas = [
    {
      id: 1,
      img: "https://furns-react.netlify.app/nextimg/%2Fimages%2Fbanner%2F1.jpg/1920/75?url=%2Fimages%2Fbanner%2F1.jpg&w=1920&q=75",
      title: "Sale Furniture For Summer",
      des: "Great Discounts Here",
    },
    {
      id: 2,
      img: "https://furns-react.netlify.app/nextimg/%2Fimages%2Fbanner%2F2.jpg/1920/75?url=%2Fimages%2Fbanner%2F2.jpg&w=1920&q=75",
      title: "Office Chair For Best Office",
      des: "Great Discounts Here",
    },
  ];
  return (
    <div className={cx("wrapper")}>
      <a className={cx("banner-link-left")} href="#">
        <div className={cx("content")}>
          <img
            src="https://furns-react.netlify.app/nextimg/%2Fimages%2Fbanner%2F1.jpg/1920/75?url=%2Fimages%2Fbanner%2F1.jpg&w=1920&q=75"
            className={cx("img")}
            alt="banner image"
          />
          <div className={cx("link")}>
            <h3 className={cx("title")}>Sale Furniture For Summer</h3>
            <p className={cx("des")}>Great Discounts Here</p>
          </div>
        </div>
      </a>
      <a className={cx("banner-link-right")} href="#">
        <div className={cx("content")}>
          <img
            src="https://furns-react.netlify.app/nextimg/%2Fimages%2Fbanner%2F2.jpg/1920/75?url=%2Fimages%2Fbanner%2F2.jpg&w=1920&q=75"
            className={cx("img")}
            alt="banner image"
          />
          <div className={cx("link")}>
            <h3 className={cx("title")}>Office Chair For Best Office</h3>
            <p className={cx("des")}>Great Discounts Here</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Banner;
