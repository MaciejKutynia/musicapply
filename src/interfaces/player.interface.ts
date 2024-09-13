import {TrackInterface} from "@/interfaces/track.interface";

export interface SelectedTrackInterface extends TrackInterface {
    src: string
}

export type DirectionType = 'prev' | 'next'