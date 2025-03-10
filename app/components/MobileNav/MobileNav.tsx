'use client';
import { useMediaQuery } from 'react-responsive';
import { Link as ScrollLink } from 'react-scroll'

const links = [
    { name: 'home', target: 'home', offset: -100 },
    { name: 'about', target: 'about', offset: -80 },
    { name: 'class', target: 'class', offset: -80 },
    { name: 'team', target: 'team', offset: 0 },
    { name: 'prices', target: 'prices', offset: -40 },
    { name: 'testimonials', target: 'testimonials', offset: 0 },
    { name: 'blog', target: 'blog', offset: 0 },
    { name: 'contacts', target: 'contacts', offset: 0 }
]

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
    const isMobile = useMediaQuery({
        query: '(max-width: 640px)',
    });
    return (
        <div className={`${containerStyles}`}>
            {
                links.map((link, index) => {
                    return (
                        <ScrollLink
                            offset={link.offset}
                            to={link.target}
                            smooth
                            spy
                            activeClass={`${!isMobile && 'active'}`}
                            className='cursor-pointer transition-all hover:text-accent'
                            key={index}
                        >
                            {link.name}
                        </ScrollLink>
                    )
                })
            }
        </div >
    )
}

export default MobileNav