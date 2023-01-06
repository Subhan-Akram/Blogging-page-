import React from 'react'
import Link from 'next/link'
// import {IoSend } from "react-icons/Io"
import {SiFacebook,SiTwitter,SiYoutube} from "react-icons/si"
import { AiOutlineSend } from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer'>
         <div className='footer_col_1 bd_blue'>
            <h1 className='footer_logo'>Buses Finder</h1>
           <p className='footer_text'>SadaPay is registered as Sadapay Private Limited with the Securities and Exchange Commission of Pakistan (No. 0136598), is regulated by the State Bank of Pakistan, and is a wholly-owned subsidiary of SadaPay Technologies Ltd., registered in the Dubai International Financial Center under commercial fintech license #3263.

SadaPay Mastercard debit cards issued pursuant to a license by Mastercard Asia/Pacific Pte. Ltd.</p>
         </div>
         <div className='footer_col_2 bd_green'>
            <h1 className='footer_title'>Registered For Latest News</h1>
           <div className='footer_email'>
          <input placeholder='Email'></input>
          <button><AiOutlineSend /></button>
           </div>
        
         </div>
         <div className='footer_col_2'>
            <h1 className='footer_title'>Follow Us</h1>
           <div className='footer_links'>
           <Link to="/" href={"/"} className="social_icons"><SiFacebook /></Link>
            <Link to="/" href={"/"} className="social_icons"><SiTwitter /></Link>
            <Link to="/" href={"/"} className="social_icons"><SiYoutube /></Link>
           </div>
        
         </div>
    </div>
  )
}

export default Footer