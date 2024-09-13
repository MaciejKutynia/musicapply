import {create} from 'zustand'

interface InitialStateInterface {
    search_term: string
    is_favourites_visible: boolean,
    is_loading: boolean,
    handleSearch: (search_term: string) => void
    toggleIsFavouritesVisible: (is_favourites_visible: boolean) => void
    toggleIsLoading: (is_loading: boolean) => void
}

export const useAppStore = create<InitialStateInterface>((set) => ({
    search_term: '',
    is_favourites_visible: false,
    is_loading: false,
    handleSearch: (search_term) => set((state) => ({...state, search_term})),
    toggleIsFavouritesVisible: (is_favourites_visible) => set(state => ({...state, is_favourites_visible})),
    toggleIsLoading: (is_loading) => set(state => ({...state, is_loading})),
}))