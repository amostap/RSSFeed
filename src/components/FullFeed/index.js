import { Col } from 'react-bootstrap';
import React, { Component } from 'react';

class FullFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Col xs={6} md={4}>
        Full
      </Col>
    );
  }
}

export default FullFeed;
