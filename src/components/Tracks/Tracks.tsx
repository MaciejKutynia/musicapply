'use client'
import React from 'react';
import SingleTrackItem from "@/components/SingleTrackItem";
import {useTracksStore} from "@/store/tracks";

const Tracks = () => {

    const {tracks} = useTracksStore()

    return (
        <div className='relative grid grid-cols-1 gap-8 px-8 track-container flex-1 pt-4 lg:grid-cols-4'>
            {tracks?.map(track => <SingleTrackItem track={track} key={track.id}/>)}
        </div>
    )
}

export default Tracks;