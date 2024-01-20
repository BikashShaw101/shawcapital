const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Computer science" },
        { name: "Computer applications" },
        { name: "invrstor " },
        { name: "stock management " },
        { name: "trader" },
        { name: "stock market" },
        { name: "bull and bear" },
        { name: "neuro science" },
        { name: "Computer chip" },
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
