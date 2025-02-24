import '/src/assets/css/Image360.scss';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, BackSide } from 'three';
import { OrbitControls } from '@react-three/drei';

function Image360() {
  const texture = useLoader(TextureLoader, '/images/360view_1.jpg');
  return (
    <>
      <mesh>
        <sphereGeometry args={[500, 60, 60]} />
        <meshBasicMaterial map={texture} side={BackSide} />
      </mesh>
      <OrbitControls enableZoom={false} />
    </>

  )
}

export default Image360
