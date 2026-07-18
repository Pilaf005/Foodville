const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const nodemailer = require("nodemailer");
require("dotenv").config({ path: "C:/Users/hasan/OneDrive/Desktop/foodville-project/Foodville-2/.env" });

const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true" || process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
};

async function testSmtp() {
  console.log("=== SMTP DIAGNOSTIC START ===");
  console.log("Host:", smtpConfig.host);
  console.log("Port:", smtpConfig.port);
  console.log("Secure:", smtpConfig.secure);
  console.log("User:", smtpConfig.auth.user);

  const transporter = nodemailer.createTransport(smtpConfig);

  try {
    console.log("Verifying SMTP connection...");
    await transporter.verify();
    console.log("SMTP connection verified successfully!");

    console.log("Sending test email...");
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Foodville" <${smtpConfig.auth.user}>`,
      to: "armanhasan7016@gmail.com",
      subject: "Foodville Dynamic SMTP Test",
      text: "This is a dynamic SMTP test from the updated .env configuration.",
      html: "<b>This is a dynamic SMTP test from the updated .env configuration.</b>"
    });
    console.log("Email sent successfully! Message ID:", info.messageId);
  } catch (err) {
    console.error("SMTP sending failed with error:");
    console.error(err);
  }
  console.log("=== SMTP DIAGNOSTIC END ===");
}

testSmtp();
