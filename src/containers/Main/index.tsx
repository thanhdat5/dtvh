import { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import "./index.scss";

const TNGMain: React.FC<RouteComponentProps> = ({ history }) => {
  useEffect(() => {
    // handle logic next pages
    const getTeam: any = localStorage.getItem("user-profile");
    const user = JSON.parse(getTeam);
    if (user.union === 0 || user.union === null) {
      history.push("/select-team");
    } else {
      history.push("/start-game-flow");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="tng-main"></div>;
};
export default TNGMain;
