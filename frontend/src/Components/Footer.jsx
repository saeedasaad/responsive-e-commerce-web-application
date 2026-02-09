import React from "react";
import { assets } from "../assets/assets";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#f0eeed] border-t border-gray-200 relative pt-24 mt-36">

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 absolute -top-28 w-full max-w-6xl left-1/2 -translate-x-1/2">
        <div className="bg-black rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-white text-lg md:text-xl font-semibold text-center md:text-left">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="flex flex-col w-full md:w-auto gap-4">
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white border focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <button className="px-6 py-2 bg-white rounded-full border hover:bg-gray-100 transition">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-1">
          <img src={assets.logo} alt="Shop.co" className="h-6 mb-4" />
          <p className="text-gray-600 text-sm mb-4">
            We have clothes that suit your style and which you're proud to wear.
          </p>
          <div className="flex gap-3">
            {[FaTwitter, FaFacebookF, FaInstagram, FaGithub].map((Icon, i) => (
              <Icon
                key={i}
                className="w-7 h-7 border rounded-full p-1.5 cursor-pointer hover:bg-black hover:text-white"
              />
            ))}
          </div>
        </div>

        {["COMPANY", "HELP", "FAQ", "RESOURCES"].map((section, i) => (
          <div key={i}>
            <h3 className="font-semibold mb-3">{section}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {section === "COMPANY" &&
                ["About", "Features", "Works", "Career"].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              {section === "HELP" &&
                [
                  "Customer Support",
                  "Delivery Details",
                  "Terms & Conditions",
                  "Privacy Policy",
                ].map((item) => <li key={item}>{item}</li>)}
              {section === "FAQ" &&
                ["Account", "Manage Deliveries", "Orders", "Payments"].map(
                  (item) => <li key={item}>{item}</li>
                )}
              {section === "RESOURCES" &&
                [
                  "Free eBooks",
                  "Development Tutorial",
                  "How to - Blog",
                  "Youtube Playlist",
                ].map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>


      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            Shop.co © 2026, All Rights Reserved
          </p>
          <div className="flex gap-3">
            {[
              assets.mastercardIcon,
              assets.visaIcon,
              assets.googlepayIcon,
              assets.paypalIcon,
              assets.applepayIcon,
            ].map((icon, i) => (
              <img
                key={i}
                src={icon}
                alt="Payment"
                className="h-7 bg-white p-2 rounded-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
