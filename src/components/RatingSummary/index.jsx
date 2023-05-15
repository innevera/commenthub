import classNames from 'classnames/bind';
import '../../assets/css/rating.css'

const RatingSummary = ({ qty, width, ratio }) => {
    const className = classNames('rating-stars');
    const styles = {
        '--star-qty': qty,
        '--star-width': width,
        '--star-ratio': ratio,
    };

    return (
        <div className="rating-stars-wrapper" style={{ '--star-width': width }}>
            <div className={className} style={styles}></div>
        </div>
    );
};

export default RatingSummary;