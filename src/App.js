import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './components/app/Navbar'
import Home from './components/app/Home'
import About from './components/app/About'
import Projects from './components/app/Projects'
import { loadWeb3 } from './store/interactions'

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData(this.props.dispatch)
  }

  async loadBlockchainData(dispatch) {
    const web3 = await loadWeb3(dispatch)
    const blockNumber = await web3.eth.getBlockNumber()
    console.log(blockNumber)
  }

  render() {
    const {
      account,
    } = this.props;

    return (
      <BrowserRouter>
        <div className="app">
          <Navbar {...this.props} />
          <div id="content">
            <Switch>
              <Route
                path='/about'
                render={(props) => (
                  <About account={account} /> : null
                )}
              />
              
              <Route
                path='/projects'
                render={(props) => (
                  <Projects account={account} /> : null
                )}
              />

              <Route
                path='/'
                render={(props) => (
                  <Home {...props} /> : null
                )}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {
  return {
    // TODO: Fill me in
  }
}

export default connect(mapStateToProps)(App);
