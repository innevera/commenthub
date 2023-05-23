import Progressbar from "../Progressbar";
import "../../assets/css/ratingbar.css"

const Ratingbar = ({ rate, count, commentCount, percent }) => {
    return (
        <div className="ch-rating-bar">
            <span>{rate} star</span>
            <Progressbar percent={percent} />
            <span>{percent}%</span>
        </div>
    )
}

export default Ratingbar;