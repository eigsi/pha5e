import '/src/assets/css/HomePage.scss';
import Header from './Header';
import MenuPage from './MenuPage';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { LiaAngleRightSolid } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';
import { preloadImage } from '../assets/utils/preloadImages.js';

function HomePage() {
  const navigate = useNavigate();
  const backgroundRef = useRef<HTMLDivElement>(null);
  // HOME 1 REFS
  const titleRef = useRef(null);
  const circleRef = useRef(null);
  // HOME 2 REFS
  const firstPartRef = useRef<HTMLElement>(null);
  const secondPartRef = useRef(null);

  // MENU REFS
  const menuRef = useRef<HTMLDivElement>(null);
  const formsRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef(null);
  const menuTl = useRef<gsap.core.Timeline | null>(null);


  // ------------------- FUNCTIONS --------------------
  // ------------------- FUNCTIONS --------------------

  // 1) EFFECT OF THE BUTTON TO OPEN THE MENU
  const handleStartMenu = () => {
    // 1°) MENU DISPLAY
    if (menuRef.current) {
      menuRef.current.style.display = "block";
    }
    // 2°) ANIMATION OF THE BACKGROUND
    gsap.to(backgroundRef.current, {
      duration: 1,
      backgroundPosition: "0 -3.3rem",
      ease: "power2.out",
    });

    // 3°) MENU APPEAR ANIMATION
    if (menuTl.current) {
      menuTl.current.play();
    }
  };

  // 2) FONCTION TO TRANSITION TO THE INTERACTIVE VIEW
  const handleSlideClick = (textureIndex: number) => {
    gsap.to(overlayRef.current, {
      duration: 0.5,
      opacity: 1,
      ease: "power3.out",
      onComplete: () => {
        navigate('/interactive-view', { state: { textureIndex } });
      }
    });
  };

  // -------------------------- ANIMATION OF THE INTRO ------------------------
  useEffect(() => {
    const imageUrls = [
      '/images/background3.png',
      '/images/yellow_circle.png'
    ];

    Promise.all(imageUrls.map(preloadImage)).then(() => {
      // REMOVE SCROLL ON HOMEPAGE
      document.body.style.overflow = "hidden";
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
        {
          duration: 1,
          opacity: 0,
          y: -175,
          filter: "blur(8px)",
          ease: "power2",
          onComplete: () => {
            if (firstPartRef.current) {
              firstPartRef.current.style.display = "none";
            }
          },
        }, ">1.2");
      // 5) SECOND PART APPEAR
      tl.fromTo(
        secondPartRef.current,
        { opacity: 0, y: 175 },
        { duration: 1, opacity: 1, y: 0, ease: "power3" },
        ">-0.5"
      );
    })
      .catch((error) => console.error("Erreur lors du préchargement des images", error));
    return () => {
      // STOP REMOVE SCROLL
      document.body.style.overflow = "";
    };


  }, []);


  // -------------------------- ANIMATION OF THE MENU ------------------------
  useEffect(() => {
    const imageUrls = [
      '/images/btn1.jpeg',
      '/images/btn2.jpeg',
      '/images/btn3.jpeg'
    ];

    Promise.all(imageUrls.map(preloadImage)).then(() => {
      menuTl.current = gsap.timeline({ paused: true }); // PRELOAD ANIMATION
      // 1) HOME CONTENT DISAPPEAR
      menuTl.current.to(
        secondPartRef.current,
        { duration: .75, opacity: 0, y: -200, filter: "blur(8px)", ease: "power3" }
      );
      // 2) MENU CONTENT APPEAR
      menuTl.current.fromTo(
        slidesRef.current,
        { opacity: 0, y: 400 },
        { duration: 1, opacity: 1, y: 0, ease: "power2" },
        ">-0.5"
      );

      menuTl.current.fromTo(
        formsRef.current,
        { opacity: 0, marginBottom: "-5rem", filter: "blur(8px)" },
        { duration: 1, opacity: 1, marginBottom: "2rem", filter: "blur(0px)", ease: "power3" },
        ">0.2"
      );
    })
      .catch((error) => console.error("Erreur lors du préchargement des images", error));
  }, []);



  // -------------------- CONTENT --------------------
  // -------------------- CONTENT --------------------
  // -------------------- CONTENT --------------------

  return (
    <>
      <main className='homepage'>
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
        <MenuPage
          menuRef={menuRef}
          slidesRef={slidesRef}
          formsRef={formsRef}
          onSlideClick={handleSlideClick}
        />
      </main>
      {/* -------- HEADER -------- */}
      <Header />
      {/* ----------- OVERLAY ----------- */}
      <div className='overlay' ref={overlayRef}></div>

    </>

  )
}

export default HomePage