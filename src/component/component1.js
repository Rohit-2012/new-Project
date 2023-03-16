import React, { useState } from "react";
import '../CSS/component1.css'

export function Component1() {
  const [index, setIndex] = useState(0);
  const images = [
    "https://images.pexels.com/photos/3635300/pexels-photo-3635300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg", "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];

  function handleChangeImage() {
    setIndex((index + 1)%images.length);
  }

  return (
      <div className="compOne">
        <img src={images[index]} alt={`Image ${index}`} />
        
        <div className="btn1">
        <button onClick={handleChangeImage}>Change Pic</button>
        </div>
      </div>
  );
}
