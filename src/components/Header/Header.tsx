'use client'
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faSearch} from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";
import logo from '@/images/logo.png'
import useHeader from "@/components/Header/useHeader";

const Header = () => {

    const {search_term, onFormSubmit, onInputChange, toggleFavouritesHandler, is_favourites_visible} = useHeader()


    return (
        <header className='mx-auto px-6 py-4 w-full sticky top-0 z-20 bg-black'>
            <div className='flex lg:items-center justify-between gap-4 mb-4 flex-col lg:flex-row'>
                <button
                    className={`btn order-last lg:order-none transition-all duration-300 ${is_favourites_visible ? 'text-black !bg-white' : ''}`}
                    onClick={toggleFavouritesHandler}>
                    <span>Ulubione</span>
                    <FontAwesomeIcon icon={faHeart}/>
                </button>
                <div className='w-28 mx-auto lg:mx-0 relative order-first lg:order-none'>
                    <Image className='object-cover w-full !h-auto !relative' src={logo} alt='Musicapply' fill/>
                </div>
                <form className='search-form' onSubmit={onFormSubmit}>
                    <input placeholder='Wyszukaj...' onChange={onInputChange} value={search_term} type="search"/>
                    <button type='submit'><FontAwesomeIcon icon={faSearch}/></button>
                </form>
            </div>
        </header>
    )
}

export default Header;