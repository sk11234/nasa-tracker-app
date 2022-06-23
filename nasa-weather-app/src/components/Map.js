import {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
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

  return (
    <div className='map'>
        <GoogleMapReact
            bootstrapURLKeys={{key: 
            'AIzaSyCgbobtATkP1KYhKWgmsqdsglxYPa829xQ'}}
            defaultCenter={center}
            defaultZoom={zoom}
        >
          {markers}
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

/*import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCgbobtATkP1KYhKWgmsqdsglxYPa829xQ" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}*/