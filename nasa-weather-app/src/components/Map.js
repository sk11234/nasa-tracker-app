import {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationMarker1 from './LocationMarker1'
import LocationMarker2 from './LocationMarker2'
import LocationMarker3 from './LocationMarker3'
import LocationInfoBox from './LocationInfoBox'

const Map = ({eventData, center, zoom}) => {
  const [locationInfo, setLocationInfo] = useState(null)
  const [isChecked, setIsChecked] = useState(true)
  const [isChecked1, setIsChecked1] = useState(true)
  const [isChecked2, setIsChecked2] = useState(true)
  const [isChecked3, setIsChecked3] = useState(true)

  const handleOnChange = () => {
    setIsChecked(!isChecked)
  }

  const handleOnChange1 = () => {
    setIsChecked1(!isChecked1)
  }

  const handleOnChange2 = () => {
    setIsChecked2(!isChecked2)
  }

  const handleOnChange3 = () => {
    setIsChecked3(!isChecked3)
  }

  const markers = eventData.map((ev, index) => {
    if (ev.categories[0].id === "wildfires" && isChecked) {
      return <LocationMarker key={index} lat={ev.geometry[0].coordinates[1]} 
      lng={ev.geometry[0].coordinates[0]} onClick={() => setLocationInfo({id: ev.id, title: ev.title})}/>
    }

    return null
  })

  const markers1 = eventData.map((ev, index) => {
    if (ev.categories[0].id === "seaLakeIce" && isChecked1) {
      return <LocationMarker1 key={index} lat={ev.geometry[0].coordinates[1]}
      lng={ev.geometry[0].coordinates[0]} onClick={() => setLocationInfo({id: ev.id, title: ev.title})}/>
    }

    return null
  })

  const markers2 = eventData.map((ev, index) => {
    if (ev.categories[0].id === "volcanoes" && isChecked2) {
      return <LocationMarker2 key={index} lat={ev.geometry[0].coordinates[1]}
      lng={ev.geometry[0].coordinates[0]} onClick={() => setLocationInfo({id: ev.id, title: ev.title})}/>
    }

    return null
  })

  const markers3 = eventData.map((ev, index) => {
    if (ev.categories[0].id === "severeStorms" && isChecked3) {
      return <LocationMarker3 key={index} lat={ev.geometry[0].coordinates[1]}
      lng={ev.geometry[0].coordinates[0]} onClick={() => setLocationInfo({id: ev.id, title: ev.title})}/>
    }

    return null
  })

  return (
    <div className='map'>
        <div className='checkbox'>
          <div className='checkboxTitle'><strong>Show me:</strong></div>
          <div>
            <input type={"checkbox"} checked={isChecked1} onChange={handleOnChange1}/>
            Icebergs
          </div>
          <div>
            <input type={"checkbox"} checked={isChecked3} onChange={handleOnChange3}/>
            Severe Storms
          </div>
          <div>
            <input type={"checkbox"} checked={isChecked2} onChange={handleOnChange2}/>
            Volcanoes
          </div>
          <div>
            <input type={"checkbox"} checked={isChecked} onChange={handleOnChange}/>
            Wildfires
          </div>
        </div>
        <GoogleMapReact
            bootstrapURLKeys={{key: 
            process.env.REACT_APP_API_KEY_VALUE}}
            defaultCenter={center}
            defaultZoom={zoom}
        >
          {markers}
          {markers1}
          {markers2}
          {markers3}
        </GoogleMapReact>
        {locationInfo && <LocationInfoBox info={locationInfo}/>}
    </div>
  )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map