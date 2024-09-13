import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as fullHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as emptyHeart} from '@fortawesome/free-regular-svg-icons';
import useAddToFavourites from "@/components/SingleTrackItem/AddToFavourites/useAddToFavourites";
import {AddToFavouritesPropsInterface} from "@/interfaces/addToFavourites.interface";

const AddToFavourites = (props: AddToFavouritesPropsInterface) => {

    const {id} = props

    const {is_selected, toggleFavourite} = useAddToFavourites({id})

    return (
        <button onClick={toggleFavourite}
                className='absolute top-3 right-3 text-2xl hover:scale-105'>
            <FontAwesomeIcon
                icon={is_selected ? fullHeart : emptyHeart}/>
        </button>

    )
}

export default AddToFavourites;