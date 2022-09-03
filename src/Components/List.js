import React from 'react';

function List({obj,input,setInput}) {
    const deleteTask = ()=> {

        var ask = window.confirm("Do you want to delete the task?");
        if (ask) {
          const test = [...input];
            test.pop();
    
            setInput(test)
            console.log("this is a test",test)
        }else {
          console.log("Don't delete");
        }}
  return (
    <div className="todo">
    <div className="left">
      <input onChange={(e)=>{
       console.log(e.target.checked)
       console.log(obj)
       setInput(input.filter(obj2=>{
        if(obj2.id===obj.id){
          obj2.status=e.target.checked
        }
        return(obj2)

       }))
      }}value={obj.status} type="checkbox" name="" id="" />
      <p>{obj.text}</p>
    </div>
    <div className="right">
      <i onClick={()=>deleteTask()} className="fas fa-times"></i>
    </div>
  </div>
  
 
  )
}

export default List