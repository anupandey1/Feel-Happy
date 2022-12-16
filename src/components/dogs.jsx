import React, { useEffect, useState } from "react";
const imageUrl = "https://random.dog/woof.json";

export default function App() {
  const [img, setImg] = useState();

  const fetchImage = async () => {
    const res = await fetch(`imageUrl`);
    console.log(res);
    const imgURL=res.url;
    setImg(imgURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <>
      <img src={img} alt="icons" />
    </>
  );
}
