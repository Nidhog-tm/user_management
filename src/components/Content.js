import React, { Component } from "react";
import { withRouter } from 'react-router';
import { Button, Row } from "reactstrap";
import { motion } from "framer-motion";

class Content extends Component {
  handleToListPage = () => {
    this.props.history.push('/list')
  }
  handleToAddPage = () => {
    this.props.history.push('/add')
  }
  handleToSliderPage = () => {
    this.props.history.push('/slider')
  }
  handleToUserSliderPage = () => {
    this.props.history.push('/userslider')
  }
  render() {
    return (
      <div className="next-steps my-5">
        <motion.div
          animate={{
            x: 0,
            opacity: 1
          }}
          initial={{
            x: 100,
            opacity: 0
          }}
          exit={{
            x: -100,
            opacity: 0
          }}
          transition={{
            duration: 0.2
          }}
        >
          <Row className="d-flex justify-content-between">
            <Button
              id="qsUserListBtn"
              color="secondary"
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
              color="secondary"
              size="lg"
              outline
              block
              className="btn-margin"
              onClick={this.handleToAddPage}
            >
              Add User
            </Button>
            <Button
              id="qsSampleSliderBtn"
              color="secondary"
              size="lg"
              outline
              block
              className="btn-margin"
              onClick={this.handleToSliderPage}
            >
              Sample Slider ※工事中
            </Button>
            <Button
              id="qsSampleSliderBtn"
              color="secondary"
              size="lg"
              outline
              block
              className="btn-margin"
              onClick={this.handleToUserSliderPage}
            >
              User Slider ※工事中
            </Button>
          </Row>
        </motion.div>
      </div>
    );
  }
}

export default withRouter(Content);
