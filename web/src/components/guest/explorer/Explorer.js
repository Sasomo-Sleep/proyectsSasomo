import React from 'react';
import { useForm } from 'react-hook-form';
import HeaderHost from '../../common/header/HeaderHost';
import { DatePicker, List } from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';
import './Explorer.css'
import Map from '../../map/Map';





const Explorer = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    return (
        <div>
            <Map />
        </div>
    );
}

export default Explorer;