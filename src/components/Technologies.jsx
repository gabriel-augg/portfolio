import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaDocker } from "react-icons/fa";

import Tech from "./Tech";
import Title from "./Title";

const Technologies = () => {
    return (
        <div className="py-16">
            <div>
                <Title title='Tecnologias' />
                <div className='flex justify-center flex-wrap mt-16 gap-5'>
                    <Tech name='HTML'>
                        <FaHtml5 size={40} />
                    </Tech>
                    <Tech name='CSS'>
                        <FaCss3Alt size={40} />
                    </Tech>
                    <Tech name='JavaScript'>
                        <RiJavascriptFill size={40} />
                    </Tech>
                    <Tech name="TypeScript">
                        <BiLogoTypescript size={40} />
                    </Tech>
                    <Tech name='React'>
                        <FaReact size={40} />
                    </Tech>
                    <Tech name='Tailwind'>
                        <SiTailwindcss size={40} />
                    </Tech>
                    <Tech name='Styled Components'>
                        <SiStyledcomponents size={40} />
                    </Tech>
                    <Tech name='Sass'>
                        <FaSass size={40} />
                    </Tech>
                    <Tech name='Jest'>
                        <SiJest size={40} />
                    </Tech>
                    <Tech name='MongoDB'>
                        <SiMongodb size={40} />
                    </Tech>
                    <Tech name='MySQL'>
                        <GrMysql size={40} />
                    </Tech>
                    <Tech name='Docker'>
                        <FaDocker size={40} />
                    </Tech>
                </div>
            </div>
        </div>
    );
}

export default Technologies;