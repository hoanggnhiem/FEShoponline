import classNames from "classnames/bind";
import styles from "./Filter.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Products from "~/components/Products";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function RenderProduct({ data, count }) {
  const isCount = count > 0;

  const [filter, setFilter] = useState("----------");
  const classActive = `.${cx("item")}.${cx("active")}`;
  const handleClick = (e) => {
    const listItems = document.querySelector(classActive);
    setFilter(e.target.innerText);
    listItems.classList.remove(cx("active"));
    e.target.classList.add(cx("active"));
  };

  const handleCondition = (e) => {
    const m = e.target.innerText;
    switch (m) {
      case "Name (Z-A)":
        data.sort(function (a, b) {
          let item1 = a.title.toLowerCase();
          let item2 = b.title.toLowerCase();
          return item2 < item1 ? -1 : 1;
        });
        break;
      case "Name (A-Z)":
        data.sort(function (a, b) {
          let item1 = a.title.toLowerCase();
          let item2 = b.title.toLowerCase();
          return item1 < item2 ? -1 : 1;
        });
        break;
      case "Price (Low - Hight)":
        data.sort(function (a, b) {
          let item1 = a.newCost;
          let item2 = b.newCost;
          return item1 < item2 ? -1 : item1 > item2 ? 1 : 0;
        });
        break;
      case "Price (Hight - Low)":
        data.sort(function (a, b) {
          let item1 = a.newCost;
          let item2 = b.newCost;
          return item2 < item1 ? -1 : item2 > item1 ? 1 : 0;
        });
        break;
      case "----------":
        data.sort(function (a, b) {
          let item1 = a.id;
          let item2 = b.id;
          return item2 < item1 ? -1 : item2 > item1 ? 1 : 0;
        });
        break;
      default:
    }
  };

  return (
    <div>
      {isCount ? (
        <div>
          <div className={cx("filter")}>
            <div className={cx("wrapperFilter")}>
              <p>Showing {count} products</p>
              <div className={cx("condition")}>
                <p className={cx("titleCondition")}>Sort By</p>
                <div className={cx("nameConditon")}>
                  <p className={cx("name")}>{filter}</p>
                  <button className={cx("btnCondition")}>
                    <FontAwesomeIcon icon={faChevronDown} />
                    <ul className={cx("listCondition")}>
                      <li
                        onClick={(e) => {
                          handleClick(e);
                          handleCondition(e);
                        }}
                        className={cx("item", "active")}
                      >
                        ----------
                      </li>
                      <li
                        onClick={(e) => {
                          handleClick(e);
                          handleCondition(e);
                        }}
                        className={cx("item")}
                      >
                        Name (A-Z)
                      </li>
                      <li
                        onClick={(e) => {
                          handleClick(e);
                          handleCondition(e);
                        }}
                        className={cx("item")}
                      >
                        Name (Z-A)
                      </li>
                      <li
                        onClick={(e) => {
                          handleClick(e);
                          handleCondition(e);
                        }}
                        className={cx("item")}
                      >
                        Price (Low - Hight)
                      </li>
                      <li
                        onClick={(e) => {
                          handleClick(e);
                          handleCondition(e);
                        }}
                        className={cx("item")}
                      >
                        Price (Hight - Low)
                      </li>
                    </ul>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="products">
            <Products dataProducts={data} name="bedroom" />
          </div>
        </div>
      ) : (
        <div className={cx("noProducts")}>
          <FontAwesomeIcon className={cx("icon")} icon={faBagShopping} />
          <h1 className={cx("text")}>There are no products</h1>
        </div>
      )}
    </div>
  );
}

export default RenderProduct;
