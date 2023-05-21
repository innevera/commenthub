// classnames
import cx from 'classnames/bind';
// style
import '../../assets/css/rating.css'

const Rating = ({ qty, width, ratio }) => {
    const styles = {
        '--star-qty': qty,
        '--star-width': width,
        '--star-ratio': ratio,
    };

    return (
        <div className={cx('rating-stars-wrapper')} style={{ '--star-width': width }}>
            <div className={cx('rating-stars')} style={styles}></div>
        </div>
    );
};

export default Rating;