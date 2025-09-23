"use client";
import React, { useState } from "react";

function Input() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showBox, setShowBox] = useState(false); // control box visibility

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      setShowBox(true); // show box on invalid email too
      return;
    }

    try {
      const res = await fetch(
        "https://whisprabackcomm-production.up.railway.app/api/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();
      setMessage(data.message);
      setShowBox(true); // show box when response comes
    } catch (err) {
      console.log("Error:", err);
      setMessage("Something went wrong. Please try again later.");
      setShowBox(true); // show box even if error
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
          className="drop-shadow-2xl w-full lg:p-5 p-3 outline-none text-lg pl-7 text-gray-400 bg-white rounded-full"
          placeholder="Enter your email..."
        />

        {/* Button */}
        <input
          type="submit"
          className="cursor-pointer md:absolute md:right-0 md:top-0 absolute top-18 right-[1%] h-full shadow-[4px_-4px_20px_rgba(255,255,255,0.95),4px_4px_25px_rgba(255,255,255,0.95),0_6px_20px_rgba(255,255,255,0.9)] md:px-8 px-24 md:bg-[#DBBFE7] bg-gradient-to-r from-pink-300 via-pink-200 to-blue-200 text-white md:text-lg text-3xl md:font-normal font-bold rounded-full"
          value="Notify Me"
        />
      </form>

      {/* Centered Box (only when showBox is true) */}
      {showBox && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="p-8 rounded-4xl shadow-xl
            bg-white/100 backdrop-blur-xl
            border-2 border-white/90 
            w-[100vw] sm:w-[70vw] md:w-[50vw] lg:w-[100vw] 
            h-auto flex flex-col overflow-hidden relative text-center animate-[zoomIn_0.3s_ease]"
          >
            <i
              className="ri-close-line text-5xl text-[#B2A6E2] absolute right-4 top-5 cursor-pointer"
              onClick={() => setShowBox(false)} // close on click
            ></i>
            {message && (
              <p className="text-[#B2A6E2] text-xl sm:text-2xl mt-10">{message}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Input;
