// context
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Review from "../Review";

const ReviewList = () => {
    const { data } = useContext(AppContext);

    if (!data) return;

    return (
        <>
            {data.result.productReviews.content.map((review, index) => (
                <Review key={index} review={review} />
            ))}
        </>
    )
}

export default ReviewList;