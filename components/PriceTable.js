import React from "react";
import { EstFac } from "./PricesList";

function PriceTable(props) {
  const { title, serviceName, servicePrice } = props;
  return (
    <div className="m-4 flex flex-col rounded-md bg-slate-100 text-center  text-slate-900 shadow-md">
      <span className="mt-2 text-2xl font-bold">{title} Estetica faciala</span>
      <div className="m-4 justify-around space-x-8">
        {serviceName.map((option) => {
          <span>{option}</span>;
        })}
        <span className="text-teal-500">{servicePrice}Gratuit</span>
      </div>
    </div>
  );
}

export default PriceTable;
