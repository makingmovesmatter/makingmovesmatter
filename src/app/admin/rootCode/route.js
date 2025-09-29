import { connectDB } from "../../../../lib/db";
import RootCode from "../../../../models/rootCode";

export async function GET() {
  await connectDB();
  const root = await RootCode.findOne();
  return new Response(JSON.stringify(root || { head: "", body: "" }), { status: 200 });
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  let root = await RootCode.findOne();
  if (!root) root = new RootCode(data);
  else {
    root.head = data.head;
    root.body = data.body;
  }
  await root.save();
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
