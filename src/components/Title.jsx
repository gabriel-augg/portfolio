const Title = ({ title }) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <h1 className='font-bold text-2xl border-b-2 pb-2 border-primary'>{title}</h1>
        </div>
    );
}

export default Title;