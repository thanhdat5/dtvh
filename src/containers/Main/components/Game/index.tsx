/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import AOS from "aos";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { authAPI, setAxiosToken } from "../../../../api";
import LoadingPage from "../../../../components/loadingPage";
import TNGLogo from "../../../../components/Logo";
import {
  ACCESS_TOKEN_KEY,
  HELP_QUESTION_AUDIO,
  QUIZ_INFO_KEY,
  QUIZ_SUMMARY_INFO,
} from "../../../../constanst";
import { useWindowSize } from "../../../../hooks/hooks";
import { AnwserModel, QuestionModel } from "../../../../models/Game";
import TNGAnswer from "../Answer";
import TNGBet from "../Bet";
import TNGComplete from "../Complete";
import TNGHelpBox from "../HelpBox";
import TNGQuestion from "../Question";
import TNGTimer from "../Timer";
import audioIcon from "../../../../assets/images/icons/audio.svg";
import muteAudioIcon from "../../../../assets/images/icons/mute-audio.svg";
import "./index.scss";
import { Prompt } from "react-router";
import useAudio from "../../../../hooks/useAudio";
import TNGGuidGame from "../guid";
import TimeStartGameGuid from "../TimeStartGameGuid";
import moment from "moment";
import tngLink from "../../../../assets/audio/tng-audio.mp3";
import successAudio from "../../../../assets/audio/success-question-audio.mp3";
import successAnswerAudio from "../../../../assets/audio/success-answer.mp3";
import notReplyAudio from "../../../../assets/audio/failed-reply.mp3";
import waitingAudio from "../../../../assets/audio/waiting-audio.mp3";

