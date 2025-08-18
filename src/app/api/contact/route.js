import { connectDB } from '../../../../lib/db';

export async function GET() {
  try {
    await connectDB();
    return new Response(JSON.stringify({ success: true, message: 'DB connected' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
