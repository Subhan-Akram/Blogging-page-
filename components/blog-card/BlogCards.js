import Image from 'next/image'
import React from 'react'
import c from "../../images/c2.jpeg"
function BlogCards({data}) {

  return (
    <div className='blog_card_component  bd_red'>
         <div className='img_div bd_red'><Image src={c} /></div>
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