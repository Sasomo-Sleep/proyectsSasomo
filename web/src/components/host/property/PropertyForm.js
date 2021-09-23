import React from 'react';
import { useForm } from 'react-hook-form'
import service from '../../../services/sasomo-service';



const PropertyForm = ({ onCreateProperty }) => {

    const { register} = useForm({ mode: 'all' });

    const onCreatePropertyForm = property => {
        service.propertyCreate(property)
            .then(property => {
                onCreateProperty(property)
            })
            .catch(console.error)
    }

    return (
        <div>
            <form>
                <div className="m-5">
                    <input type="number" {...register("maxGuests")} placeholder="Max of guest" />
                    <input type="number" {...register("rooms")} placeholder="Property's name.." />
                    <input type="number" {...register("bathroom")} placeholder="Property's name.." />
                </div>
                <div>
                    <input type="number" {...register("price")} placeholder="Price should be between.." />
                </div>
                <div>
                    <input type="number" {...register("location")} placeholder="Price should be between.." />
                </div>
                <div>
                    <input type="file" {...register("images")} placeholder="Max of guest" />
                </div>


                <button type="submit"> Create</button>
            </form>
        </div>
    );
};

export default PropertyForm;