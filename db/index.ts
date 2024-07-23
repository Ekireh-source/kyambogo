import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from './schema';
import env from "@/env";
import postgres from "postgres";




export const connection = postgres(env.DATABASE_URL as string, {
    max: (env.DB_MIGRATING || env.DB_SEEDING) ? 1 : undefined,
    onnotice: env.DB_SEEDING ? () => {} : undefined,
});
  
  export const db = drizzle(connection, {
    schema,
    logger: true,
  });
  
  export type db = typeof db;
  
  export default db;

// const client = postgres(process.env.DATABASE_URL as string);
// export const db = drizzle(client, {schema, logger: true});