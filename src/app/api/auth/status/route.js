import { NextResponse } from 'next/server';
import { connectDB } from '../../../../../lib/db';
import User from '../../../../../models/user';

export async function GET(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);

  const email = searchParams.get('email');
  const ip = req.headers.get('x-forwarded-for') || req.ip || 'unknown';

  if (!email) return NextResponse.json({ locked: false, attempts: 0, newIP: false });

  const user = await User.findOne({ email: email.toLowerCase() });
  if (!user) return NextResponse.json({ locked: false, attempts: 0, newIP: false });

  // Get IP-specific attempts
  const ipRecord = user.ipAttempts.get(ip) || { attempts: 0, lastAttempt: new Date(0) };
  const isLocked = ipRecord.attempts >= 3 && Date.now() < new Date(ipRecord.lastAttempt).getTime() + 60 * 60 * 1000;

  // Check if IP is verified
  const newIP = !user.verifiedIPs.includes(ip);

  return NextResponse.json({
    locked: isLocked,
    lockUntil: isLocked ? new Date(ipRecord.lastAttempt).getTime() + 60 * 60 * 1000 : null,
    attempts: ipRecord.attempts,
    newIP
  });
}
