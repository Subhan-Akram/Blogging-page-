import Container from '../components/container'
import Image from 'next/image'
import TextAnimation from "../components/text-animation/TextAnimation"
import Footer from "../components/Footer/Footer"
import bus from "../images/bus5.webp"
import Head from 'next/head'
import c from "../images/c2.webp"
import ContentSection from '../components/content-section/ContentSection'

// import bus from "../images/bus4.gif"

function HomePage() {

 
  return (
 <div>
    <Head >
      <title>My Buses  Routes Application</title>
   <meta name='description' content='conme to see the buses routes'></meta>
   <meta property='og:title' content='my buses apploication'></meta>
   <link rel="icon"></link>
    </Head>
     <div className='container_home bd_red'>
      <Container>
        <br /> 
       <div className='home_hero_secttion  bd_red'>
             <div className='hero_left bd_green'>
             <TextAnimation />
             </div>
             <div className='hero_right bd_green' 
           
             >
             <Image
          src={bus}
          alt="my desk"
        width={1000}
      
      
        />
             </div>
       </div>
       <br />
       <div className='home_hero_secttion bd_yellow mt-5'>
       <div className='hero_right bd_green'>
             <Image
          src={c}
          alt="character"
        width={1000}
    
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
