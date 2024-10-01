import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

console.log(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);


const handle = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ]
  
})

export { handle as GET, handle as POST }



