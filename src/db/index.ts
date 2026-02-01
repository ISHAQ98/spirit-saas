import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });

// async function main() {
//   const user = { name: "John", age: 30, email: "john@example.com" };
//   await db.insert(usersTable).values(user);

//   const users = await db.select().from(usersTable);
//   console.log("Users in DB:", users);

//   // Example update
//   await db
//     .update(usersTable)
//     .set({ age: 31 })
//     .where(eq(usersTable.email, user.email));

//   // Example delete
//   await db.delete(usersTable).where(eq(usersTable.email, user.email));
// }

// main();

// async function seed() {
//   await db.insert(usersTable).values({
//     name: "Ishaq",
//     age: 25,
//     email: "ishaq@example.com",
//   });

//   console.log("✅ Seed complete");
// }

// seed().catch(console.error);
