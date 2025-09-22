import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { Baloo_Paaji_2 } from "next/font/google";
import { Nunito_Sans } from "next/font/google";
import { Poppins } from "next/font/google";

const baloo = Baloo_Paaji_2({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Page = () => {
  return (
    <div className="w-full md:h-[100dvh] relative flex items-center justify-center">
      <Image
        src="/bgcover.jpg"
        alt="Background Cover"
        className="absolute inset-0 -z-10 object-cover object-center"
        draggable="false"
        fill
        priority
      />

      {/* Glass Container */}
      <div
        className="p-8 rounded-4xl shadow-xl
        bg-white/10 backdrop-blur-sm 
        border-2 border-white/90 
        w-[98%] h-[98%] inset-0 z-0 flex flex-col"
      >
        <Navbar />

        <div className="w-full h-[90%] flex md:flex-row flex-col justify-evenly mt-32 md:mt-10 items-center">
          <div className="flex flex-col w-full md:w-[60%] justify-center items-center">
            <div className="w-full">
              <h1
                className="text-white drop-shadow-[10px_10px_20px_rgba(0,0,0,0.5)] text-4xl md:text-6xl font-bold"
                style={baloo.style}
              >
                About Whispra
              </h1>

              <h3
                className="text-white drop-shadow-[10px_10px_20px_rgba(0,0,0,0.5)] mt-3 text-2xl md:text-3xl"
                style={nunito.style}
              >
                Creating a safe space for <br /> meaningful conversations
              </h3>

              <p
                className="text-white md:text-xl mt-4"
                style={poppins.style}
              >
                Whispra is built for people dealing with anxiety, stress, or <br />
                loneliness. It connects individuals with listeners who truly care,
                and <br /> provides a safe, anonymous environment for meaningful{" "}
                <br /> conversations.
              </p>
            </div>

            <div className="w-full flex flex-col justify-start items-start mt-3">
              <div className="w-full flex items-center justify-start">
                <Image
                  src="/empthy.png"
                  alt="Kindness"
                  loading="lazy"
                  width={60}
                  height={60}
                  className="drop-shadow-[10px_10px_20px_rgba(0,0,0,0.5)]"
                />
                <h2
                  className="text-white text-2xl font-bold"
                  style={baloo.style}
                >
                  Empathy &amp; kindness first
                </h2>
              </div>

              <div className="w-full flex items-center justify-start">
                <Image
                  src="/privacy.png"
                  alt="Privacy"
                  loading="lazy"
                  width={60}
                  height={60}
                  className="drop-shadow-[10px_10px_20px_rgba(0,0,0,0.5)]"
                />
                <h2
                  className="text-white text-2xl font-bold"
                  style={baloo.style}
                >
                  Privacy and safety
                </h2>
              </div>

              <div className="w-full flex items-center justify-start">
                <Image
                  src="/chat.png"
                  alt="Conversations"
                  loading="lazy"
                  width={60}
                  height={60}
                  className="drop-shadow-[10px_10px_20px_rgba(0,0,0,0.5)]"
                />
                <h2
                  className="text-white text-2xl font-bold"
                  style={baloo.style}
                >
                  Real conversations that heal
                </h2>
              </div>
            </div>
          </div>

          <Image
            src="/aboutlogo.png"
            alt="About Image"
            width={400}
            height={200}
            className="drop-shadow-[10px_10px_20px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
