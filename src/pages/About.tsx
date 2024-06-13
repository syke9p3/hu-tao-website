import Container from '../components/Container';
import CharCard from '../components/CharCard';
import ButterflyBg from '../components/ButterflyBg';

export const About = () => {
    return (
        <div id='about' className='w-full bg-[#040404] text-white min-h-[900px] bg-gradient-to-t from-[#563a3a] to-[#00000050] overflow-hidden mt-6 pt-24'>
            <Container>
                <div className='flex relative flex-col justify-center items-center'>
                    <ButterflyBg />
                    <div className='z-50'>
                        <h1 className='text-6xl text-center md:text-7xl font-heading'>ABOUT US</h1>

                    </div>

                    <div className='grid-cols-12 mt-6 md:grid'>
                        <CharCard className="col-start-2 col-end-6 max-w-md leading-relaxed md:text-sm" name="HU TAO" role="Director" img="/hu-tao.webp">
                            Hu Tao is the 77th Director of the Wangsheng Funeral Parlor, a person vital to managing Liyue's funerary affairs.
                            She does her utmost to flawlessly carry out a person's last rites and preserve the world's balance of yin and yang.
                            Aside from this, she is also a talented poet whose many "masterpieces" have passed around Liyue's populace by word of mouth.
                        </CharCard>
                        <CharCard className="col-start-8 col-end-12 max-w-md leading-relaxed md:text-sm" name="ZHONGLI" role="Consultant" img="zhongli.webp">


                            Zhongli, the consultant for Wangsheng Funeral Parlor, is knowledgeable and well-versed in various details regarding the ceremonies of sending adepti to the afterlife.
                            Not even the most particular and learned of researchers or scholars could find one fault in Wangsheng Funeral Parlor's ceremonies.

                        </CharCard>
                    </div>

                </div>
            </Container>

        </div>
    );
};
