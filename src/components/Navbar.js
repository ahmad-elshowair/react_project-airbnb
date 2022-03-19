import airbnb_image from '../images/airbnb-logo.png'

export const Navbar = ()=>{
    return (
        <nav className='nav'>
            <div className='nav__logo'>
                <img src={airbnb_image} alt='airbnb logo' className='nav__logo-image'/>
            </div>
        </nav>
    );
};