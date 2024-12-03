import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";




const handle = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    // Asegurarse de que el accessToken siempre sea un string
    async session({ session, token }) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken as string;  // Asegura que accessToken sea un string
      } else {
        session.accessToken = '';  // Asignar una cadena vacía si no existe
      }
      return session;
    },
    async jwt({ token, account }) {
      if (account?.provider === "google") {
        token.accessToken = account.access_token || ''; // Asegura que siempre sea un string
      }
      return token;
    },
  },
})

export { handle as GET, handle as POST }



