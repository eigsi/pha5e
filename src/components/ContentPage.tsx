import Header from './Header';
import '/src/assets/css/ContentPage.scss';
import { RxCross1 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Marquee from "react-fast-marquee";

function ContentPage() {
    const navigate = useNavigate();
    const bgTopRef = useRef(null);
    const contentRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.1 });
        tl.fromTo(
            bgTopRef.current,
            { y: -100 },
            { duration: 1.5, y: 0, ease: "power3" }
        );
        tl.fromTo(
            contentRef.current,
            { y: 100 },
            { duration: 1.5, y: 0, ease: "power3" },
            "<"
        );
        tl.fromTo(
            overlayRef.current,
            { opacity: 1 },
            { duration: 1.5, opacity: 0, ease: "power3" },
            "<"
        );
    }, []);


    return (
        <>
            {/* ----------- OVERLAY ----------- */}
            <div className='overlay' ref={overlayRef}></div>
            {/* ----------- HEADER ----------- */}
            <Header />
            {/* ----------- CONTENT ----------- */}
            <main>
                <section className='background'>
                    <div ref={bgTopRef} className='bg-top'>
                        <img className='bg-top-img' src="/images/menu_bg1.jpeg" alt="background image" />
                    </div>
                </section>
                <section ref={contentRef} className='content' >
                    <img className='content-top' src="/images/menu1.png" alt="Lavande" />
                    <RxCross1 className={`close-icon`} onClick={() => navigate('/')} />
                    <div className='content-bot'>
                        <Marquee className='titre' gradient={false} speed={100}>
                            <h1>La lavande&nbsp;&nbsp;&nbsp;</h1>
                            <h1>La lavande&nbsp;&nbsp;&nbsp;</h1>
                            <h1>La lavande&nbsp;&nbsp;&nbsp;</h1>
                        </Marquee>
                        <div className='content-text'>
                            <img src="/images/yellow_circle.png" alt="yellow_circle" />
                            <h2>Les propriétés de la lavande</h2>
                            <h3>Nous utilisons la lavande fine particulièrement pour ses propriétés apaisantes et son parfum délicat. <strong> Cet ingrédient est au cœur de notre gamme « Soin Corps »</strong>, par exemple dans la composition de notre eau de Cologne et bain moussant. Faisant partie d’un complexe de différentes huiles essentielles, la lavande se trouve également dans certains de nos produits d’aromachologie.</h3>
                        </div>
                    </div>
                </section>
            </main>
        </>

    );
}

export default ContentPage;