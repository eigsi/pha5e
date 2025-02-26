import '/src/assets/css/Header.scss';
import { FiMenu } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header>
    <h3 className='header-left'>À PROPOS</h3>
    <img className='header-center' src="/images/logo.png" alt="logo" onClick={() => navigate('/')} />
    <FiMenu className={`header-right`}/>
  </header>

  )
}

export default Header
