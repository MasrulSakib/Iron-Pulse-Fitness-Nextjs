'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '../lib/Varients';
import { FaDumbbell, FaUsers } from 'react-icons/fa';
import { IoIosPricetag } from 'react-icons/io';
import Achivements from '../Achivements/Achivements';

const featured = [
    {
        icon: <FaUsers />,
        title: 'Award Winning Trainners',
        subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis veniam ipsa maxime incidunt odit itaque atque minus reprehenderit nisi numquam?',
    },
    {
        icon: <IoIosPricetag />,
        title: 'Excellent Prices',
        subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis veniam ipsa maxime incidunt odit itaque atque minus reprehenderit nisi numquam?',
    },
    {
        icon: <FaDumbbell />,
        title: 'Modern Equipment',
        subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis veniam ipsa maxime incidunt odit itaque atque minus reprehenderit nisi numquam?',
    }
]

const About = () => {
    return (
        <section className='pt-8 pb-14 lg:pt-16 lg:pb-28' id='about'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center gap-2 mb-8'>
                    <motion.h2
                        variants={fadeIn('up', 0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='h2 text-center'>About Us</motion.h2>
                    <motion.p
                        variants={fadeIn('up', 0.6)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='max-w-[600px] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
                        mollitia natus necessitatibus quasi temporibus iste modi nobis
                        ipsum ex fuga?</motion.p>
                </div>
                <motion.div
                    variants={fadeIn('up', 0.8)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16'>
                    {featured.map((feature, index) => {
                        return (
                            <div className='flex flex-col justify-center items-center gap-4 border p-10'
                                key={index}>
                                <div className='text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center'>
                                    {feature.icon}
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2  text-center'>
                                    <h4 className='h4 text-accent-100'>
                                        {feature.title}
                                    </h4>
                                    <p>{feature.subtitle}</p>
                                </div>
                            </div>
                        )
                    })}
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <Achivements />
                </motion.div>
            </div>
        </section>
    )
}

export default About