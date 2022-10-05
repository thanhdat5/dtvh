import { instance } from "./index";
import { AxiosResponse } from "axios";
import { AuthModel, LoginResponse } from "../models/Auth";

export const authAPI = {
  login: (
    email: string,
    password: string
  ): Promise<AxiosResponse<LoginResponse>> => {
    return instance.post("auth/token", { userName: email, password: password });
  },
  getUserInfo: (): Promise<AxiosResponse<AuthModel>> => {
    return instance.get("auth/me");
  },
  refreshToken(refresh: string) {
    return instance.post("", { refresh });
  },
  selectTeam(union: number): Promise<AxiosResponse<any>> {
    return instance.post("user/union", { union: union });
  },
  startQuiz(): Promise<AxiosResponse<any>> {
    return instance.get("quiz/start");
  },
  getPoint(): Promise<AxiosResponse<any>> {
    return instance.get("quiz/get-point");
  },
  getHelp(questionId: string): Promise<AxiosResponse<any>> {
    return instance.get(`quiz/get-help?questionId=${questionId}`);
  },
  getQuestions(): Promise<AxiosResponse<any>> {
    return instance.get("quiz");
  },
  retryCheck(): Promise<AxiosResponse<any>> {
    return instance.get("quiz/retry-check");
  },
  checkAnswer(params: {
    questionId: string;
    answerId: string;
    pointBet: number;
  }): Promise<AxiosResponse<any>> {
    return instance.post("quiz/check-answer", { ...params });
  },
  quizNextQuestion(questionId: string): Promise<AxiosResponse<any>> {
    return instance.post("quiz/by-pass", { questionId: questionId });
  },
  finish(timeLeft: any): Promise<AxiosResponse<any>> {
    return instance.post("quiz/finish", { timeLeft });
  },
  disconnect(timeLeft: any): Promise<AxiosResponse<any>> {
    return instance.post("quiz/on-disconnect", { timeLeft });
  },
};
