'use client';
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import { FaCheck } from "react-icons/fa";
import CustomButton from "../CustomButton/CustomButton";
import { MdClose } from "react-icons/md";

const membershipSlides = [
    {
        title: 'Standard',
        price: '30',
        benefits: [
            {
                icon: FaCheck,
                text: 'Includes membership',
            },
            {
                icon: FaCheck,
                text: 'Access to all gym facilities',
            },
            {
                icon: MdClose,
                text: 'Diet plan included',
            },
            {
                icon: FaCheck,
                text: 'Health and fitness tips',
            },
            {
                icon: MdClose,
                text: 'Monday-Friday gym access',
            },
            {
                icon: FaCheck,
                text: 'Full access to everything',
            },
            {
                icon: MdClose,
                text: 'No additional amenities',
            },
        ]
    },
    {
        title: 'Ultimate',
        price: '45',
        benefits: [
            {
                icon: FaCheck,
                text: 'Includes Membership',
            },
            {
                icon: FaCheck,
                text: 'Access to all gym facilities',
            },
            {
                icon: FaCheck,
                text: 'Diet plan included',
            },
            {
                icon: FaCheck,
                text: 'Health and fitness tips',
            },
            {
                icon: FaCheck,
                text: 'Monday-Friday gym access',
            },
            {
                icon: FaCheck,
                text: 'Full access to everything',
            },
            {
                icon: MdClose,
                text: 'No additional amenities',
            },
        ]
    },
    {
        title: 'Professional',
        price: '60',
        benefits: [
            {
                icon: FaCheck,
                text: 'Includes Membership',
            },
            {
                icon: FaCheck,
                text: 'Access to all gym facilities',
            },
            {
                icon: FaCheck,
                text: 'Diet plan included',
            },
            {
                icon: FaCheck,
                text: 'Health and fitness tips',
            },
            {
                icon: FaCheck,
                text: 'Monday-Friday gym access',
            },
            {
                icon: FaCheck,
                text: 'Full access to everything',
            },
            {
                icon: FaCheck,
                text: 'No additional amenities',
            },
        ]
    },
]


const MembershipSlides = () => {
    return (
        <Swiper
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,

                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,

                }
            }}
            className="sm:min-h-[680px]"
        >
            {membershipSlides.map((item, index) => {
                return <SwiperSlide key={index}>
                    <div className="border border-accent-100 hover:bg-primary-300/80
                     transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto">
                        <div className="py-5 px-[60px] border-b border-accent-100">
                            <h4 className="h4">{item.title}</h4>
                        </div>
                        <div className="py-[30px] px-[60px]">
                            <ul className="flex flex-col gap-5 mb-7">
                                {item.benefits.map((item, index) => {
                                    return (
                                        <li className="flex flex-center gap-2" key={index}>
                                            <item.icon className="text-accent-100 text-lg" />
                                            {item.text}
                                        </li>
                                    )
                                })}
                            </ul>
                            <p className="text-accent-100 mb-8 flex gap-1 items-center">
                                <sup className="text-3xl sm:text-4xl">$</sup>
                                <strong className="text-5xl sm:text-6xl">{item.price}</strong>
                                <em className="self-end text-xl sm:text-2xl">/Month</em>
                            </p>
                            <CustomButton containerStyles="w-[176px] sm:w-[196px] h-[52px] sm:h-[62px]" text="Buy now"></CustomButton>
                        </div>

                    </div>
                </SwiperSlide>
            })}
        </Swiper>
    )
}

export default MembershipSlides