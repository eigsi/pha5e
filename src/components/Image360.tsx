import '/src/assets/css/Image360.scss';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, BackSide } from 'three';
import { OrbitControls } from '@react-three/drei';
import ClickablePoint from './ClickableCircle';

function Image360() {
  const texture = useLoader(TextureLoader, '/images/360view_1.jpg');

  const handlePointClick = () => {
    console.log('Point clicked');
  };
  return (
    <>
      <mesh>
        <sphereGeometry args={[500, 60, 60]} />
        <meshBasicMaterial map={texture} side={BackSide} />
      </mesh>
      <OrbitControls enableZoom={false} rotateSpeed={-0.5}/>
      <ClickablePoint position={[0, 0, -10]} onClick={handlePointClick} />
    </>

  )
}

export default Image360
