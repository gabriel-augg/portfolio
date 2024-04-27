import Logo from "./Logo";

const Header = () => {
  return (
    <header className="fixed w-full bg-secondary-dark top-0">
      <nav className="flex justify-between p-4 px-12">
        <Logo />
        <ul className="flex items-center gap-5 text-light-light font-bold">
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#about">Sobre</a>
            </li>
            <li>
                <a href="#projects">Projetos</a>
            </li>
            <li>
                <a href="#contact">Contato</a>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;