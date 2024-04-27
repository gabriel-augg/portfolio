import MediaLink from "./MediaLink";

import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import Title from "./Title";

const Contact = () => {
  return (
    <div className="bg-secondary-light p-16 text-light">
        <Title title="Contato" />

        <div className="flex items-center justify-evenly mt-20 lg:flex-row sm:flex-col lg:gap-0 sm:gap-16">

            <MediaLink to="mailto:gabrielaugustopsantos@gmail.com">
                <MdEmail size={25} />
                gabrielaugustopsantos@gmail.com
            </MediaLink>
            
            <MediaLink to="https://www.linkedin.com/in/gabriel-augg">
                <IoLogoLinkedin size={25} />
                Gabriel-augg
            </MediaLink>
            <MediaLink to="https://github.com/gabriel-augg">
                <IoLogoGithub size={25} />
                Gabriel-augg
            </MediaLink>
        </div>

        

    </div>
  );
}

export default Contact;