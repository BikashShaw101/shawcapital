const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Education" },
        { name: "Philosophy" },
        { name: "Tradition" },
        { name: "Culture" },
        { name: "History" },
        { name: "India" },
        { name: "Egypt" },
        { name: "Western" },
        { name: "Pop" },
        { name: "Dance" },
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
