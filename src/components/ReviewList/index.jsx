// context
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Review from "../Review";

const ReviewList = () => {
    const { data } = useContext(AppContext);

    if (!data) return;

    return (
        <div className="review-list">
            {data.productReviews.content.map((review, index) => (
                <Review key={index} review={review} />
            ))}
        </div>
    )
}

export default ReviewList;