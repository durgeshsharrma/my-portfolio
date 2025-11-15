import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const user_name = formData.get("user_name");
    const user_email = formData.get("user_email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const formattedHTML = `
      <div style="background:#f5f7ff; padding:20px; font-family:Arial, sans-serif; line-height:1.6;">
        <div style="max-width:600px; margin:auto; background:white; padding:20px; border-radius:10px; box-shadow:0px 0px 10px rgba(0,0,0,0.1);">
          <h2 style="color:#6a0dad; margin-bottom:10px;">📩 New Contact Message</h2>

          <p style="font-size:16px; margin-bottom:8px;">
            <strong>Sender Name:</strong> ${user_name}
          </p>

          <p style="font-size:16px; margin-bottom:8px;">
            <strong>Sender Email:</strong> ${user_email}
          </p>

          <p style="font-size:16px; margin-bottom:8px;">
            <strong>Subject:</strong> ${subject}
          </p>

          <hr style="border:0; border-top:1px solid #ddd; margin:20px 0;" />

          <p style="font-size:16px;">
            <strong>Message:</strong><br /><br />
            ${message}
          </p>

          <br />

          <p style="font-size:14px; color:#555;">
            — Message sent from your Portfolio Contact Form 🚀
          </p>
        </div>
      </div>
    `;

    emailjs
      .send(
        "service_caum35b",        // Service ID
        "template_ka24tcl",       // Template ID
        {
          user_name,
          user_email,
          subject,
          message: formattedHTML,  // <-- sending custom formatted HTML
        },
        "teozXuTv2wjzyVmBH"       // Public key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();

          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
