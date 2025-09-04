import nodemailer from "nodemailer";

export async function sendAdminNotification(estimate) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const formatDate = (dateString) => {
      if (!dateString) return "N/A";
      
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    };

    await transporter.sendMail({
      from: `"Make Moves Matter" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `${estimate.service} Quote Requested By ${estimate.firstname} ${estimate.lastname}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Quote Request</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    background-color: #f9f9f9;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                }
                .header {
                    background: linear-gradient(135deg, #FF7B00 0%, #FF9900 100%);
                    padding: 30px 20px;
                    text-align: center;
                    color: white;
                }
                .header h1 {
                    margin: 0;
                    font-size: 24px;
                    font-weight: 600;
                }
                .content {
                    padding: 30px;
                }
                .details-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px;
                    margin-bottom: 25px;
                }
                .detail-item {
                    margin-bottom: 15px;
                }
                .detail-label {
                    font-weight: 600;
                    color: #555;
                    font-size: 14px;
                    margin-bottom: 5px;
                }
                .detail-value {
                    font-size: 16px;
                    color: #222;
                }
                .message-box {
                    background-color: #f5f5f5;
                    border-left: 4px solid #FF7B00;
                    padding: 15px;
                    margin: 20px 0;
                    border-radius: 0 4px 4px 0;
                }
                .footer {
                    background-color: #2c3e50;
                    color: #ecf0f1;
                    padding: 20px;
                    text-align: center;
                    font-size: 12px;
                }
                .highlight {
                    background-color: #fff8f0;
                    padding: 15px;
                    border-radius: 8px;
                    border: 1px solid #ffe0bd;
                    margin: 20px 0;
                }
                .status-badge {
                    display: inline-block;
                    padding: 5px 12px;
                    background-color: #FF7B00;
                    color: white;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: 600;
                    margin-top: 10px;
                }
                @media (max-width: 600px) {
                    .details-grid {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="content">
                    <div class="highlight">
  
                    <h3 style="color: #FF7B00; border-bottom: 2px solid #ffe0bd; padding-bottom: 8px;">Customer Details</h3>
                    <div class="details-grid">
                        <div class="detail-item">
                            <div class="detail-label">First Name</div>
                            <div class="detail-value">${estimate.firstname || "N/A"}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Last Name</div>
                            <div class="detail-value">${estimate.lastname || "N/A"}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Email</div>
                            <div class="detail-value">${estimate.email || "N/A"}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Phone</div>
                            <div class="detail-value">${estimate.phone || "N/A"}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">ZIP Code</div>
                            <div class="detail-value">${estimate.zeepcode || "N/A"}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Move Date</div>
                            <div class="detail-value">${formatDate(estimate.moveDate)}</div>
                        </div>
                    </div>
                    
                    <h3 style="color: #FF7B00; border-bottom: 2px solid #ffe0bd; padding-bottom: 8px;">Moving Details</h3>
                    <div class="details-grid">
                        <div class="detail-item">
                            <div class="detail-label">Moving From</div>
                            <div class="detail-value">${estimate.origin || "N/A"}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Moving To</div>
                            <div class="detail-value">${estimate.destination || "N/A"}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Service Type</div>
                            <div class="detail-value">${estimate.estimateType || "N/A"}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Service Needed</div>
                            <div class="detail-value">${estimate.service || "N/A"}</div>
                        </div>
                    </div>
                    
                    ${estimate.message ? `
                    <h3 style="color: #FF7B00; border-bottom: 2px solid #ffe0bd; padding-bottom: 8px;">Additional Message</h3>
                    <div class="message-box">
                        <p>${estimate.message}</p>
                    </div>
                    ` : ''}
                    
                    <div style="text-align: center; margin-top: 30px;">
                        <p style="font-size: 14px; color: #777;">This inquiry was submitted from your website and requires follow-up.</p>
                    </div>
                </div>
                
                <div class="footer">
                    <p>© ${new Date().getFullYear()} Make Moves Matter. All rights reserved.</p>
                    <p>This is an automated notification. Please do not reply to this email.</p>
                </div>
            </div>
        </body>
        </html>
      `,
    });

    console.log("✅ Admin email sent");
  } catch (error) {
    console.error("❌ Failed to send email:", error);
  }
}