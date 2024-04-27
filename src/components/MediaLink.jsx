const MediaLink = ({ to, children }) => {
  return (
    <a href={to} className="text-light shadow-xl bg-primary-light hover:bg-primary-dark font-bold flex items-center gap-2 p-1 px-2 rounded-md"> {children}
    </a>
  )
}

export default MediaLink;