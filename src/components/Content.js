import React, { Component } from "react";
import { withRouter } from 'react-router';
import { Button, Row } from "reactstrap";

class Content extends Component {
  handleToListPage = () => {
    this.props.history.push('/list')
  }
  handleToAddPage = () => {
    this.props.history.push('/add')
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
            onClick={this.handleToListPage}
          >
            User List
          </Button>
          <Button
            id="qsUserAddBtn"
            color="info"
            size="lg"
            outline
            block
            className="btn-margin"
            onClick={this.handleToAddPage}
          >
            Add User
          </Button>
        </Row>
      </div>
    );
  }
}

export default withRouter(Content);
