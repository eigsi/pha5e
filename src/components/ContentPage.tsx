import Header from './Header';
import '/src/assets/css/ContentPage.scss';
import { RxCross1 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

function ContentPage() {
    const navigate = useNavigate();
    
    return (
        <>
            {/* -------- HEADER -------- */}
            <Header />
            <main>
                <section className='background'>
                    <div className='bg-top'>
                        <img className='bg-top-img' src="/images/menu_bg1.jpeg" alt="background image" />
                    </div>
                </section>
                <section className='content'>
                    <img className='content-top' src="/images/menu1.png" alt="Lavande" />
                    <RxCross1 className={`close-icon`} onClick={() => navigate('/')}/>
                    <div className='content-bot'>
                        <h1>La lavande</h1>
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