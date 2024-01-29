const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Music" },
        { name: "Trade" },
        { name: "Photography" },
        { name: "Fitness" },
        { name: "Trading" },
        { name: "Accounting" },
        { name: "Computer Science" },
        { name: "Filming" },
        { name: "Engineering" },
      ],
    });
    console.log("seccess");
  } catch (error) {
    console.log("Error seeding the database category", error);
  } finally {
    await db.$disconnect();
  }
}

main();
