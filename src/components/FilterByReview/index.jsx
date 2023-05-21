import { useContext, useState } from "react";
import cx from "classnames/bind"
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import '../../assets/css/scrollingMenu.css';
// hooks
import useDrag from "../../hooks/useDrag";
// context
import { AppContext } from "../../context/AppContext";
// component
import Ratebox from "../Ratebox";


const FilterByReview = () => {
    const { data } = useContext(AppContext);
    const [selected, setSelected] = useState([]);
    const { dragStart, dragStop, dragMove, dragging } = useDrag();

    const isItemSelected = (id) => !!selected.find((el) => el === id);

    const handleClick =
        (id) =>
            ({ getItemById, scrollToItem }) => {
                if (dragging) {
                    return false;
                }

                const itemSelected = isItemSelected(id);

                setSelected((currentSelected) =>
                    itemSelected
                        ? currentSelected.filter((el) => el !== id)
                        : currentSelected.concat(id)
                );
            };

    const handleDrag =
        ({ scrollContainer }) =>
            (ev) =>
                dragMove(ev, (posDiff) => {
                    if (scrollContainer.current) {
                        scrollContainer.current.scrollLeft += posDiff;
                    }
                });

    if (!data) return;

    return (
        <div className={cx("filter-by-review")} style={{ maxWidth: "300px" }} onMouseLeave={dragStop}>
            <ScrollMenu
                LeftArrow={LeftArrow}
                RightArrow={RightArrow}
                onMouseDown={() => dragStart}
                onMouseUp={() => dragStop}
                onMouseMove={handleDrag}
            >
                {data.contentSummary.ratingCounts.map((rating) => (
                    <Card
                        itemId={rating.rate} // NOTE: itemId is required for track items
                        commentCount={rating.commentCount}
                        rate={rating.rate}
                        key={rating.rate}
                        selected={isItemSelected(rating.rate)}
                        onClick={handleClick(rating.rate)}
                    />
                ))}
            </ScrollMenu>
        </div>
    )
}

function Card({ onClick, itemId, commentCount, rate }) {
    const visibility = useContext(VisibilityContext);
    return (
        <div onClick={() => onClick(visibility)} tabIndex={0}>
            <Ratebox key={itemId} rate={rate} commentCount={commentCount} />
        </div>
    );
}

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

    return (
        <div disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
            {"<"}
        </div>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

    return (
        <div disabled={isLastItemVisible} onClick={() => scrollNext()}>
            {">"}
        </div>
    );
}

export default FilterByReview;