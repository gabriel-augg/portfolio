import logo from '../assets/logo.svg';

const Logo = () => {
  return (
    <div>
      <a href='#home'>
        <img src={logo} className='' width={120} alt="Logo" />
      </a>
    </div>
  );
}

export default Logo;