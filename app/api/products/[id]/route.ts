import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Product from "@/models/Product";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await dbConnect();
  const id = (await params).id;
  const product = await Product.findById(id).populate("category");
  return NextResponse.json(product, { status: 200 });
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await dbConnect();
  const id = (await params).id;
  const body = await req.json();

  const updated = await Product.findByIdAndUpdate(id, body, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await dbConnect();
  const id = (await params).id;
  await Product.findByIdAndDelete(id);
  return NextResponse.json({ message: "Product deleted" });
}
