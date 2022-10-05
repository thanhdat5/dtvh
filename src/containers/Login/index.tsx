/* eslint-disable react-hooks/exhaustive-deps */
import AOS from "aos";
import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import { authAPI, setAxiosToken } from "../../api";
import TNGButton from "../../components/Button";
import TNGFormControl from "../../components/FormControl";
import LoadingPage from "../../components/loadingPage";
import logo from "../../assets/images/logo.png";
import {
  ACCESS_TOKEN_KEY,
  QUIZ_INFO_KEY,
  QUIZ_SUMMARY_INFO,
  REFRESH_TOKEN_KEY,
  USER_PROFILE_KEY,
} from "../../constanst";
import { isNullOrEmpty } from "../../helpers";
import "./index.scss";

const TNGLogin: React.FC<RouteComponentProps> = ({ history }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUserKeyPress = (ev: any) => {
    if (ev.key === "Enter") {
      handleSubmit();
      ev.preventDefault();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [account, password]);

  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 100);

    const isAuthenticated = localStorage.getItem("access-token") ?? "";

    if (isAuthenticated !== "") {
      history.push("/start-game");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setErrorMessage("");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  useEffect(() => {
    if (submitted) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, password, submitted]);

  const validateForm = () => {
    setErrorMessage("");

    if (isNullOrEmpty(account) && isNullOrEmpty(password)) {
      setErrorMessage("Tên đăng nhập và mật khẩu không được để trống.");
      return false;
    }
    if (isNullOrEmpty(account)) {
      setErrorMessage("Tên đăng nhập không được để trống.");
      return false;
    }
    if (isNullOrEmpty(password)) {
      setErrorMessage("Mật khẩu không được để trống.");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    setSubmitted(true);
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);
      const response = await authAPI.login(account, password);
      if (response?.status === 200) {
        localStorage.setItem(ACCESS_TOKEN_KEY, response.data.accessToken);
        localStorage.setItem(REFRESH_TOKEN_KEY, response.data.refreshToken);

        const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY) ?? "";
        const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY) ?? "";

        if (accessToken) {
          setAxiosToken(accessToken);
          try {
            const response: any = await authAPI.getUserInfo();

            if (response?.status === 200) {
              localStorage.setItem(
                USER_PROFILE_KEY,
                JSON.stringify(response.data.data.userInfo)
              );
              localStorage.setItem(
                QUIZ_INFO_KEY,
                JSON.stringify(response.data.data.quizInfo)
              );
              localStorage.setItem(
                QUIZ_SUMMARY_INFO,
                JSON.stringify(response.data.data.quizSummaryInfo)
              );
              setLoading(false);

              history.push("/start-game");
            }
          } catch (err: any) {
            setLoading(false);

            console.log(err);
          }
        } else if (refreshToken) {
          //
        }
      }
    } catch (error) {
      setLoading(false);

      toast.error("Tài khoản hoặc mật khẩu không chính xác!");
    }
  };

  return (
    <div className="tng-login">
      <LoadingPage loading={loading} />
      <div className="tng-loading-logo" data-aos="zoom-in">
        <div className={`tng-logo sm`}>
          <img src={logo} alt="TNG" />
        </div>
      </div>
      <div className="tng-login-inner">
        <h1 data-aos="fade-up">đăng nhập</h1>
        <div data-aos="fade-up" data-aos-delay="200">
          <TNGFormControl
            name="tngacc"
            required
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            label={"ID"}
            type={"text"}
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <TNGFormControl
            name="tngpass"
            value={password}
            label="Mật khẩu"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div
          className="tng-login-message"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <span>{errorMessage}</span>
        </div>
        <div>
          <TNGButton text="tiếp tục" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};
export default TNGLogin;
