import { PrismaClient } from "@prisma/client";
import { execSync } from "child_process";

// Si no existe el cliente generado, lo generamos en runtime
try {
  require.resolve(".prisma/client");
} catch (e) {
  console.log("🧩 Generando cliente Prisma en runtime...");
  execSync("npx prisma generate", { stdio: "inherit" });
}

export const prisma = new PrismaClient();