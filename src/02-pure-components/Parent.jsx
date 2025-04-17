import React, { useEffect, useState } from "react";
import ChildPure from "./ChildPure";
import ChildRegular from "./ChildRegular";

function Parent(){
  const [count,setCount]= useState(0);
  const name= "Aaryav";

  useEffect(() => {
    const intervalId = setInterval(()=>{
      setCount((prevCount)=>prevCount + 1);
    },1000);

    return ()=> clearInterval(intervalId);
  });

  console.log('Parent component Rendered');

  return(
    <div>
      <h1>Parent Component</h1>
      <p>Count:{count}</p>
      <ChildRegular name={name}/>
      <ChildPure name={name}/>
    </div>
  );
  
}
export default Parent;

