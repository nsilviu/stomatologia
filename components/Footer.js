import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="my-5 text-center">
      <div className="m-4">
        <hr />
      </div>
      <Link href={"https://facebook.com"}>
        <FontAwesomeIcon
          className="fa-2xl mx-2 cursor-pointer text-blue-500"
          icon={faFacebook}
        />
      </Link>
      <Link href={"https://api.whatsapp.com/send?phone=40785779776"}>
        <FontAwesomeIcon
          className="fa-2xl mx-2 cursor-pointer text-green-500"
          icon={faWhatsapp}
        />
      </Link>
      <div className="m-2 text-sm font-light">
        Stomatologia Orto Implant{" "}
        <FontAwesomeIcon className="fa-xs" icon={faCopyright} /> 2022
      </div>
    </div>
  );
}
