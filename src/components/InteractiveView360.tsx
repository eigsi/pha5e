import '/src/assets/css/InteractiveView360.scss';
import { Canvas } from '@react-three/fiber';
import Image360 from './Image360';
import Header from './Header';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import ClickableCircle from './ClickableCircle';
import InteractiveViewIntro from './InteractiveViewIntro';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

function InteractiveView360() {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [intro, setIntro] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const circleYellowRef = useRef<HTMLDivElement>(null);
  const circleWhiteRef = useRef<HTMLDivElement>(null);
  const overlayIntroRef = useRef<HTMLDivElement>(null);
  const introContentRef = useRef<HTMLDivElement>(null);

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
    // OVERLAY ANIMAMATION : OPACITY 0 -> 1
    gsap.to(overlayRef.current, {
      duration: 0.3,
      opacity: 1,
      ease: "power3.out",
      onComplete: () => {
        // NAVIGATE TO ROUTE
        navigate('/content');
      }
    });
  };

  // CALLBACK AT InteractiveViewIntro TO STOP INTRO
  const handleStartIntro = () => {
    setIntro(false);
  };

  {/* --------------------------------------- ANIMATION --------------------------------------- */ }
  {/* --------------------------------------- ANIMATION --------------------------------------- */ }
  {/* --------------------------------------- ANIMATION --------------------------------------- */ }
  useEffect(() => {
    if (!intro) {
      const tl = gsap.timeline();
      // 1) DELETE INTRO OVERLAY
      tl.to(overlayIntroRef.current, {
        duration: 0.5,
        opacity: 0,
        ease: "power3.out",
      });
      // 2) DELETE INTRO CONTENT
      tl.to(introContentRef.current, {
        duration: 0.5,
        y: 200,
        opacity: 0,
        ease: "power3.out",
        onComplete: () => {
          if (overlayIntroRef.current) {
            overlayIntroRef.current.style.display = "none";
          }
          if (introContentRef.current) {
            introContentRef.current.style.display = "none";
          }
          if (circleYellowRef.current) {
            circleYellowRef.current.classList.remove("intro");
            circleYellowRef.current.style.display = "flex";
          }
        }
      },
        "<"
      );
      // 3) CIRCLES ANIMATION
      tl.to(circleWhiteRef.current, {
        duration: 0.5,
        opacity: 1,
        ease: "power3.out",
      }, "<"
      );
      tl.fromTo(
        circleYellowRef.current,
        { opacity: 0 },
        { duration: 0.2, opacity: 1, ease: "power3.out" },
        ">0.3"
      );
    }
  }, [intro]);

  // WHITE OVERLAY ANIMATION
  useEffect(() => {
    const tlPage = gsap.timeline();
    tlPage.fromTo(overlayRef.current,
      { opacity: 1 },
      {
        duration: 2,
        opacity: 0,
        ease: "power3.out"
      },
      ">0.2"
    );
  }, []);

  {/* --------------------------------------- CONTENT --------------------------------------- */ }
  {/* --------------------------------------- CONTENT --------------------------------------- */ }
  {/* --------------------------------------- CONTENT --------------------------------------- */ }

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
          circleWhiteRef={circleWhiteRef}
          position={[30, 0, -15]}
          isDragging={isDragging}
          onClick={handleWhiteCircleClick}
        />
      </Canvas>

      {/* -------- YELLOW CIRCLE -------- */}
      <div className='overlay-circle-shape'>
        <div
          className={`overlay-circle intro ${isDragging ? "dragging" : ""}`}
          ref={circleYellowRef}
          onClick={handleTextureChange}
        >
          <h2>CHANGE DE VUE</h2>
        </div>
      </div>

      {/* ----------- OVERLAY ----------- */}
      <div className='overlay' ref={overlayRef}></div>

      {/* ----------- INTRO ----------- */}
      <InteractiveViewIntro
        onStart={handleStartIntro}
        overlayIntroRef={overlayIntroRef}
        introContentRef={introContentRef}
      />

      {/* -------- HEADER -------- */}
      <Header />
    </>

  )
}

export default InteractiveView360
