import '/src/assets/css/ImagePlane.css';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

function ImagePlane() {
  const texture = useLoader(TextureLoader, '/images/360view_1.jpg');
  return (
    <mesh>
      <planeGeometry args={[5, 5]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}

export default ImagePlane
