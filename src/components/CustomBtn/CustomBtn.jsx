import React from "react";

function CustomBtn({btntext}) {
  return (
    <button className="bg-customBlack text-white py-2 px-5 rounded hover:bg-primary-dark duration-300 transition">
      {btntext}
    </button>
  );
}

export default CustomBtn;
