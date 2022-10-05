import AOS from "aos";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { authAPI, setAxiosToken } from "../../../../api";
import { ACCESS_TOKEN_KEY, QUIZ_SUMMARY_INFO } from "../../../../constanst";
import { useWindowSize } from "../../../../hooks/hooks";
import { renderTitleTeamTNG } from "../SelectTeam";
import "./index.scss";

const TNGComplete = (props: { point: number; handleRetryGame: () => void }) => {
  const [isRetry, setIsRetry] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [width, height] = useWindowSize();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scale, setScale] = useState(1);
  useEffect(() => {
    setScale(1);
    if (width < 767) {
      setScale(0.6);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 100);
  }, []);

  const handleRetryGame = async () => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY) ?? "";
    setAxiosToken(accessToken);
    try {
      const response = await authAPI.retryCheck();

      if (response.status === 200) {
        console.log("");
        if (response.data.data < 2) {
          props.handleRetryGame();
        } else {
          setIsRetry(false);
          toast.error("Bạn đã hết lượt thi");
        }
      }
    } catch (error) { }
  };

  const getTeam: any = localStorage.getItem("user-profile");
  const user = JSON.parse(getTeam);
  const getSummaryInfo = () => {
    const getLocalQuiz: any = localStorage.getItem(QUIZ_SUMMARY_INFO);
    return JSON.parse(getLocalQuiz);
  };

  const getStatusFinish = () => {
    const summary = getSummaryInfo();
    if (summary?.trialCount === 1) {
      return {
        total: summary?.correctCount1 + "/15",
        isFinish: summary?.correctCount1 >= 12,
      };
    }

    if (summary?.trialCount === 2) {
      return {
        total: summary?.correctCount2 + "/15",
        isFinish: summary?.correctCount2 >= 12,
      };
    }

    return {
      total: "0/15",
      isFinish: false,
    };
  };
  const condition = getStatusFinish().isFinish;
  const styled = condition ? "success" : "failed";

  const isCase1 = !isRetry && getSummaryInfo()?.trialCount === 1;
  const isCase2 = !isRetry && getSummaryInfo()?.trialCount === 2;

  const canRetry = !condition && isCase1;

  return (
    <div
      className={`tng-complete ${styled} ${canRetry ? "canretry" : ""}`}
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {condition && (
        <div className="pyro">
          <div className="before"></div>
          <div className="after"></div>
        </div>
      )}
      <div className="tng-complete-wrap">
        <div className={`tng-complete-inner ${styled}`}>
          <div className="tng-complete-body">
            {!condition && (
              <h2>
                BẠN CẦN NẠP THÊM <br />
                NĂNG LƯỢNG
              </h2>
            )}
            <ul>
              <li>
                <label>Liên quân:</label>{" "}
                <span>{renderTitleTeamTNG(user?.union)}</span>
              </li>
              <li>
                <label>Chiến binh:</label> <span>{user?.userName}</span>
              </li>
              <li>
                <label>Số câu:</label> <span>{getStatusFinish().total}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <label>Tổng điểm:</label>&nbsp;<b style={{ color: 'red', fontSize: '24px', fontFamily: 'sans-serif' }}>{props.point}</b>
              </li>
            </ul>
          </div>
          {isCase1 && (
            <div className={condition ? 'action-1' : 'action'} onClick={handleRetryGame}>
              <span>Tiếp tục chiến đấu!</span>
            </div>
          )}

          {isCase2 && (
            <div className={condition ? 'action-1' : 'action'}>
              <span>Bạn đã hết lượt thi đấu!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default TNGComplete;
