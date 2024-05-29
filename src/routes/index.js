//Layouts
import {HeaderOnlyLayout} from '~/components/Layout';


//public Routes
import Home from '~/pages/Home/index'
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";
import Profile from '~/pages/Profile';

const publicRoutes = [
    {path: "/" , component: Home},
    {path: "/following" , component: Following},
    {path: "/upload" , component: Upload, layout: HeaderOnlyLayout},
    {path: "/@:nickname" , component: Profile},



]

const privateRoutes = [
    
]

export {publicRoutes, privateRoutes}