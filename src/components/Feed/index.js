import { Col, Thumbnail, Button } from 'react-bootstrap';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: '',
    };
    this.Add = this.Add.bind(this);
  }

  componentDidMount() {
    this.props.onAdd(this.props.feed.categories[0]);
  }

  Add() {
    this.props.onAdd(this.props.feed.categories[0]);
  }

  render() {
    const { description, title, categories } = this.props.feed;
    return (
      <Col xs={6} md={4}>
        <Thumbnail src={description.split('"')[7]}>
          <h3>{title}</h3>
          <p>{description.split('"')[8].slice(1)}</p>
          <Link bsClass="link" to="/article/1">
            Link
          </Link>
          {/* <p>
            <Button onClick={this.Add} bsStyle="default">Add</Button>
          </p> */}
        </Thumbnail>
      </Col>
    );
  }
}

Feed.propTypes = {
  feed: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default Feed;
