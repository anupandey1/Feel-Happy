import React from "react";
import { useState, useEffect} from "react";

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
      <div className="App text-6xl text-center font-serif">
        {loading && <p>Loading...</p>}
        {!loading && <p id='jokeElement'>{data}</p>}
      </div>
    </>
  )
}