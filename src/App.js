import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import * as actionCreators from './actionCreators';
import Diagram from './Diagram';

class App extends Component {
  componentDidMount() {
    document.addEventListener('keyup', (event) => {
      console.log(event);
      if (event.code === 'ArrowRight') this.props.incrementSlide();
      if (event.code === 'ArrowLeft') this.props.decrementSlide();
    })
  }

  render() {
    const { appName, decrementSlide, incrementSlide } = this.props;

    return (
      <div className="App">
        <h1 className="App-title">{appName}</h1>
        <Diagram />
        <button onClick={decrementSlide}>Previous</button>
        <button onClick={incrementSlide}>Next</button>
      </div>
    );
  };
};

App.propTypes = {
  appName: PropTypes.string,
  decrementSlide: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  appName: state.appName,
});

const mapActionsToProps = {
  decrementSlide: actionCreators.decrementSlide,
  incrementSlide: actionCreators.incrementSlide,
};

export default connect(mapStateToProps, mapActionsToProps)(App);
