import React from "react";

function NewTodo(props) {
  return (
    <div className="m-3 pt-0 pt-3">
      <input
        type="text"
        placeholder="Enter a new ToDo"
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            props.newTodo(e.target.value);
            e.target.value = "";
          }
        }}
        className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
      />
    </div>
  );
}

export default NewTodo;
