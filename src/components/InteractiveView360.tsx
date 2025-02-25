import '/src/assets/css/InteractiveView360.scss';
import { Canvas } from '@react-three/fiber';
import Image360 from './Image360';
import Header from './Header';
import { useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

function InteractiveView360() {

  const [isDragging, setIsDragging] = useState(false);

  const textures = useLoader(TextureLoader, [
    '/images/360view_1.jpg',
    '/images/360view_2.jpg',
    '/images/360view_3.jpg'
  ]);

  const [textureIndex, setTextureIndex] = useState(0);
  // CHANGE TEXTURE
  const handleTextureChange = () => {
    setTextureIndex(prevIndex => (prevIndex + 1) % textures.length);
  };

  return (
    <>
      {/* -------- 360 PLANE -------- */}
      <Canvas className="Canvas360">
        <Image360
          textureIndex={textureIndex}
          textures={textures}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        />
      </Canvas>

      {/* -------- YELLOW CIRCLE -------- */}
      <div className='overlay-circle-shape'>
        <div
          className={`overlay-circle ${isDragging ? "dragging" : ""}`}
          onClick={handleTextureChange}
        >
          <h2>CHANGE DE VUE</h2>
        </div>
      </div>

      {/* -------- HEADER -------- */}
      <Header />
    </>

  )
}

export default InteractiveView360
