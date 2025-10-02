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

export async function PUT(request) {
  try {
    await connectDB();
    

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    
    if (!id) {
      return new Response(JSON.stringify({ success: false, message: "Estimate ID is required" }), { status: 400 });
    }

    const updates = await request.json();

    // Optional: Validate updates if you want to validate edits
    // const validationErrors = validateEstimateData(updates);
    // if (Object.keys(validationErrors).length > 0) {
    //   return new Response(JSON.stringify({ success: false, errors: validationErrors }), { status: 400 });
    // }

    // Add updatedAt timestamp
    updates.updatedAt = new Date();

    const updatedEstimate = await Estimate.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!updatedEstimate) {
      return new Response(JSON.stringify({ success: false, message: "Estimate not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({
      success: true,
      message: "Estimate updated successfully",
      data: updatedEstimate
    }), { status: 200 });

  } catch (error) {
    console.error("Error updating estimate:", error);
    
    if (error.name === 'CastError') {
      return new Response(JSON.stringify({ success: false, message: "Invalid estimate ID" }), { status: 400 });
    }
    
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return new Response(JSON.stringify({ success: false, errors: validationErrors }), { status: 400 });
    }

    return new Response(JSON.stringify({
      success: false,
      message: error.message || "Failed to update estimate"
    }), { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    
    if (!id) {
      return new Response(JSON.stringify({ success: false, message: "Estimate ID is required" }), { status: 400 });
    }

    const deletedEstimate = await Estimate.findByIdAndDelete(id);

    if (!deletedEstimate) {
      return new Response(JSON.stringify({ success: false, message: "Estimate not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({
      success: true,
      message: "Estimate deleted successfully",
      data: { id: deletedEstimate._id }
    }), { status: 200 });

  } catch (error) {
    console.error("Error deleting estimate:", error);
    
    if (error.name === 'CastError') {
      return new Response(JSON.stringify({ success: false, message: "Invalid estimate ID" }), { status: 400 });
    }

    return new Response(JSON.stringify({
      success: false,
      message: error.message || "Failed to delete estimate"
    }), { status: 500 });
  }
}

// Optional: Add a PATCH method for partial updates if needed
export async function PATCH(request) {
  try {
    await connectDB();
    
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_TOKEN}`) {
      return new Response(JSON.stringify({ success: false, message: "Unauthorized access" }), { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    
    if (!id) {
      return new Response(JSON.stringify({ success: false, message: "Estimate ID is required" }), { status: 400 });
    }

    const partialUpdates = await request.json();
    
    // Add updatedAt timestamp
    partialUpdates.updatedAt = new Date();

    const updatedEstimate = await Estimate.findByIdAndUpdate(
      id,
      { $set: partialUpdates },
      { new: true, runValidators: true }
    );

    if (!updatedEstimate) {
      return new Response(JSON.stringify({ success: false, message: "Estimate not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({
      success: true,
      message: "Estimate updated successfully",
      data: updatedEstimate
    }), { status: 200 });

  } catch (error) {
    console.error("Error patching estimate:", error);
    
    if (error.name === 'CastError') {
      return new Response(JSON.stringify({ success: false, message: "Invalid estimate ID" }), { status: 400 });
    }
    
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return new Response(JSON.stringify({ success: false, errors: validationErrors }), { status: 400 });
    }

    return new Response(JSON.stringify({
      success: false,
      message: error.message || "Failed to update estimate"
    }), { status: 500 });
  }
}