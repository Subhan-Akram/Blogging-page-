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
               <h1 className='section1_title'>Are you looking for a specific bus route in Karachi? <br/></h1>
<p className='text_sm mt_2'>Our blog pages feature an extensive collection of information about the bus system in Karachi, including detailed descriptions of each bus route. </p>
<ul className='list_points'>
  <li>To find the bus route you need, simply visit our blog pages and search for the bus name.</li>
  <li>Once you've found the bus you're looking for, you'll be able to view a chart that provides detailed information about the route, including the bus stops, estimated travel time, and any notable landmarks or points of interest along the way.
</li>
<li>Our website provides a map feature that allows you to easily find bus routes in the area you're looking to travel to.
</li>

<li>
The map displays all the bus routes in the area, including the Greenline bus and People Bus Service, making it easy to find the best option for your needs.

</li>
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
