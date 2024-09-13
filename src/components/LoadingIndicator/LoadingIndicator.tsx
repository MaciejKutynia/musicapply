import React from 'react';
import {LoadingIndicatorPropsInterface} from "@/interfaces/loadingIndicator.interface";

const LoadingIndicator = (props: LoadingIndicatorPropsInterface) => {

    const {type, is_visible = false} = props

    if (!is_visible) return null;

    return (
        <div
            className={`${type === 'global' ? "fixed" : "absolute"} w-full h-full bg-black z-10 grid place-items-center`}>
            <div className='w-40 relative h-40 indicator-container'>
                <svg viewBox="0 0 89 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14 85C10.1667 83.8333 2.3 79.9 1.5 73.5C0.499996 65.5 0.999995 62 2.5 59C4 56 8.99999 50.5 14 50"
                        stroke="#8E00B8"/>
                    <path d="M7.99989 51.5C6.66656 43.6667 7.7 24.9 20.5 14.5" stroke="#8E00B8"/>
                    <path
                        d="M69.5 14.0799C74.8403 17.5855 85.2 30.4999 82 52.4999M28.5 3.99991C45.8603 -2.84511 65.5 2.99999 69.5 8.49996C71 11 70.5 15.9999 65.5 15.9999C64.6667 15.8333 62.3 15.2 59.5 14M18 46.4999C21.1667 44.1666 28.4 41.6999 32 50.4999V67.4999M32.5 76.9999V82.4999C29.6667 87.8333 22.2 95.2999 15 82.4999V54.9999M56.5 76.9999V50.4999C58.1528 47.1666 63.1624 41.5999 69.9791 45.9999M25.5 4.99993C22.3333 5.98889 16.9 9.27012 20.5 14.4834C21.1667 15.4944 23.2 17.2132 26 15.9999C30 13.4999 40.6 8.99993 51 10.9999"
                        stroke="#8E00B8"/>
                    <path
                        d="M74 53V80.5C73.3333 85.1667 69.5 93 59.5 87M74.5 49C79.3333 50.1667 88.7 55.9 87.5 69.5C87 73 83.9 80.8 75.5 84"
                        stroke="#8E00B8"/>
                </svg>

            </div>

        </div>
    )
}

export default LoadingIndicator;