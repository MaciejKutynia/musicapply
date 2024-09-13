import React from 'react';
import Image from "next/image";
import AddToFavourites from "@/components/SingleTrackItem/AddToFavourites";
import {SingleTrackItemPropsInterface} from "@/interfaces/singleTrackItem.interface";
import useSingleTrackItem from "@/components/SingleTrackItem/useSingleTrackItem";

const SingleTrackItem = (props: SingleTrackItemPropsInterface) => {

    const {track} = props

    const {selectTrackHandler} = useSingleTrackItem(props)

    const {id, name, cover, artist} = track

    return (
        <div className='track-item' onClick={selectTrackHandler}>
            <AddToFavourites id={id}/>
            <div className='relative aspect-square w-20 lg:w-40 flex-shrink-0'>
                <Image className='object-cover' src={cover} alt={artist} fill/>
            </div>
            <div className='mx-8 text-center flex flex-col gap-2'>
                <h4 className='font-semibold text-2xl'>{artist}</h4>
                <p className='text-xl'>{name}</p>
            </div>
        </div>
    )
}

export default SingleTrackItem;