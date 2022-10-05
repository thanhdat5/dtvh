import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import LoadingPage from "../components/loadingPage";
import ROUTERS from "./config.";
import PrivateRoute from "./privateRoute";

export interface RouterProps {
  exact: boolean;
  path: string;
  component: any;
  isPrivate: boolean;
}

const RouteWithSubRouters: React.FC<RouterProps> = (props) => {
  const { exact, path, component, isPrivate, ...rest } = props;

  if (isPrivate) {
    return (
      <PrivateRoute exact={exact} path={path} component={component} {...rest} />
    );
  }

  return <Route exact={exact} path={path} component={component} />;
};

const RenderRouter = () => {
  return (
    <Suspense fallback={<LoadingPage loading={true} />}>
      <Switch>
        {ROUTERS.map((el, ps) => (
          <RouteWithSubRouters {...el} key={ps} />
        ))}
      </Switch>
    </Suspense>
  );
};

export default RenderRouter;
