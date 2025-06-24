import React from "react";

function CustomBtn({btntext}) {
  return (
    <button className="bg-customBlack text-white py-3 px-5 rounded hover:border-primary hover:border-2 duration-300 transition">
      {btntext}
    </button>
  );
}

export default CustomBtn;
