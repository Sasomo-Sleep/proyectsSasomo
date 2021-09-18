/* import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import HeaderHost from '../../common/header/HeaderHost';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';
import './Explorer.css'
import Map from '../../map/Map';

import { List, Calendar, InputItem } from 'antd-mobile';
import enUS from 'antd-mobile/lib/calendar/locale/en_US'
import moment from 'moment'
import service from '../../../services/sasomo-service';
import PropertyItem from './properties/PropertyItem';


const Explorer = () => {

    const [showDatePicker, setShowDatePicker] = useState(false)
    const [dateRange, setDateRange] = useState({
        checkIn: undefined,
        checkOut: undefined
    })
    const [properties, setProperties] = useState()
    useEffect(() => {
        if (dateRange.checkIn && dateRange.checkOut) {
            setShowDatePicker(!showDatePicker)
            service.propertiesSearched()
                .then(properties => setProperties(properties))
                .catch(console.error())
        }
    }, [dateRange])

    console.log(properties, "hollis")
    if (!properties) return null
    return (
        <div>

            <List.Item arrow="horizontal" onClick={() => setShowDatePicker(!showDatePicker)}>
                Select Date Range
            </List.Item>
            <Calendar
                visible={showDatePicker}
                onCancel={() => setShowDatePicker(!showDatePicker)}
                onConfirm={(checkIn, checkOut) => setDateRange({ checkIn, checkOut })}
                defaultDate={new Date()}
                minDate={new Date()}
                locale={enUS}
            />

            {properties.map(prop => 
            <PropertyItem   {...prop} key={prop.id} />
            )}
        </div>
    );
}

export default Explorer; */