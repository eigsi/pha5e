import '/src/assets/css/InteractiveView360.scss';
import { Canvas} from '@react-three/fiber';
import ImagePlane from './Image360';
import { MdMenu } from 'react-icons/md';

function InteractiveView360() {
  return (
    <>
     <Canvas className="Canvas360">
      <ambientLight intensity={3} />
      <ImagePlane />
    </Canvas>
    <header>
      <h3 className='header-left'>À PROPOS</h3>
      <img className='header-center' src="/images/logo.png" alt="logo" />
      <MdMenu className={`header-right`}/>
    </header>
    </>

  )
}

export default InteractiveView360
