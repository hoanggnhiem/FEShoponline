import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "~/components/Layouts/DefaultLayout/Contact";
import Footer from "~/components/Layouts/DefaultLayout/Footer";
import Header from "~/components/Layouts/DefaultLayout/Header";
import Navigation from "~/components/Layouts/DefaultLayout/Navigation";
import config from "~/config";
import carts from "~/datas/dataCarts";
import styles from "./ProductDetails.module.scss";
const cx = classNames.bind(styles);

function ProductDetails() {
  const [quan, setQuan] = useState(1);

  const [materialName, setMaterialName] = useState("----Seclect Material----");
  const [colorName, setColorName] = useState("----Seclect Color----");
  const [sizeName, setSizeName] = useState("----Seclect Size----");
  const localData = JSON.parse(localStorage.getItem("proDetail"));

  const handleClick = (e) => {
    const classActive = `.${e.target.className}.${cx("active")}`;
    const listItems = document.querySelector(classActive);
    const materialclass = cx("materialItem");
    const colorclass = cx("colorItem");
    const sizeclass = cx("sizeItem");
    if (e.target.className === materialclass) {
      setMaterialName(e.target.innerText);
    } else if (e.target.className === colorclass) {
      setColorName(e.target.innerText);
    } else if (e.target.className === sizeclass) {
      setSizeName(e.target.innerText);
    }
    if (listItems) {
      listItems.classList.remove(cx("active"));
      e.target.classList.add(cx("active"));
    } else {
      e.target.classList.add(cx("active"));
    }
  };
  const handleSub = () => {
    if (quan > 1) {
      setQuan(quan - 1);
    } else {
      setQuan(1);
    }
  };

  const handleAdd = () => {
    setQuan(quan + 1);
  };
  const item = { ...localData[0], quan: quan };

  const addtocart = () => {
    const a = carts;

    a.push(item);
    console.log(a);
  };

  return (
    <div className={cx("productDetails")}>
      <Header />
      <Navigation />
      <div className={cx("productDetailsHeader")}>
        <h1>VARIABLE PRODUCT</h1>
        <div className={cx("materialList")}>
          <Link to={config.routes.home} className={cx("linkHome")}>
            HOME
          </Link>
          <span>/ VARIABLE PRODUCT</span>
        </div>
      </div>
      <div className={cx("wrapper", "grid", "wide")}>
        <div className={cx("content", "row")}>
          <div className={cx("col l-5", "divImage")}>
            <img className={cx("img")} src={localData[0].img} alt="nikexu" />
          </div>
          <div className={cx("col l-7", "info")}>
            <div className={cx("availability")}>
              <span className={cx("availabilityTxt")}>Availability: </span>
              <span>9 in Stock</span>
            </div>
            <div className={cx("name")}>
              <p className={cx("nameTxt")}>{localData[0].title}</p>
            </div>
            <div className={cx("cost")}>
              <p className={cx("costTxt")}>${localData[0].newCost}</p>
            </div>
            <div className={cx("des")}>
              <p className={cx("desTxt")}>{localData[0].des}</p>
            </div>
            <div className={cx("select")}>
              {localData[0].material ? (
                <div className={cx("material")}>
                  <p className={cx("materialTxt")}>Material</p>
                  <div className={cx("materialSelect")}>
                    <p className={cx("title")}>{materialName}</p>
                    <FontAwesomeIcon
                      className={cx("icon")}
                      icon={faChevronDown}
                    />
                    <ul className={cx("materialListSelect")}>
                      {localData[0].material.map((item, index) => {
                        return (
                          <li
                            className={cx("materialItem")}
                            key={index}
                            onClick={(e) => {
                              handleClick(e);
                            }}
                          >
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ) : null}
              {localData[0].color ? (
                <div className={cx("color")}>
                  <p className={cx("colorTxt")}>Color</p>
                  <div className={cx("colorSelect")}>
                    <p className={cx("title")}>{colorName}</p>
                    <FontAwesomeIcon
                      className={cx("icon")}
                      icon={faChevronDown}
                    />
                    <ul className={cx("colorListSelect")}>
                      {localData[0].color.map((item, index) => {
                        return (
                          <li
                            className={cx("colorItem")}
                            value={item}
                            key={index}
                            onClick={(e) => {
                              handleClick(e);
                            }}
                          >
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ) : null}
              {localData[0].size ? (
                <div className={cx("size")}>
                  <p className={cx("sizeTxt")}>Size</p>
                  <div className={cx("sizeSelect")}>
                    <p className={cx("title")}>{sizeName}</p>
                    <FontAwesomeIcon
                      className={cx("icon")}
                      icon={faChevronDown}
                    />
                    <ul className={cx("sizeListSelect")}>
                      {localData[0].size.map((item, index) => {
                        return (
                          <li
                            className={cx("sizeItem")}
                            value={item}
                            key={index}
                            onClick={(e) => {
                              handleClick(e);
                            }}
                          >
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ) : null}
            </div>

            <div className={cx("selectQuan")}>
              <div className={cx("quan")}>
                <div
                  className={cx("cal")}
                  onClick={() => {
                    handleSub();
                  }}
                >
                  <p>-</p>
                </div>
                <div className={cx("quanTxt")}>
                  <p>{quan}</p>
                </div>
                <div
                  className={cx("cal")}
                  onClick={() => {
                    handleAdd();
                  }}
                >
                  <p>+</p>
                </div>
              </div>
              <div className={cx("Add")}>
                <button
                  className={cx("btnAdd")}
                  onClick={() => {
                    addtocart();
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />

      <Footer />
    </div>
  );
}

export default ProductDetails;
