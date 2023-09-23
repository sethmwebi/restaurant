import { authOPtions } from "@/utils/auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOPtions);

export { handler as GET, handler as POST };
