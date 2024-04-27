import { RiExternalLinkFill } from "react-icons/ri";

const Proj = ({title, description, label, stacks, link}) => {
    return (
        <div className="w-full bg-light text-secondary-dark p-5 rounded-2xl">
            <div className="flex items-center justify-between">
                <h1 className='font-bold text-xl'>{title}</h1>
                <span className="p-0.5 px-2 bg-secondary-dark text-light rounded-md font-bold">{label}</span>
            </div>
            <p className='mt-2 text-md min-h-16'>{description}</p>
            <div className="flex items-center py-3 gap-1 flex-wrap">
                {stacks.map((stack) => (
                    <span key={stack} className="bg-secondary text-light p-0.5 px-2 font-bold rounded-md">{stack}</span>
                ))}
            </div>
            <div className="flex justify-end">
                <a href={link} target="_blank" className="text-light bg-primary-light hover:bg-primary-dark font-bold flex items-center gap-2 p-1 px-2 rounded-md">
                    <RiExternalLinkFill size={20} />
                    Acesse o Repositório
                </a>
            </div>
        </div>
    );
}

export default Proj;