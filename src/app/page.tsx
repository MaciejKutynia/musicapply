'use client'
import Header from "@/components/Header";
import Tracks from "@/components/Tracks";
import Favourites from "@/components/Favourites";
import {useAppStore} from "@/store/app";
import LoadingIndicator from "@/components/LoadingIndicator";
import Player from "@/components/Player";
import {usePlayerStore} from "@/store/player";

export default function Home() {

    const {is_loading} = useAppStore()
    const {selected_track} = usePlayerStore()

    return (
        <>
            <Header/>
            <main>
                <LoadingIndicator type='container' isVisible={is_loading}/>
                <Tracks/>
                <Favourites/>
            </main>
            {selected_track ? <Player/> : null}
        </>
    );
}
