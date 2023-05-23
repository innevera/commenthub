import Progressbar from "../Progressbar";
import localization from "../../localization/localization";
import "../../assets/css/ratingbar.css"

const Ratingbar = ({ rate, count, commentCount, percent }) => {
    const { formatString: t, starsCount } = localization;
    return (
        <div className="ch-rating-bar">
            <span>{t(starsCount, rate)}</span>
            <Progressbar percent={percent} />
            <span>{count}</span>
        </div>
    )
}

export default Ratingbar;