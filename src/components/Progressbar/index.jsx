import cx from 'classnames';
// styles
import "../../assets/css/progressbar.css";

const Progressbar = ({ percent }) => {
    const style = {
        '--progress-percent': `${percent}%`
    };

    return (
        <div className={cx("ch-progress-bar")}>
            <span className="ch-progress-bar-value" style={style}></span>
        </div>
    )
}

export default Progressbar;