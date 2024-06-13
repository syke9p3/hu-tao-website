import Navbar from '../components/Navbar';
import Container from '../components/Container';
import huTaoHat from '/huTaoHat.png'
import b from '/b.png'
import CharCard from '../components/CharCard';
import Footer from '../components/Footer';
import ImageCard from '../components/ImageCard';
import ButterflyBg from '../components/ButterflyBg';

const Home = () => {
    return (
        <div className="font-primary bg-[#040404] relative">
            <Navbar />
            <div className='relative z-0'>
                <Hero />
                <About />
                <Services />
                <Footer />
            </div>
        </div>
    )
}


const Hero = () => {
    return (
        <div className="w-full bg-[#040404] text-white min-h-[800px]">
            <Container>
                <div className='py-16 block justify-between md:grid grid-cols-12 bg-gradient-to-b from-transparent to-[#00000050]'>
                    <div className='flex flex-col col-start-2 col-end-6 gap-6 pt-12 sm:col-start-1 md:ps-16'>
                        <h1 className='text-6xl md:text-7xl font-heading'>
                            FUNERAL SERVICES FOR{' '}
                            <span className="text-red-500">
                                <span className='relative'>CHEAP </span>
                            </span>
                        </h1>
                        <p className='text-[#FFFFFFCC] max-w-sm leading-relaxed'>
                            Aiya~! Enjoy your post-mortem benefits from Wangsheng Funeral Parlor by signing up to our  <br /><span className="italic text-red-500"><a href="#">special lethal offers!</a></span>
                        </p>
                        <div className="relative mt-8">
                            <button className="relative px-16 py-4 w-full font-semibold text-white bg-red-500 rounded-full transition-all duration-300 ease-in-out md:w-auto hover:bg-red-600 group">
                                <p>BOOK NOW</p>
                                <img
                                    src={huTaoHat}
                                    alt="huTaoHat"
                                    className="rotate-0 absolute h-20 top-[-2.25rem] left-[-2.5rem] transform translate-y-0 translate-x-0 transition-all duration-300 ease-in-out group-hover:translate-y-[-2.5rem] group-hover:translate-x-[-2.5rem] group-hover:rotate-[-30deg]"
                                />
                            </button>
                        </div>

                    </div>
                    <div className='relative col-span-6 col-end-12 justify-center items-center md:p-10 min-h-[500px] md:mt-12 bg-blues-300'>
                        <img src="https://i0.wp.com/traveler.gg/wp-content/uploads/Hutao-Banner1.png?resize=2048%2C1750&ssl=1" className='absolute rounded-[48px] top-20 md:top-0 ' alt="" />

                        {/* <div className="absolute py-6 px-12 right-0 bottom-[-5rem] rounded-lg bg-orange-600 text-white shadow-lg">
                            <h1 className='font-semibold text-'>Syke</h1>
                        </div> */}
                    </div>
                </div>
            </Container>
        </div>
    )
}


const About = () => {
    return (
        <div id='about' className='w-full bg-[#040404] text-white min-h-[900px] bg-gradient-to-t from-[#563a3a] to-[#00000050] overflow-hidden mt-6 pt-24'>
            <Container>
                <div className='flex relative flex-col justify-center items-center'>
                    <ButterflyBg />
                    <div className='z-50'>
                        <h1 className='text-6xl text-center md:text-7xl font-heading'>ABOUT US</h1>

                    </div>

                    <div className='grid-cols-12 mt-6 md:grid'>
                        <CharCard className="col-start-2 col-end-6 max-w-md leading-relaxed md:text-sm" name="HU TAO" role="Director" img="https://genshin.honeyhunterworld.com/img/h_368133.webp?x89879">
                            Hu Tao is the 77th Director of the Wangsheng Funeral Parlor, a person vital to managing Liyue's funerary affairs.
                            She does her utmost to flawlessly carry out a person's last rites and preserve the world's balance of yin and yang.
                            Aside from this, she is also a talented poet whose many "masterpieces" have passed around Liyue's populace by word of mouth.
                        </CharCard>
                        <CharCard className="col-start-8 col-end-12 max-w-md leading-relaxed md:text-sm" name="ZHONGLI" role="Consultant" img="https://genshin.honeyhunterworld.com/img/zhongli_030_icon.webp?x89879">


                            Zhongli, the consultant for Wangsheng Funeral Parlor, is knowledgeable and well-versed in various details regarding the ceremonies of sending adepti to the afterlife.
                            Not even the most particular and learned of researchers or scholars could find one fault in Wangsheng Funeral Parlor's ceremonies.

                        </CharCard>
                    </div>

                </div>
            </Container>

        </div>
    )
}

const Services = () => {

    const services = [
        {
            img: '/zhongli-shrine.jpg',
            name: 'Funeral Rites',
            description: "Feel the command of the omnipresent power of earth with Mr. Zhongli's prescence. Die like an adepti. Order guide you"
        },
        {
            img: '/hu-idle.jpg',
            name: 'Spirit Soother',
            description: 'Talk to your spirited loved ones through Director Hu Tao. Let her be your guide to the afterlife'
        },
        {
            img: '/hu-fire.webp',
            name: 'Blazing Cremation',
            description: "Experience a blazingly hot cremation ceremony personally administered by the Director herself"
        },
        {
            img: '/hu-coupon.webp',
            name: 'Free Coupons',
            description: 'Buy one coffin get one free, anniversary deal!'
        },
    ]

    return (
        <div id="services" className="w-full bg-[#040404] text-white min-h-[900px] ">
            <Container>
                <div className='py-12 block justify-between lg:grid grid-cols-12 bg-gradient-to-b from-transparent to-[#00000050]'>
                    <div className='flex flex-col col-start-1 col-end-6 gap-6 pt-12 md:ps-16'>
                        <h1 className='text-6xl uppercase md:text-7xl font-heading'>Services</h1>
                        <p className='max-w-sm leading-relaxed text-white/80'>
                            Wangsheng Funeral Parlor isn't your regular <i>rest in peace</i> establishment. We bring you experiences that are worthy <i>to die for!</i>
                        </p>
                    </div>
                    <div className='grid col-span-6 col-end-12 gap-4 justify-center items-center p-10 mt-4 break-inside-avoid lg:mt-0 md:grid-cols-2 bg-blues-300'>

                        {
                            services.map((service, i) => (
                                <ImageCard key={i} service={service} />
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}




export default Home