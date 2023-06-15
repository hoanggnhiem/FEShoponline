import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./ModalCart.module.scss";
import {
  faTimes,
  faBagShopping,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import carts from "~/datas/dataCarts";
import { useState } from "react";
const cx = classNames.bind(styles);

function ModalCart() {
  const a = carts;

  const [data, setData] = useState(a);
  console.log(a);

  const [totalCost, setTotalCost] = useState(() => {
    var sum = 0;
    data.map((item) => (sum += item.newCost * item.quan));
    return sum;
  });
  var newData;

  const remove = (title) => {
    setData((newData = data.filter((item) => item.title != title)));
    const b = data;
    carts = b;
    setTotalCost(() => {
      var sum = 0;
      newData.map((item) => (sum += item.newCost * item.quan));
      return sum;
    });
  };

  const add = (id) => {
    data.map((item) => {
      if (id === item.id) {
        item.quan += 1;
        setData(() => {
          return data;
        });
        setTotalCost(() => {
          var sum = 0;
          data.map((item) => (sum += item.newCost * item.quan));
          return sum;
        });
      }
    });
  };
  const sub = (id) => {
    data.map((item) => {
      if (id == item.id) {
        if (item.quan > 1) {
          item.quan -= 1;
        } else {
          item.quan = 1;
        }
        setData(() => {
          return data;
        });
        setTotalCost(() => {
          var sum = 0;
          data.map((item) => (sum += item.newCost * item.quan));
          return sum;
        });
      }
    });
  };

  const showModal = () => {
    const cartEl = document.querySelector(cx(`.${cx("cartBtn")}`));
    const modalEl = document.querySelector(cx(`.${cx("cartModal")}`));
    console.log(cartEl);
    modalEl.classList.add(cx("show"));
    cartEl.classList.add(cx("hide"));
  };
  const hideModal = () => {
    const cartEl = document.querySelector(cx(`.${cx("cartBtn")}`));
    const modalEl = document.querySelector(cx(`.${cx("cartModal")}`));
    modalEl.classList.remove(cx("show"));
    cartEl.classList.remove(cx("hide"));
  };
  return (
    <div className={cx("cart")}>
      <button
        className={cx("cartBtn")}
        onClick={() => {
          showModal();
        }}
      >
        <FontAwesomeIcon className={cx("icon")} icon={faCartArrowDown} />
        <span className={cx("counter")}>{data.length} Items</span>
        <span className={cx("cost")}>${totalCost}</span>
      </button>
      <div className={cx("cartModal")}>
        <div className={cx("wrapperModal")}>
          <div className={cx("headerModal")}>
            <h1 className={cx("headerName")}>Cart</h1>
            <FontAwesomeIcon
              onClick={() => {
                hideModal();
              }}
              className={cx("headerIcon")}
              icon={faTimes}
            />
          </div>
          <div className={cx("products")}>
            {totalCost > 0 ? (
              data.map((item, index) => {
                return (
                  <div key={index} className={cx("product")}>
                    <img
                      className={cx("imgProduct")}
                      src={item.img}
                      alt="img"
                    />
                    <div className={cx("content")}>
                      <div className={cx("textContent")}>
                        <div className={cx("nameContent")}>
                          <p className={cx("name")}>{item.title}</p>
                        </div>
                        <div className={cx("cost")}>
                          <p className={cx("costTxt")}>
                            {item.quan} x <span>${item.newCost}</span>
                          </p>
                        </div>
                        <div className={cx("quanity")}>
                          <button
                            className={cx("sub")}
                            onClick={() => {
                              sub(item.id);
                            }}
                          >
                            -
                          </button>
                          <p className={cx("totalQuanity")}>{item.quan}</p>
                          <button
                            onClick={() => {
                              add(item.id);
                            }}
                            className={cx("add")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className={cx("iconContent")}>
                        <FontAwesomeIcon
                          className={cx("iconProduct")}
                          icon={faTimes}
                          onClick={() => {
                            remove(item.title);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className={cx("noProducts")}>
                <FontAwesomeIcon className={cx("icon")} icon={faBagShopping} />
                <h1 className={cx("text")}>There are no products</h1>
              </div>
            )}
            <div className={cx("viewCart")}>
              <div className={cx("wrapperView")}>
                <p className={cx("name")}>View Cart</p>
                <span className={cx("totalCost")}>${totalCost}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCart;
