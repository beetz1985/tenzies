import React from "react";

function Dice(props) {

 
    return (

            <div 
                className={`dice-cover${props.locked ? " locked" : ""}`}
                onClick={(e)=>props.toggle(e)}
                value={props.number}
                id={props.id}
                
                >
                {props.number}
            </div>
        
        
        )
}

export default Dice