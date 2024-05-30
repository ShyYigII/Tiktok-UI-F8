//Layouts
import { HeaderOnlyLayout } from "~/Layout";
import config from "~/config";

//public Routes
import Home from "~/pages/Home/index";
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";
import Profile from "~/pages/Profile";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.following, component: Following },
  { path: config.routes.upload, component: Upload, layout: HeaderOnlyLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
