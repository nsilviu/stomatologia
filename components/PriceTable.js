import React from "react";

function PriceTable(props) {
  const { title, serviceName, servicePrice } = props;
  return (
    <div className="m-4 flex flex-col rounded-md bg-white text-center  text-slate-900 shadow-md">
      <span className="mt-2 text-2xl font-bold">{title}</span>
      <div className=" m-4 flex flex-row justify-around">
        <div className="flex flex-col justify-evenly">
          {serviceName.map((option, index) => {
            return (
              <span
                className="justify-evenly p-2 text-right text-xs"
                key={index}
              >
                {option}
              </span>
            );
          })}
        </div>
        <div className="flex w-1/2 flex-col justify-evenly">
          {servicePrice.map((option, index) => {
            return (
              <span key={index} className="p-2 text-left text-xs text-teal-500">
                {option}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PriceTable;
