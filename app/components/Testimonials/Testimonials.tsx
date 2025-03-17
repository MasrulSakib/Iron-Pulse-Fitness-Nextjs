'use client';
import { motion } from "framer-motion";
import Image from "next/image"
import { FaQuoteLeft } from "react-icons/fa"
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"
import { fadeIn } from "../lib/Varients";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { fetchtestimonialData } from "@/app/features/testimonials/testimonialSlice";
import { useEffect } from "react";



const Testimonials = () => {

    const { testimonials, isLoading, isError, error } = useAppSelector((state) => state.testimonial);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchtestimonialData());
    }, [dispatch]);

    if (isLoading) {
        return <h1>Loading....</h1>;
    }

    if (isError) {
        return <h1>{error}</h1>;
    }

    if (!testimonials || testimonials.length === 0) {
        return <h1>No Posts to show</h1>;
    }


    return (
        <section className='py-12 xl:py-28 md:px-5 px-0' id='testimonials'>
            <div className="container mx-auto">
                <motion.h2
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }}
                    className="h2 text-center">Our Testimonials</motion.h2>
            </div>
            <motion.div
                variants={fadeIn('up', 0.6)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
            >
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }}
                    className="h-[350px]">
                    {testimonials.map((review, index) => {
                        return <SwiperSlide className="h-full" key={index}>
                            <div className="flex flex-col justify-center items-center gap-6 text-center h-full">
                                <Image
                                    src={review.img}
                                    width={90}
                                    height={90}
                                    alt={review.name}
                                    className="rounded-full border-2 border-accent-100"
                                />
                                <div className="flex flex-col justify-center items-center ">
                                    <FaQuoteLeft className="text-2xl text-gray-300"></FaQuoteLeft>
                                    <p className="max-w-[380px] mb-4">{review.message}</p>
                                    <span className="text-2xl text-accent-100">{review.name}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    })}
                </Swiper>
            </motion.div>
        </section>
    )
}

export default Testimonials;