// import React from "react";
// import { useState, useEffect} from "react";

//     function Box (){
//     const [inputText, setInputText] = useState("");
//     const [inpText, setInpText] = useState("");
//     const handleSubmit = (event) => {
//       event.preventDefault();
//     // {inputText!=="" && inpText!=="" &&
//     // <Bmi inputText={inputText} inpText={inpText}/>}
//   }
//   return (
//     <form>
//       <label>Enter your weight :
//         <input className="bg-lime-200 mt-20"
//           type="number"
//           value={inputText}
//           onChange={(e) => setInputText(e.target.value)}
//           />
//       </label>
//       <label>Enter your height :
//         <input className="bg-lime-200 mt-10"
//           type="number"
//           value={inpText}
//           onChange={(e) => setInpText(e.target.value)}
//           />
//         <br/>
//         </label>
//       <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10" onSubmit={handleSubmit}>submit</button>
//       {inputText!=="" &&
//       <Bmi inputText={inputText} inpText={inpText}/>}
//     </form>
//     )};
//     export default function Bmi({inputText},{inpText}) {

//       const [data, setData] = useState(null);
//       const [loading, setLoading] = useState(true);
//       const options = {
//         method: 'GET',
//         headers: {
//           'X-RapidAPI-Key': '212a5a0b60mshf0bfcae157f86edp1bb264jsn630a6d90f2fc',
//           'X-RapidAPI-Host': 'mega-fitness-calculator1.p.rapidapi.com'
//         }
//         };
//       useEffect(() => {
//         fetch(`https://mega-fitness-calculator1.p.rapidapi.com/bmi?weight=${inputText}&height=${inpText}`, options)
//         .then(response => response.json())
//         .then((usefulData) => {
//           const infoText = usefulData.info.bmi;
//           setData(infoText);
//           console.log(usefulData);
//           setLoading(false);
//         })
//       }, [inputText,inpText]);
//       return (
//         <>
//           <div className="App text-6xl text-center font-serif">
//             {loading && <p>hi</p>}
//             <Box/>
//             {!loading &&<p id='infoElement'>{data}</p>
//             }
//           </div>
//         </>
//       )
//     }
import React, { useState } from "react";

const App = () => {
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
      <form className="App text-6xl text-center font-serif">
        <label>
          Enter your weight :
          <input className="bg-lime-200 mt-20"
            type="number"
            value={weight}
            onChange={handleweight}
            required
          />
        </label>
        <label>
          Enter your height :
          <input className="bg-lime-200 mt-20"
            type="number"
            value={height}
            onChange={handleHeight}
            required
          />
        </label>
        <button type="submit" onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10" >
          sumbit
        </button>
        {bmii ? bmii.info.bmi : []}
      </form>
    </>
  );
};

export default App;
