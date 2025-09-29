import { connectDB } from "../../../../lib/db";
import Script from "../../../../models/script";

export async function GET() {
  await connectDB();
  const scripts = await Script.find().lean();
  return new Response(JSON.stringify({ data: scripts }), { status: 200 });
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const existing = await Script.findOne({ page: data.page });
  if (existing) {
    existing.code = data.code;
    await existing.save();
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }
  const script = new Script(data);
  await script.save();
  return new Response(JSON.stringify({ success: true }), { status: 201 });
}
