import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase is clicked ");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","Success");
  }

  const handleLoClick = () => {
    // console.log("uppercase is clicked ");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","Success");
  }

  const handleClear =()=>{
    // console.log("clear is clicked");
    let newText="";
    setText(newText);
    props.showAlert("Text Cleared","Success");
  }

  const handleOnChange = (event) => {
    // console.log("onchange");
    setText(event.target.value);
  }
  
  const handleCopy = ()=>{
    let text =document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipbored","Success");
  }

  const handleExtraSpace =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Space Removed","Success");
  }

  const [text, setText] = useState("");
  // text = "new text"; Worng way to change the state
  // setText("new text");
  return (
    <>
      <div>
        <div className="mb-3" style={{color:props.mode===`dark`?`white`:`black`}}>
          <h1>{props.heading}</h1>
          <textarea className="form-control" value={text} style={{backgroundColor:props.mode===`dark`?`grey`:`white`,color:props.mode===`dark`?`white`:`black` }} onChange={handleOnChange} id="myBox" rows={8} />
        </div>
        <button className='btn btn-primary ' onClick={handleUpClick}>Convert To UpperCase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert To LowerCase</button>
        <button className='btn btn-primary mx-1 my-1 ' onClick={handleClear}>Clear</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpace}>Remove Spaces</button>
      </div>

      <div className="container"  style={{color:props.mode===`dark`?`white`:`black`}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 *  text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter text to preview it'}</p>
      </div>
    </>
  )
}