import React, { useState } from "react";

const Bmi = () => {
  const [bmii, setBmii] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const getBmi = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "07ef2d038dmsh72b55d44f90823ap1288abjsn32222cb465c1",
        "X-RapidAPI-Host": "mega-fitness-calculator1.p.rapidapi.com",
      },
    };

    fetch(
      `https://mega-fitness-calculator1.p.rapidapi.com/bmi?weight=${weight}&height=${height}`,
      options
    )
      .then((response) => response.json())
      .then((data) => setBmii(data))
      .catch((err) => console.error(err));
  };

  const handleweight = (e) => {
    e.preventDefault();
    setWeight(e.target.value.toString());
  };

  const handleHeight = (e) => {
    e.preventDefault();
    setHeight(e.target.value.toString());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getBmi();
  };
  console.log(bmii);

  return (
    <>
      <form className="text-4xl md:text-5xl text-center font-serif ">
        <div className="flex flex-col">
        <label>
          Enter your weight :
          <input className="bg-gray-50 lg:mt-5 my-5"
            type="number"
            value={weight}
            onChange={handleweight}
            placeholder="weight in kg"
            required
          />
        </label>
        <label>
         Enter your height :
          <input className="bg-gray-50 lg:mt-20 my-5 "
            type="number"
            value={height}
            onChange={handleHeight}
            placeholder="height in cm"
            required
          />
        </label>
        </div>
        <button type="submit" onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-5 px-4 rounded mt-10 text-4xl" >
          :Calculate:
        </button>
        <div className="text-4xl">
        <p>Your BMI is:</p>
        {bmii ? bmii.info.bmi : []}
        <p>You are:</p>
        {bmii ? bmii.info.health:[]}
        </div>
      </form>
    </>
  );
};

export default Bmi;
