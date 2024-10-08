import { mapJsonRichText } from "../../services/renderRichText";
import { useBannerHeadline } from "../../services/usePersistedQueries";
import Loading from "../Loading";
import UnderLine from "../UnderLine";
import './Headline.css'

const Headline = () => {
    const { data, errorMessage } = useBannerHeadline();

    if(errorMessage) return;
    
    if(!data) return <Loading />;

    console.log('data in headline-->', data);
    return (
        <div
            data-aue-resource={`urn:aemconnection:${data?._path}/jcr:content/data/master`}
            data-aue-type="reference"
        >
            <div>
                <h2 className="eyebrow" data-aue-type="text" data-aue-prop="headline" data-aue-label="headline">{data?.headline}</h2>
                <UnderLine />
            </div>
            <div
                className="headline col-xl-10 col-sm-11 col-xs-11 fs-xs-1 my-5"
                data-aue-type="text"
                data-aue-prop="title"
                data-aue-label="title"
            >
                {data?.title}
            </div>
            <div
                className="intro col-xl-6 col-lg-6 fw-medium"
                data-aue-type="richtext"
                data-aue-prop="description"
                data-aue-label="description"
                dangerouslySetInnerHTML={{__html: data?.description?.html}}
            >
                {/* {mapJsonRichText(data?.description?.json)} */}
            </div>
        </div>
    );
};

export default Headline;