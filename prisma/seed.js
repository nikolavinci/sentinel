const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const websitesData = [
  { domain: 'shredder.news', da: 32, dr: 28, ss: '1%', traffic: '12K', genre: 'News', articles: 45 },
  { domain: 'theodysseyonline.com', da: 74, dr: 71, ss: '2%', traffic: '450K', genre: 'Lifestyle', articles: 120 },
  { domain: 'nytimesmag.com', da: 92, dr: 90, ss: '1%', traffic: '1.2M', genre: 'News', articles: 350 },
  { domain: 'dailyscanner.com', da: 45, dr: 40, ss: '5%', traffic: '55K', genre: 'News', articles: 78 },
  { domain: 'time.com', da: 93, dr: 94, ss: '1%', traffic: '3.8M', genre: 'News', articles: 512 },
  { domain: 'usatoday.com', da: 94, dr: 93, ss: '1%', traffic: '4.5M', genre: 'News', articles: 890 },
  { domain: 'forbes.com.tr', da: 78, dr: 75, ss: '3%', traffic: '120K', genre: 'Business', articles: 215 },
  { domain: 'africa.businessinsider.com', da: 82, dr: 80, ss: '1%', traffic: '200K', genre: 'Business', articles: 180 },
  { domain: 'entrepreneur.com', da: 91, dr: 90, ss: '2%', traffic: '2.1M', genre: 'Business', articles: 410 },
  { domain: 'slashdot.org', da: 89, dr: 88, ss: '4%', traffic: '850K', genre: 'Tech', articles: 134 },
];

async function main() {
  console.log('Start seeding...');
  for (const w of websitesData) {
    const website = await prisma.website.upsert({
      where: { domain: w.domain },
      update: {},
      create: {
        domain: w.domain,
        da: w.da,
        dr: w.dr,
        ss: w.ss,
        traffic: w.traffic,
        genre: w.genre,
        status: 'Active'
      },
    });
    console.log(`Created website with id: ${website.id}`);
  }
  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
