import React, { useState } from "react";

function TodoItem(props) {
  const [checked, setChecked] = useState(false);
  const [deleted, setDeleted] = useState(false);

  return (
    <div className="m-3   p-3  bg-white rounded  shadow ">
      <div className="flex">
        <input
          type="checkbox"
          className={
            "mt-checkbox mt-checkbox-blue-500hidden overflow-hidden mr-4 my-1 w-5 h-5"
          }
          onClick={() => (checked ? setChecked(false) : setChecked(true))}
        />
        <label
          className={`flex items-center cursor-pointer select-none transition-all duration-200 ${
            checked
              ? "text-gray-500 font-light line-through"
              : "text-gray-700 font-medium"
          }`}
        >
          {props.Todo}
        </label>
        <div className="flow-root w-full">
          <button
            className="border-none text-red-400 float-right hover:text-red-600 text-xl"
            onClick={() => {
              deleted ? setDeleted(false) : setDeleted(true);
              props.delHandler(props.Todo);
            }}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
