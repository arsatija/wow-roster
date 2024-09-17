import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const players = pgTable("players", {
  player_id: serial("player_id").primaryKey(),
  username: text("username").notNull().unique(),
  guild_rank: text("guild_rank", {
    enum: ["Guild Master", "Officer", "Raider", "Trial", "Retired"],
  }).notNull(),
  in_game_role: text("in_game_role", {
    enum: ["Tank", "Healer", "DPS"],
  }).notNull(),
  join_date: timestamp("join_date").defaultNow(),
  leave_date: timestamp("leave_date"),
  last_active: timestamp("last_active"),
});
