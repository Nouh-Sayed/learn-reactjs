import React from "react";

const Star = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        aria-pressed={props.isFilled}
      >
        <img
          src={
            props.isFilled
              ? "/src/assets/images/star-solid.png"
              : "/src/assets/images/star-regular.png"
          }
          alt="favorite"
          className="w-5 ml-5 mt-2"
        />
      </button>
    </div>
  );
};

export default Star;