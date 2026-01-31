import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className={`relative h-full shrink-0 overflow-hidden w-80 rounded-4xl transition-all-smooth hover-lift hover-scale animate-fadeInUp ${props.staggerClass}`}>
      <img className="h-full w-full object-cover transition-transform-smooth hover:scale-110" src={props.img} alt="" />
      <RightCardContent id={props.id} tag={props.tag} />
    </div>
  );
};

export default RightCard;
