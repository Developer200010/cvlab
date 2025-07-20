import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="w-16 h-16 border-4 border-teal-400 border-t-amber-400 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
