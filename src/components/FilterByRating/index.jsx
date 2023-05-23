import { useContext } from "react";
import cx from "classnames/bind"
// context
import { AppContext } from "../../context/AppContext";
// component
import Ratingbar from "../Ratingbar";

const FilterByRating = () => {
    const { data } = useContext(AppContext);

    if (!data) return;

    return (
        <div className={cx("filter-by-rating")}>
            {data.contentSummary.ratingCounts.map(({ rate, count, commentCount }, index) => {
                const percent = ((100 * count) / data.contentSummary.totalRatingCount).toFixed(1);
                return <Ratingbar key={index} rate={rate} count={count} percent={percent} />
            })}
        </div>
    )
}

export default FilterByRating;