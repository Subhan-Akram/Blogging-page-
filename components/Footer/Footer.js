import React, { useRef } from 'react'
import Link from 'next/link'
// import {IoSend } from "react-icons/Io"
import {SiFacebook,SiTwitter,SiYoutube} from "react-icons/si"
import { AiOutlineSend } from 'react-icons/ai'
import { useAlert } from "react-alert";

function  Footer () {
  const alert = useAlert();
  let ref=useRef(null)
 const emailEnter=async()=>{
  if(!isEmail(ref.current.value)){
    return    alert.error("Enter correct email");
  }

  const result =await fetch("/api/SubscribeUser/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
     email:ref.current.value
    })
  });
  if(result.status==201){
    
    alert.success("It's ok now!");
  }else{
    console.log("resulkt>",result)
    alert.show("Hey , You are already a user :(.");
  }
 } 

 function isEmail(email) {
  var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return re.test(email);
}

  return (
    <div className='footer'>
         <div className='footer_col_1 bd_blue'>
            <h1 className='footer_logo'>Marish</h1>
           <p className='footer_text'>Our website is dedicated to providing comprehensive and accurate information about the bus system in Karachi, specifically aimed at facilitating the navigation of the bus system for its users. We aim to assist our users in their journey by providing detailed descriptions of each bus route, including the Greenline bus and People Bus Service</p>
         </div>
         <div className='footer_col_2 bd_green'>
            <h1 className='footer_title'>Registered For Latest Updates</h1>
           <div className='footer_email'>
          <input placeholder='Email' ref={ref}></input>
          <button  aria-label="Registered" onClick={()=>{emailEnter()}}><AiOutlineSend  /></button>
           </div>
        
         </div>
         <div className='footer_col_2'>
            <h1 className='footer_title'>Follow Us</h1>
           <div className='footer_links'>
           <Link   aria-label="social media pages" href={"/posts"} className="social_icons"><SiFacebook /></Link>
            <Link  aria-label="social media pages" href={"/posts"} className="social_icons"><SiTwitter /></Link>
            <Link  aria-label="social media pages"  href={"/posts"} className="social_icons"><SiYoutube /></Link>
           </div>
        
         </div>
    </div>
  )
}

export default Footer