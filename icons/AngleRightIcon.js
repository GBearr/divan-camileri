import React from "react";

const AngleRightIcon = ({ flip = false }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1.5em"
      viewBox="0 0 24.747 38.344"
      style={{
        transform: flip ? "scaleX(-1)" : "none",
      }}
    >
      <path
        id="Icon_awesome-angle-right"
        data-name="Icon awesome-angle-right"
        d="M25.644,27.955,9.353,44.246a2.863,2.863,0,0,1-4.061,0L2.585,41.539a2.863,2.863,0,0,1,0-4.061L14.132,25.931,2.585,14.383a2.863,2.863,0,0,1,0-4.061l2.7-2.731a2.863,2.863,0,0,1,4.061,0L25.632,23.882a2.867,2.867,0,0,1,.012,4.073Z"
        transform="translate(-1.74 -6.747)"
        fill="#222"
      />
    </svg>
  );
};

export default AngleRightIcon;
