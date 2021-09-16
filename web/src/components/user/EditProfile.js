import React, { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router';
import service from '../../services/sasomo-service';

const EditProfile = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const { register, handleSubmit, setError, formState: { errors }, setValue } = useForm({ mode: 'all' })

    const onEditProfileForm = data => {
        service.editProfile()
            .then(Object.assign(auth.user, data)) //falta jeje
            .catch(console.error)

    }
    /* setValue("avatar", auth?.user?.avatar) */
    setValue("about", auth?.user?.about)
    setValue("city", auth?.user?.city)
    setValue("idioms", auth?.user?.idioms)

    if (!auth.user || !auth.user) { return <> </> }
    return (
        <div className="my-5">
            <form onSubmit={handleSubmit(onEditProfileForm)}>

                <input type="file" {...register("avatar")} />

                <input type="text" {...register("about")} />

                <input type="text" {...register("city")} />

                <input type="text" {...register("idioms")} />

                <button type="submit" className="btn btn-primary"></button>
                
            </form>
        </div>
    );
};

export default EditProfile;