import React from "react";
import { useState, useEffect} from "react";

    function Box (){
    const [inputText, setInputText] = useState("");
    const [inpText, setInpText] = useState("");
    const handleSubmit = (event) => {
      event.preventDefault();
    // {inputText!=="" && inpText!=="" && 
    // <Tokes inputText={inputText} inpText={inpText}/>}
  }
  return (
    <form>
      <label>Enter your weight:
        <input 
          type="number" 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          />
      </label>
      <label>Enter your height:
        <input 
          type="number" 
          value={inpText}
          onChange={(e) => setInpText(e.target.value)}
          />
        <br/>      
        </label>
      <button type="submit" onSubmit={handleSubmit}>sss</button>
      {inputText!=="" &&
      <Tokes inputText={inputText} inpText={inpText}/>}
    </form>
    )};
    export default function Tokes({inputText},{inpText}) {
      
      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(true);
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '212a5a0b60mshf0bfcae157f86edp1bb264jsn630a6d90f2fc',
          'X-RapidAPI-Host': 'mega-fitness-calculator1.p.rapidapi.com'
        }
        };
      useEffect(() => {
        fetch(`https://mega-fitness-calculator1.p.rapidapi.com/bmi?weight=${inputText}&height=${inpText}`, options)
        .then(response => response.json())
        .then((usefulData) => {
          const infoText = usefulData.info.bmi;
          setData(infoText);
          console.log(usefulData);
          setLoading(false);
        })
      }, [inputText,inpText]);
      return (
        <>
          <div className="App text-6xl text-center font-serif">
            {loading && <p>hi</p>}
            <Box/>
            {!loading &&<p id='infoElement'>{data}</p>
            }
          </div>
        </>
      )
    }
    
    
    
    
    
    
    
    
    
    
    // const handleUserInput = (event) => {        
    //    setInputText(event.target.value);
    // }
    
    //    return (
      //      <>
      // WEIGHT: <input onChange={handleUserInput} />
      //      {inputText!=="" &&
      //      <Tokes inputText={inputText} inpText={inpText}/>}
    // </>
    //)
    //};