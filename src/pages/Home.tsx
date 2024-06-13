import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { About } from './About';
import { Services } from './Services';
import { Hero } from './Hero';
import Contacts from './Contacts';

const Home = () => {
    return (
        <div className="font-primary bg-[#040404] relative">
            <Navbar />
            <div className='relative z-0'>
                <Hero />
                <About />
                <Services />
                <Contacts />
                <Footer />
            </div>
        </div>
    )
}

export default Home