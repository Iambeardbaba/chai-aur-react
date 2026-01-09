import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="p-8 absolute top-0 left-0 h-full w-full flex flex-col justify-between">
      <h2 className="bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-xl  leading-relaxed text-white mb-14">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
          explicabo aliquid aut vero magni laborum!
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white font-medium rounded-full px-8 py-2">
            {props.tag}
          </button>
          <button className="bg-blue-600 text-white font-medium rounded-full px-4 py-2">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
