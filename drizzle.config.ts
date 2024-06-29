import { defineConfig } from 'drizzle-kit';

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
	throw new Error('No database url');
}

export default defineConfig({
	dialect: 'postgresql',
	schema: './src/lib/db/schema.ts',
	out: './supabase/migrations',
	dbCredentials: {
		url: DATABASE_URL
	}
});
