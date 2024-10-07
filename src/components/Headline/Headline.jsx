import UnderLine from "../UnderLine";
import './Headline.css'

const Headline = () => {
    return (
        <div
            data-aue-resource="urn:aemconnection:/content/dam/projects/poc/hero-card/jcr:content/data/master"
            data-aue-type="reference"
        >
            <div>
                <h2 className="eyebrow" data-aue-type="text" data-aue-prop="title" data-aue-label="title">Funds at Blackrock!</h2>
                <UnderLine />
            </div>
            <div
                className="headline col-xl-10 col-sm-11 col-xs-11 fs-xs-1 my-5"
                data-aue-type="text"
                data-aue-prop="heading"
                data-aue-label="heading"
            >
                Funds that match up with investing goals and preferences
            </div>
            <p className="intro col-xl-6 col-lg-6 fw-medium">
                Each investor has a different story, and we are steadfast partners to our clients in the UK because we listen to every one of them. Our full range of funds is one way we're helping more investors build solid financial futures.
            </p>
        </div>
    );
};

export default Headline;