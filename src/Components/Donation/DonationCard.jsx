import PropTypes from 'prop-types';
// import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const DonationCard = ({donation}) => {
    const {id, picture, title, category, colors } = donation || {};
    const cardStyle = {backgroundColor: colors.card_bg,};
    const categoryStyle ={backgroundColor:colors.category_bg, color: colors.text_btn_bg};
    const titleStyle = {color: colors.text_btn_bg}
    return (
        <div>
            <Link to={`/DonationDetails/${id}`}>
            <div style={cardStyle} className='rounded-lg w-fit' >
                <div><img src={picture} alt="" /></div>
                <div className='pl-4 py-4'>
                    <div className='py-1 px-2 text-sm font-mediumbg-green-600 w-fit rounded' style={categoryStyle}>{category}</div>
                    <h2 className='font-semibold text-xl' style={titleStyle}>{title}</h2>
                </div>
            </div>
            </Link>
        </div>
    );
};

DonationCard.propTypes = {
    donation: PropTypes.object
};

export default DonationCard;