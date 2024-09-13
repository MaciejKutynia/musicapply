import {useEffect, useState} from "react";
import {useTracksStore} from "@/store/tracks";
import {getLocalStorageData} from "@/utils/db";

const useFavourites = () => {

    const {favourites, getFavourites} = useTracksStore()

    const [is_loading, toggleLoading] = useState(true)

    useEffect(() => {
        setFavouritesFromLocalDB()
    }, [])

    const setFavouritesFromLocalDB = () => {
        const favourites = getLocalStorageData()
        getFavourites(favourites)
        toggleLoading(false)
    }

    return {favourites, is_loading}
}

export default useFavourites;