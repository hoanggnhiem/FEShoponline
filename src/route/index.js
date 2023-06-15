import config from "~/config";

import Home from "~/pages/Home";
import About from "~/pages/About";
import Bedroom from "~/pages/HomeFurnitures/Bedroom";
import Dining from "~/pages/HomeFurnitures/Dining";
import Living from "~/pages/HomeFurnitures/Living";
import Lounge from "~/pages/OfficeFurnitures/Lounge";
import OfficeChair from "~/pages/OfficeFurnitures/OfficeChair";
import OfficeTable from "~/pages/OfficeFurnitures/OfficeTable";
import HospitalBed from "~/pages/HospitalFurnitures/HospitalBed";
import HospitalUtility from "~/pages/HospitalFurnitures/HospitalUtility";
import Contact from "~/pages/Contact";
import Login from "~/pages/Login";
import SignUp from "~/pages/SignUp";
import ProductDetails from "~/pages/ProductDetails";
import CartPage from "~/pages/CartPage";
import BlogDetail from "~/pages/BlogDetail";

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.about,
    component: About,
  },
  {
    path: config.routes.bedroom,
    component: Bedroom,
  },
  {
    path: config.routes.dining,
    component: Dining,
  },
  {
    path: config.routes.living,
    component: Living,
  },
  {
    path: config.routes.lounge,
    component: Lounge,
  },
  {
    path: config.routes.officechair,
    component: OfficeChair,
  },
  {
    path: config.routes.officetable,
    component: OfficeTable,
  },
  {
    path: config.routes.hospitalBed,
    component: HospitalBed,
  },
  {
    path: config.routes.hospitalUtility,
    component: HospitalUtility,
  },
  {
    path: config.routes.contact,
    component: Contact,
  },
  {
    path: config.routes.login,
    component: Login,
  },
  {
    path: config.routes.signup,
    component: SignUp,
  },
  {
    path: config.routes.productdetails,
    component: ProductDetails,
  },
  {
    path: config.routes.cartpage,
    component: CartPage,
  },
  {
    path: config.routes.blogdetail,
    component: BlogDetail,
  },
  // {
  //   path: config.routes.wishlist,
  //   component: Wishlist,
  // },
  // {
  //   path: config.routes.Compare,
  //   component: Compare,
  // },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
