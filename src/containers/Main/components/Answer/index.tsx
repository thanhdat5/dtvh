import { AnwserModel } from "../../../../models/Game";
import "./index.scss";

interface TNGAnswerProps {
  index: number;
  answer: AnwserModel;
  selected?: boolean;
  lg?: boolean;
  onSelected: () => void;
  statusQuestion: "selected" | "correct" | "incorrect" | "start";
  helpQuestions: string[];
  answerSuccessId: string;
}
const TNGAnswer = ({
  answer,
  index,
  selected,
  lg = false,
  onSelected,
  statusQuestion,
  helpQuestions,
  answerSuccessId,
}: TNGAnswerProps) => {
  const OPTS = ["A", "B", "C", "D"];
  const getStyled = selected ? statusQuestion : "";
  const isFailed = !helpQuestions.includes(answer.id);
  const isSuccess = answerSuccessId === answer.id ? "correct" : "";

  return isFailed ? (
    <div
      className={`tng-answer ${
        index % 2 === 1 ? "right" : ""
      } ${getStyled} ${isSuccess}`}
      onClick={onSelected}
    >
      <div className="tng-answer-body">
        <>
          <b>{OPTS[index]}:</b>
          <span>{answer.content}</span>
        </>
      </div>
    </div>
  ) : (
    <></>
  );
};
export default TNGAnswer;
