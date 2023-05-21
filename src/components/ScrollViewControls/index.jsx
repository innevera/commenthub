import { useContext } from 'react';
import T from 'prop-types';
import cx from 'classnames';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

const ScrollViewControls = ({ title }) => {
    return (
        <div className={cx("scroll-view-controls")}>
            {title && <span>{title}</span>}
            <div className="scroll-view-arrows">
                <LeftArrow />
                <RightArrow />
            </div>
        </div>
    )
};

const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

    return (
        <div disabled={isFirstItemVisible} className={cx({ 'ch-hide': isFirstItemVisible })} onClick={() => scrollPrev()}>
            {"<"}
        </div>
    );
}

const RightArrow = () => {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

    return (
        <div disabled={isLastItemVisible} className={cx({ 'ch-hide': isLastItemVisible })} onClick={() => scrollNext()}>
            {">"}
        </div>
    );
}

ScrollViewControls.prototype = {
    title: T.string
}

export default ScrollViewControls;