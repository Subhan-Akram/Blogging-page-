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
    <title>Buses Routes</title>
<meta name="robots" content="index, follow"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="canonical" href="https://blogging-page-psi.vercel.app/"/>
<meta property="article:published_time" content="2022-01-01T12:00:00+00:00" />
<meta property="article:author" content="subhan akram"></meta>
    <meta name="title" content="Bus System in Karachi - Detailed Bus Route Information and Map Feature" />
    <meta name="description" 
  content="Our website provides a one-stop-shop for information on the bus system in Karachi, including detailed descriptions of each bus route, a map feature to easily locate bus routes, fare information, schedule and reviews of bus services, and a comparison chart to help users decide on their preferred option." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://images.ctfassets.net/wus7u7nserin/3VaFfNShN9q4XKE4dEVpej/38ee95142ba3fe1223973d13f0d6a68e/c2.jpeg?h=250" />
    <meta property="og:url" content="https://blogging-page-psi.vercel.app/" />
    <meta property="og:description" content="Our website provides a one-stop-shop for information on the bus system in Karachi, including detailed descriptions of each bus route, a map feature to easily locate bus routes, fare information, schedule and reviews of bus services, and a comparison chart to help users decide on their preferred option." />
    <meta property="og:title" content="Bus System in Karachi - Detailed Bus Route Information and Map Feature" />
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:title" content="Bus System in Karachi - Detailed Bus Route Information and Map Feature" />
    <meta property="twitter:description" content="Our website provides a one-stop-shop for information on the bus system in Karachi, including detailed descriptions of each bus route, a map feature to easily locate bus routes, fare information, schedule and reviews of bus services, and a comparison chart to help users decide on their preferred option." />
    <meta property="twitter:image" content="https://images.ctfassets.net/wus7u7nserin/3VaFfNShN9q4XKE4dEVpej/38ee95142ba3fe1223973d13f0d6a68e/c2.jpeg?h=250" />
    <meta property="twitter:url" content="https://blogging-page-psi.vercel.app/" />

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
