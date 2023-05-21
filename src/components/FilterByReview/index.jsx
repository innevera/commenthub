import { useContext } from "react";
import cx from "classnames/bind"
// context
import { AppContext } from "../../context/AppContext";
// component
import ScrollView from "../ScrollView";
import Ratebox from "../Ratebox";

const FilterByReview = () => {
    const { data } = useContext(AppContext);

    if (!data) return;

    return (
        <div className={cx("filter-by-review")} style={{ maxWidth: "300px" }}>
            <ScrollView title={"Rating'e göre filtrele"}>
                {data.contentSummary.ratingCounts.map(({ rate, commentCount }, index) => (
                    <Ratebox key={index} rate={rate} commentCount={commentCount} />
                ))}
            </ScrollView>
        </div>
    )
}

export default FilterByReview;