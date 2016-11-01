import { Row, Col } from 'react-bootstrap';
import React, { Component, PropTypes } from 'react';
import Feed from '../../components/Feed';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: '',
    };
  }

  render() {
    const { entries } = this.props.feeds;
    const { categories } = this.props;
    return (
      <Row>
        <Col lg={2}>
          {
            categories.map((el, key) =>
              <p key={key}>{el}</p>
          )}
        </Col>
        <Col lg={10}>
          {
            entries.map((el, key) =>
              <Feed feed={el} key={key} onAdd={this.props.onAdd} />
          )}
        </Col>
      </Row>
    );
  }
}

News.propTypes = {
  feeds: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};

export default News;
