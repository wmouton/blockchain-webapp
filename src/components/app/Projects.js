import React, { Component } from 'react';
import { connect } from 'react-redux'

class Projects extends Component {
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
        <h1>My Projects</h1>
        <ul>
          <li>Google Clone - A Google Clone Search Engine</li>
          <li>Slack Clone - A clone of Slack</li>
          <li>Cryptracer - Cryptocurrency Tracker Web Application</li>
          <li>Flixit - A Movies & Series Web Application</li>
          <li>Alan AI - An Artificial Intelligence Web Application</li>
          <li>Anime Search - Search for Anime Series and Movies</li>
          <li>Vegan Meals - A Website that offers Vegan Food</li>
          <li>Quizzer - A quizzing Web Application</li>
          <li>WM Movie Search - A Web Application for searching Movies</li>
          <li>Jittery Coffee Shop - A Premium Coffee Web Application</li>
          <li>Color Game - A color game for Web Developers</li>
          <li>Split Landing Page - For Developers and Ethical Hackers</li>
          <li> Landing Page - A Landing Page for a Business</li>
          <li>Hogwarts QNA - A Hogwarts Questions and Answers Web Application</li>
          <li>Developer Blog - A Blog Web Application for Developers</li>
          <li>Tours - A Website where you can look up different Tours</li>
          <li>Lamps - This project demonstrates how "State" works in ReactJS</li>
          <li>Purrrfect Kitties - A Website where you can find your favorite kitten</li>
        </ul>
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

export default connect(mapStateToProps)(Projects);
