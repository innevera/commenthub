import T from 'prop-types';
import cx from 'classnames/bind';
// component
import Rating from '../Rating';
// style
import "../../assets/css/rateBox.css"

const Ratebox = ({ rate, count, commentCount }) => {
    return (
        <button className={cx("review-ratebox")}>
            <Rating qty={rate} />
            <span>({commentCount})</span>
        </button>
    )
}

Ratebox.prototype = {
    rate: T.number,
    count: T.number,
    commentCount: T.number
};

export default Ratebox;