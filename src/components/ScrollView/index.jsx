import cx from 'classnames';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
// styles
import 'react-horizontal-scrolling-menu/dist/styles.css';
import '../../assets/css/scrollingMenu.css';
// hooks
import useDrag from "../../hooks/useDrag";
// components
import ScrollViewControls from "../ScrollViewControls";

const ScrollView = ({ children, title }, props) => {
    const { dragStart, dragStop, dragMove, dragging } = useDrag();

    const handleDrag =
        ({ scrollContainer }) =>
            (ev) =>
                dragMove(ev, (posDiff) => {
                    if (scrollContainer.current) {
                        scrollContainer.current.scrollLeft += posDiff;
                    }
                });

    return (
        <div className={cx('scroll-view-container')} onMouseLeave={dragStop} {...props}>
            <ScrollMenu
                Header={<ScrollViewControls title={title} />}
                onMouseDown={() => dragStart}
                onMouseUp={() => dragStop}
                onMouseMove={handleDrag}
            >
                {children}
            </ScrollMenu>
        </div>
    )
};

export default ScrollView;