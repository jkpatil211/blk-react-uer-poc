import { mapJsonRichText } from "../../services/renderRichText";
import { useBannerHeadline } from "../../services/usePersistedQueries";
import Loading from "../Loading";
import UnderLine from "../UnderLine";
import './Headline.css'

const Headline = ({ headline = '', title = '', description = {} }) => {

    return (
        <>
            <div>
                <h2 className="eyebrow" data-aue-type="text" data-aue-prop="headline" data-aue-label="headline">{headline}</h2>
                <UnderLine />
            </div>
            <div
                className="headline col-xl-10 col-sm-11 col-xs-11 fs-xs-1 my-5"
                data-aue-type="text"
                data-aue-prop="title"
                data-aue-label="title"
            >
                {title}
            </div>
            <div
                className="intro col-xl-7 col-lg-7 fw-medium"
                data-aue-type="richtext"
                data-aue-prop="description"
                data-aue-label="description"
                dangerouslySetInnerHTML={{__html: description?.html}}
            >
                {/* {mapJsonRichText(data?.description?.json)} */}
            </div>
        </>
    );
};

export default Headline;