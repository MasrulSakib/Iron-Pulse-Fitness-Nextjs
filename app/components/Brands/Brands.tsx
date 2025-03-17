"use client";
import { fetchBrandData } from "@/app/features/brands/brandSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react";


const brandContainerVarient = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
            duration: 0.5,
            ease: 'linear'
        },
    },
}
const brandItem = {
    hidden: {
        y: 20,
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.6, 0.3, 0.8],
        },
    },
}

const Brands = () => {
    const { brands, isLoading, isError, error } = useAppSelector((state) => state.brand);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBrandData());
    }, [dispatch]);

    if (isLoading) {
        return <h1>Loading....</h1>;
    }

    if (isError) {
        return <h1>{error}</h1>;
    }

    if (!brands || brands.length === 0) {
        return <h1>No Posts to show</h1>;
    }
    return (
        <section className='py-8' id='contacts'>
            <div className="container mx-auto">
                <motion.div
                    variants={brandContainerVarient}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className="grid grid-cols-2 lg:grid-cols-5 py-8">
                    {brands.map((img, index) => {
                        return (
                            <motion.div
                                variants={brandItem}
                                key={index}>
                                <Link className="group" href={img.href}>
                                    <Image
                                        className="opacity-50 group-hover:opacity-100 transition-all mx-auto"
                                        src={img.src}
                                        width={204}
                                        height={106}
                                        alt=""
                                    />
                                </Link>
                            </motion.div>

                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Brands