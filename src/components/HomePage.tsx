import '/src/assets/css/HomePage.scss';
import Header from './Header';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

function HomePage() {
  const backgroundRef = useRef(null);
  const titleRef = useRef(null);
  const circleRef = useRef(null);


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
    tl.fromTo(
      circleRef.current,
      { opacity: 0 },
      { duration: 1, opacity: 1, ease: "power3" }
    );
  }, []);

  return (
    <>
      {/* -------- CONTENT -------- */}
      <main>
        <div className='home-bg' ref={backgroundRef}></div>
        <h1 className='title' ref={titleRef}>L'Occitane<br /> vous invite à Manosque</h1>
        <img ref={circleRef} className='yellow-img' src="/images/yellow_circle.png" alt="yellow_circle" />
      </main>
      {/* -------- HEADER -------- */}
      <Header />

    </>

  )
}

export default HomePage