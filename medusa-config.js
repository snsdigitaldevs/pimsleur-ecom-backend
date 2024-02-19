import dotenv from "dotenv";

let ENV_FILE_NAME;
switch (process.env.NODE_ENV) {
  case "production":
    ENV_FILE_NAME = ".env.production";
    break;
  case "staging":
    ENV_FILE_NAME = ".env.staging";
    break;
  case "test":
    ENV_FILE_NAME = ".env.test";
    break;
  case "development":
  default:
    ENV_FILE_NAME = ".env";
    break;
}

try {
  dotenv.config({ path: process.cwd() + "/" + ENV_FILE_NAME });
} catch (e) {
  /* empty */
}

const DATABASE_URL =
  process.env.DATABASE_URL ||
  "postgres://postgres:123456@127.0.0.1:5432/postgres";

//const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

const plugins = [];

const modules = {};

/** @type {import('@medusajs/medusa').ConfigModule["projectConfig"]} */
const projectConfig = {
  jwtSecret: process.env.JWT_SECRET,
  cookieSecret: process.env.COOKIE_SECRET,
  database_url: DATABASE_URL,
  // Uncomment the following lines to enable REDIS
  // redis_url: REDIS_URL
};

/** @type {import('@medusajs/medusa').ConfigModule} */
export default {
  projectConfig,
  plugins,
  modules,
};
