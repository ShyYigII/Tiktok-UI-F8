//Layouts
import { HeaderOnlyLayout } from "~/components/Layout";
import routesConfig from "~/config/routes";

//public Routes
import Home from "~/pages/Home/index";
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";
import Profile from "~/pages/Profile";

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnlyLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
