import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client"; // Assuming you use Prisma

const prisma = new PrismaClient();

export const auth = betterAuth({
  adapter: prismaAdapter(prisma, {
    provider: "postgresql", // or your database provider
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  // Add other configurations as needed
});