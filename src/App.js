
import React, { useState } from "react";

export default function App() {
  const [catImage, setCatImage] = useState([]);

  const handleClick = (()=>{
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then(data => setCatImage(data))
  }) 
  return (
    <div className="App">
          {
        catImage.fact
      }

      <button onClick={handleClick}>Click me</button>
    </div>
  );
}