import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="p-8 absolute top-0 left-0 h-full w-full flex flex-col justify-between bg-gradient-to-t from-black/70 to-transparent">
      <h2 className="bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center transition-all-smooth hover-scale hover-glow">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-xl leading-relaxed text-white mb-14 animate-fadeIn">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
          explicabo aliquid aut vero magni laborum!
        </p>
        <div className="flex justify-between gap-4">
          <button className="bg-blue-600 text-white font-medium rounded-full px-8 py-2 transition-all-smooth hover:bg-blue-700 hover-scale hover-lift">
            {props.tag}
          </button>
          <button className="bg-blue-600 text-white font-medium rounded-full px-4 py-2 transition-all-smooth hover:bg-blue-700 hover-scale hover-lift">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
