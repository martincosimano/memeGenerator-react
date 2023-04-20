import React from 'react';

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    fetch("/api/memes")
      .then((response) => response.json())
      .then((data) => {
        const randomNumber = Math.floor(Math.random() * data.length);
        setMemeImage(data[randomNumber].url);
      })
      .catch((error) => {
        console.error(error);
        console.log("Error fetching memes");
      });
  }

  return (
    <main>
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
      <img src={memeImage} className="meme--image" />
    </main>
  );
}