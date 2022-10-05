import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
  component: any;
  state?: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  const { component: Component, ...rest } = props;

  const isAuthenticated = localStorage.getItem("access-token") ?? "";

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (isAuthenticated !== "") {
          return <Component {...routeProps} />;
        }

        return (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: { from: routeProps.location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
