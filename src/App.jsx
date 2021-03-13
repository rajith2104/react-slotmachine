import React from  "react";
import "./index.css";
import SlotM from "./SlotM";






const App = () =>{

const spanStyle = {
fontWeight: "bold",
color:"red",
textTransform:"uppercase"

};    

return (

<>
<h1 className="heading_style"> 🎰 Welcome To <span style={spanStyle}>Slot Machine Game </span> 🎰</h1>

<div className="outerSlot">

<SlotM x= "😅" y = "😅" z = "😅"/>        

<hr/>
<SlotM x= "🍎" y = "🍓" z = "🍅"/>
<hr/>    
<SlotM x= "❤️" y = "💙" z = "💚"/>    
<hr/>
<SlotM x= "🎂" y = "🎂" z = "🎂"/>    


</div>
</>
);

}

export default App ;


