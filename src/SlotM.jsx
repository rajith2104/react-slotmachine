import React from "react";


const SlotM = (props) =>{

    // let x = props.x;
    // let y = props.y;
    // let z = props.z;
    
    
    let{x,y,z} = props; // Destructuring
    
    if(x===y && y===z && z===x){
    
    return(
    
    <div className ="innerSlot">
    
    <h1>{x}{y}{z}</h1>
    
    <h1>This is Matching.</h1>
    
    
    </div>
    );}
    
    else if(x!==y && y===z && z==x){
    
        return(
        
        <div className ="innerSlot">
        
        <h1>{x}{y}{z}</h1>
        
        <h1>This is Not Matching.</h1>
        
        </div>
        
        );
    
        }
    
    
        else {
    
            return(
        
                <div className ="innerSlot">
                
                <h1>{x}{y}{z}</h1>
                
                <h1>This is Not Matching.</h1>
                
                </div>
                
                );
            
    
    
        }
    
    
    }
    

    export default SlotM;