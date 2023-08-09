import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({ }: Props) {
  return (
    <div className="flex h-screen flex-wrap relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-tight text-gray-500 text-2xl"></h3>
      <div className="flex flex-col space-y-10 ">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          Ive got just what you need,{" "}
          <span className="decoration-yellow-600/50 underline">Lets Talk.</span>
        </h4>
        <div className="space-y-2 md:space-y-10">
          <div className="flex items-center space-x-5 md:justify-center">
            <PhoneIcon className="text-yellow-600 h-7 w-7 animate-pulse" />
            <p className="text-md md:text-2xl text-left">+222 34 76 18 99</p>
          </div>

          <div className="flex items-center space-x-5 md:justify-center">
            <EnvelopeIcon className="text-yellow-600 h-7 w-7 animate-pulse" />
            <p className="text-md md:text-2xl text-left">diagana-amara@outlook.com</p>
          </div>

          <div className="flex items-center space-x-5 md:justify-center">
            <MapPinIcon className="text-yellow-600 h-7 w-7 animate-pulse" />
            <p className="text-md md:text-2xl text-left">World Wide Web</p>
          </div>

          <form className="flex flex-col space-y-2 w-full mx-auto pt-5">

            <input placeholder="Name" className="py-2 md:py-5 contactInput" type="text" />
            <input
              placeholder="Email"
              className="py-2 md:py-5 contactInput"
              type="email"
            />

            <input placeholder="Subject" className="py-2 md:py-5 contactInput" type="text" />
            <textarea placeholder="Message" className="py-2 md:py-5 contactInput" />
            <button
              type="submit"
              className="bg-yellow-600 py-2 md:py-5 px-10 rounded-md text-black font-bold text-xl md:text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
