import React, { Component } from 'react'

class ErrorBoudary extends Component {
    state = {
        hasError: false
    }

    componentDidCatch(err, info) {
        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError) {
            return <h1>Ooooops. That is not good! </h1>
        }
        return this.props.children
  }
}

export default ErrorBoudary