import { useState } from "react";
import Container from "../components/Container";

const Contacts = () => {
    return (
        <div
            id="contacts"
            className="w-full bg-[#040404] text-white min-h-[900px] "
        >
            <Container>
                <div className="bg-red-700 rounded-xl  py-12  px-8 md:ps-16 relative">
                    <div className="mb-8">
                        <div className=" pb-8 flex flex-col gap-2">
                            <h1 className="text-6xl uppercase md:text-7xl font-heading">
                                Contact Us
                            </h1>
                            <p className="max-w-sm leading-relaxed text-white/80">
                                Wangsheng Funeral Parlor isn't your regular <i>rest in peace</i>{" "}
                                establishment. We bring you experiences that are worthy{" "}
                                <i>to die for!</i>
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12 my-8">
                            <ContactForm />
                            <div className="grid">

                                <div className="relative w-full h-64 md:h-full bg-red-50 overflow-hidden rounded-md mt-8">
                                    <img
                                        src="map.png"
                                        alt=""
                                        className="object-cover absolute w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        src="hu-chibi-coupon.webp"
                        alt=""
                        className="absolute w-[200px] bottom-0 right-0"
                    />
                </div>
            </Container>
        </div>
    );
};

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid xl:grid-cols-2 gap-6">
                <div className="grid gap-2">
                    <p className="uppercase font-bold">
                        Name
                    </p>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="px-2 py-3 rounded-md bg-white text-black"
                    />
                </div>
                <div className="grid gap-2">
                    <p className="uppercase font-bold">
                        Email
                    </p>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="px-2 py-3 rounded-md bg-white text-black w-full"
                    />
                </div>
            </div>
            <div className="grid gap-2">
                <p className="uppercase font-bold">
                    Message

                </p>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="px-2 py-3 rounded-md bg-white text-black resize-none min-h-[180px]"
                />
            </div>
            <div>
                <button className="relative px-8 py-4 w-full font-semibold bg-white text-red-500 rounded-md transition-all duration-300 ease-in-out md:w-auto hover:bg-red-600 group">
                    <p>SUBMIT</p>
                </button>
            </div>
        </form>
    );
};

export default Contacts;
