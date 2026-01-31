import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-8 px-18 animate-fadeIn">
      <h4 className="uppercase bg-black text-white px-6 py-2 rounded-full transition-all-smooth hover-scale hover-glow">
        Target Audience
      </h4>
      <button className="bg-gray-300 px-6 py-2 uppercase rounded-full tracking-widest text-sm transition-all-smooth hover:bg-gray-400 hover-scale hover-lift">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
