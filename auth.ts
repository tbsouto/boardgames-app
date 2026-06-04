import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
export const {
    handlers,
    signIn,
    signOut,
    auth,
  } = NextAuth({
    providers: [
      Google({
        clientId: process.env.AUTH_GOOGLE_ID!,
        clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      }),
    ],
  
    callbacks: {
  
      async signIn({ profile }) {
  
        return (
          profile?.email ===
          "tbsouto54@gmail.com"
        );
  
      },
  
      authorized({ auth }) {
  
        return !!auth;
  
      },
  
    },
  
  });