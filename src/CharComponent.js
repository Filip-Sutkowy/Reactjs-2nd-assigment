import React, { Component } from 'react';
import './CharComponent.css';

const charComponent = (props) => {
  const style = {display: "inline-block", padding: "16px", textAlign: "center", margin: "16px", border: "1px solid black", userSelect: "none"};
  return <div className="CharComponent" onClick={props.remove} style={style}>{props.char}</div>; 
}

export default charComponent;