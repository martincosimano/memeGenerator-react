import React, { useState } from "react";

export default function Meme() {
  const [url, setUrl] = useState("");

  function getMemeImage() {
    fetch("/api/memes")
      .then((response) => response.json())
      .then((data) => {
        const randomNumber = Math.floor(Math.random() * data.length);
        setUrl(data[randomNumber].url);
      })
      .catch((error) => {
        console.error(error);
        console.log("Error fetching memes");
      });
  }

  return (
    <main>
      <img src={url} className="meme-image" />
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
    </main>
  );
}