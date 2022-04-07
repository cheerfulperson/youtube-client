export interface UserAuthData {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
  time?: Date;
}
