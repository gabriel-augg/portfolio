import illustration from '../assets/illustration.svg';
import Tecnologies from './Tecnologies';
import Title from './Title';



const About = () => {
    return (
        <section className="min-h-screen bg-secondary-light p-16 text-light">
            <Title title="Sobre mim" />
            <div className="flex items-center justify-center mt-20">
                <aside className='flex-1 flex justify-center items-center'>
                    <img src={illustration} width={250} alt="ilustration" />
                </aside>
                <article className='flex-1 text-start'>
                    <h1 className='text-2xl text-primary-dark font-bold'>Quem sou eu?</h1>
                    <p className='mt-6 text-xl'>Me chamo Gabriel, tenho 19 anos, sou apaixonado por tecnologia e empreendedorismo desde meu ensino médio.</p>
                    <p className='mt-6 text-xl'>Gosto de elaborar projetos onde sinto que estou contribuindo com algo maior.</p>
                </article>
            </div>
            <Tecnologies />
        </section>
    );
}

export default About;