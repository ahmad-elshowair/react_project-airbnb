import airbnb_image from '../images/airbnb.png'

export const Navbar = ()=>{
    return (
        <header className='header'>
            <nav className='nav'>
                <div className='nav__logo'>
                    <img src={airbnb_image} alt='airbnb logo' className='nav__logo-image'/>
                </div>
            </nav>
        </header>

    );
};