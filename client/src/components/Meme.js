import React from 'react';

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  });

  function getMemeImage() {
    fetch("/api/memes")
      .then((response) => response.json())
      .then((data) => {
        const randomNumber = Math.floor(Math.random() * data.length);
        const url = data[randomNumber].url
        setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: url
        }));
      })
      .catch((error) => {
        console.error(error);
        console.log("Error fetching memes");
      });
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      <div className="form">
        <input
         type="text"
         placeholder="Top text"
         className="form--input"
         name="topText"
         value={meme.topText}
         onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button 
        className="form--button"
        onClick={getMemeImage}
        >
          Get a new meme image
        </button>
      </div>
      <div class="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}