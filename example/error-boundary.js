import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { error } = this.state;

    if (error) {
      return (
        <div>
          <p>
            {'Error: '}
            {error.message}
          </p>
          <button onClick={() => this.setState({ error: null })}>
            {'Clear'}
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
