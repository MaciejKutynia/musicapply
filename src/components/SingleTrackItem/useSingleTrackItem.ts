import {usePlayerStore} from "@/store/player";
import {MouseEvent} from "react";
import {SingleTrackItemPropsInterface} from "@/interfaces/singleTrackItem.interface";

const useSingleTrackItem = (props: SingleTrackItemPropsInterface) => {

    const {track} = props
    const {setSelectedTrack, toggleIsPlaying, is_playing} = usePlayerStore()

    const selectTrackHandler = (e: MouseEvent) => {
        const {nodeName} = e.target as HTMLElement || {}
        if (nodeName == 'BUTTON') return;
        setSelectedTrack(track)
        toggleIsPlaying(true)
    }
    return {selectTrackHandler}
}

export default useSingleTrackItem;