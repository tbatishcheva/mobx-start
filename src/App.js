import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './App.css';
import PropTypes from 'prop-types';
import AppStore from './stores/AppStore';

class App extends Component {
  static propTypes = {
    appStore: PropTypes.instanceOf(AppStore).isRequired,
  };

  render() {
    return (
      <div className="app">
        {this.props.appStore.value}
        <button type="button" onClick={this.props.appStore.onClick}>Increase</button>
      </div>
    );
  }
}

const ObservedApp = inject('appStore')(observer(App));

export default ObservedApp;
