export type AuthData = {
  email: string;
  password: string;
};

export type TokenData = {
  token: string;
};

export type ResetData = {
  newPassword: string;
}

export type ForgotPassword = {
  email: string;
}
