import React from 'react'
import './style2.css';
import Col from "react-bootstrap/Col";

var value = 0;

export function returnUrgency(){
  return value;
}

export default function Elements() {
  return (
    <div class="slidecontainer">
      <Col>
        <input onChange = {(e)=> (value = (e.target.value))} type="range" min="1" max="100" class="slider" id="myRange"/>
      </Col>
        
    </div>
    
  )
}


