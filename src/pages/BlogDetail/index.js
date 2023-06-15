import Header from "~/components/Layouts/DefaultLayout/Header";
import Navigation from "~/components/Layouts/DefaultLayout/Navigation";

import classNames from "classnames/bind";
import styles from "./BlogDetail.module.scss";
import { Link, useParams } from "react-router-dom";
import config from "~/config";
import Contact from "~/components/Layouts/DefaultLayout/Contact";
import Footer from "~/components/Layouts/DefaultLayout/Footer";
import { dining } from "~/pages/datas";
import RenderProduct from "~/components/Layouts/component/Filter";
import { dataNews } from "~/components/GlobalStyles/dataNews";

const cx = classNames.bind(styles);

function BlogDetail() {
  const { id } = useParams();
  const product = dataNews.find((product) => product.id === parseInt(id));
  return (
    <div>
      <Header />
      <Navigation />

      <div className={cx("BlogHeader")}>
        <h1>{product.title}</h1>
        <div className={cx("link")}>
          <Link to={config.routes.home} className={cx("linkHome")}>
            HOME
          </Link>{" "}
          <span>/ BLOG</span>
        </div>
      </div>
      <div className={cx("wrapper")}>
        <div className={cx("imgDiv")}>
          <img className={cx("img")} src={product.img}></img>
        </div>
        <div className={cx("author")}>
          <span className={cx("nameAuthor")}>{product.author}</span>
          <span className={cx("time")}>{product.time}</span>
        </div>
        <div className={cx("content")}>
          <p className={cx("title")}>{product.title}</p>
          {product.text.text1 ? (
            <p className={cx("text")}>{product.text.text1}</p>
          ) : null}
          {/* <p className={cx("text1")}>{product.text.text1}</p> */}
          {product.text.textSub ? (
            <p className={cx("textSub")}>{product.text.textSub}</p>
          ) : null}
          {product.text.text3 ? (
            <p className={cx("text")}>{product.text.text3}</p>
          ) : null}
          {product.text.text4 ? (
            <p className={cx("text")}>{product.text.text4}</p>
          ) : null}
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default BlogDetail;
