import React, { Component } from "react";

import { Button, Row, Col } from "reactstrap";

class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5">
        <h2 className="my-5 text-center">What can I do next?</h2>
        <Row className="d-flex justify-content-between">
          <Button
            id="qsUserListBtn"
            color="primary"
            size="lg"
            block
            className="btn-margin"
            onClick={event =>  window.location.href='/list'}
          >
            User List
          </Button>
        </Row>
      </div>
    );
  }
}

export default Content;
