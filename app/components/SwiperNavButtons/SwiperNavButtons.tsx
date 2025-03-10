'use client';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import { useSwiper } from 'swiper/react';


const SwiperNavButtons = ({ containerStyles, btnStyles, iconStyles }: { containerStyles: string; btnStyles: string; iconStyles: string }) => {
    const swiper = useSwiper();
    return (
        <div className={`${containerStyles}`}>
            <button onClick={() => swiper.slidePrev()} className={`${btnStyles}`}>
                <PiCaretLeftBold className={`${iconStyles}`}></PiCaretLeftBold>
            </button>
            <button onClick={() => swiper.slideNext()} className={`${btnStyles}`}>
                <PiCaretRightBold className={`${iconStyles}`}></PiCaretRightBold>
            </button>
        </div >
    )
}

export default SwiperNavButtons