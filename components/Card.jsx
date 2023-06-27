import React from "react";

export default function Card({ children }) {
  return (
    <div className="transitionIn1s flex flex-row justify-center w-5/6 lg:w-4/6 bg-white rounded-2xl shadow-2xl transition-all duration-500 ease-in-out">
      {children}
    </div>
  );
}
