import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import './FundServices.css';

const Fund = ({ headline, subHeadline, description, urlLabel, _path }) => {
    return (
        <div
            className="tile col-lg-6 col-11"
            data-aue-type="reference"
            data-aue-resource={`urn:aemconnection:${_path}/jcr:content/data/master`}
        >
            <div className="content-wrapper">
                <div className="tile-content ">
                    <div
                        className="headline"
                        data-aue-type="text"
                        data-aue-prop="headline"
                        data-aue-label="headline"
                    >
                        {headline}
                    </div>
                    <div
                        className="sub-headline"
                        data-aue-type="text"
                        data-aue-prop="subHeadline"
                        data-aue-label="subHeadline"
                    >
                        {subHeadline}
                    </div>
                    <div
                        className="description"
                        data-aue-type="text"
                        data-aue-prop="description"
                        data-aue-label="description"
                    >
                        <p>{description}&nbsp;</p>
                    </div>
                </div>
                <div className="cta">
                    <div className="cta-container-box">
                        <a
                            href="#"
                            target="_self"
                            className="cta button primary core"
                        >
                            <span className="label">
                                <span className="icon" aria-hidden="true">
                                    <FontAwesomeIcon icon={faAngleRight} style={{ fontSize: '16px' }} />
                                </span>
                                <span
                                    data-aue-type="text"
                                    data-aue-prop="urlLabel"
                                    data-aue-label="urlLabel"
                                >
                                    {urlLabel}
                                </span>
                            </span>
                        </a>
                        {/* <span className="cta-container-animation"></span> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fund;