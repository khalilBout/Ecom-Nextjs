import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import connectDB from "@/utils/connectDB";
import bcrypt from "bcryptjs";

// NextAuth is leb to auth is next
// إستخدام دالة الهندل من اجل استخدمها كدالة للجلب وارسال بيانات المستخدم في نفس الوقت
// حيث أنه يكن كتابة كل دالة على حدى
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",

      async authorize(credentials) {
        //Check if the user exists.
        await connectDB();

        try {
          //
          const user = await User.findOne({
            email: credentials.email,
          });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Credentials!");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  //   callbacks: {
  //     async jwt({ token, user }) {
  //       if (user) token.role = user.role;
  //       return token;
  //     },
  //     async session({ session, token }) {
  //       if (session?.user) session.user.role = token.role;
  //       return session;
  //     },
  //   },
});

export { handler as GET, handler as POST };
