/* eslint-disable react-hooks/exhaustive-deps */
import moment from "moment";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { QUIZ_INFO_KEY } from "../../../../constanst";
import "./index.scss";

interface TNGTimerProps {
  onCompleted: () => void;
  setCurrentTime: React.Dispatch<React.SetStateAction<string>>;
  styled: string;
  isCompleted: boolean;
}
const TNGTimer = ({
  onCompleted,
  setCurrentTime,
  styled,
  isCompleted,
}: TNGTimerProps) => {
  const getLocalQuiz: any = localStorage.getItem(QUIZ_INFO_KEY);
  const [localEndTime, setLocalEndTime] = useState<any>(null);

  useEffect(() => {
    if (getLocalQuiz) {
      const quizInfo: any = JSON.parse(getLocalQuiz);
      if (quizInfo?.end) {
        const stillUtc = moment.utc(quizInfo?.end).toDate();
        const local = moment(stillUtc).local().format();
        setLocalEndTime(new Date(local));
      }
    }
  }, [getLocalQuiz]);

  useEffect(() => {
    return () => {
      setLocalEndTime(null);
    };
  }, []);

  return (
    <div className={`tng-timer ${styled}`}>
      {localEndTime ? (
        <Countdown
          onComplete={onCompleted}
          date={localEndTime}
          renderer={(props) => {
            const timer = `00:${
              props.minutes < 10 ? `0${props.minutes}` : props.minutes
            }:${props.seconds < 10 ? `0${props.seconds}` : props.seconds}`;
            setCurrentTime(timer);

            return (
              <span>
                {props.minutes < 10 ? `0${props.minutes}` : props.minutes}:
                {props.seconds < 10 ? `0${props.seconds}` : props.seconds}’
              </span>
            );
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
export default TNGTimer;
