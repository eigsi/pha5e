import '/src/assets/css/InteractiveViewIntro.scss';
import { LiaAngleRightSolid } from "react-icons/lia";

function InteractiveViewIntro() {
    return (
        <section className='introduction'>
            {/* ----------- BLUE OVERLAY ----------- */}
            <div className='overlay-intro'></div>

             {/* ----------- CONTENT ----------- */}
            <section className='intro-content'>
                <h1 className='intro-title'>Glissez avec la souris pour naviguer en 360°</h1>
                <button className='start-btn'>COMPRIS! <LiaAngleRightSolid /></button>
            </section>
        </section>

    )
}

export default InteractiveViewIntro
