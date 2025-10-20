import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db } from "./index";
import Config from "@/constant/config";
import { sql } from "drizzle-orm";

const main = async () => {
  try {
    console.log("Starting database migration...");
    console.log(`Running migrations for stage: ${Config.DEPLOYMENT_STAGE}`);

    // Create public schema if it doesn't exist
    await db.execute(sql`CREATE SCHEMA IF NOT EXISTS public`);
    console.log("Public schema ensured.");

    // Add your migration logic here
    await migrate(db, { migrationsFolder: "./src/db/migrations" });

    console.log("Database migration completed successfully.");
  } catch (error) {
    console.error("Error during database migration:", error);
    process.exit(1);
  }
};

main();
