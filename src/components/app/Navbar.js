import React from 'react'
import { Link } from 'react-router-dom'

import {
  Navbar as BlueprintNavbar,
  NavbarGroup,
  NavbarHeading,
  Button
} from '@blueprintjs/core'

import './Navbar.css'

const styles = {
  brandName: {
    color: '#fff'
  },
  button: {
    marginRight: '10px'
  },
  account: {
    fontSize: '12px'
  }
}

function Navbar({ account, network, balanceOf }) {
  return (
    <BlueprintNavbar className="pt-fixed-top pt-dark">
      <NavbarGroup>
        <NavbarHeading id="brand-name">
          <Link to="/" style={styles.brandName}>
            WMouton
          </Link>
        </NavbarHeading>
        <Link to="/">
          <Button className="bp3-minimal" text="Home" style={styles.button}/>
        </Link>
        <Link to="/about">
          <Button className="bp3-minimal" text="About" style={styles.button}/>
        </Link>
        <Link to="/projects">
          <Button className="bp3-minimal" text="Projects" style={styles.button}/>
        </Link>
      </NavbarGroup>
    </BlueprintNavbar>
  )
}

export default Navbar
