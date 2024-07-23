import { relations } from "drizzle-orm";
import { pgEnum, pgTable, serial, timestamp, uniqueIndex, varchar } from "drizzle-orm/pg-core";



const FeedbackTable = pgTable("feedback", {
    // id: uuid("id").primaryKey().defaultRandom(),
    id: serial("id").primaryKey(),
    email: varchar("email", {length: 255}).notNull(),
    name: varchar("name", {length: 255}).notNull(),
    message: varchar("message", {length: 500}).notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});
 

export default FeedbackTable;