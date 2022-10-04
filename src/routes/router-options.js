import React from "react";
import {ROUTE_NAME} from "routes/router.constant";

export const RouteItems = [
  {
    id: 1,
    path: ROUTE_NAME.SIGN_IN,
    exact: true,
    component: React.lazy(() => import("pages/login/LoginPage"))
  },
  {
    id: 2,
    path: ROUTE_NAME.HOME,
    exact: true,
    component: React.lazy(() => import("pages/home/HomePage"))
  },
]