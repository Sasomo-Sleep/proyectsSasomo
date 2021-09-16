import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import moment from 'moment'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router';
import service from '../../services/sasomo-service';

const EditProfile = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const { register, handleSubmit, setError, formState: { errors } } = useForm({ mode: 'all' })

    const onEditProfileForm = data => {
        service.editProfile()
            .then(user => user) //falta jeje
            .catch(console.error)
    }



    if (!auth.user || !auth.user) { return <> </> }
    return (
        <div className="row">
            <form onSubmit={handleSubmit(onEditProfileForm)}>

                <div className="input-group mb-2">
                    <span className="input-group-text"><i className="fa fa-envelope fa-fw"></i></span>
                    <input type="file" {...register("avatar")} />
                </div>


            </form>
        </div>
    );
};

export default EditProfile;