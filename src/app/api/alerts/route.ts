import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const alerts = await prisma.alert.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(alerts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch alerts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const alert = await prisma.alert.create({
      data: {
        title: body.title,
        condition: body.condition,
        target: body.target,
        status: body.status || 'Active'
      }
    });
    return NextResponse.json(alert);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create alert' }, { status: 500 });
  }
}
