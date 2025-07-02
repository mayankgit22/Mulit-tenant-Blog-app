
import {varchar,pgTable,uuid,text,timestamp}from 'drizzle-orm/pg-core'
export const tables = pgTable(
    "blogs",{
        id:uuid().primaryKey().defaultRandom(),
        title:varchar("title", {length: 255}).notNull(),
description:varchar("description").notNull(),
orgId:text("orgId").notNull(),
        createdAt:timestamp("created_at").defaultNow(),
        customDomain:text("customDomain").notNull(),
        imgUrl:text("imgUrl"),
      
    }

)
export type createBlogType=typeof tables.$inferInsert;
export type blogType=typeof tables.$inferSelect;