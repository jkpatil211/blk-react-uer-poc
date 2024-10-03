import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import './FundServices.css';

const Fund = ({ name, subHeadline, description, buttonText }) => {
    return (
        <div className="tile col-lg-6 col-11">
            <div className="content-wrapper">
                <div className="tile-content ">
                    <div className="headline">{name}</div>
                    <div className="sub-headline">{subHeadline}</div>
                    <div className="description">
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
                                <span>{buttonText}</span>
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