import '/src/assets/css/InteractiveView360.css';
import { Canvas} from '@react-three/fiber';
import ImagePlane from './ImagePlane';

function InteractiveView360() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <ImagePlane />
    </Canvas>
  )
}

export default InteractiveView360
