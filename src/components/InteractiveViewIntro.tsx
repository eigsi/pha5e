import '/src/assets/css/InteractiveViewIntro.scss';
import { LiaAngleRightSolid } from "react-icons/lia";

interface InteractiveViewIntroProps {
    onStart: () => void;
    overlayIntroRef: React.RefObject<HTMLDivElement | null>;
    introContentRef:  React.RefObject<HTMLDivElement | null>;
}

function InteractiveViewIntro({ onStart, overlayIntroRef, introContentRef  }: InteractiveViewIntroProps) {
    return (
        <section className='introduction'>
            {/* ----------- BLUE OVERLAY ----------- */}
            <div className='overlay-intro' ref={overlayIntroRef}></div>

             {/* ----------- CONTENT ----------- */}
            <section className='intro-content' ref={introContentRef}>
                <h1 className='intro-title'>Glissez avec la souris pour naviguer en 360°</h1>
                <button className='start-btn' onClick={onStart}>COMPRIS! <LiaAngleRightSolid /></button>
            </section>
        </section>

    )
}

export default InteractiveViewIntro
