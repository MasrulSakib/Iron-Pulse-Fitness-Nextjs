import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-primary-300 text-white p-10">
            <aside>
                <Image
                    width={122}
                    height={66}
                    alt='logo'
                    src={'/assets/img/logo.png'}
                />
                <p>
                    Iron Pulse fitness
                    <br />
                    Providing reliable services since 2025
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    )
}

export default Footer