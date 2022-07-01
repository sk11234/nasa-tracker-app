import {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationMarker1 from './LocationMarker1'
import LocationMarker2 from './LocationMarker2'
import LocationInfoBox from './LocationInfoBox'

const Map = ({eventData, center, zoom}) => {
  const [locationInfo, setLocationInfo] = useState(null)

  const markers = eventData.map(ev => {
    if (ev.categories[0].id === "wildfires") {
      return <LocationMarker lat={ev.geometry[0].coordinates[1]} 
      lng={ev.geometry[0].coordinates[0]} onClick={() => setLocationInfo({id: ev.id, title: ev.title})}/>
    }

    return null
  })

  const markers1 = eventData.map(ev => {
    if (ev.categories[0].id === "seaLakeIce") {
      return <LocationMarker1 lat={ev.geometry[0].coordinates[1]}
      lng={ev.geometry[0].coordinates[0]} onClick={() => setLocationInfo({id: ev.id, title: ev.title})}/>
    }

    return null
  })

  const markers2 = eventData.map(ev => {
    if (ev.categories[0].id === "volcanoes") {
      return <LocationMarker2 lat={ev.geometry[0].coordinates[1]}
      lng={ev.geometry[0].coordinates[0]} onClick={() => setLocationInfo({id: ev.id, title: ev.title})}/>
    }

    return null
  })

  return (
    <div className='map'>
        <GoogleMapReact
            bootstrapURLKeys={{key: 
            'AIzaSyCgbobtATkP1KYhKWgmsqdsglxYPa829xQ'}}
            defaultCenter={center}
            defaultZoom={zoom}
        >
          {markers}
          {markers1}
          {markers2}
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