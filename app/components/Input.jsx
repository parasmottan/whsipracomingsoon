"use client";
import React, { useState } from "react";

function Input() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Simple email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    setMessage("Please enter a valid email address.");
    return;
  }

  try {
    const res = await fetch('https://whisprabackcomm-production.up.railway.app/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email })
    });

    const data = await res.json();
    setMessage(data.message);

  } catch (err) {
    console.log("Error:", err);
    setMessage("Something went wrong. Please try again later.");
  }
};


  return (
    <div className="drop-shadow-2xl lg:w-[40%] w-[90vw] lg:h-auto rounded-full relative">
      <form onSubmit={handleSubmit} className="relative">
        {/* Input */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="drop-shadow-2xl w-full lg:p-5 p-3 outline-none text-lg pl-7 text-gray-300 bg-white rounded-full"
          placeholder="Enter your email..."
        />

        {/* Button */}
        <input
          type="submit"
          className="cursor-pointer md:absolute md:right-0 md:top-0 absolute top-18 right-[1%] h-full shadow-[4px_-4px_20px_rgba(255,255,255,0.95),4px_4px_25px_rgba(255,255,255,0.95),0_6px_20px_rgba(255,255,255,0.9)] md:px-8 px-24 md:bg-[#DBBFE7] bg-gradient-to-r from-pink-300 via-pink-200 to-blue-200 text-white md:text-lg text-3xl md:font-normal font-bold rounded-full"
          value="Notify Me"
        />
      </form>

      {/* Message fixed below, no layout shift */}
      <div className="h-6 mt-2 flex items-center justify-center">
        {message && <p className="text-pink-700 text-sm">{message}</p>}
      </div>
    </div>
  );
}

export default Input;
