import React, { Component } from 'react';
import { connect } from 'react-redux'

class About extends Component {
  async componentWillMount() {
    const { dispatch } = this.props
    await this.loadBlockchainData(dispatch)
  }

  async loadBlockchainData(dispatch) {
    // TODO: Wire up blockchain connection
  }

  render() {
    return(
      <div>
        <h1>Full-Stack Sofware Engineer</h1>
        <h2>Web Developer | Graphics Designer | Artificial Intelligence Developer</h2>
        <h2>Blockchain Developer | Linux Enthusiast | Avid Linux User | Hacker by Nature</h2>
        <h2>Cryptocurrency Enthusiast | Blockchain Enthusiast | Cyber Security Engineer</h2>
        <h2>Entrepreneur | Philanthropist</h2>
        <hr/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    // TODO: Fill me in
  };
}

export default connect(mapStateToProps)(About);
