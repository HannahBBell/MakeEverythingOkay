import React, {useState} from "react";
//import ProgressBar from 'react-animated-progress-bar';

function ButtonComponent() {

 const [newInput, setNewInput] = useState("");
 const [itemList, setItemList] = useState([]);

function handleButtonClick() {
  let newItem = newInput;
  setItemList([newItem, ...itemList]);
  setNewInput("")
};

 return (
 <div>
     <input value = {newInput} onChange={(event) => setNewInput(event.target.value)} placeholder = "What's wrong?"></input>
     
     <button onClick = {handleButtonClick}>Make Everything Okay</button>
     <ul>{itemList.map((item) => <li>{item}</li>)}</ul>
     {/* <p>{itemList.map((item) => <li>{itemList[-1]}</li>)}</p> */}
     {console.log(newInput)}
 </div>
 )
};
//onClick = {handleButtonClick} 

export default ButtonComponent;



{/* // function progressBar() {
  //   return (
  //     <ProgressBar
  //       width="400px"
  //       height="10px"
  //       rect
  //       fontColor="gray"
  //       percentage="100"
  //       rectPadding="1px"
  //       rectBorderRadius="20px"
  //       trackPathColor="transparent"
  //       bgColor="#333333"
  //       trackBorderColor="grey"
  //     />)
  // }; */}