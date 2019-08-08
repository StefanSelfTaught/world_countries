import React, { Component } from 'react';

class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
