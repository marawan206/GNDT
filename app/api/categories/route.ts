import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Category from "@/models/Category";

export async function GET() {
  await dbConnect();
  const categories = await Category.find();
  return NextResponse.json(categories, { status: 200 });
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();

  const category = await Category.create(body);
  return NextResponse.json(category, { status: 201 });
}
