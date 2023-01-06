
// import React, { useState, useEffect } from "react"

// function TextAnimation() {
//   const [text, setText] = useState("")
// const [fullText, setFullText] = useState(
//     "Find The Buse Route"
//   )
// const [index, setIndex] = useState(0)
// useEffect(() => {
//   setInterval(
//     ()=>{
//       console.log("intrerval")
//       if (index < fullText.length) {
//      return setTimeout(() => {
//         setText(text + fullText[index])
//         setIndex(index + 1)
//       }, 40)
//     }}
//     ,10000
//   )
// }, [index])


//   return (
 
//     <h2>{text}</h2>

//   )
// }

// import "./styles.css";
// import Typewriter from "react-ts-typewriter";

// export default function TextAnimation() {
//   return (
//   <div>
//       <div className="text_animation">
      
//       <p>Karachi Buses Stops </p>
//      <Typewriter text={["Easy To Find."]} loop={true} speed={200} /> 
//      <br />
    
   
//    </div>
//    <div>
//       <p className="text_sm mt_2">
//       Sign up now for your free Mastercard debit card and digital wallet.
//        Spend, send and withdraw cash without fees.
//       </p>
//       <br /> <br />
//       <div><button className="nav_link_btn nav_link_btn_padding ">Find The Bus</button></div>
//    </div>
//   </div>
//   );
// }



import React from "react";
import Typewriter from 'typewriter-effect';

export default function TypingEffect() {
return (
	<div>
	  <div className="text_animation">
      
      <p>Karachi Buses Stops </p>
      <Typewriter
  options={{
    loop: true,
    // Other options go here
  }}
		onInit={(typewriter) => {
		typewriter.typeString('Easy To Find.')
		
			.pauseFor(1500)
			.deleteAll()
      typewriter.typeString('New Way To Get')
			.pauseFor(1500)
			.start();
		}}
	/>
     <br />
    
   
   </div>
   <div>
      <p className="text_sm mt_2">
      Sign up now for your free Mastercard debit card and digital wallet.
       Spend, send and withdraw cash without fees.
      </p>
      <br /> <br />
      <div><button className="nav_link_btn nav_link_btn_padding ">Find The Bus</button></div>
   </div>
	
	</div>
);
}
