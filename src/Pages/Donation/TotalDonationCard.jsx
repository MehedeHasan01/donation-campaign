import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TotalDonationCard = ({donation}) => {
    const {id, picture, price, title, category, colors } = donation || {};
    const cardStyle = {backgroundColor: colors?.card_bg,};
    const categoryStyle ={backgroundColor:colors?.category_bg, color: colors?.text_btn_bg};
    const btnStyle ={backgroundColor:colors?.text_btn_bg};
    const titleStyle = {color: colors?.text_btn_bg}
    return (
        <div>
            <div className='flex rounded-md' style={cardStyle}>
                <div><img src={picture} alt="img" className='w-[13.5rem] h-full rounded-l-md' /></div>
                <div className='p-6'>
                    <div  className='w-fit px-2 py-1 text-sm font-normal rounded' style={categoryStyle}>
                    <h1>{category}</h1>
                    </div>
                    <h1 className='text-xl font-semibold mt-2'>{title}</h1>
                    <p style={titleStyle} className='font-semibold text-base mt-[2px]'>{price}</p>
                    <Link to={`/DonationDetails/${id}`}>
                    <button className='text-white rounded px-4 py-2 text-base font-semibold mt-2' style={btnStyle}>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

TotalDonationCard.propTypes = {
    donation: PropTypes.object
};

export default TotalDonationCard;