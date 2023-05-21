import RatingSummary from '../RatingSummary'
import { ReviewModel } from '../../models/reviewModel';

/**
 * @param {{review:ReviewModel}} props
 */
const Review = ({ review }) => {
    const { comment, commentDate, userFullName, positiveFlagCount, rate } = review;

    return (
        <div className="comment">
            <div className="comment-header">
                <div className="comment-rating">
                    <RatingSummary qty={rate} />
                </div>
                <div className="comment-info">
                    <div className="comment-info-item">{userFullName}</div>
                    <div className="comment-info-item">{commentDate}</div>
                </div>
            </div>
            <div className="comment-text">
                <p>{comment}</p>
            </div>
            <div className="comment-photos"></div>
            <div className="comment-bottom">
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