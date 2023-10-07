import React, { useState } from "react";

export default function Textfile(props) {
  const [text, setText] = useState("");
  const [count,setCount] = useState(0)
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleOnClick = () => {
    if(text.length<=1){
      props.showAlert("empty text area","danger")
    }
    else{
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case","success")
    }
  };

  const handleOnClicklower = () => {
    if(text.length<=1){
      props.showAlert("empty text area","danger")
    }
    else{
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower case","success")
    }
  };

  const handleOnClickclear = () => {
    if(text.length<=1){
      props.showAlert("empty text area","danger")
    }
    else{
    const newText = "";
    setText(newText);
    setCount(0);
    props.showAlert("text cleared","success")
    }
  };

  const handleOnClickno = () => {
    if(text.length<=1){
      props.showAlert("empty text area","danger")
    }
    else{
    let newc=0;
   
    for (let i = 0; i <= text.length; i++) {
     
      if (text[i] === '1' || text[i] === '2' || text[i] === '3' || text[i] === '4' || text[i] === '5') {
         newc++; 
       
      }
      
    }
    setCount(newc)
    props.showAlert("total no counted","success")
  }
  }


  return (
    <div className={`text-${props.mode==='dark'?'light':'dark'}`}>
      <h1>{props.heading}</h1>
      <div className="mb-3"></div>
      <textarea
        className={`form-control text-${props.mode === 'dark' ? 'light' : 'dark'}  bg-${props.mode === 'dark' ? 'dark' : 'light'}`}
        
        value={text}
        
        onChange={handleOnChange}
        id="text"
        rows="8"
      ></textarea>
      <button className="btn btn-primary mx-3 my-2" onClick={handleOnClick}>
        covert to uppercase
      </button>
      
      <button className="btn btn-primary mx-3 my-2" onClick={handleOnClicklower}>
        covert to lowercase
      </button>
      
      <button className="btn btn-primary mx-3 my-2" onClick={handleOnClickclear}>
        clear
      </button>

      <button className="btn btn-primary mx-3 my-2" onClick={handleOnClickno}>
        no entered
      </button>


      <div className="counter my-4">
        <h3>Conter</h3>
        <p className="counter my-3"><b>Characters:{text.length}</b></p>
        <p><b>words:{text.split(" ").length}</b></p>
        <p><b>no count:{count}</b></p>

      </div>






    </div>
  );
}
