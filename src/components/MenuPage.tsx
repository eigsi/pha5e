import '/src/assets/css/MenuPage.scss';

interface MenuPage {
    menuRef: React.RefObject<HTMLDivElement | null>;
}

function MenuPage({ menuRef  }: MenuPage) {
    return (
        <section className='menu' ref={menuRef}>
        <div className='images'>
          <div className='image image1'>
            <h2>Le jardin</h2>
          </div>
          <div className='image image2'>
            <h2>L'usine</h2>
          </div>
          <div className='image image3'>
            <h2>La boutique musée</h2>
          </div>
        </div>
      </section>

    )
}

export default MenuPage
