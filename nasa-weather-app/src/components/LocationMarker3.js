import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/weather-hurricane'

const LocationMarker3 = ({lat, lng, onClick}) => {
    return (
        <div className='location-marker3' onClick={onClick}>
            <Icon icon={locationIcon} className='location-icon3'/>
        </div>
    )
}

export default LocationMarker3