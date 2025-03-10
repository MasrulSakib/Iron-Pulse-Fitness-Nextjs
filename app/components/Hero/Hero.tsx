import HeroSlider from "./HeroSlider"

const Hero = () => {
    return (
        <section className='relative h-[80vh] lg:h-[956px] bg-hero bg-cover bg-center bg-no-repeat' id='home' >
            <div className="container mx-auto h-full">
                <HeroSlider />
            </div>
        </section >
    )
}

export default Hero