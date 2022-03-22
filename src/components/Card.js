import star from '../images/star.png';

export const Card = (props) =>{
    console.log(props)
    return (
        <div className='card'>
            <div className="card__image">
                <span className='card__btn'>sold out</span>
                <img src={props.image} alt="katie zaferes" className="image"/>
            </div>
            <div className="card__rate">
                <img src={star} alt="star" className="card__rate-image m_l_4"/>
                <span className='m_l_4'>{props.rating}</span>
                <span  className=' m_l_4 gray'>({props.reviewCount}) • </span>
                <span className='gray'>{props.country}</span>
            </div>
            <p className="card__text">{props.title}</p>
            <p className="price"><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    );
};