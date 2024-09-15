'use client'
import React from 'react';
import useFavourites from "@/components/Favourites/useFavourites";
import LoadingIndicator from "@/components/LoadingIndicator";
import SingleTrackItem from "@/components/SingleTrackItem";
import {useAppStore} from "@/store/app";

const Favourites = () => {

    const {favourites, is_loading} = useFavourites()
    const {is_favourites_visible} = useAppStore()

    return (
        <div
            className={`absolute h-full w-full bg-black transition-all ${favourites.length ? 'grid' : 'flex lg:items-center'} grid-cols-1 gap-8 px-8 track-container flex-1 pt-4 lg:grid-cols-4 ${is_favourites_visible ? 'left-0' : '-left-full'}`}>
            <LoadingIndicator type='container' is_visible={is_loading}/>

            {favourites.length ? favourites?.map(track => <SingleTrackItem track={track} key={track.id}/>) :
                <span className='text-lg w-full text-center'>Brak piosenek dodanych do ulubionych</span>}
        </div>
    )
}

export default Favourites;