import React from 'react';
import { useForm } from 'react-hook-form';

import './Explorer.css'





const Explorer = () => {

    const { register, handleSubmit, setError, setValue, watch, reset, formState: { errors, isValid, isDirty } } = useForm({ mode: 'all' });



    return (
        <div>

        </div>
    );
};

export default Explorer;