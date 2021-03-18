import React, {useState} from "react";
import ProgressBar from 'react-animated-progress-bar';



function ButtonComponent() {

 const [newInput, setNewInput] = useState("")

  function handleButtonClick() {
    return (
      <ProgressBar
        width="400px"
        height="10px"
        rect
        fontColor="gray"
        percentage="100"
        rectPadding="1px"
        rectBorderRadius="20px"
        trackPathColor="transparent"
        bgColor="#333333"
        trackBorderColor="grey"
      />)
  };

 return (
 <div>
     <input value = {newInput} onChange={(event) => setNewInput(event.target.value)} placeholder = "What's wrong?"></input>
     
     <button onClick = {handleButtonClick}>Make Everything Okay</button>
     {console.log(newInput)}
 </div>
 )
};
//onClick = {handleButtonClick} 

export default ButtonComponent;