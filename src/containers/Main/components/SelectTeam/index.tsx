/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import AOS from "aos";
import { useEffect, useState } from "react";
import questionBg from "../../../../assets/images/question-bg.png";

import { Swiper, SwiperSlide } from "swiper/react";

import { Lazy, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.scss";

import team1 from "../../../../assets/images/teams/team-1.png";
import team2 from "../../../../assets/images/teams/team-2.png";
import team3 from "../../../../assets/images/teams/team-3.png";
import team4 from "../../../../assets/images/teams/team-4.png";
import team5 from "../../../../assets/images/teams/team-5.png";
import team6 from "../../../../assets/images/teams/team-6.png";
import logo from "../../../../assets/images/logo.png";

// import required modules
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import { authAPI, setAxiosToken } from "../../../../api";
import LoadingPage from "../../../../components/loadingPage";
import TNGConfirmSelectTeam from "../confirmSelectTeam";

const teams = [team3, team2, team4, team5, team1, team6];

export const renderTitleTeamTNG = (input: number) => {
  switch (input) {
    case 1:
      return "Effi House";
    case 2:
      return "Unta North";
    case 3:
      return "Repo House";
    case 4:
      return "Inte House";
    case 5:
      return "Hury House";
    case 6:
      return "Unta South";
    default:
      return "";
  }
};

const TNGSelectTeam: React.FC<RouteComponentProps> = ({ history }) => {
  const [loading, setLoading] = useState(true);
  const [loadingPage, setLoadingPage] = useState(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [currentSelectTeam, setCurrentSelectTeam] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 100);
    setTimeout(() => {
      setLoading(false);
    }, 500);

    const getTeam: any = localStorage.getItem("user-profile");
    const user = JSON.parse(getTeam);

    if (user.union === 0 || user.union === null) {
      return;
    } else {
      history.push("/start-game-flow");
    }
  }, []);

  const handleSelectTeam = async (union: number) => {
    try {
      const accessToken = localStorage.getItem("access-token") ?? "";
      setAxiosToken(accessToken);
      setLoadingPage(true);
      const res = await authAPI.selectTeam(union);
      if (res.status === 200) {
        const localUser: any = localStorage.getItem("user-profile");

        const userParse = JSON.parse(localUser);

        localStorage.setItem(
          "user-profile",
          JSON.stringify({ ...userParse, union: union })
        );
        setLoadingPage(false);
        // tNGAudio.pauseAudio();

        history.push("/start-game-flow");
      }
    } catch (error) {
      setLoadingPage(false);
      toast.error("Lỗi hệ thống");
    }
  };

  const handleShowConfirmSelect = (selectTeam: number) => {
    setCurrentSelectTeam(selectTeam);
    setShowConfirm(true);
  };

  const slides = teams.map((slide, index) => {
    return (
      <SwiperSlide virtualIndex={index} key={index}>
        <div className={`tng-team-card tng-team-card-${index + 1}`}>
          <img
            onClick={() => handleShowConfirmSelect(index + 1)}
            src={slide}
            alt=""
            className="swiper-lazy"
          />
          <p onClick={() => handleShowConfirmSelect(index + 1)}>
            {renderTitleTeamTNG(index + 1)}
          </p>
        </div>
        <div style={{ height: 20 }}></div>
      </SwiperSlide>
    );
  });

  return (
    <div className="tng-main">
      <LoadingPage loading={loadingPage} />

      <div className={`tng-select-team ${loading ? "loading" : ""}`}>
        <div
          className="tng-loading-logo-sl"
          data-aos="zoom-in"
        >
          <div className={`tng-logo sm`}>
            <img src={logo} alt="TNG"/>
          </div>
        </div>

        <div className="tng-select-team-q" data-aos="fade-up">
          <img src={questionBg} alt="" />
          <span>BẠN THUỘC LIÊN QUÂN NÀO?</span>
        </div>
        <div className={`swiper-wrap`}>
          <Swiper
            initialSlide={3}
            lazy={true}
            pagination={{
              clickable: true,
            }}
            slideToClickedSlide={true}
            navigation={true}
            modules={[Navigation, Lazy, Pagination]}
            className="mySwiper"
            centeredSlides={true}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1490: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1956: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
          >
            {slides}
          </Swiper>
        </div>
      </div>
      {showConfirm && (
        <TNGConfirmSelectTeam
          onDismiss={() => {
            setShowConfirm(false);
            setCurrentSelectTeam(0);
          }}
          onVerifySuccess={() => {
            handleSelectTeam(currentSelectTeam);
          }}
          currentSelectTeam={currentSelectTeam}
        />
      )}
    </div>
  );
};
export default TNGSelectTeam;
