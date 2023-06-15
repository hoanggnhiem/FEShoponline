import styles from "./LastestNew.module.scss";
import classNames from "classnames/bind";
import { dataNews } from "~/components/GlobalStyles/dataNews";
import { Link } from "react-router-dom";
import config from "~/config";
const cx = classNames.bind(styles);
function LastestNew() {
  return (
    <div className={cx("News")}>
      <div className={cx("wrapper")}>
        <div className={cx("header")}>
          <h1 className={cx("title")}>Lastest News</h1>
          <p className={cx("des")}>
            Torem ipsum dolor sit amet, consectetur adipisicing elitsed do
            eiusmo tempor incididunt ut labore
          </p>
        </div>
        <div className={cx("content", "grid", "wide")}>
          <div className={cx("row")}>
            {dataNews.map((item) => {
              return (
                <div key={item.id} className={cx("col", "l-4", "contentNews")}>
                  <div className={cx("contentWrapper")}>
                    <a className={cx("imgLink")} href="#">
                      {" "}
                      <img
                        className={cx("img")}
                        src={item.img}
                        alt="image news"
                      />
                    </a>
                    <div className={cx("textContent")}>
                      <h2 className={cx("title")}>
                        <a className={cx("titleLink")} href="#">
                          {item.title}
                        </a>
                      </h2>
                      <div className={cx("author")}>
                        <p className={cx("name")}>{item.author}</p>
                        <p className={cx("time")}>{item.time}</p>
                      </div>
                      <p className={cx("des")}>{item.des}</p>
                      <a
                        href={`/BlogDetail/${item.id}`}
                        className={cx("btnRead")}
                      >
                        Read more
                      </a>{" "}
                      {/* <button className={cx("btnRead")}>Read more</button> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastestNew;
