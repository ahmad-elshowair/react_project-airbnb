import katie from '../images/katie-zaferes.png';
import star from '../images/star.png';
export const Card = () =>{
    return (
        <div className='card'>
            <div className="card__image">
                <span className='card__btn'>sold out</span>
                <img src={katie} alt="katie zaferes"className="image"/>
            </div>
            <div className="card__rate">
                <img src={star} alt="star" className="card__rate-image m_l_4"/>
                <span className='m_l_4'>5.0</span>
                <span  className=' m_l_4 gray'>(6) • </span>
                <span className='gray'>USA</span>
            </div>
            <p className="card__text">Life lessons with Katie Zaferes</p>
            <p className="price"><span className='bold'>From $136</span> / person</p>
        </div>
    );
};