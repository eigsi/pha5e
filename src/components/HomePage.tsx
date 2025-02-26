import '/src/assets/css/HomePage.scss';
import Header from './Header';
import MenuPage from './MenuPage';
import gsap from 'gsap';
import { useState, useRef, useEffect } from 'react';
import { LiaAngleRightSolid } from "react-icons/lia";

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef(null);
  const circleRef = useRef(null);
  const firstPartRef = useRef(null);
  const secondPartRef = useRef(null);
  const menuRef = useRef(null);


  // EFFECT OF THE BUTTON -> OPEN THE MENU
  const handleStartMenu = () => {
    setIsMenuOpen(true);
    gsap.to(backgroundRef.current, {
      duration: 1,
      backgroundPosition: "0 -4.3rem",
      ease: "power2.out",
    });
  };

  // --------------- ANIMATION ---------------
  // --------------- ANIMATION ---------------
  // --------------- ANIMATION ---------------


  // -------------------------- 1° ANIMATION -> INTRO ------------------------
  useEffect(() => {
    const tl = gsap.timeline();
    // 1) BACKGROUND
    tl.fromTo(
      backgroundRef.current,
      { opacity: 0 },
      { duration: 1, opacity: 1, ease: "power3" }
    );
    // 2) TITLE
    tl.fromTo(
      titleRef.current,
      { opacity: 0 },
      { duration: 1, opacity: 1, ease: "power3" }
    );
    ">0"
    // 3) YELLOW CIRCLE
    tl.fromTo(
      circleRef.current,
      { opacity: 0 },
      { duration: 1, opacity: 1, ease: "power3" }
    );
    // 4) FIRST PART DISAPPEAR
    tl.fromTo(
      firstPartRef.current,
      { opacity: 1, y: 0, filter: "blur(0px)" },
      { duration: 1, opacity: 0, y: -175, filter: "blur(8px)", ease: "power2" },
      ">1.5"
    );
    // 5) SECOND PART APPEAR
    tl.fromTo(
      secondPartRef.current,
      { opacity: 0, y: 175 },
      { duration: 1, opacity: 1, y: 0, ease: "power3" },
      ">-0.5"
    );
  }, []);

  // -------------------------- 2° ANIMATION -> MENU ------------------------
  useEffect(() => {
    if (isMenuOpen) {
      const tl = gsap.timeline();
      // 1) HOME CONTENT DISAPPEAR
      tl.fromTo(
        secondPartRef.current,
        { opacity: 1, y: 0, filter: "blur(0px)" },
        { duration: 1, opacity: 0, y: -200, filter: "blur(8px)", ease: "power3" }
      );
      // 2) MENU CONTENT APPEAR
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 300 },
        { duration: 1, opacity: 1, y: 0, ease: "power3" }
      );
      ">0"
    }
  }, [isMenuOpen]);

  // -------------------- CONTENT --------------------
  // -------------------- CONTENT --------------------
  // -------------------- CONTENT --------------------

  return (
    <>
      <main>
        {/* -------------- BACKGROUND IMAGE -------------- */}

        <div className='home-bg' ref={backgroundRef}></div>

        {/* -------------- 1ST PART -------------- */}
        <section className='first-part' ref={firstPartRef}>
          <h1 className='title' ref={titleRef}>L'Occitane<br /> vous invite à Manosque</h1>
          <img ref={circleRef} className='yellow-img' src="/images/yellow_circle.png" alt="yellow_circle" />
        </section>

        {/* -------------- 2ND PART -------------- */}
        <section className='second-part' ref={secondPartRef}>
          <h2 className='title'>Entrez au cœur de notre univers en visitant à 360° le jardin, l’usine et la boutique musée.</h2>
          <button className='start-btn' onClick={handleStartMenu}>ENTRER DANS L'EXPERIENCE <LiaAngleRightSolid /></button>
        </section>

        {/* -------------- MENU PART -------------- */}
        <MenuPage menuRef={menuRef} />
      </main>
      {/* -------- HEADER -------- */}
      <Header />

    </>

  )
}

export default HomePage