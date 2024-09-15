'use client'
import React, {CSSProperties} from 'react';
import usePlayer from "@/components/Player/usePlayer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPause, faPlay, faRedo, faStepBackward, faStepForward} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logo from "@/images/logo.png";

const Player = () => {
    const {
        audioRef,
        current_time,
        duration,
        is_loop,
        is_playing,
        nameRef,
        nameBoxRef,
        selected_track,
        track_anim_value,
        translate_value,
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
    } = usePlayer()

    const {name, cover, artist, src} = selected_track || {}

    const style = {"--translateEnd": `${translate_value}px`} as CSSProperties

    return (
        <>
            <div
                className='fixed bottom-0 left-0 w-full player-bottom z-30 p-2 flex items-center justify-start lg:justify-center gap-2 lg:p-4 lg:gap-8 lg:h-[10vh]'>
                <button onClick={togglePlayTrackHandler} className='text-2xl w-8 flex-shrink-0'>
                    <FontAwesomeIcon icon={is_playing ? faPause : faPlay}/>
                </button>
                <div className="cursor-pointer w-10 relative aspect-square lg:w-20">
                    <Image src={cover || logo} alt={name || 'Musicapply'} fill
                           className='w-full !h-full object-cover'/>
                </div>
                <div
                    ref={nameBoxRef}
                    className='mx-2 lg:mx-8 text-left items-start overflow-hidden lg:overflow-visible flex w-1/2 lg:w-[unset] lg:items-center flex-col gap-1 lg:text-center lg:flex-row lg:gap-3'>
                    <h4 className='font-semibold w-max text-lg lg:text-xl'>{artist}</h4>
                    <p style={style}
                       ref={nameRef}
                       className='name text-base w-max lg:truncate lg:max-w-40 lg:text-lg'>{name}</p>
                </div>
                <div className="flex items-center gap-2 absolute -top-px left-0 w-full lg:relative lg:w-2/5">
                    <p className='w-12 hidden lg:block'
                       id='current-time'>{current_time ? getTime(current_time) : '0:00'}</p>
                    <div className='range-input-control flex-1 lg:relative absolute '>
                        <input
                            type='range'
                            id='track-time-input'
                            value={current_time}
                            max={duration}
                            min='0'
                            readOnly
                        />
                        <i className='input-animation' style={track_anim_value}></i>
                    </div>
                    <p className='w-12 text-end hidden lg:block'
                       id='end-time'>{duration ? getTime(duration) : '0:00'}</p>
                </div>
                <div className="gap-2 text-2xl items-center justify-between w-2/5 flex">
                    <div className='control-volume'>
                        <button className='w-[30px]' onClick={onMuteHandler}>
                            <FontAwesomeIcon icon={volumeIcon()}/>
                        </button>

                        <div className="range-input-control">
                            <input id='test' type='range' min={0} max={1} step={0.01} onChange={onVolumeChange}
                                   value={volume}/>
                            <i className='input-animation' style={volume_anim_value}></i>
                        </div>
                    </div>
                    <div className='flex gap-4 text-2xl'>
                        <button onClick={changeSongHandler.bind(this, 'prev')}><FontAwesomeIcon icon={faStepBackward}/>
                        </button>

                        <button onClick={changeSongHandler.bind(this, 'next')}><FontAwesomeIcon icon={faStepForward}/>
                        </button>
                        <button onClick={changeLoopHandler}><FontAwesomeIcon className={is_loop ? 'loop-active' : ''}
                                                                             icon={faRedo}/></button>
                    </div>

                </div>
            </div>
            <audio ref={audioRef} onEnded={onEndedHandler} onTimeUpdate={timeUpdateHandler}
                   src={src}/>
        </>
    )
}

export default Player;