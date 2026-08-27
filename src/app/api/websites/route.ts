import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const websites = await prisma.website.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(websites);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch websites' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const website = await prisma.website.create({
      data: {
        domain: body.domain,
        genre: body.genre || "General",
        da: body.da || 0,
        dr: body.dr || 0,
        ss: body.ss || "0%",
        traffic: body.traffic || "0"
      }
    });
    return NextResponse.json(website);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create website' }, { status: 500 });
  }
}
