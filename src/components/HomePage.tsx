import '/src/assets/css/HomePage.scss';
import Header from './Header';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { LiaAngleRightSolid } from "react-icons/lia";

function HomePage() {
  const backgroundRef = useRef(null);
  const titleRef = useRef(null);
  const circleRef = useRef(null);
  const firstPartRef = useRef(null);
  const secondPartRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      backgroundRef.current,
      { opacity: 0 },
      { duration: 1, opacity: 1, ease: "power3" }
    );
    tl.fromTo(
      titleRef.current,
      { opacity: 0 },
      { duration: 1, opacity: 1, ease: "power3" }
    );
     ">0"
    tl.fromTo(
      circleRef.current,
      { opacity: 0 },
      { duration: 1, opacity: 1, ease: "power3" }
    );
    tl.fromTo(
      firstPartRef.current,
      { opacity: 1, y: 0, filter: "blur(0px)"},
      { duration: 1, opacity: 0, y: -175, filter: "blur(8px)", ease: "power2" },
      ">1.5"
    );
    tl.fromTo(
      secondPartRef.current,
      { opacity: 0, y: 175 },
      { duration: 1, opacity: 1, y: 0, ease: "power3" },
      ">-0.5"
    );
  }, []);

  return (
    <>
      {/* -------- CONTENT -------- */}
      <main>
        <div className='home-bg' ref={backgroundRef}></div>
        <section className='first-part' ref={firstPartRef}>
          <h1 className='title' ref={titleRef}>L'Occitane<br /> vous invite à Manosque</h1>
          <img ref={circleRef} className='yellow-img' src="/images/yellow_circle.png" alt="yellow_circle" />
        </section>
        <section className='second-part' ref={secondPartRef}>
          <h2 className='title'>Entrez au cœur de notre univers en visitant à 360° le jardin, l’usine et la boutique musée.</h2>
           <button className='start-btn'>ENTRER DANS L'EXPERIENCE <LiaAngleRightSolid /></button>
        </section>
      </main>
      {/* -------- HEADER -------- */}
      <Header />

    </>

  )
}

export default HomePage