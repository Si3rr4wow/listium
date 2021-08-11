// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './dayjsPlugins'
import reportWebVitals from './reportWebVitals'
import { ChakraProvider } from "@chakra-ui/react"
import { RelayEnvironmentProvider } from 'react-relay'
import relayEnvironment from './relayEnvironment'
import routes from './routes';
import RoutingContext from './router/RoutingContext';
import createRouter from './router/createRouter';
import RouterRenderer from './router/RouteRenderer';

const router = createRouter(routes, {});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <ChakraProvider>
        <RoutingContext.Provider value={router.context}>
          <RouterRenderer/>
        </RoutingContext.Provider>
      </ChakraProvider>
    </RelayEnvironmentProvider>
  </React.StrictMode>,  
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
