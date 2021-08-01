import React from "react";

export default function TodoFooter(props) {
  return (
    <div className="flex flex-col justify-evenly">
      <div className="mx-3 p-3 bg-white shadow flow-root">
        <label className="text-gray-500 font-thin">
          {props.itemsLeft} items left
        </label>{" "}
      </div>
      <div className="bg-white h-2 border-2 w-11/12 m-auto"></div>
      <div className="bg-white h-1 border-1 w-5/6 m-auto"></div>
    </div>
  );
}
