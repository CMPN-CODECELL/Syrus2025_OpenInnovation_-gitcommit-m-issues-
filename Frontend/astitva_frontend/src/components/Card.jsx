import React from "react";
export function Card({ className, children }) {
    return (
      <div className={`bg-white rounded-xl shadow-sm ${className}`}>
        {children}
      </div>
    );
  }