import { useState } from 'react';
import Container from '../components/Container'

const Contacts = () => {
    return (
        <div id="contacts" className="w-full bg-[#040404] text-white min-h-[900px] ">
            <Container>
                <div className="bg-red-700 rounded-xl  py-12  px-8 md:ps-16 relative">
                    <div className="grid md:grid-cols-2">
                        <div className='flex flex-col'>
                            <div className='flex flex-col gap-6'>
                                <h1 className='text-6xl uppercase md:text-7xl font-heading'>Contact Us</h1>
                                <p className='max-w-sm leading-relaxed text-white/80'>
                                    <div>
                                        <h2>Our Location</h2>
                                        <p>Wangsheng Funeral Parlor</p>
                                        <p>Liyue Harbor</p>
                                    </div>
                                    {/* We're here to provide support and guidance in your time of need. Reach out to us for compassionate, personalized funeral services that honor your loved one's life. We're just a message away, ready to assist you with care and understanding. */}
                                </p>
                            </div>
                            <ContactForm />
                        </div>
                        <div className="relative w-full aspect-square bg-red-50 overflow-hidden rounded-md">
                            <img
                                src='map.png'
                                alt=""
                                className="object-cover absolute w-full h-full"
                            />
                        </div>

                    </div>
                    <img
                        src='hu-chibi-coupon.webp'
                        alt=""
                        className="absolute w-[200px] bottom-0 right-0"
                    />
                </div>

            </Container>
        </div>
    )
}

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col'>
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} required />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </label>
            <label>
                Message:
                <textarea value={message} onChange={e => setMessage(e.target.value)} required />
            </label>
            {/* <input type="submit" value="Submit" /> */}
        </form>
    );
};


export default Contacts