import {TrackInterface} from "@/interfaces/track.interface";

const STORAGE_NAME = 'favourites'
const LOOP_NAME = 'loop'

export const addTrackToLocalStorage = (favourites: TrackInterface[]) => {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(favourites))
}

export const getLocalStorageData = (): TrackInterface[] => {
    const favourites = localStorage.getItem(STORAGE_NAME)
    return favourites ? JSON.parse(favourites) : []
}

export const getLoopSetting = (): boolean => {
    const loop = localStorage.getItem(LOOP_NAME)
    return loop ? JSON.parse(loop) : false
}

export const updateLoopSetting = (is_loop: boolean) => {
    localStorage.setItem(LOOP_NAME, JSON.stringify(is_loop))
}
