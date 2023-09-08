import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });

export default {
  secret: process.env.JWT_SECRET,
  expiresIn: "7d",
};
