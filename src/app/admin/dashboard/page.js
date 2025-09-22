import { cookies } from "next/headers";
import { authenticateAdmin } from "../../../../lib/auth";
import { connectDB } from "../../../../lib/db";
import Estimate from "../../../../models/estimate";
import AdminDashboard from "./AdminDashboard";

export default async function Page() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return <div>Unauthorized</div>;

  try {
    authenticateAdmin(token);
  } catch {
    return <div>Invalid token</div>;
  }

  await connectDB();
  const estimates = (await Estimate.find().sort({ createdAt: -1 }).lean()).map(e => ({
    ...e,
    _id: e._id.toString(),
    createdAt: e.createdAt?.toLocaleString(),
    updatedAt: e.updatedAt?.toLocaleString(),
  }));

  return <AdminDashboard initialEstimates={estimates} />;
}
