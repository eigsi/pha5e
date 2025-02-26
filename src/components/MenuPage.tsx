import '/src/assets/css/MenuPage.scss';
import { Draggable } from 'gsap/Draggable';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

gsap.registerPlugin(Draggable);

interface MenuPage {
    menuRef: React.RefObject<HTMLDivElement | null>;
}

function MenuPage({ menuRef }: MenuPage) {
    const sliderRef = useRef(null);

    useEffect(() => {
        // DRAGGABLE SLIDER FOR THE MENU
        Draggable.create(sliderRef.current, {
            type: "x",
            edgeResistance: 0,
            bounds: { minX: -(window.innerWidth * 1.1), maxX: 0 },
            inertia: true,
        });
    }, []);

    return (
        <section className='menu' ref={menuRef}>
            <div className='slider-wrapper'>
                <div className='slider' ref={sliderRef}>
                    <div className='slide slide1'>
                        <img src="/images/btn1.jpeg" alt="" />
                        <h2>Le jardin</h2>
                    </div>
                    <div className='slide slide2'>
                        <img src="/images/btn2.jpeg" alt="" />
                        <h2>L'usine</h2>
                    </div>
                    <div className='slide slide3'>
                        <img src="/images/btn3.jpeg" alt="" />
                        <h2>La boutique musée</h2>
                    </div>
                </div>
            </div>
            <div className='tuto'>
                <div className='forms'>
                    <div className='form form1'></div>
                    <div className='form form2'></div>
                    <div className='form form3'></div>
                    <div className='form form4'></div>
                </div>
                <h3>Glissez avec la souris pour naviguer</h3>
            </div>
        </section>

    )
}

export default MenuPage
