import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function PriceTable(props) {
  const { title, serviceName, servicePrice } = props;
  return (
    <div className="mx-4 my-10 flex flex-col rounded-md bg-white text-center  text-slate-900 shadow-md">
      <span className="mt-2 text-2xl font-bold">
        <FontAwesomeIcon className="fa-xs mr-2" icon={faTooth} />
        {title}
      </span>
      <div className="mt-5 grid grid-flow-row-dense grid-cols-2">
        {serviceName.map((option, index) => {
          return (
            <div
              className="col-start-1 m-4 self-center text-left text-xs"
              key={index}
            >
              {option}
            </div>
          );
        })}
        {servicePrice.map((option, index) => {
          return (
            <div
              key={index}
              className="col-start-2 self-center text-center text-teal-500"
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PriceTable;
