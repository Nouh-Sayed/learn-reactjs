import React from "react";

const Body = () => {
const [meme, setMeme] = React.useState({
  topText: "",
  bottomText: "",
  randomImage: "https://i.imgflip.com/1bij.jpg"
});
function getMemeImage() {
     console.log("Button clicked!");
    setMeme(prevMeme => ({
      ...prevMeme,
          topText: "",
    bottomText: "",
      randomImage: "https://i.imgflip.com/1bij.jpg",
      
    }));
}

function mouseclick () {
  console.log("Mouse over inputt!");
}



function handleChange(event){
      setMeme(prevMeme => ({
    ...prevMeme,
    bottomText: event.target.value,
  }))};

  return (
    <div>
      <main className="flex flex-col gap-4 items-center justify-center mt-10">
        <section className="flex justify-around items-center gap-20 text-2xl ">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="toptext" className="font-bold">
              Top Text
            </label>
            
            <input
            onClick={mouseclick}
              className="border w-70 mt-5"
              type="text"
              id="toptext"
              placeholder="Top Text"
              value={meme.topText}
              name="topText"
              onChange={(e) =>
  setMeme(prevMeme => ({
    ...prevMeme,
  topText: e.target.value
  }))
}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="bottomtext" className="font-bold">
              Bottom Text
            </label>
            <input
              onClick={mouseclick}
              className="border w-70 mt-5"
              type="text"
              id="bottomtext"
              placeholder="Bottom Text"
              name="bottomtext"
              value={meme.bottomText}
                onChange={handleChange}

            />
          </div>
        </section>
        <button className="border bg-purple-800 text-white w-150 px-4 py-2 mt-6" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
         <div className="relative mt-6">
        <img
          src={meme.randomImage}
          alt="Meme"
          className="w-150"
        />

        <h2 className="absolute top-5 left-1/2 -translate-x-1/2 text-white text-4xl font-bold">
          {meme.topText}
        </h2>

        <h2 className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-4xl font-bold">
          {meme.bottomText}
        </h2>
      </div>
      </main>
    </div>
  );
};

export default Body;
