import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from '@chakra-ui/react'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState } from 'react'

const center = { lat:24.945665738220846, lng:67.04077602354319 }
// const path=[
//   {place:"hyderi",
//   origin:{lat:24.937474641332347, lng:67.04432155237853},
//   destination:{lat:24.945665738220846, lng:67.04077602354319}
// },
//   {place:"Aslam Market",origin:{lat:24.945665738220846, lng:67.04077602354319},
// destination:{lat:24.946025418810766, lng:67.05026930820114}
// },
//   // {place:"hyderi",lat:24.937474641332347, lng:67.04432155237853},
//   {place:"five star",origin:{lat:24.946025418810766, lng:67.05026930820114}
// ,destination:{lat:24.956025418810766, lng:67.07026930820114}
// }
// ]
function Map({path}) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
let [resultArray,setResultArray]=useState([])
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()

  if (!isLoaded) {
    return <SkeletonText />
  }
let temp=[]
  async function calculateRoute() {
  
    // if (originRef.current.value === '' || destiantionRef.current.value === '') {
    //   return
    // }
for(let i=0;i<path.length;i++){
  const directionsService = new google.maps.DirectionsService()
  const results = await directionsService.route({
    origin: path[i].origin,
    destination:path[i].destination,
    travelMode: google.maps.TravelMode.DRIVING,
  })
  // resultArray=[...results]
  temp.push(results)
  // console.log("results >",results)
  // console.log("place i > ",path[i].place)
 

}
setResultArray([...temp])
  
  // // setDirectionsResponse(results)
  // setDistance(results.routes[0].legs[0].distance.text)
  // setDuration(results.routes[0].legs[0].duration.text)
  }
  console.log("result array",resultArray)

  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destiantionRef.current.value = ''
  }

  return (
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      h='100vh'
      w='100vw'
    >
      <Box position='absolute' left={0} top={0} h='100%' w='100%'>
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={map => setMap(map)}
        >
          <Marker position={center} />
          {resultArray.length>0 && (
          resultArray.map((val,i)=>{
            console.log("val direction rendering >>>",i)
            
          return(  <DirectionsRenderer directions={val} />)
          })
          )}
        </GoogleMap>
      </Box>
      <Box
        p={4}
        borderRadius='lg'
        m={4}
        bgColor='white'
        shadow='base'
        minW='container.md'
        zIndex='1'
      >
        <HStack spacing={2} justifyContent='space-between'>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input type='text' placeholder='Origin' ref={originRef} />
            </Autocomplete>
          </Box>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input
                type='text'
                placeholder='Destination'
                ref={destiantionRef}
              />
            </Autocomplete>
          </Box>

          <ButtonGroup>
            <Button colorScheme='pink' type='submit' onClick={calculateRoute}>
             --Make Route--
            </Button>
            <IconButton
              aria-label='center back'
              icon={<FaTimes />}
              onClick={clearRoute}
            />
          </ButtonGroup>
        </HStack>
        <HStack spacing={4} mt={4} justifyContent='space-between'>
          <Text>Distance: {distance} </Text>
          <Text>Duration: {duration} </Text>
          <IconButton
            aria-label='center back'
            icon={<FaLocationArrow />}
            isRound
            onClick={() => {
              map.panTo(center)
              map.setZoom(15)
            }}
          />
        </HStack>
      </Box>
    </Flex>
  )
}

export default Map;