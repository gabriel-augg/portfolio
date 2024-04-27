const Tech = ({children, name}) => {
  return (
    <div className='flex flex-col items-center bg-primary-dark text-light p-3 rounded-lg'>
      {children}
    </div>
  );
}

export default Tech;