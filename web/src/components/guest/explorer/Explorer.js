import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import HeaderHost from '../../common/header/HeaderHost';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';
import './Explorer.css'
import Map from '../../map/Map';
import Autocomplete from "react-google-autocomplete";
import { List, Calendar, InputItem } from 'antd-mobile';
import enUS from 'antd-mobile/lib/calendar/locale/en_US'
import moment from 'moment'
import service from '../../../services/sasomo-service';
import PropertyItem from './properties/PropertyItem';
import DetailFav from '../favs/DetailFav';
import LoggedInPage from '../../common/LoggedInPage';


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
    }, [dateRange, location])

    console.log(properties, "hollis")
    return (
        <LoggedInPage>
            <div id="search">
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
            <div>{properties?.map(prop =>
                <PropertyItem   {...prop} key={prop.id} />
            )}
            </div>
        </LoggedInPage>
    );
}

export default Explorer;

/* AIzaSyCfrGSQdvr82q3vR77SDXDotg2KBBImfns */