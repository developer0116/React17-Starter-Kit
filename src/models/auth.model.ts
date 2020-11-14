export interface ILoginRequest {
  email: string;
  password: string;
}
export interface ILoginResponse {
  jwt: string;
  user: any;
}

export interface IRegisterRequest {
  email: string;
  password: string;
  confirmPassword: string;
}
