import { Col, Row, Stack } from "react-bootstrap";
import './Banner.css';

import SearchBox from "../SearchBox/SearchBox";
import FundServices from "../FundServices/FundServices";

import Headline from "../Headline/Headline";
import ContentFragment from "../ContentFragment/ContentFragment";

const Banner = () => {
    return (
        <Row className="banner pt-5">
            <Col lg={11} sm={11} xs={11} className="mx-auto py-5">
                <Stack gap={3}>
                    <ContentFragment fragmentName="banner-headline" path="POC/bannerHeadline" queryModelName="bannerHeadlineCardByPath" component={Headline} />
                    <SearchBox />
                    <FundServices />
                </Stack>
            </Col>
        </Row>
        
    )
}

export default Banner;