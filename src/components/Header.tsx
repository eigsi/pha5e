import '/src/assets/css/Header.scss';
import { MdMenu } from 'react-icons/md';

function Header() {
  return (
    <header>
    <h3 className='header-left'>À PROPOS</h3>
    <img className='header-center' src="/images/logo.png" alt="logo" />
    <MdMenu className={`header-right`}/>
  </header>

  )
}

export default Header
