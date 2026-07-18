import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validation
    if (!data.fullName || !data.email) {
      return NextResponse.json(
        { error: "Full Name and Email are required fields." },
        { status: 400 }
      );
    }

    const filePath = path.join(process.cwd(), "inquiries.json");

    let currentInquiries = [];
    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      currentInquiries = JSON.parse(fileContent);
    } catch (e) {
      // File doesn't exist yet, start with empty array
    }

    const newInquiry = {
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
      fullName: data.fullName,
      companyName: data.companyName || "",
      email: data.email,
      phone: data.phone || "",
      tier: data.tier || "Title Sponsor",
      message: data.message || "",
    };

    currentInquiries.push(newInquiry);

    // Save locally
    await fs.writeFile(
      filePath,
      JSON.stringify(currentInquiries, null, 2),
      "utf-8"
    );

    // 📬 Dispatch Email Notification using Resend REST API (No npm install required)
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "sponsor@itechroots.org";

    if (RESEND_API_KEY) {
      try {
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "ITECHROOTS Sponsors <onboarding@resend.dev>",
            to: NOTIFICATION_EMAIL,
            subject: `Sponsorship Inquiry: ${newInquiry.fullName} (${newInquiry.tier})`,
            html: `
              <div style="font-family: sans-serif; padding: 24px; max-width: 600px; border: 1px solid #e2e8f0;">
                <h2 style="color: #0B1220; border-bottom: 2px solid #3DDC97; padding-bottom: 8px;">New Sponsorship Inquiry</h2>
                <p>A new partnership proposal has been submitted for ITECHROOTS 16.0.</p>
                <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; width: 150px;">Full Name:</td>
                    <td style="padding: 8px 0;">${newInquiry.fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold;">Company Name:</td>
                    <td style="padding: 8px 0;">${newInquiry.companyName || "N/A"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                    <td style="padding: 8px 0;"><a href="mailto:${newInquiry.email}">${newInquiry.email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold;">Phone Number:</td>
                    <td style="padding: 8px 0;">${newInquiry.phone || "N/A"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold;">Preferred Tier:</td>
                    <td style="padding: 8px 0; font-weight: #700; color: #D98E4A;">${newInquiry.tier}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message:</td>
                    <td style="padding: 8px 0; white-space: pre-wrap;">${newInquiry.message || "No message provided."}</td>
                  </tr>
                </table>
                <div style="margin-top: 24px; padding-top: 16px; border-t: 1px solid #e2e8f0; font-size: 11px; color: #718096;">
                  Submitted on ${new Date(newInquiry.submittedAt).toLocaleString("en-IN")} · logged locally in inquiries.json
                </div>
              </div>
            `,
          }),
        });

        if (!emailResponse.ok) {
          const errText = await emailResponse.text();
          console.error("Resend API rejected transmission:", errText);
        }
      } catch (emailError) {
        console.error("Failed to connect to Resend API:", emailError);
      }
    } else {
      console.warn("Inquiry logged locally. Configure RESEND_API_KEY to enable email transmission.");
    }

    return NextResponse.json({ success: true, inquiry: newInquiry });
  } catch (error: any) {
    console.error("Error saving inquiry:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry submission." },
      { status: 500 }
    );
  }
}
