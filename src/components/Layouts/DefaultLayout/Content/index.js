import classNames from "classnames/bind";
import styles from "./Content.module.scss";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "~/assets/images";
const cx = classNames.bind(styles);

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "-300px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "-300px" }}
      onClick={onClick}
    />
  );
}
function Content() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    appendDots: (dots) => (
      <div
        style={{
          padding: "-90px 0",
        }}
      >
        <ul
          style={{
            bottom: "-90px",
            position: "absolute",
            right: "50%",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
  };
  const dataSlide = [
    {
      id: 1,
      title: "New Products",
      name: "Flexible Chair",
      des: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
      shop: "Shop Now",
      img: images.slider1,
    },
    {
      id: 2,
      title: "Best Seller",
      name: "Creative Sofa",
      des: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
      shop: "Shop Now",
      img: images.slider2,
    },
  ];
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <Slider {...settings}>
          {dataSlide.map((data, index) => {
            return (
              <div key={index} className={cx("container")}>
                <div className={cx("description")}>
                  <h1 className={cx("title")}>{data.title}</h1>
                  <h1 className={cx("name")}>{data.name}</h1>
                  <h1 className={cx("des")}>{data.des}</h1>
                  <a className={cx("buyBtn")} href="#">
                    {data.shop}
                  </a>
                </div>
                <div className={cx("image")}>
                  <img src={data.img} alt="slider" />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Content;
