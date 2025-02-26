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
        // Créez le draggable sur le conteneur des slides
        Draggable.create(sliderRef.current, {
          type: "x",
          edgeResistance: 0.65,
          bounds: { minX: -((3 - 1) * window.innerWidth), maxX: 0 },
          throwProps: true,
          snap: (endValue) => {
            // Chaque slide occupe window.innerWidth
            return Math.round(endValue / window.innerWidth) * window.innerWidth;
          }
        });
      }, []);

    return (
        <section className='menu' ref={menuRef}>
            <div className='slider-wrapper'>
                <div className='slider' ref={sliderRef}>
                    <div className='slide slide1'>
                        <h2>Le jardin</h2>
                    </div>
                    <div className='slide slide2'>
                        <h2>L'usine</h2>
                    </div>
                    <div className='slide slide3'>
                        <h2>La boutique musée</h2>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default MenuPage
