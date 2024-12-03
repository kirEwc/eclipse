// /types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string; // Extiende el tipo de la sesión para agregar accessToken
  }
}
