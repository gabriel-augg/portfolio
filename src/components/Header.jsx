import Logo from "./Logo";

const Header = () => {
  return (
    <header className="fixed w-full bg-secondary-dark top-0 z-10">
      <nav className="flex justify-center lg:justify-between p-4 px-12">
        <Logo />
        <ul className="lg:flex hidden items-center gap-5 text-light-light font-bold">
            <li>
                <a href="#home" className="hover:text-primary">Home</a>
            </li>
            <li>
                <a href="#about" className="hover:text-primary">Sobre</a>
            </li>
            <li>
                <a href="#projects" className="hover:text-primary">Projetos</a>
            </li>
            <li>
                <a href="#contact" className="hover:text-primary">Contato</a>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;