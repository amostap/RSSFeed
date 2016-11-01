/* global feednami */
import { Grid } from 'react-bootstrap';
import React, { Component } from 'react';
import News from '../News';

class App extends Component {
  constructor() {
    super();
    this.state = {
      feeds: '',
      loading: true,
      categories: [],
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    feednami.load('http://k.img.com.ua/rss/ua/news.xml')
    .then((feed) => {
      console.log(feed);
      this.setState({
        feeds: feed,
        loading: false,
      });
    });
  }

  handleAdd(cat) {
    const categories = this.state.categories;
    categories.push(cat);
    this.setState({
      categories,
    });
  }

  render() {
    return (
      <Grid>
        {
          this.state.loading ?
            <p>loading</p> :
              <News
                feeds={this.state.feeds}
                onAdd={this.handleAdd}
                categories={this.state.categories}
              />
        }
      </Grid>
    );
  }
}

export default App;
