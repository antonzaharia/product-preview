import React from "react";

export default function SelectInput({ name, image, handleSelect }) {
  const makeName = () => {
    let nameArr = name.split("").splice(1, name.length - 1);
    return `${name[0].toUpperCase()}${nameArr.join("")}`;
  };
  return (
    <div className="select-div">
      <label htmlFor={name}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          alt={name}
        />
      </label>
      <input type="radio" name="shape" id={name} onChange={handleSelect} />
      <label htmlFor={name}>{makeName()}</label>
    </div>
  );
}
