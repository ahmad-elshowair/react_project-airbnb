import image from '../images/Group 77.png'


export const Hero = ()=>{
    return(
        <section className="hero">
            <div className="hero__image">
                <img src={image} alt="pic"/>
            </div>
            <div className="hero__description">
                <h1 className="hero__description-heading">
                    Online Experiences
                </h1>
                <p className="hero__description-text">
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </section>
    );
};