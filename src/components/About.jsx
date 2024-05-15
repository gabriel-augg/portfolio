import illustration from '../assets/avatar.jpg';
import Tecnnologies from './Technologies';
import Title from './Title';



const About = () => {
    return (
        <section id='about' className="min-h-screen bg-secondary-light p-16 text-light">
            <Title title="Sobre mim" />
            <div className="flex flex-col lg:flex-row items-center lg:gap-0 gap-10 justify-center mt-20">
                <aside className='flex-1 flex justify-center items-center'>
                    <img src={illustration} className='rounded-2xl shadow-2xl' width={280} alt="ilustration" />
                </aside>
                <article className='flex-1 lg:text-start text-center'>
                    <h1 className='text-2xl text-primary-dark font-bold'>Quem sou eu?</h1>
                    <p className='mt-6 text-xl'>Me chamo Gabriel, tenho 19 anos, sou natural de Aracaju - SE e sou apaixonado por tecnologia desde o final do meu ensino médio. Desde então, venho estudando todos os dias programação, melhorando minhas habilidades para se tornar um profissional melhor no que eu mais amo.</p>
                    <p className='mt-6 text-xl'>Gosto de desafios, resolver problemas e participar de projetos onde sinto que estou contribuindo com algo maior.</p>
                </article>
            </div>
            <Tecnnologies />
        </section>
    );
}

export default About;