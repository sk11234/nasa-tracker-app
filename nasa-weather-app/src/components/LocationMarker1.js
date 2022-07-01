import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/snowflake-alert'

const LocationMarker1 = ({lat, lng, onClick}) => {
    return (
        <div className='location-marker1' onClick={onClick}>
            <Icon icon={locationIcon} className='location-icon1'/>
        </div>
    )
}

export default LocationMarker1