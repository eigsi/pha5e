import '/src/assets/css/Header.scss';
import { FiMenu } from 'react-icons/fi';

function Header() {
  return (
    <header>
    <h3 className='header-left'>À PROPOS</h3>
    <img className='header-center' src="/images/logo.png" alt="logo" />
    <FiMenu className={`header-right`}/>
  </header>

  )
}

export default Header
