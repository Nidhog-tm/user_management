import React, { Component } from "react";
import { withRouter } from 'react-router';
import { Button, Row } from "reactstrap";

class Content extends Component {
  handleToAboutPage = () => {
    this.props.history.push('/list')
  }
  render() {
    return (
      <div className="next-steps my-5">
        <Row className="d-flex justify-content-between">
          <Button
            id="qsUserListBtn"
            color="info"
            size="lg"
            outline
            block
            className="btn-margin"
            onClick={this.handleToAboutPage}
          >
            User List
          </Button>
        </Row>
      </div>
    );
  }
}

export default withRouter(Content);
