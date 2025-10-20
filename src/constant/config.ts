if (typeof process !== "undefined" && process?.env?.NEXT_RUNTIME !== "edge") {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { config } = require("dotenv");
  config({ path: `.env.local` });
}

const Config = Object.freeze({
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  EMAIL_FROM: process.env.EMAIL_FROM,
  AUTH_SECRET: process.env.AUTH_SECRET,
  DATABASE_URL: process.env.DATABASE_URL,
  DEPLOYMENT_STAGE: process.env.DEPLOYMENT_STAGE || "dev",
  NODE_ENV: process.env.NODE_ENV,
});

// console.log(Config);

export default Config;
