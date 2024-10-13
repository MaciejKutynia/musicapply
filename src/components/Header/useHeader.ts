import {ChangeEvent, FormEvent, useEffect} from "react";
import {useAppStore} from "@/store/app";
import {useTracksStore} from "@/store/tracks";
import {BASE_URL} from "@/utils";

const useHeader = () => {

    const {
        search_term,
        handleSearch,
        is_favourites_visible,
        toggleIsFavouritesVisible,
        toggleIsLoading
    } = useAppStore()

    const {getTracks} = useTracksStore()

    useEffect(() => {
        fetchTracksHandler()
    }, []);

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target || {}
        handleSearch(value)
    }

    const onFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await fetchTracksHandler()
    }

    const toggleFavouritesHandler = () => {
        toggleIsFavouritesVisible(!is_favourites_visible)
    }

    const fetchTracksHandler = async () => {
        toggleIsLoading(true)
        const res = await fetch(`${BASE_URL}/track${search_term ? `?search=${search_term}` : ''}`)
        const response = await res.json()
        getTracks(response.tracks)
        toggleIsLoading(false)
    }

    return {search_term, onFormSubmit, onInputChange, toggleFavouritesHandler, is_favourites_visible}
}

export default useHeader