import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Category from "@/models/Category";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await dbConnect();
  const id = (await params).id;
  const category = await Category.findById(id);
  return NextResponse.json(category, { status: 200 });
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await dbConnect();
  const id = (await params).id;
  const body = await req.json();

  const updated = await Category.findByIdAndUpdate(id, body, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await dbConnect();
  const id = (await params).id;
  await Category.findByIdAndDelete(id);
  return NextResponse.json({ message: "Category deleted" });
}
