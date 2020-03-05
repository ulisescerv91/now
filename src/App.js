import React, { Component } from 'react'

// Components
import ListOfCategories from './components/ListOfCategories/ListOfCategories'
import ListOfPhotoCards from './components/ListOfPhotoCards/ListOfPhotoCards'
import Logo from './components/Logo/Logo'

import { GlobalStyle } from './Styles/GlobalStyles'

export default class App extends Component {
  render () {
    return (
      <div>
        <GlobalStyle />
        <Logo />
        <ListOfCategories />
        <ListOfPhotoCards />
      </div>
    )
  }
}
