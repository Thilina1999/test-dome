import React, { useState } from "react";

function FactoryStatus() {
    const [state1, setState1] = useState(false);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(false);
    const [state4, setState4] = useState(false);
    const [color1, setColor1] = useState(false);
    const [color2, setColor2] = useState(false);


    const Change = () =>{
        if(state1 || state2 || state4){
            setColor1(true);
        }
        if(state3 || state4){
            setColor2(true);
        }
    }

    
    return (
      <div>
      <h3>Control Panel</h3>
      <div> 
        <input type="checkbox" id="sheets-status" onClick={()=>{
            if(state1){
                setState1(false);
            }else {
                setState1(true);
            }
            Change()
        }}/>
        {color1? <span id="sheets-station" style={{ backgroundColor: "red" }} >SHEETS</span>:<span id="sheets-station" >SHEETS</span>}
      </div>
      <div> 
        <input type="checkbox" id="beams-status" onClick={()=>{
            if(state1){
                setState2(false);
            }else {
                setState2(true);
            }
            Change()
        }}/> 
      {color1? <span id="sheets-station" style={{ backgroundColor: "red" }} >BEAMS</span>:<span id="sheets-station" >BEAMS</span>}
      </div>
      <div> 
        <input type="checkbox" id="bolts-status" onClick={()=>{
            if(state1){
                setState3(false);
            }else {
                setState3(true);
            }
        }}/>
        <span id="bolts-station" style={{ backgroundColor: "red" }} >BOLTS</span>
      </div>
      <div> 
        <input type="checkbox" id="frames-status" onClick={()=>{
            if(state1){
                setState4(false);
            }else {
                setState4(true);
            }
            Change()
        }}/>
        {color1? <span id="sheets-station" style={{ backgroundColor: "red" }} >FRAMES</span>:<span id="sheets-station" >FRAMES</span>}
      </div>
    </div>
    );
  }

  export default FactoryStatus;