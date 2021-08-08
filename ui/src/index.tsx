import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ChakraProvider, StatGroup } from "@chakra-ui/react"
import { RelayEnvironmentProvider } from 'react-relay'
import relayEnvironment from './relayEnvironment'
import startUp from './startUp'

startUp()

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <ChakraProvider>
        <App/>
      </ChakraProvider>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
