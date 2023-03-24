import { config } from "dotenv";

config();

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb+srv://Bharath_Gopalswamy:t6kfNAN2wT2f9mVO@bharath.b4lwfbh.mongodb.net/test";
