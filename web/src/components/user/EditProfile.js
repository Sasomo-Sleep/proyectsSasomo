import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router';
import service from '../../services/sasomo-service';

const EditProfile = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const { register, handleSubmit } = useForm({
        mode: 'all',
        defaultValues: {
            about: auth.user?.about,
            city: auth.user?.city
        }
    })

    const onEditProfileForm = data => {
        service.editProfile(data)
            .then(user => {
                auth.login(user)
                history.push('/profile')
            }) 
            .catch(console.error)

    }

    if (!auth.user || !auth.user) { return null}
    return (
        <div className="my-5">
            <form onSubmit={handleSubmit(onEditProfileForm)}>

                <input type="file" {...register("avatar")} />

                <input type="text" {...register("about")} />

                <input type="text" {...register("city")} />

                <button type="submit" className="btn btn-primary"></button>

            </form>
        </div>
    );
};

export default EditProfile;