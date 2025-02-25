import '/src/assets/css/InteractiveView360.scss';
import { Canvas} from '@react-three/fiber';
import ImagePlane from './Image360';
import Header from './Header';

function InteractiveView360() {
  return (
    <>
     <Canvas className="Canvas360">
      <ImagePlane />
    </Canvas>
    <Header />
    </>

  )
}

export default InteractiveView360
