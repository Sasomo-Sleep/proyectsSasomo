import React, { useEffect, useState } from 'react';
import './Explorer.css'
import Autocomplete from "react-google-autocomplete";
import { List, Calendar } from 'antd-mobile';
import enUS from 'antd-mobile/lib/calendar/locale/en_US'
import moment from 'moment'
import service from '../../../services/sasomo-service';
import PropertyItem from './properties/PropertyItem';
import LoggedInPage from '../../common/LoggedInPage';
import Map from '../../map/Map';


const Explorer = () => {

    const [location, setLocation] = useState()
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [dateRange, setDateRange] = useState({
        checkIn: undefined,
        checkOut: undefined
    })
    const [properties, setProperties] = useState()
    useEffect(() => {
        if (dateRange.checkIn && dateRange.checkOut && showDatePicker) {
            setShowDatePicker(!showDatePicker)
        }
        if (dateRange.checkIn && dateRange.checkOut && location) {
            service.propertiesSearched({ ...dateRange, ...location })
            .then(properties => setProperties(properties))
            .catch(console.error())
        }
    }, [dateRange, location, showDatePicker])

    return (
        <LoggedInPage>
            <div id="search">
                <h1>Search and find!</h1>
                <div className='calendar'>
                    <Calendar
                        className='calendar'
                        visible={showDatePicker}
                        onCancel={() => setShowDatePicker(!showDatePicker)}
                        onConfirm={(checkIn, checkOut) => setDateRange({ checkIn: moment(checkIn).format('MM-DD-YYYY'), checkOut: moment(checkOut).format('MM-DD-YYYY') })}
                        defaultDate={new Date()}
                        minDate={new Date()}
                        locale={enUS}
                    />
                </div>

                <Autocomplete
                    className='autocomplete'
                    apiKey="AIzaSyCfrGSQdvr82q3vR77SDXDotg2KBBImfns"
                    onPlaceSelected={(place) => setLocation(place.geometry.location?.toJSON())}
                />
                <List.Item arrow="horizontal" onClick={() => setShowDatePicker(!showDatePicker)}>
                    Select Date Range
                </List.Item>

            </div>

            <div>
                <Map propertiesSearched={properties}/>
            </div>

            <div className="mt-5">
                {properties?.map(prop =>
                    <PropertyItem   {...prop} key={prop.id} />
                )}
            </div>
            
        </LoggedInPage>
    );
}

export default Explorer;
