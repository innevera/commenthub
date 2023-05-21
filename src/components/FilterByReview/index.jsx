import { useContext } from "react";
import cx from "classnames/bind"
// context
import { AppContext } from "../../context/AppContext";
// component
import Ratebox from "../Ratebox";


const FilterByReview = () => {
    const { data } = useContext(AppContext);

    if (!data) return;

    return (
        <div className={cx("filter-by-review")}>
            {data.contentSummary.ratingCounts.map((rating, index) => (
                <Ratebox key={index} rate={rating.rate} commentCount={rating.commentCount} />
            ))}
        </div>
    )
}

export default FilterByReview;