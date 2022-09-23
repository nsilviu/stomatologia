import { ActionButton } from "./ActionButton";
import React from "react";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className="mx-4 mt-8 overflow-hidden rounded-xl ">
      <div className="mx-4 mt-4 text-center text-3xl font-bold text-slate-800">
        Contact
      </div>
      <div className="flex h-80 flex-row ">
        <div className="h-full w-2/3  p-2 text-center align-middle">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1729.9790571210942!2d26.141625515258408!3d44.41234180012498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1feecd16a038d%3A0x33192f3ce75d54!2sStomatologia%20Orto%20Implant!5e0!3m2!1sen!2sro!4v1662643742201!5m2!1sen!2sro"
            width={"100%"}
            height={"100%"}
            allowFullScreen="false"
            frameBorder="0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className=" rounded-xl"
          />
        </div>
        <div className="w-1/3">
          <div className="flex h-1/3 justify-center align-middle">
            <ActionButton
              link={"tel:0785779776"}
              icon={faPhone}
              buttonStyle={"p-4 px-10 text-3xl bg-blue-400 text-white"}
              className="text"
            />
          </div>
          <div className="flex h-1/3 justify-center align-middle">
            <ActionButton
              link={"https://api.whatsapp.com/send?phone=40785779776"}
              icon={faWhatsapp}
              buttonStyle={"p-4 px-10 text-3xl bg-[#25D366] text-white"}
              className="text"
            />
          </div>
          <div className="flex h-1/3 justify-center align-middle">
            <ActionButton
              link={"mailto:lavinia.ardalau@gmail.com"}
              icon={faEnvelope}
              buttonStyle={"p-4 px-10 text-3xl text-white bg-slate-400"}
              className="text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
