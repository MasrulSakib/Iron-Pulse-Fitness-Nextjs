'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import CustomButton from '../CustomButton/CustomButton';
import SwiperNavButtons from '../SwiperNavButtons/SwiperNavButtons';
import { motion } from 'framer-motion'
import { fadeIn } from '../lib/Varients';

const HeroSlider = () => {
    return <Swiper className='h-full'>
        <SwiperSlide>
            <div className='h-full flex justify-end pt-32 lg:pt-48'>
                <div className='flex flex-col items-center lg:items-start lg:max-w-[700px]'>
                    <motion.h1
                        variants={fadeIn('up', 0.4)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                        className='h1 text-center lg:text-left mb-2'>
                        <span className='text-accent'>Built by Grit,</span> Driven by Success
                    </motion.h1>
                    <motion.p
                        variants={fadeIn('up', 0.6)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                        className='text-white italic text-center lg:text-left mb-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed necessitatibus
                        facere deserunt.
                    </motion.p>
                    <motion.div
                        variants={fadeIn('up', 0.8)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <CustomButton text='get started' containerStyles='w-[120px] lg:w-[196px] h-[44px] lg:h-[62px]'></CustomButton>
                    </motion.div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='h-full flex justify-end pt-32 lg:pt-48'>
                <div className='flex flex-col items-center lg:items-start lg:max-w-[700px]'>
                    <motion.h1
                        variants={fadeIn('up', 0.4)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                        className='h1 text-center lg:text-left mb-2'>
                        <span className='text-accent'>From Hustle</span> to Legacy
                    </motion.h1>
                    <motion.p
                        variants={fadeIn('up', 0.6)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                        className='text-white italic text-center lg:text-left mb-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed necessitatibus
                        facere deserunt.
                    </motion.p>
                    <motion.div
                        variants={fadeIn('up', 0.8)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <CustomButton text='get started' containerStyles='w-[120px] lg:w-[196px] h-[44px] lg:h-[62px]'></CustomButton>
                    </motion.div>
                </div>
            </div>
        </SwiperSlide>



        <SwiperNavButtons
            containerStyles='absolute bottom-2 lg:bottom-0 right-0 lg:h-[130px] w-full lg:w-[700px] z-50 flex justify-center lg:justify-start gap-1'
            iconStyles='text-2xl'
            btnStyles='flex justify-center items-center hover:bg-accent
            border border-accent text-white w-[56px] h-[56px] transition-all duration-300'>
        </SwiperNavButtons>
    </Swiper>
}

export default HeroSlider;