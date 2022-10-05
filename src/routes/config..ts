import { lazy } from "react";
import { RouterProps } from "./renderRouter";

const LoginPage = lazy(() => import("../containers/Login"));
const TBGLoading = lazy(() => import("../containers/Loading"));

const TNGMain = lazy(() => import("../containers/Main"));
const TNGSelectTeam = lazy(()=> import('../containers/Main/components/SelectTeam'));

const TNGGame = lazy(()=> import("../containers/Main/components/Game"));

const ROUTERS: RouterProps[] = [
  {
    path: "/",
    exact: true,
    component: TBGLoading,
    isPrivate: false,
  },
  {
    path: "/sign-in",
    exact: true,
    component: LoginPage,
    isPrivate: false,
  },
  {
    path: "/start-game",
    exact: true,
    component: TNGMain,
    isPrivate: true,
  },
  {
    path: "/select-team",
    exact: true,
    component: TNGSelectTeam,
    isPrivate: true,
  },
  {
    path: "/start-game-flow",
    exact: true,
    component: TNGGame,
    isPrivate: true,
  },
  {
    path: "*",
    component: TBGLoading,
    isPrivate: false,
    exact: false,
  },
];
export default ROUTERS;
