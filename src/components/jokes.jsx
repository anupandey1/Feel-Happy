import React from "react";
import { useState, useEffect} from "react";
import jokes from "../assets/jokes.png";
export default function Jokes() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://icanhazdadjoke.com/slack`)
      .then(response => response.json())
      .then((usefulData) => {
        const jokeText = usefulData.attachments[0].fallback;
        setData(jokeText);
        setLoading(false);
        return;
      })
  }, []);
  return (
    <>
      <div className="jokes font-serif my-10 text-center flex justify-center items-center">
        <div className="text-6xl text-center mx-20 ">
          {/* loading?<p>Loading...</p>:{<p id='jokeElement'>{data}</p> &&<img src={jokes}/>} */}
        {loading && <p>Loading...</p>}
        {!loading &&<p id='jokeElement'>{data}</p>}
        {!loading &&<img src={jokes} className="mx-96 rounded-full my-10 w-60"/>}
        </div>
      </div>
    </>
  )
}