import Container from '../components/container'
import Image from 'next/image'
import TextAnimation from "../components/text-animation/TextAnimation"
import Footer from "../components/Footer/Footer"
import bus from "../images/bus5.jpg"

import c from "../images/c2.jpeg"
import ContentSection from '../components/content-section/ContentSection'

// import bus from "../images/bus4.gif"

function HomePage() {
  return (
 <div>
     <div className='container_home bd_red'>
      <Container>
       <div className='home_hero_secttion bd_red'>
             <div className='hero_left bd_green'>
             <TextAnimation />
             </div>
             <div className='hero_right bd_green'>
             <Image
          src={bus}
          alt="my desk"
         className='img'
        />
             </div>
       </div>
       <br />
       <div className='home_hero_secttion bd_yellow mt-5'>
       <div className='hero_right bd_green'>
             <Image
          src={c}
          alt="character"
         className='img'
        />
             </div>
             <div className='hero_left bd_green'>
               <h1 className='section1_title'>
We have a different perspective about fees</h1>
<p className='text_sm mt_2'>SadaPay doesn’t have any costly physical branches like a traditional bank, which lets us pass those savings onto our customers. </p>
<ul className='list_points'>
  <li>Free Mastercard debit card</li>
  <li>
No annual fees or minimum deposit
</li>
<li>Free, instant transfers to any bank or wallet in Pakistan
</li>
<li>Free cash withdrawals at any ATM in Pakistan</li>
<li>(3x per month)</li>
</ul>
             </div>
             
       </div>
      
      
          <ContentSection />
    
      
      </Container>

    
    </div>
    <Footer />
 </div>
  )
}

export default HomePage