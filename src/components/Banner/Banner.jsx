import { Card, CardBody, Col, Container, Row, Stack } from "react-bootstrap";
import '../../App.css';
import './Banner.css';
import UnderLine from '../UnderLine';

import SearchBox from "../SearchBox/SearchBox";
import FundServices from "../FundServices/FundServices";
import withTextAemAttributes from "../../hoc/withTextAemAttributes";

const Banner = () => {
    return (
        <Row className="banner py-5">
            <Col lg={11} sm={11} xs={11} className="mx-auto py-5">
                <Stack gap={3} className="">
                    <div className="eyebrow" data-aue-type="text" data-aue-prop="jcr:title">
                        Funds at Blackrock!
                        <UnderLine />
                    </div>
                    <div className="headline col-xl-10 col-sm-11 col-xs-11 fs-xs-1">
                        Funds that match up with investing goals and preferences
                    </div>
                    <p className="intro col-xl-6 col-lg-6 fw-medium">
                        Each investor has a different story, and we are steadfast partners to our clients in the UK because we listen to every one of them. Our full range of funds is one way we're helping more investors build solid financial futures.
                    </p>
                    <SearchBox />
                    <FundServices />
                </Stack>
                
            </Col>
        </Row>
        
    )
}

export default Banner;