const TNGGame: React.FC = () => {
  const [questions, setQuestion] = useState<QuestionModel[]>([]);
  const [loading, setLoading] = useState(false);

  const [width, height] = useWindowSize();
  const [scale, setScale] = useState(1);
  const [showBet, setShowBet] = useState(false);
  const [yourBet, setYourBet] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionModel>({
    id: "",
    content: "",
    answers: [],
  });

  const [currentAnswer, setCurrentAnswer] = useState<AnwserModel | null>(null);

  const tNGAudio = useAudio(tngLink, false);
  const startReplyingAudio = useAudio(successAudio, false);
  const successReplyingAudio = useAudio(successAnswerAudio, false);
  const failedReplyAudio = useAudio(notReplyAudio, false);
  const helpQuestionAudio = useAudio(HELP_QUESTION_AUDIO, false);
  const waitingQuestionAudio = useAudio(waitingAudio, false);

  const [muteAudio, setMuteAudio] = useState<boolean>(false);

  const waitingReplyAudio = useAudio(waitingAudio, true);

  const [disableBet, setDisableBet] = useState(false);

  const [point, setPoint] = useState<number>(0);
  const [statusQuestion, setStatusQuestion] = useState<
    "selected" | "correct" | "incorrect" | "start"
  >("start");

  const [disableNextQuestion, setDisableNextQuestion] = useState(false);
  const [isShowOut, setIsShowOut] = useState(false);
  const [helpQuestions, setHelpQuestions] = useState<string[]>([]);
  const localUser: any = localStorage.getItem("user-profile");
  const [theme, setTheme] = useState("");
  const [currentTime, setCurrentTime] = useState("00:15:00");

  const [answerSuccessId, setAnswerSuccessId] = useState<string>("");
  const [isPlayGame, setIsPlayGame] = useState<boolean>(true);
  const [isShowGuid, setIsShowGuid] = useState<boolean>(false);

  const getLocalQuizInfo = () => {
    const getLocalQuiz: any = localStorage.getItem(QUIZ_INFO_KEY);
    return JSON.parse(getLocalQuiz);
  };

  const getSummaryInfo = () => {
    const getLocalQuiz: any = localStorage.getItem(QUIZ_SUMMARY_INFO);
    return JSON.parse(getLocalQuiz);
  };

  useEffect(() => {
    if (localUser) {
      const userParse = JSON.parse(localUser);
      if (userParse && userParse?.union) {
        setTheme("style-" + userParse.union);
      }
    }
  }, [localUser]);

  const setTokenWithCallApi = () => {
    setLoading(true);
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY) ?? "";
    setAxiosToken(accessToken);
  };

  const handleStartGame = async () => {
    setTokenWithCallApi();
    try {
      const res = await authAPI.startQuiz();

      if (res.status === 200) {
        localStorage.setItem(QUIZ_INFO_KEY, JSON.stringify(res.data.data));
        const summary = getSummaryInfo();
        localStorage.setItem(
          QUIZ_SUMMARY_INFO,
          JSON.stringify({ ...summary, trialCount: 1 })
        );
        setQuestion(res.data.data.questions);
        setCurrentQuestion(res.data.data.questions[0]);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const getCurrentQuestions = (allQuestions: QuestionModel[]) => {
    const unansweredQuestion = allQuestions.filter(
      (x) => x.userChooseAnswerId === null
    );

    if (!!unansweredQuestion.length) {
      return unansweredQuestion[0];
    }

    return allQuestions[0];
  };

  const handleRetryGame = async () => {
    tNGAudio.pauseAudio();
    if (muteAudio) {
      startReplyingAudio.playAudio();
    }
    setTokenWithCallApi();
    try {
      const res = await authAPI.startQuiz();

      if (res.status === 200) {
        localStorage.setItem(QUIZ_INFO_KEY, JSON.stringify(res.data.data));
        const summary = getSummaryInfo();

        localStorage.setItem(
          QUIZ_SUMMARY_INFO,
          JSON.stringify({ ...summary, trialCount: 2 })
        );

        setQuestion(res.data.data.questions);
        setCurrentQuestion(res.data.data.questions[0]);

        setIsCompleted(false);
        setStatusQuestion("start");
        setYourBet(0);
        setAnswerSuccessId("");
        setPoint(0);

        setDisableBet(false);
        setDisableNextQuestion(false);
        setHelpQuestions([]);

        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const handleConfigGame = () => {
    const quizInfo = getLocalQuizInfo();

    const allQuestions: QuestionModel[] = quizInfo.questions;

    const answeredQuestion = allQuestions.filter(
      (x) => x.userChooseAnswerId !== null
    );

    if (answeredQuestion.length === allQuestions.length) {
      setIsCompleted(true);
      return;
    }

    setDisableBet(!quizInfo.pointBetAvailable);
    setPoint(quizInfo.point);
    setDisableNextQuestion(!!quizInfo?.nextQuestion);

    if (quizInfo?.helperAvailable) {
      setHelpQuestions(
        quizInfo?.arrayHelpQuestion ? quizInfo?.arrayHelpQuestion : []
      );
    } else {
      setHelpQuestions([]);
    }

    setQuestion(allQuestions);
    let currentQuestion = getCurrentQuestions(allQuestions);
    setCurrentQuestion(currentQuestion);
  };

  const handleStartBefore = () => {
    setIsShowGuid(false);
    handleStartGame();
  };

  const handleTimeout = async () => {
    if (!isCompleted) {
      setTokenWithCallApi();
      alert("Hết giờ");
      try {
        const res = await authAPI.finish("00:00:00");
        if (res.status === 200) {
          try {
            const response: any = await authAPI.getUserInfo();

            if (response?.status === 200) {
              localStorage.setItem(
                QUIZ_INFO_KEY,
                JSON.stringify(response.data.data.quizInfo)
              );
              localStorage.setItem(
                QUIZ_SUMMARY_INFO,
                JSON.stringify(response.data.data.quizSummaryInfo)
              );
            }
          } catch (err: any) {
            console.log(err);
          }
          setLoading(false);
          setIsCompleted(true);
        }
      } catch (error) {
        setIsCompleted(true);
        setLoading(false);
      }
    }
  };

  const handleRecheckTimeBeforeStart = () => {
    const end: any = getLocalQuizInfo()?.end;
    const stillUtc = moment.utc(end).toDate();
    const local = moment(stillUtc).local().format();

    const currentTime = new Date();

    if (new Date(local).getTime() > currentTime.getTime()) {
      handleConfigGame();
    } else {
      handleTimeout();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 1000);
    const getQuiz: any = localStorage.getItem(QUIZ_INFO_KEY);
    const summaryInfo = localStorage.getItem(QUIZ_SUMMARY_INFO);

    const currentTime = new Date();
    const isPlayGame =
      currentTime.getHours() >= 8 && currentTime.getHours() <= 17;

    if (true) {
      setIsPlayGame(false);
      if (summaryInfo !== "null") {
        const summary = getSummaryInfo();
        const caseStartGame = summary?.trialCount;
        const isQuiz = getQuiz === "null";
        switch (caseStartGame) {
          case 0: {
            setIsShowGuid(true);
            break;
          }

          case 1: {
            if (isQuiz) {
              setIsCompleted(true);
              setPoint(summary.point1);
            } else {
              handleRecheckTimeBeforeStart();
            }
            break;
          }

          case 2: {
            if (isQuiz) {
              setIsCompleted(true);
              setPoint(summary.point2);
            } else {
              handleRecheckTimeBeforeStart();
            }
            break;
          }

          default: {
            setIsCompleted(true);
          }
        }
      }
    } else {
      setIsPlayGame(true);
    }
  }, []);

  useEffect(() => {
    let scaleR = 1;
    if (width < 1440 || height < 1024) {
      const scaleX = width / 1440;
      const scaleY = height / 1024;
      scaleR = scaleX < scaleY ? scaleX : scaleY;
    }
    setScale(scaleR);
  }, [width]);

  const handleSkip = async () => {
    setTokenWithCallApi();

    try {
      const res = await authAPI.quizNextQuestion(currentQuestion.id);
      if (res.status === 200) {
        localStorage.setItem(QUIZ_INFO_KEY, JSON.stringify(res.data.data));
        setQuestion(res.data.data.questions);

        let currentQuestion = getCurrentQuestions(res.data.data.questions);
        setCurrentQuestion(currentQuestion);
        setDisableNextQuestion(true);

        const quiz: any = getLocalQuizInfo();
        let newQuiz = { ...quiz, nextQuestion: true };
        localStorage.setItem(QUIZ_INFO_KEY, JSON.stringify(newQuiz));
        setLoading(false);
      }
    } catch (error) {}
  };
  const handle5050 = async () => {
    setTokenWithCallApi();
    try {
      const res = await authAPI.getHelp(currentQuestion.id);

      if (res.status === 200) {
        if (muteAudio) {
          helpQuestionAudio.playAudio();
        }
        setHelpQuestions(res.data.data);

        const quiz: any = getLocalQuizInfo();

        let newQuiz = {
          ...quiz,
          helperAvailable: true,
          arrayHelpQuestion: res.data.data,
        };
        localStorage.setItem(QUIZ_INFO_KEY, JSON.stringify(newQuiz));

        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Bạn đã sử dụng quyền này trước đó");
    }
  };

  const handleBet = (_bet: number) => {
    setYourBet(_bet);
    setShowBet(false);
    let currentQuestions = getCurrentQuestions(questions);
    setCurrentQuestion(currentQuestions);
    setStatusQuestion("start");
    setAnswerSuccessId("");
    if (muteAudio) {
      waitingReplyAudio.playAudio();
    }
  };
  const handleCancelBet = () => {
    setShowBet(false);
    let currentQuestions = getCurrentQuestions(questions);
    setCurrentQuestion(currentQuestions);
    setStatusQuestion("start");
    setAnswerSuccessId("");
    if (muteAudio) {
      waitingReplyAudio.playAudio();
    }
  };

  const [isAnswerLg, setIsAnswerLg] = useState(false);
  useEffect(() => {
    setIsAnswerLg(
      currentQuestion.answers.findIndex((a) => a.content.length > 60) !== -1
    );
  }, [currentQuestion]);

  const nextQuestion = questions.filter(
    (x) => x.userChooseAnswerId !== null
  ).length;

  const totalQsCount = nextQuestion >= 15 ? nextQuestion : nextQuestion + 1;

  const cancelSelect =
    (!loading && statusQuestion === "correct") ||
    (!loading && statusQuestion === "incorrect");

  const handleSelectAnswer = async (a: AnwserModel) => {
    waitingReplyAudio.pauseAudio();
    tNGAudio.pauseAudio();
    if (muteAudio) {
      startReplyingAudio.playAudio();
    }
    // start audio call answer
    setCurrentAnswer(a);
    setStatusQuestion("selected");

    const params = {
      questionId: currentQuestion.id,
      answerId: a.id,
      pointBet: yourBet,
    };

    setTokenWithCallApi();
    try {
      const res = await authAPI.checkAnswer(params);

      if (res.status === 200) {
        const afterListQuestions = questions.map((el) => {
          if (el.id === currentQuestion.id) {
            return {
              ...el,
              userChooseAnswerId: a.id,
            };
          }
          return el;
        });

        // get quiz in local storage - update new status quiz
        const quiz: any = getLocalQuizInfo();

        let nextStateQuiz = { ...quiz, questions: afterListQuestions };

        if (res.data.data.currentPoint) {
          nextStateQuiz = {
            ...nextStateQuiz,
            point: res.data.data.currentPoint.result,
          };
          setPoint(res.data.data.currentPoint.result);
        }

        if (yourBet > 0) {
          setYourBet(0);
          setDisableBet(true);
          nextStateQuiz = { ...nextStateQuiz, pointBetAvailable: false };
        }

        // compare process questions
        const getNumberQuestionsAnswered = afterListQuestions.filter(
          (x) => x.userChooseAnswerId !== null
        ).length;

        localStorage.setItem(QUIZ_INFO_KEY, JSON.stringify(nextStateQuiz));

        // set status question success - fail
        setStatusQuestion(
          res.data.data.isCorrectAnswer ? "correct" : "incorrect"
        );

        // set correct success id
        setAnswerSuccessId(res.data.data.correctAnswerId);
        startReplyingAudio.pauseAudio();
        if (res.data.data.isCorrectAnswer) {
          if (muteAudio) {
            successReplyingAudio.playAudio();
          }
        } else {
          if (muteAudio) {
            failedReplyAudio.playAudio();
          }
        }

        if (getNumberQuestionsAnswered === questions.length) {
          if (muteAudio) {
            successReplyingAudio.pauseAudio();
            failedReplyAudio.pauseAudio();
            !tNGAudio.isPlaying && tNGAudio.playAudio();
          }
        }

        setTimeout(async () => {
          // set state câu hỏi sau khi trả lời
          setQuestion(afterListQuestions);
          let currentQuestions = getCurrentQuestions(afterListQuestions);
          if (getNumberQuestionsAnswered !== questions.length) {
            if (
              disableBet ||
              yourBet > 0 ||
              res.data.data.currentPoint.result === 0
            ) {
              setCurrentQuestion(currentQuestions);
              setStatusQuestion("start");
              setAnswerSuccessId("");
              if (muteAudio) {
                waitingReplyAudio.playAudio();
              }
            } else {
              setShowBet(true);
            }
          }

          successReplyingAudio.pauseAudio();
          failedReplyAudio.pauseAudio();

          if (getNumberQuestionsAnswered === questions.length) {
            const res = await authAPI.finish(currentTime);
            if (res.status === 200) {
              localStorage.setItem(
                QUIZ_INFO_KEY,
                JSON.stringify(res.data.data.quizInfo)
              );

              const quizSummaryInfo = res?.data?.data?.quizSummaryInfo;
              localStorage.setItem(
                QUIZ_SUMMARY_INFO,
                JSON.stringify(quizSummaryInfo)
              );
              setStatusQuestion("start");
              setLoading(false);
              setIsCompleted(true);
            }
          }
        }, 3500);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Lỗi hệ thống");
    }
  };

  const handleOnOffAudio = () => {
    if (muteAudio) {
      tNGAudio.isPlaying && tNGAudio.pauseAudio();
      startReplyingAudio.isPlaying && startReplyingAudio.pauseAudio();
      successReplyingAudio.isPlaying && successReplyingAudio.pauseAudio();
      failedReplyAudio.isPlaying && failedReplyAudio.pauseAudio();
      helpQuestionAudio.isPlaying && helpQuestionAudio.pauseAudio();
      waitingQuestionAudio.isPlaying && waitingQuestionAudio.pauseAudio();
      waitingReplyAudio.isPlaying && waitingReplyAudio.pauseAudio();
    }

    if (!muteAudio) {
      !waitingReplyAudio.isPlaying && waitingReplyAudio.playAudio();
    }

    setMuteAudio(!muteAudio);
  };

  return (
    <>
      <Prompt
        when={isShowOut}
        message={() => "Bạn có muốn thoát khỏi trò chơi"}
      />
      <LoadingPage loading={loading} />
      <div
        className={`${cancelSelect && !showBet ? "wrapper-loading-h" : ""}`}
      ></div>
      <div className={`tng-game ${theme}`}>
        <button type="button" className="tng-audio" onClick={handleOnOffAudio}>
          <img src={muteAudio ? audioIcon : muteAudioIcon} alt="" />
        </button>
        <div className="tng-timer-wrap">
          <TNGTimer
            styled={theme}
            onCompleted={handleTimeout}
            setCurrentTime={setCurrentTime}
            isCompleted={isCompleted}
          />
        </div>
        <div className="tng-game-logo">
          <TNGLogo />
        </div>
        <div className="tng-game-score">
          <b>{point}</b>
          <span>điểm</span>
        </div>

        <div
          className="tng-help-box-wrap"
          style={{ transform: `scale(${scale})` }}
        >
          <TNGHelpBox
            onSkip={handleSkip}
            on5050={handle5050}
            onBet={() => setShowBet(true)}
            yourBet={yourBet}
            disableBet={disableBet || point < 10}
            disableNextQuestion={
              disableNextQuestion || helpQuestions.length > 0
            }
            disable5050={helpQuestions.length > 0 || disableNextQuestion}
          />
        </div>

        <div className={`tng-game-body ${isAnswerLg ? "lg" : ""}`}>
          <h4 data-aos="fade-up">
            Câu hỏi <b>{totalQsCount}</b>/{questions.length}
          </h4>
          <TNGQuestion question={currentQuestion} />
          <div className="tng-game-answers">
            {currentQuestion.answers.map((a, idx) => (
              <TNGAnswer
                selected={a.id === currentAnswer?.id}
                statusQuestion={statusQuestion}
                key={idx}
                answer={a}
                index={idx}
                lg={isAnswerLg}
                onSelected={() => handleSelectAnswer(a)}
                helpQuestions={helpQuestions}
                answerSuccessId={answerSuccessId}
              />
            ))}
          </div>
        </div>
        {showBet ? (
          <TNGBet
            point={point}
            yourBet={yourBet}
            onBetConfirm={handleBet}
            onDismiss={handleCancelBet}
            disableBet={true}
          />
        ) : (
          <></>
        )}
        {isCompleted ? (
          <TNGComplete point={point} handleRetryGame={handleRetryGame} />
        ) : (
          <></>
        )}
        {isPlayGame && !isCompleted ? <TimeStartGameGuid /> : <></>}
        {isShowGuid && <TNGGuidGame handleStartGame={handleStartBefore} />}
      </div>
    </>
  );
};
export default TNGGame;
