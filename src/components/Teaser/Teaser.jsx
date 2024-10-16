import { Col, Image, Row, Stack } from "react-bootstrap";
import '../Teaser/Teaser.css';

const Teaser = (props) => {
    return (
        <Row className="teaser">
            <Col lg={11} xl={11} sm={11} className="mx-auto py-5 px-2">
                <Row>
                    {/* Description */}
                    <Col className="pe-5">
                        <Stack gap={3}>
                            {
                                ['descriptionOne', 'descriptionTwo', 'descriptionThree'].map(aueProp => (
                                    <div
                                        key={aueProp}
                                        data-aue-type="richtext"
                                        data-aue-prop={aueProp}
                                        data-aue-label={aueProp}
                                        dangerouslySetInnerHTML={{__html: props?.[aueProp]?.html}}
                                    ></div>
                                ))
                            }
                        </Stack>
                    </Col>
                    {/* Image */}
                    <Col lg={5} xl={5} sm={11}>
                        <Image
                            src={`${process.env.REACT_APP_PUBLISH_HOST}${props?.image?._path}`}
                            data-aue-prop="image"
                            data-aue-type="media"
                            fluid
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Teaser;