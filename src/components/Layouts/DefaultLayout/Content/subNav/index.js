import classNames from "classnames/bind";
import imagesCircle from "~/assets/images/circleMenu";
import styles from "./Subnav.module.scss";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const cx = classNames.bind(styles);

function Subnav() {
  const datas = [
    {
      id: 1,
      title: "Bedroom",
      img: imagesCircle.bedroom,
    },
    {
      id: 1,
      title: "Living",
      img: imagesCircle.living,
    },
    {
      id: 1,
      title: "Dining",
      img: imagesCircle.dining,
    },
    {
      id: 1,
      title: "Lounge",
      img: imagesCircle.lounge,
    },
    {
      id: 1,
      title: "Office Chair",
      img: imagesCircle.officechair,
    },
  ];

  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        {datas.map((item, index) => {
          return (
            <div key={index} className={cx("swiper-slide")}>
              <div className={cx("container")}>
                <a href="#" className={cx("linkSlide")}>
                  <div className={cx("containerSlide")}>
                    <img
                      className={cx("img")}
                      src={item.img}
                      alt="slideSwiper"
                    />
                    <h4 className={cx("title")}>{item.title}</h4>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Subnav;
