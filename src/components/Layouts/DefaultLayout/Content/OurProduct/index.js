import { useEffect, useRef } from "react";
import classNames from "classnames/bind";
import Products from "~/components/Products";
import styles from "./OurProduct.module.scss";
import { newArrival, onSale, featured, tending } from "./DataProducts";

const cx = classNames.bind(styles);

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function OurProduct() {
  const tabs = useRef();
  const panes = useRef();
  useEffect(() => {
    const tabClass = tabs.current.className;
    const paneClass = panes.current.className;

    const listTabs = $$(`.${tabClass}`);
    const listPanes = $$(`.${paneClass}`);
    listTabs.forEach((tab, index) => {
      const pane = listPanes[index];
      tab.onclick = function () {
        const tabClassActive = cx("tab-item") + "." + cx("active");
        const tabActive = $(`.${tabClassActive}`);
        tabActive.classList.remove(cx("active"));
        this.classList.add(cx("active"));

        const paneClassActive = cx("tab-pane") + "." + cx("active");
        const paneActive = $(`.${paneClassActive}`);
        paneActive.classList.remove(cx("active"));
        pane.classList.add(cx("active"));
      };
    });
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("content-title")}>
        <h2 className={cx("title")}>Our Products</h2>
        <p className={cx("des")}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore
        </p>
      </div>

      <div className={cx("tabs-container")}>
        <div className={cx("tab-title")}>
          <div ref={tabs} className={cx("tab-item", "active")}>
            New Arrival
          </div>
          <div ref={tabs} className={cx("tab-item")}>
            Featured
          </div>
          <div ref={tabs} className={cx("tab-item")}>
            On Sale
          </div>
          <div ref={tabs} className={cx("tab-item")}>
            Tending
          </div>
        </div>
      </div>
      <div className={cx("tab-content")}>
        <div ref={panes} className={cx("tab-pane", "active")}>
          <Products dataProducts={newArrival} name="newArrival" />
        </div>
        <div ref={panes} className={cx("tab-pane")}>
          <Products dataProducts={featured} name="featured" />
        </div>
        <div ref={panes} className={cx("tab-pane")}>
          <Products dataProducts={onSale} name="onSale" />
        </div>
        <div ref={panes} className={cx("tab-pane")}>
          <Products dataProducts={tending} name="tending" />
        </div>
      </div>
    </div>
  );
}

export default OurProduct;
