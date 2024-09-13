import {create} from "zustand";
import {TrackInterface} from "@/interfaces/track.interface";
import {SelectedTrackInterface} from "@/interfaces/player.interface";
import {BASE_URL} from "@/utils";

const SRC_URL = `${BASE_URL}/track`

interface InitialStateInterface {
    selected_track: SelectedTrackInterface | null,
    is_playing: boolean,
    is_loop: boolean,
    setSelectedTrack: (selected_track: TrackInterface) => void,
    toggleIsPlaying: (is_playing: boolean) => void,
    setIsLoop: (is_loop: boolean) => void,
}

export const usePlayerStore = create<InitialStateInterface>(set => ({
    selected_track: null,
    is_playing: false,
    is_loop: false,
    setSelectedTrack: (selected_track) => set(state => ({
        ...state,
        selected_track: {...selected_track, src: `${SRC_URL}/${selected_track.id}`}
    })),
    toggleIsPlaying: (is_playing) => set(state => ({...state, is_playing})),
    setIsLoop: (is_loop) => set(state => ({...state, is_loop}))
}))