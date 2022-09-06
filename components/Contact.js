import React from "react";

export default function Contact() {
  return (
    <div className="mx-4 mt-8 overflow-hidden rounded-xl bg-teal-300">
      <div className="mx-4 mt-4 text-center text-3xl font-bold text-slate-800">
        Contact
      </div>
      <div className="flex h-80 flex-row bg-blue-400">
        <div className="h-full w-2/3 bg-green-200 text-center align-middle">
          map
        </div>
        <div className="w-1/3">
          <div className="h-1/3 bg-green-100">phone</div>
          <div className="h-1/3 bg-green-400">whatsapp</div>
          <div className="h-1/3 bg-green-800">email</div>
        </div>
      </div>
    </div>
  );
}
