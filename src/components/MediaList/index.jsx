import { useContext } from "react";
import cx from "classnames/bind"
// context
import { AppContext } from "../../context/AppContext";
// components
import ScrollView from "../ScrollView";

const MediaList = () => {
    const { data } = useContext(AppContext);

    if (!data) return;

    return (
        <div className={cx("review-media-files")} style={{ maxWidth: "300px" }}>
            <ScrollView title={"Fotoğraflı değerlendirmeler"}>
                {data.imageSummary.map(({ id, mediaFile }) => (
                    <div key={id} tabIndex={0}>
                        <img src={mediaFile.thumbnailUrl} />
                    </div>
                ))}
            </ScrollView>
        </div>
    )
};

export default MediaList;