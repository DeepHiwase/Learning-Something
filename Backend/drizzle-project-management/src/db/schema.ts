import { sql } from "drizzle-orm";
import { timestamp } from "drizzle-orm/pg-core";
import { text } from "drizzle-orm/pg-core";
import { integer, pgTable, varchar, pgEnum, uuid } from "drizzle-orm/pg-core";

// Migration:UP

// ENUMS
export const projectStatusEnum = pgEnum("project_status", [
  "active",
  "completed",
  "archived",
]);
export const taskStatusEnum = pgEnum("task_status", [
  "pending",
  "in_progress",
  "completed",
  "cancelled",
]);
export const memberRoleEnum = pgEnum("member_role", [
  "owner",
  "admin",
  "member",
]);

// User table
export const usersTable = pgTable("users", {
  id: uuid().defaultRandom().primaryKey(),
  email: text().notNull().unique(),
  full_name: text().notNull(),
  passowrd_hash: text().notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow(),
});

// User profile -> one-to-one relationship to users table
export const userProfiles = pgTable("user_profiles", {
  id: uuid().defaultRandom().primaryKey(),
  user_id: uuid().notNull().unique(),
  email: text().notNull().unique(),
  full_name: text().notNull(),
  passowrd_hash: text().notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow(),
});
