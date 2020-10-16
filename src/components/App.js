import React from 'react'
import { Home } from '../pages/index'
import { Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: 0;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  )
}
