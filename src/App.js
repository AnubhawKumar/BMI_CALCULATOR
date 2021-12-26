import React, { useState } from 'react';
import "./App.css";


function App() {

  const [height,setHeight] = useState("");
  const [weight,setWeight] = useState("");

  const [result,setResult] = useState(null);

  const [status,setStatus] = useState("");

  const targetHeight = (e) => {
    setHeight(e.target.value);
    // console.log(height);
  }

  const targetWeight = (e) => {
    setWeight(e.target.value);
  }


  const calculateBMI = () => {

    const bmi =  Number((weight / (height / 100) **2).toFixed(2));
    setResult(`Your BMI is : ${bmi}`);

    if(bmi===Infinity){
      setResult(`Please Enter Your Height`);
    }
    if(isNaN(bmi)){
      setResult(`Please Enter Your Height and Weight`);
    }
    const statusBMI = getStatus(bmi);

    setStatus(`You are currently :${statusBMI}`);
  };

  const getStatus = (result) => {
    if(result < 18.5){
      return "UnderWeight";
    } else if (result>=18.5 && result<=24.9) {
      return "Normal";
    } else if (result>=25 && result<29.9) {
      return "OverWeight";
    } else {
      return "Obese"
    }
  }

  return (
    <div className="App">
    <h1><span className='before-heading'></span>BMI CALCULATOR<span className='after-heading'></span></h1>
      <div className = "calculation-part">
        <input type="number" placeholder="Enter Your Height in CM" value = {height} onChange={targetHeight}></input>
        <input type="number" placeholder="Enter Your Weight in CM" value = {weight} onChange={targetWeight}></input>
        <button type="submit" onClick={calculateBMI}>
          Calculate BMI
        </button>
        <p className='result'>{result}</p>
        <p className='status'>{status}</p>

      </div>
    </div>
  );
}

export default App;
