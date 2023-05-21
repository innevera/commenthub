import { useContext } from "react";
// context
import { AppContext } from "../../context/AppContext";
// classnames
import cx from 'classnames/bind';
// component
import Rating from "../Rating";
// style
import '../../assets/css/reviewSummary.css';

const ReviewSummary = () => {
    const { data } = useContext(AppContext);

    if (!data) return;

    return (
        <div className={cx("review-summary")}>

            <div className={cx("review-ratings")}>
                <div className="review-ratings-average">
                    {data.contentSummary.averageRating.toFixed(1)}
                </div>
                <Rating qty={data.contentSummary.averageRating} width="30px" />
            </div>

            <div className={cx("review-total-comments")}>
                {data.contentSummary.totalCommentCount} Yorum
            </div>

            <div className={cx("review-total-reviews")}>
                {data.contentSummary.totalRatingCount} Değerlendirme
            </div>

        </div>
    )
};

export default ReviewSummary;