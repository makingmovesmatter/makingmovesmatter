import { validateEstimateData } from "../../../../lib/validators";
import { connectDB } from "../../../../lib/db";
import Estimate from "../../../../models/estimate";
import { sendAdminNotification } from "../../../../lib/mailer";

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();

    const validationErrors = validateEstimateData(data);
    if (Object.keys(validationErrors).length > 0) {
      return new Response(JSON.stringify({ success: false, errors: validationErrors }), { status: 400 });
    }

    const newEstimate = new Estimate(data);
    await newEstimate.save();

    await sendAdminNotification(newEstimate);

    return new Response(JSON.stringify({
      success: true,
      message: "Estimate request received successfully!",
      estimateId: newEstimate._id
    }), { status: 201 });

  } catch (error) {
    console.error("Estimate submission error:", error);
    return new Response(JSON.stringify({
      success: false,
      message: error.message || "Internal server error"
    }), { status: 500 });
  }
}

export async function GET(request) {
  try {
    await connectDB();
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_TOKEN}`) {
      return new Response(JSON.stringify({ success: false, message: "Unauthorized access" }), { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const estimateType = searchParams.get("type") || "home";

    const estimates = await Estimate.find({ estimateType })
      .sort({ createdAt: -1 })
      .limit(50)
      .lean();

    return new Response(JSON.stringify({ success: true, data: estimates }), { status: 200 });

  } catch (error) {
    console.error("Error fetching estimates:", error);
    return new Response(JSON.stringify({ success: false, message: "Failed to fetch estimates" }), { status: 500 });
  }
}
