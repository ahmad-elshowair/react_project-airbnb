import star from '../images/star.png';

export const Card = (props) =>{
    let badge_text; 
    if(props.openSpots === 0){
        badge_text = "sold out"
    }else if(props.location === "Online"){
        badge_text = "online";
    }
    return (
        <div className='card'>
            <div className="card__image">
                {badge_text && <span className='card__btn'>{badge_text}</span>}
                <img src={`../images/${props.coverImg}`} alt="katie zaferes" className="image"/>
            </div>
            <div className="card__rate">
                <img src={star} alt="star" className="card__rate-image m_l_4"/>
                <span className='m_l_4'>{props.stats.rating}</span>
                <span  className=' m_l_4 gray'>({props.stats.reviewCount}) • </span>
                <span className='gray'>{props.location}</span>
            </div>
            <p className="card__text">{props.title}</p>
            <p className="price"><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    );
};