import '/src/assets/css/InteractiveView360.scss';
import { Canvas } from '@react-three/fiber';
import Image360 from './Image360';
import Header from './Header';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import ClickableCircle from './ClickableCircle';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';

function InteractiveView360() {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const overlayRef = useRef(null);

  // PRELOAD THE TEXTURES TO AVOID WHITE SCREEN
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

  const handleWhiteCircleClick = () => {
    // Animation de l'overlay : opacité de 0 -> 1 sur 0.3 seconde
    gsap.to(overlayRef.current, {
      duration: 0.3,
      opacity: 1,
      ease: "power3.out",
      onComplete: () => {
        // Après l'animation, on navigue vers la nouvelle page
        navigate('/content');
      }
    });
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
        {/* -------- WHITE CIRCLE -------- */}
        <ClickableCircle
          position={[0, 0, -20]}
          isDragging={isDragging}
          onClick={handleWhiteCircleClick}
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

      {/* ----------- OVERLAY ----------- */}
      <div className='overlay' ref={overlayRef}></div>
    </>

  )
}

export default InteractiveView360
