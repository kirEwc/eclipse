/* import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handle = NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
      ]
})

export { handle as GET, handle as POST } */



import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
        async authorize(credentials) {
            console.log("credentials", credentials);
            

        const user = { id: "1", name: "Admin", email: "admin@example.com" };

        if (credentials?.email === "admin@example.com" && credentials.password === "admin") {
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: "/login"
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
