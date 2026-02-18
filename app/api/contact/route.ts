import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: process.env.FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
      to: [process.env.TO_EMAIL || ""],
      replyTo: email,

      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return Response.json({ ok: false, error: "Failed to send" }, { status: 500 });
  }
}
