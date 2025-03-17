import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '../auth-schema'
import { eq } from 'drizzle-orm';

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle( sql,{schema});

export async function updateUserCredit(userId: string, credit: number) {
  await db.update(schema.user).set({
      credit: credit,
  }).where(eq(schema.user.id, userId));
}

export async function getUserCredit(userId: string) {
  const user = await db.select().from(schema.user).where(eq(schema.user.id, userId));
  return user[0].credit;
}
