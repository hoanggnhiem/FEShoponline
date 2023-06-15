import { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";
import styles from "./Products.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import {
  faCompress,
  faCartShopping,
  faCircleCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Toast from "../Layouts/component/toast";
import { Link } from "react-router-dom";
import routes from "~/config/routes";
import { productDetails } from "~/pages/datas";
import config from "~/config";

const cx = classNames.bind(styles);

function Products({ dataProducts, name }) {
  const [list, setList] = useState([]);
  let toastProps = null;
  const [proDetail, setProDetail] = useState();
  const [stateAdd, setStateAdd] = useState(false);
  const [stateAddCompare, setStateAddCompare] = useState(false);
  const [currentIndex, setCurrentIndex] = useState([]);

  const toggleActiveAdd = (index) => {
    const e = document.querySelectorAll(`.${cx("like")}.${cx(name)}`);
    setCurrentIndex(index);
    const checkClass = e[index].firstChild.classList.contains(cx("active"));

    if (checkClass) {
      setStateAdd(false);
      e[index].firstChild.classList.remove(cx("active"));
      showToast("removeCart");
    } else {
      setStateAdd(true);
      e[index].firstChild.classList.add(cx("active"));
      showToast("addCart");
    }
  };
  const toggleActiveAddCompare = (index) => {
    const e = document.querySelectorAll(`.${cx("compare")}.${cx(name)}`);
    setCurrentIndex(index);
    const checkClass = e[index].firstChild.classList.contains(cx("active"));

    if (checkClass) {
      setStateAddCompare(false);
      e[index].firstChild.classList.remove(cx("active"));
      showToast("removeCompare");
    } else {
      setStateAddCompare(true);
      e[index].firstChild.classList.add(cx("active"));
      showToast("addCompare");
    }
  };
  const showToast = (type) => {
    switch (type) {
      case "addCart":
        toastProps = {
          id: list.length + 1,
          title: "Add To Cart",
          state: "success",
          des: "This product had added to cart",
          icon: <FontAwesomeIcon icon={faCircleCheck} />,
        };

        break;
      case "removeCart":
        toastProps = {
          id: list.length + 1,
          title: "Remove From Cart",
          des: "This product had removed from compare",
          state: "remove",
          icon: <FontAwesomeIcon icon={faTimes} />,
        };
        break;
      case "addCompare":
        toastProps = {
          id: list.length + 1,
          title: "Add to Compare",
          des: "This product had added to compare",
          state: "success",
          icon: <FontAwesomeIcon icon={faCircleCheck} />,
        };
        break;
      case "removeCompare":
        toastProps = {
          id: list.length + 1,
          title: "Remove To Compare",
          des: "This product had removed from compare",
          state: "remove",
          icon: <FontAwesomeIcon icon={faTimes} />,
        };
        break;
      default:
        toastProps = [];
    }
    setList([...list, toastProps]);
  };

  const handleClick = (index) => {
    const JSON_STORAGE_KEY = "proDetail";

    if (productDetails.length > 0) {
      productDetails[0] = dataProducts[index];
      localStorage.setItem(JSON_STORAGE_KEY, JSON.stringify(productDetails));
    } else {
      productDetails.push(dataProducts[index]);

      localStorage.setItem(JSON_STORAGE_KEY, JSON.stringify(productDetails));
    }
  };
  return (
    <div className={cx("wrapper", "grid", "wide")}>
      <div className={cx("row")}>
        {dataProducts.map((item, index) => {
          return (
            <div key={index} className={cx("col", "l-3", "container")}>
              <div className={cx("img-content")}>
                <div className={cx("wrapper-img")}>
                  <a href="#">
                    <img className={cx("img")} src={item.img} alt="products" />
                  </a>
                </div>
                <div className={cx("discount-wrapper")}>
                  {item.discount ? (
                    <span className={cx("discount")}>{item.discount}</span>
                  ) : null}
                  {item.stockOut ? (
                    <span className={cx("stockOut")}>STOCK OUT</span>
                  ) : null}
                </div>

                <div className={cx("action-wrapper")}>
                  <span className={cx("like", name)}>
                    <Tippy
                      className={cx("tippy")}
                      placement="left"
                      content="Add to WishList"
                    >
                      <button
                        onClick={(e) => {
                          toggleActiveAdd(index);
                        }}
                        className={cx("btnLike")}
                      >
                        <FontAwesomeIcon
                          className={cx("heartIcon")}
                          icon={faHeart}
                        />{" "}
                      </button>
                    </Tippy>
                  </span>

                  <span className={cx("zoom", name)}>
                    <Tippy
                      className={cx("tippy")}
                      placement="left"
                      content="Quick View"
                    >
                      <button className={cx("btnZoom")}>
                        <FontAwesomeIcon
                          className={cx("zoomIcon")}
                          icon={faCompress}
                        />{" "}
                      </button>
                    </Tippy>
                  </span>
                  <span className={cx("compare", name)}>
                    <Tippy
                      className={cx("tippy")}
                      placement="left"
                      content="Add to Compare"
                    >
                      <button
                        onClick={(e) => {
                          toggleActiveAddCompare(index);
                        }}
                        className={cx("btnAddCompare")}
                      >
                        <FontAwesomeIcon
                          className={cx("addCompareIcon")}
                          icon={faSquarePlus}
                        />{" "}
                      </button>
                    </Tippy>
                  </span>
                </div>

                <div className={cx("addToCart")}>
                  {item.stockOut ? (
                    <button className={cx("btnStockOut")} disabled>
                      <FontAwesomeIcon
                        className={cx("addIcon")}
                        icon={faCartShopping}
                      />
                      Out of Stock
                    </button>
                  ) : (
                    <Link
                      to={config.routes.productdetails}
                      className={cx("btnAdd")}
                      onClick={(e) => {
                        handleClick(index);
                      }}
                    >
                      <FontAwesomeIcon
                        className={cx("addIcon")}
                        icon={faCartShopping}
                      />
                      Select Options
                    </Link>
                  )}
                </div>
              </div>

              <div className={cx("des")}>
                <a href="#" className={cx("title-des")}>
                  {item.title}
                </a>
                <div className={cx("cost")}>
                  <span className={cx("old-cost")}>{item.oldCost}</span>
                  <span className={cx("new-cost")}>${item.newCost}</span>
                </div>
              </div>
            </div>
          );
        })}
        <Toast toastList={list} setList={setList} />
      </div>
    </div>
  );
}

export default Products;
