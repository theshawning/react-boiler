import React from 'react'
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
        <div>
          hello world
        </div>
    </>
  )
}
