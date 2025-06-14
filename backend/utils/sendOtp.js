const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "healthvaulthead@gmail.com",
    pass: "pcur ggml gqwg hufi", // App password from Gmail
  },
});

const sendOtpToUser = async (email, otp) => {
  const mailOptions = {
    from: "healthvaulthead@gmail.com",
    to: email,
    subject: "Your OTP Code",
    html: `<h3>Your OTP is: <strong>${otp}</strong></h3><p>This OTP will expire in 30 minutes.</p>`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendOtpToUser;
