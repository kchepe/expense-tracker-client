import { IUser } from "./types";

declare module "next-auth" {
  interface Session {
    expires: string;
    user: {
      exp: string;
      iat: string;
      jti: string;
      token: string;
      user: Omit<IUser, "password">;
    };
  }
}
