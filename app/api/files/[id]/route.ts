import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import File from "@/models/File";

export async function GET(req: Request, context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  await dbConnect();

  const file = await File.findById(id);
  if (!file) return NextResponse.json({ error: "File not found" }, { status: 404 });

  return new NextResponse(file.data, {
    headers: {
      "Content-Type": file.type,
      "Content-Disposition": `attachment; filename="${file.name}"`,
    },
  });
}

export async function DELETE(req: Request, context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  await dbConnect();

  const deleted = await File.findByIdAndDelete(id);
  if (!deleted) return NextResponse.json({ error: "File not found" }, { status: 404 });

  return NextResponse.json({ message: "File deleted" });
}
