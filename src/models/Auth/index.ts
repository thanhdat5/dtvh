export type AuthModel = {
  id: number;
  account: string;
  email: string;
};
export type LoginRequest = {
  login: string;
  password: string;
};
export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};
