import {useTracksStore} from "@/store/tracks";
import {useEffect, useState} from "react";
import {AddToFavouritesPropsInterface} from "@/interfaces/addToFavourites.interface";

const useAddToFavourites = ({id}: AddToFavouritesPropsInterface) => {

    const {favourites, tracks, getFavourites} = useTracksStore()

    const [is_selected, setIsSelected] = useState(false)

    useEffect(() => {
        setIsSelected(!!favourites.find(track => track.id === id))
    }, [id, favourites])

    const toggleFavourite = () => {
        setIsSelected(isSelected => !isSelected)
        if (is_selected) {
            getFavourites(favourites.filter(track => track.id !== id))
            return
        }
        const track = tracks.find(track => track.id === id)
        getFavourites(track ? [...favourites, track] : favourites)

    }

    return {is_selected, toggleFavourite}
}

export default useAddToFavourites;