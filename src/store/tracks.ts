import {create} from "zustand";
import {TrackInterface} from "@/interfaces/track.interface";
import {addTrackToLocalStorage} from "@/utils/db";


interface InitialStateInterface {
    tracks: TrackInterface[],
    favourites: TrackInterface[],
    getTracks: (tracks: TrackInterface[]) => void
    getFavourites: (favourites: TrackInterface[]) => void
}

export const useTracksStore = create<InitialStateInterface>(set => ({
    tracks: [],
    favourites: [],
    getTracks: (tracks) => set(state => ({...state, tracks})),
    getFavourites: (favourites) => {
        addTrackToLocalStorage(favourites)
        set({
            favourites
        })
    }
}))

