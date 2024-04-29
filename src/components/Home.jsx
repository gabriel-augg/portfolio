import { useEffect } from "react";
import TypeIt from "typeit";
import { FaAnglesDown } from "react-icons/fa6";

const Home = () => {
    useEffect(() => {
        function typeIt() {
            new TypeIt("#role", {
                speed: 50,
                loop: true
            }).type('Software Engineer', {delay: 1000}).pause(1000).delete(18).type('Fullstack Developer', {delay: 1000}).pause(1000).go();
        }

        typeIt()
    },[])


    return (
        <section id="home" className="flex items-center h-screen text-white px-7 lg:px-20 py-16">
            <div>
                <h1 id="role" className="text-4xl lg:text-5xl font-bold text-primary-dark"></h1>
                <p className=" text-xl lg:text-2xl my-6 ">Aqui você vai ver um pouquinho de quem eu sou e alguns dos meus projetos.</p>
                <a href="#projects" className="bg-primary-dark p-2 hover:bg-primary-light px-5 rounded-lg font-bold">Projetos</a>
            </div>
            <div className="absolute text-primary bottom-10 left-1/2 transform -translate-x-1/2">
                <FaAnglesDown size={30} className="animate-bounce" />
            </div>
        </section>
    )
}

export default Home;