import React from "react";

const ChildPure = (props)=> {
  console.log('ChildPure Component Rendered');
  return <p>ChildPure:Name is {props.name}</p>
};

export default React.memo(ChildPure);
