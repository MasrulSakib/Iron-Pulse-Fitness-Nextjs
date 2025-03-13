'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';
import { FaBriefcase, FaClock, FaTrophy } from 'react-icons/fa';
import { ImUsers } from 'react-icons/im';

const stats = [
    {
        number: 19,
        icon: FaBriefcase,
        text: 'Training Courses'
    },
    {
        number: 879,
        icon: FaClock,
        text: 'Working Hours'
    },
    {
        number: 150,
        icon: ImUsers,
        text: 'Happy Customers'
    },
    {
        number: 9,
        icon: FaTrophy,
        text: 'International Awards'
    },
]

const stateContainerVarients = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
            duration: 0.5,
            ease: 'linear',
        },
    },
};

const stateItems = {
    hidden: { y: 20, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.6, 0.3, 0.8],
        },
    },
};

const Achivements = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <section>
            <div className='container mx-auto'>
                <motion.div
                    variants={stateContainerVarients}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className='grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-16'
                >
                    {stats.map((stat, index) => {
                        return <motion.div
                            variants={stateItems}
                            className='flex flex-col justify-center items-center'
                            key={index}>
                            <div className='border border-accent-100/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6'>
                                <div ref={ref}
                                    className='border border-accent-100/30 w-full h-full flex items-center justify-center text-5xl rounded-full'>
                                    {
                                        isInView && (
                                            <CountUp start={0} end={stat.number} duration={6}></CountUp>
                                        )
                                    }
                                </div>
                            </div>
                            <div className='flex flex-col jutify-center items-center text-center'>
                                <stat.icon className='text-3xl mb-2' />
                                <h4 className='h4'>{stat.text}</h4>
                            </div>
                        </motion.div>
                    })}

                </motion.div>
            </div>
        </section>
    )
}

export default Achivements;