import React, { useState } from "react";

export function Component1() {
  const [index, setIndex] = useState(0);
  const images = [
    "https://images.pexels.com/photos/13003733/pexels-photo-13003733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4452399/pexels-photo-4452399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/15903178/pexels-photo-15903178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];

  function handleChangeImage() {
    setIndex((index + 1)%images.length);
  }

  return (
    <div>
      <div>
        <img src={images[index]} alt={`Image ${index}`} />
      </div>
      <div>
        <button onClick={handleChangeImage}>Change Pic</button>
      </div>
    </div>
  );
}
