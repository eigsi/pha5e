import { BackSide } from 'three';
import { OrbitControls } from '@react-three/drei';
import { a, useSpring } from '@react-spring/three';
import { useEffect, useState } from 'react';
import { easeCubicInOut } from 'd3-ease';

interface Image360Props {
  textureIndex: number;
  textures: any[];
  onDragStart: () => void;
  onDragEnd: () => void;
}

function Image360({ textureIndex, textures, onDragStart, onDragEnd }: Image360Props) {

  const [currentTextureIndex, setCurrentTextureIndex] = useState(textureIndex);
  const baseTexture = textures[textureIndex];  // BASE TEXTURE
  const nextTexture = textures[(textureIndex + 1) % textures.length];   // NEW TEXTURE

  // ACCUMULATED ROTATION TO KEEP CONTINUITY
  const [accumulatedRotation, setAccumulatedRotation] = useState(0);

  // SPRING FOR THE GROUP ROTATION
  const [rotationSpring, rotationApi] = useSpring(() => ({
    rotationY: accumulatedRotation,
    config: { duration: 750, easing: easeCubicInOut },
  }));

  // Spring FOR OPACITY OF THE TRANSITION SPHERE
  const [opacitySpring, opacityApi] = useSpring(() => ({
    opacity: 0,
    config: { duration: 750, easing: easeCubicInOut },
  }));


  useEffect(() => {
    if (textureIndex !== currentTextureIndex) {
      // 1) START OPACITY 0->1
      opacityApi.start({ opacity: 1 });
      // 2 ) START ROTATION +90° 
      rotationApi.start({
        rotationY: accumulatedRotation + Math.PI / 2,
        config: { duration: 750, easing: easeCubicInOut },
        onRest: () => {
          setTimeout(() => {  // DELAY TO CHANGE TEXTURE
            // UPDATE TEXTURE
            setCurrentTextureIndex(textureIndex);
            // RESET OPACITY OF THE TRANSITION SPHERE
            opacityApi.set({ opacity: 0 });
            // UPDATE ACCUMULATED ROTATION
            const newAccumulated = accumulatedRotation + Math.PI / 2;
            setAccumulatedRotation(newAccumulated);
            rotationApi.set({ rotationY: newAccumulated });
          });
        },
      });
    }
  }, [textureIndex, currentTextureIndex, accumulatedRotation, opacityApi, rotationApi]);


  return (
    <>
      <a.group rotation-y={rotationSpring.rotationY}>
        {/* BASE SPHERE*/}
        <mesh>
          <sphereGeometry args={[500, 60, 60]} />
          <meshBasicMaterial map={baseTexture} side={BackSide} />
        </mesh>
        {/* TAMPORARY SPHERE WITH NEW TEXTURE*/}
        <a.mesh>
          <sphereGeometry args={[500, 60, 60]} />
          <a.meshBasicMaterial
            map={nextTexture}
            side={BackSide}
            transparent
            opacity={opacitySpring.opacity}
          />
        </a.mesh>
      </a.group>

      <OrbitControls
        enableZoom={false}
        rotateSpeed={-0.5}
        onStart={onDragStart}
        onEnd={onDragEnd}
      />
     
    </>


  )
}

export default Image360
