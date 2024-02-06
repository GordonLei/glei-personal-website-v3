import React from "react";

function SkillsCard(props) {
  return (
    <span className="group h-8 flex flex-col place-items-center my-4  mb-16">
      <img
        className="ease-in duration-500 opacity-50 group-hover:opacity-100 h-16"
        src={props.imgSrc}
        alt="missing SkillsCard"
      ></img>
      <span className="text-center font-semibold ease-in opacity-0 duration-500 group-hover:opacity-100 ">
        {props.hoverText}
      </span>
    </span>
  );
}

export default SkillsCard;
