import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import File from "@/models/File";

export async function POST(req: Request) {
  await dbConnect();

  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file || !(file instanceof Blob)) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const createdFile = await File.create({
    name: file.name,
    data: buffer,
    type: file.type,
    size: buffer.length,
  });

  const { _id, name, type, size, createdAt } = createdFile.toObject();

  return NextResponse.json({ _id, name, type, size, createdAt }, { status: 201 });
}

export async function GET() {
  await dbConnect();
  const files = await File.find({}, { data: 0 });
  return NextResponse.json(files);
}
