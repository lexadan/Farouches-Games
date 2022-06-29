const Prisma = require('@prisma/client');
const prisma = new Prisma.PrismaClient();

(async function main() {
    try {
        const Expli = await prisma.users.upsert({
            where: {name: 'Expli'},
            update: {},
            create: {
                name: 'Expli',
                score: {
                    create: {
                        quizz: 33,
                        wwe: 44
                    },
                }
            }
        });
        const DavidGhetto = await prisma.users.upsert({
            where: {name: 'DavidGhetto'},
            update: {},
            create: {
                name: 'DavidGhetto',
                score: {
                    create: {
                        quizz: 111,
                        wwe: 444
                    },
                }
            }
        });
        console.log('Create 2 user', Expli, DavidGhetto);
    } catch(e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();