import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create 10 dummy schools
  const school1 = await prisma.school.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'School 1',
      email: 'school1@example.com',
      address: 'Address 1',
      phone: '1234567890',
      theme: "RED",
      logo: 'logo1.png',
    },
  });

  const school2 = await prisma.school.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'School 2',
      email: 'school2@example.com',
      address: 'Address 2',
      phone: '1234567891',
      theme: "BLUE",
      logo: 'logo2.png',
    },
  });

  const school3 = await prisma.school.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: 'School 3',
      email: 'school3@example.com',
      address: 'Address 3',
      phone: '1234567892',
      theme: "GREEN",
      logo: 'logo3.png',
    },
  });

  const school4 = await prisma.school.upsert({
    where: { id: 4 },
    update: {},
    create: {
      name: 'School 4',
      email: 'school4@example.com',
      address: 'Address 4',
      phone: '1234567893',
      theme: "RED",
      logo: 'logo4.png',
    },
  });

  const school5 = await prisma.school.upsert({
    where: { id: 5 },
    update: {},
    create: {
      name: 'School 5',
      email: 'school5@example.com',
      address: 'Address 5',
      phone: '1234567894',
      theme: "BLUE",
      logo: 'logo5.png',
    },
  });

  const school6 = await prisma.school.upsert({
    where: { id: 6 },
    update: {},
    create: {
      name: 'School 6',
      email: 'school6@example.com',
      address: 'Address 6',
      phone: '1234567895',
      theme: "GREEN",
      logo: 'logo6.png',
    },
  });

  const school7 = await prisma.school.upsert({
    where: { id: 7 },
    update: {},
    create: {
      name: 'School 7',
      email: 'school7@example.com',
      address: 'Address 7',
      phone: '1234567896',
      theme: "RED",
      logo: 'logo7.png',
    },
  });

  const school8 = await prisma.school.upsert({
    where: { id: 8 },
    update: {},
    create: {
      name: 'School 8',
      email: 'school8@example.com',
      address: 'Address 8',
      phone: '1234567897',
      theme: "BLUE",
      logo: 'logo8.png',
    },
  });

  const school9 = await prisma.school.upsert({
    where: { id: 9 },
    update: {},
    create: {
      name: 'School 9',
      email: 'school9@example.com',
      address: 'Address 9',
      phone: '1234567898',
      theme: "GREEN",
      logo: 'logo9.png',
    },
  });

  const school10 = await prisma.school.upsert({
    where: { id: 10 },
    update: {},
    create: {
      name: 'School 10',
      email: 'school10@example.com',
      address: 'Address 10',
      phone: '1234567899',
      theme: "RED",
      logo: 'logo10.png',
    },
  });

  console.log({ school1, school2, school3, school4, school5, school6, school7, school8, school9, school10 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
