"use client";
import React, { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return;

    try {
      const res = await fetch(
        "https://whisprabackcomm.onrender.com//api/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();
      console.log("Response:", data);

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-gradient-to-br from-[#E6E6FA] via-[#B0D4F1] via-[#FFDAB9] to-[#FFB6C1]">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Logo/Brand Text */}
        <div className="mb-12">
          <h1
            className="text-6xl font-bold bg-gradient-to-r from-[#87CEEB] via-[#DDA0DD] to-[#FF7F50] bg-clip-text text-transparent"
            style={{
              fontFamily:
                'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            }}
          >
            Whispra
          </h1>
        </div>

        {/* Headline */}
        <h2
          className="text-5xl font-bold text-gray-800 mb-6"
          style={{
            fontFamily:
              'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          }}
        >
          Talk. Heal. Connect.
        </h2>

        {/* Subheadline with Gradient */}
        <h3
          className="text-4xl font-semibold bg-gradient-to-r from-[#87CEEB] via-[#DDA0DD] to-[#FF7F50] bg-clip-text text-transparent mb-4"
          style={{
            fontFamily:
              'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          }}
        >
          Whispra listens.
        </h3>

        {/* Tagline */}
        <p className="text-gray-700 max-w-xl mx-auto mb-12 opacity-90">
          Where emotions find a voice, and hearts find understanding.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 mb-8">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-14 px-6 rounded-full bg-white/80 backdrop-blur-sm border-white/60 shadow-lg focus-visible:shadow-xl transition-all"
              required
            />
          </div>

          {/* ✅ Use button instead of input here */}
          <button
            type="submit"
            className="w-full h-14 rounded-full text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-r from-[#87CEEB] via-[#DDA0DD] to-[#FF7F50] hover:opacity-90"
            style={{
              background:
                "linear-gradient(135deg, #87CEEB 0%, #DDA0DD 50%, #FF7F50 100%)",
            }}
          >
            {submitted ? "Thank you! 💜" : "Notify Me"}
          </button>
        </form>

        {/* Description */}
        <p className="text-gray-600 text-sm max-w-lg mx-auto opacity-80">
          Whispra is a safe space to talk and heal through real listeners.
        </p>
      </div>
    </div>
  );
};

export default Page;
