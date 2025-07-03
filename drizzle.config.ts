import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
console.log(process.env.DATABASE_URL);
export default defineConfig({
  out: './drizzle',
  schema: './db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_hXR3Or6SPVUw@ep-calm-cell-a8liza57-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require',
  },
});
