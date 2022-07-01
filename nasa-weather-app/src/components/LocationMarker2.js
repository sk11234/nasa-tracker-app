import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/volcano-outline'

const LocationMarker2 = ({lat, lng, onClick}) => {
    return (
        <div className='location-marker2' onClick={onClick}>
            <Icon icon={locationIcon} className='location-icon2'/>
        </div>
    )
}

export default LocationMarker2