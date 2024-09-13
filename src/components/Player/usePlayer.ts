import {usePlayerStore} from "@/store/player";
import {ChangeEvent, MutableRefObject, SyntheticEvent, useEffect, useRef, useState} from "react";
import {DirectionType} from "@/interfaces/player.interface";
import {TrackInterface} from "@/interfaces/track.interface";
import {useTracksStore} from "@/store/tracks";
import {useAppStore} from "@/store/app";
import {getLoopSetting, updateLoopSetting} from "@/utils/db";
import {faVolumeDown, faVolumeMute, faVolumeUp} from "@fortawesome/free-solid-svg-icons";

const usePlayer = () => {

    const {tracks, favourites} = useTracksStore()
    const {is_favourites_visible} = useAppStore()
    const {
        toggleIsPlaying,
        selected_track,
        is_playing,
        player_ref,
        is_loop,
        setIsLoop,
        setSelectedTrack
    } = usePlayerStore()

    const audioRef: MutableRefObject<HTMLAudioElement | null> = useRef(null)


    const [volume, volumeChangeHandler] = useState(1)
    const [saved_volume, savedVolumeChangeHandler] = useState(1);
    const [current_time, updateCurrentTime] = useState(0)
    const [duration, updateDuration] = useState(0)
    const [percentage, setPercentage] = useState(0);

    const track_anim_value = {
        left: `${-100 + percentage}%`,
    };
    const volume_anim_value = {
        left: `${-100 + (volume * 100)}%`,
    };


    useEffect(() => {
        setIsLoop(getLoopSetting())
    }, []);

    useEffect(() => {
        if (is_playing) {
            player_ref?.current?.play()
        }
    }, [is_playing, player_ref]);

    const onVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const volume_value = +e.target.value
        if (audioRef?.current) {
            audioRef.current.volume = volume_value
        }
        volumeChangeHandler(volume_value)
        savedVolumeChangeHandler(volume_value)
    }

    const onMuteHandler = () => {
        volumeChangeHandler(volume => {
            const volume_value = volume === 0 ? saved_volume : 0
            if (audioRef?.current) {
                audioRef.current.volume = volume_value
            }
            return volume_value
        })
    }

    const changeLoopHandler = () => {
        setIsLoop(!is_loop)
        updateLoopSetting(!is_loop)
    }

    const timeUpdateHandler = (e: SyntheticEvent<HTMLAudioElement>) => {
        const {currentTime, duration: audio_duration} = e.target as HTMLAudioElement
        if (Math.abs(currentTime - current_time) > 1) {
            updateCurrentTime(currentTime)
            setPercentage(getPercentage(currentTime, duration));
        }

        if (audio_duration !== duration)
            updateDuration(audio_duration)
    };

    const onEndedHandler = async () => {
        if (is_loop) {
            if (audioRef.current) {
                audioRef.current.currentTime = 0;
                await audioRef.current.play();
            }
            return
        }
        changeSongHandler('next')
    }

    const changeSongHandler = (direction: DirectionType) => {
        const list: TrackInterface[] = is_favourites_visible ? favourites : tracks
        const track_index = list.findIndex(track => track.id === selected_track?.id)
        const last_index = list.length - 1
        const next_track = track_index === last_index ? list[0] : list[track_index + 1]
        const prev_track = track_index ? list[track_index - 1] : list[last_index]
        const track: TrackInterface = direction === 'prev' ? prev_track : next_track
        setSelectedTrack(track)
    }

    const togglePlayTrackHandler = async () => {
        toggleIsPlaying(!is_playing)
        if (is_playing) {
            audioRef?.current?.pause()
            return
        }
        await audioRef?.current?.play()
    }

    const getTime = (time: number) =>
        Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);


    const getPercentage = (time: number, duration: number) => {
        return Math.floor((time / duration) * 100);
    };

    const volumeIcon = () => {
        switch (true) {
            case volume === 0:
                return faVolumeMute;
            case volume > 0 && volume <= 0.45:
                return faVolumeDown
            default:
                return faVolumeUp
        }
    }


    return {
        audioRef,
        current_time,
        duration,
        is_loop,
        is_playing,
        selected_track,
        track_anim_value,
        volume,
        volume_anim_value,
        changeLoopHandler,
        changeSongHandler,
        getTime,
        onEndedHandler,
        onMuteHandler,
        onVolumeChange,
        timeUpdateHandler,
        togglePlayTrackHandler,
        volumeIcon,
    }
}

export default usePlayer;