import '/src/assets/css/InteractiveView360.scss';
import { Canvas } from '@react-three/fiber';
import Image360 from './Image360';
import Header from './Header';
import { useState } from 'react';

function InteractiveView360() {
  const [isDragging, setIsDragging] = useState(false);
  return (
    <>
      {/* -------- 360 PLANE -------- */}
      <Canvas className="Canvas360">
        <Image360
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        />
      </Canvas>

      {/* -------- YELLOW CIRCLE -------- */}
      <div className='overlay-circle-shape'>
        <div className={`overlay-circle ${isDragging ? "dragging" : ""}`}>
          <h2>CHANGE DE VUE</h2>
        </div>
      </div>

      {/* -------- HEADER -------- */}
      <Header />
    </>

  )
}

export default InteractiveView360
