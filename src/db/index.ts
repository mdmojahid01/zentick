import Config from "@/constant/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: Config.DATABASE_URL!,
  ssl: { rejectUnauthorized: false },
});

const db = drizzle({ client: pool, logger: Config.NODE_ENV === "development" });

export { db };
