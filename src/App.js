import React from 'react';
import Header from './components/Header'

const App = ({ children }) => (
  <div className="app">
    <Header />
    { children }
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
