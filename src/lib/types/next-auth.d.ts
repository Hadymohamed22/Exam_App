import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface User {
    token: string;
    user: {
      _id: string;
      username: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      role: string;
      isVerified: boolean;
      createdAt: string;
      passwordResetCode: string;
      passwordResetExpires: string;
      resetCodeVerified: true;
      passwordChangedAt: string;
    };
  }

  interface Session {
    user: User["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access_token: User["token"];
    user: User["user"];
  }
}
