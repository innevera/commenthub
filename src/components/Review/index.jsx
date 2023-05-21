import Rating from '../Rating'
import { ReviewModel } from '../../models/reviewModel';

/**
 * @param {{review:ReviewModel}} props
 */
const Review = ({ review }) => {
    const { comment, commentDate, userFullName, positiveFlagCount, rate } = review;

    return (
        <div className="review">
            <div className="review-header">
                <div className="review-rating">
                    <Rating qty={rate} />
                </div>
                <div className="review-info">
                    <div className="review-info-item">{userFullName}</div>
                    <div className="review-info-item">{commentDate}</div>
                </div>
            </div>
            <div className="review-text">
                <p>{comment}</p>
            </div>
            <div className="review-photos"></div>
            <div className="review-bottom">
                <div className="seller-action">
                    <div className="rnr-com-like">
                        <span>({positiveFlagCount})</span>
                    </div>
                    <div className="report"><i className="i-warning-square"></i></div>
                </div>
            </div>
        </div>
    )
}

Review.propTypes = {
    review: ReviewModel
};

export default Review;