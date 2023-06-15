import Header from "~/components/Layouts/DefaultLayout/Header";
import Navigation from "~/components/Layouts/DefaultLayout/Navigation";

import classNames from "classnames/bind";
import styles from "./CartPage.module.scss";
import { Link } from "react-router-dom";
import config from "~/config";
import Contact from "~/components/Layouts/DefaultLayout/Contact";
import Footer from "~/components/Layouts/DefaultLayout/Footer";
import carts from "~/datas/dataCarts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const cx = classNames.bind(styles);

function CartPage() {
  const a = carts;

  const [data, setData] = useState(a);
  const [totalCost, setTotalCost] = useState(() => {
    var sum = 0;
    data.map((item) => (sum += item.newCost * item.quan));
    return sum;
  });
  const add = (x) => {
    data.map((item) => {
      if (x.id === item.id) {
        item.quan += 1;
        setData([...data]);
      }
    });
    setTotalCost(() => {
      var sum = 0;
      data.map((item) => (sum += item.newCost * item.quan));
      return sum;
    });
  };
  const sub = (x) => {
    const exist = a.find((y) => y.id === x.id);
    if (exist.quan === 1) {
      setData([...data]);
    } else {
      data.map((item) => {
        if (x.id === item.id) {
          item.quan -= 1;
          setData([...data]);
        }
      });
    }
    setTotalCost(() => {
      var sum = 0;
      data.map((item) => (sum += item.newCost * item.quan));
      return sum;
    });
  };
  const remove = (x) => {
    setData(data.filter((item) => item.id !== x.id));

    setTotalCost(() => {
      var sum = 0;
      data.map((item) => (sum += item.newCost * item.quan));
      return sum;
    });
    console.log(data);
  };

  //   const [total, settotal] = useState(() => {
  //     var sum = 0;
  //     data.map = (item) => {
  //       sum = sum + item.quan * item.newCost;
  //     };
  //     return sum;
  //   });
  return (
    <div>
      <Header />
      <Navigation />
      <div className={cx("cartHeader")}>
        <h1>ABOUT US</h1>
        <div className={cx("link")}>
          <Link to={config.routes.home} className={cx("linkHome")}>
            HOME
          </Link>{" "}
          <span>/ CART</span>
        </div>
      </div>
      <div className={cx("wrapper")}>
        <div className={cx("content")}>
          <table className={cx("list")}>
            <thead>
              <tr className={cx("titleList")}>
                <th>IMAGE</th>
                <th>PRODUCT NAME</th>
                <th>UNTIL PRICE</th>
                <th>QTY</th>
                <th>SUBTOTAL</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index} className={cx("product")}>
                    <th className={cx("imgTh")}>
                      <img className={cx("img")} src={item.img} alt="img" />
                    </th>
                    <th className={cx("name")}>
                      <p>{item.title}</p>
                    </th>
                    <th className={cx("cost")}>
                      <p>${item.newCost}</p>
                    </th>
                    <th className={cx("qty")}>
                      <div className={cx("quanity")}>
                        <button
                          className={cx("sub")}
                          onClick={() => {
                            sub(item);
                          }}
                        >
                          -
                        </button>
                        <p className={cx("totalQuanity")}>{item.quan}</p>
                        <button
                          className={cx("add")}
                          onClick={() => {
                            add(item);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </th>
                    <th className={cx("total")}>
                      <p>${item.quan * item.newCost}</p>
                    </th>
                    <th className={cx("action")}>
                      <button
                        onClick={() => {
                          remove(item);
                        }}
                        className={cx("actionBtn")}
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                    </th>
                  </tr>
                );
              })}

              <tr className={cx("grandTotal")}>
                <th colSpan="4" className={cx("title")}>
                  Grand Total:
                </th>
                <th>
                  <p>${totalCost}</p>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default CartPage;
