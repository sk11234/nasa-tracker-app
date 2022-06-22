import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

const Map = ({center, zoom}) => {
  return (
    <div className='map'>
        <GoogleMapReact
            bootstrapURLKeys={{key: 
            'AIzaSyCgbobtATkP1KYhKWgmsqdsglxYPa829xQ'}}
            defaultCenter={center}
            defaultZoom={zoom}
        >
            <LocationMarker lat={center.lat} lng={center.lng}/>
        </GoogleMapReact>
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