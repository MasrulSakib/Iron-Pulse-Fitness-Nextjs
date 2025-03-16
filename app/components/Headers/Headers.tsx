'use client';
import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from '../MobileNav/MobileNav';
import { MdMenu } from 'react-icons/md';
import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { SignedIn, SignedOut, SignOutButton } from '@clerk/clerk-react';

const Headers = () => {
    const [headerActive, setHeaderActive] = useState(false);
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHeaderActive(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${headerActive ? 'h-[100px]' : 'h-[124px]'} fixed top-0 w-full max-w-[1920px] bg-primary-200 text-white transition-all z-50 duration-300`}>
            <div className='container mx-auto h-full flex items-center justify-between'>
                <Link href=''>
                    <Image src={'/assets/img/logo.png'} width={127} height={66} alt='' />
                </Link>

                {/* Mobile Navigation */}
                <MobileNav
                    containerStyles={`fixed ${headerActive ? 'top-[100px]' : 'top-[124px]'}
                    ${openNav ? 'max-h-max pt-8 pb-8 border-t border-white/10' : 'max-h-0 pt-0 pb-0 overflow-hidden border-white/0'}
                    xl:hidden text-white flex flex-col gap-4 w-full left-0 bg-primary-200 text-center text-base
                    uppercase font-medium transition-all duration-300`}
                    closeNav={() => setOpenNav(false)} // Function to close nav
                />

                {/* Desktop Navigation */}
                <Nav containerStyles='py-12 flex gap-4 hidden text-base uppercase font-medium transition-all xl:flex' />

                {/* Buttons */}
                <div className='flex items-center gap-4'>
                    <div className='text-white flex items-center gap-4'>
                        <SignedOut>
                            <SignInButton mode='modal'>
                                <Link href='#' className='hover:text-accent-100 transition-all text-base uppercase font-medium'>Login</Link>
                            </SignInButton>
                            <SignUpButton>
                                <Link href='#' className='hover:text-accent-100 transition-all text-base uppercase font-medium'>Register</Link>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            <SignOutButton>
                                <Link href='#' className='hover:text-accent-100 transition-all text-base uppercase font-medium'>Log Out</Link>
                            </SignOutButton>
                        </SignedIn>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='xl:hidden'>
                        <button onClick={() => setOpenNav(!openNav)} className='text-white flex items-center'>
                            <MdMenu className='text-4xl' />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Headers;
