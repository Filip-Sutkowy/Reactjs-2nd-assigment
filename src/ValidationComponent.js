import React, { Component } from 'react';

const validationComponent = (props) => {
  return <div>{(props.text.length >= 5) ? "Text long enough" : "Text too short" }</div>;
}

export default validationComponent;