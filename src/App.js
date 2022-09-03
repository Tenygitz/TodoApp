import React,{useState,useEffect} from "react";
import './App.css';
import Completed from "./Components/Completed";
import List from "./Components/List";


function App() {
  let [input,setInput]=useState([])
  let [display,setDisplay]=useState("")
  
  const handleInput=(e)=>{
    setDisplay(e.target.value)
  }
  const onClickHandler=()=>{
    const data = [...input,{id:Date.now(),text: display,status:false}];
  setInput(data) 
  localStorage.setItem("tasks",JSON.stringify(data))
  setDisplay("")
}

useEffect(()=>{
  const getInput=JSON.parse(localStorage.getItem("tasks"))
  console.log("this is",getInput)
  if(getInput){
   setInput(getInput)
  }
 },[])



  return (
    <div className="app"> 
      <div className="mainHeading">
        <h1>ToDo App</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>TODAY WORKS To COMPLETE </h2>
      </div>
      <div className="input">
        <input value={display} onChange={handleInput} type="text" placeholder="Enter item..." />
        <i onClick={onClickHandler} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        
        {input.map((obj)=>{
          return(<List key={obj.id} obj={obj}  input={input} setInput={setInput}/> )
        })}
        <h1>Completed Work</h1>
        {input.map((obj)=>{
          if(obj.status){
            
            return(<Completed obj={obj}/>)
          }
        })}
       
      </div>
    </div>
  );
}

export default App;
