export type AnwserRequest = {
  questionId: number;
  answerId: number;
};
export type QuestionModel = {
  id: string;
  content: string;
  answers: AnwserModel[];
  userChooseAnswerId?: any;
  isCorrect?: boolean;
};
export type AnwserModel = {
  id: string;
  content: string;
};
