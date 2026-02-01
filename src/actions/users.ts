import { db } from "@/db";
import { usersTable } from "@/db/schema";

export const getUsers = async () => {
  const data = await db.select().from(usersTable);
  return data;
};
