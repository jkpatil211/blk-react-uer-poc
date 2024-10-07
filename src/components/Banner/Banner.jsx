import { Col, Row, Stack } from "react-bootstrap";
import './Banner.css';

import SearchBox from "../SearchBox/SearchBox";
import FundServices from "../FundServices/FundServices";
// import withTextAemAttributes from "../../hoc/withTextAemAttributes";
import Headline from "../Headline/Headline";

const Banner = () => {
    return (
        <Row className="banner py-5">
            <Col lg={11} sm={11} xs={11} className="mx-auto py-5">
                <Stack gap={3}>
                    <Headline />
                    <SearchBox />
                    <FundServices />
                </Stack>
                
            </Col>
        </Row>
        
    )
}

export default Banner;