import React, {Component} from "react";
import { render } from "react-dom";
import { Row, Col, Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const homepage  = () => {
  render() 
    return (
      <div>
		<Container>
          <Row>
            <Col>
              <Box>.col </Box>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <Box> .col-4 </Box>
            </Col>

            <Col xs="4">
              <Box> .col-4 </Box>
            </Col>
          </Row>

          <Row>
            <Col xs="6">
              <Box> .col-6 </Box>
            </Col>

            <Col xs="6">
              <Box> .col-6 </Box>
            </Col>
            <Col xs="6">
              <Box>.col-6 </Box>
            </Col>
          </Row>
          <Row>
            <Col>
              <Box>.col </Box>
            </Col>
            <Col>
              <Box>.col </Box>
            </Col>
            <Col>
              <Box> .col </Box>
            </Col>
            <Col>
              <Box>.col </Box>
            </Col>
          </Row>
          <Row>
            <Col xs="3">
              <Box> .col-3 </Box>
            </Col>
            <Col xs="auto">
              <Box>.col-auto is used for dynamic content</Box>
            </Col>
            <Col xs="3">
              <Box> .col-3 </Box>
            </Col>
          </Row>
          <Row>
            <Col sm={{ size: 4, order: 4, offset: 2 }}>
              <Box> .col-sm-4 .col-sm-order-4 .col-sm-offset-4 </Box>{" "}
            </Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Box> .col-sm-10 .col-md-4 .col-md-offset-5 </Box>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }


export default App;
const Box = props => <div className="box">{props.children} </div>;
render(<App />, document.getElementById("root"));