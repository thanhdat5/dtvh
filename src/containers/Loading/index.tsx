import AOS from "aos";
import { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import element1 from "../../assets/images/elements/c1.png";
import element2 from "../../assets/images/elements/c2.png";
import element3 from "../../assets/images/elements/c3.png";
import element4 from "../../assets/images/elements/c4.png";
import element5 from "../../assets/images/elements/c5.png";
import TNGLogo from "../../components/Logo";
import "./index.scss";

const TBGLoading: React.FC<RouteComponentProps> = ({ history }) => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 400);

    setTimeout(() => {
      history.push("/start-game");
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="tng-loading">
      <div className="tng-loading-logo" data-aos="zoom-in">
        <TNGLogo size="lg" />
      </div>
      <img
        data-aos="fade-right"
        data-aos-delay="200"
        src={element1}
        className="tng-loading-el tng-loading-el-1"
        alt=""
      />
      <img
        data-aos="fade-left"
        data-aos-delay="200"
        src={element2}
        className="tng-loading-el tng-loading-el-2"
        alt=""
      />
      <img
        data-aos="fade-right"
        data-aos-delay="400"
        src={element3}
        className="tng-loading-el tng-loading-el-3"
        alt=""
      />
      <img
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-anchor-placement="top-bottom"
        src={element4}
        className="tng-loading-el tng-loading-el-4"
        alt=""
      />
      <img
        data-aos="fade-left"
        data-aos-delay="600"
        src={element5}
        className="tng-loading-el tng-loading-el-5"
        alt=""
      />
    </div>
  );
};
export default TBGLoading;
