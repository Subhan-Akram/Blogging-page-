import Image from 'next/image'
import React from 'react'
import c from "../../images/c2.webp"
function BlogCards({data}) {

  return (
   
    <div className='blog_card_component  bd_blue'>
 
         <div className='img_div bd_red blog_card_img'><Image width={1000} src={c}  /></div>
         <br />
        <div> <h1 className='blog_card_title bd_red section1_title'>{data?.title}</h1></div>
        <div>
       
        <p className='blog_card_text text_sm'>
             {data?.description}
          
         </p>
  
        </div>
          
    </div>
 
  )
}

export default BlogCards