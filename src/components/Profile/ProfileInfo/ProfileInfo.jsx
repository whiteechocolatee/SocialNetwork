import React from "react";
import c from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" />
      </div>
      <div className={c.descriprionBlock}>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
