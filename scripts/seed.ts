

const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main(){
    try{
        await database.category.createMany({
            data: [
               
                { name : "Music"},
                { name : "Accounting"},
                { name : "Filming"},
                { name : "Computer Science"},
                { name : "Photography"},
                { name : "Engineering"},
                { name : "Fitness"},
            ]
        });
        console.log("Success")
    }
    catch(error) {
        console.log("Error seeding the database categories",error);
    }
    finally {
        await database.$disconnect();
    }
}
main()