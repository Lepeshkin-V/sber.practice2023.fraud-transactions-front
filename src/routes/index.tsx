import { RouteObject } from "react-router-dom";
import Home from "../pages/Home/Home";
import Statistic from "../pages/Statistic/Statistic";

export const routes: RouteObject[] = [
    {
      path: '404',
      element: <div>Not Found</div>
    },
    {
        path: 'home',
        children: [
            { path: '/home/page/:page', element: <Home /> }
        ]
    },
    {
        path: 'statistic',
        element: <Statistic />
    }
]