// credit to https://github.com/relayjs/relay-examples/blob/main/issue-tracker/src/routing/RouteRenderer.js
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import RoutingContext from '../router/RoutingContext';
import React from 'react';
import { Link as ChakraLink } from "@chakra-ui/react"

const { useCallback, useContext } = React;

/**
 * An alternative to react-router's Link component that works with
 * our custom RoutingContext.
 */
export default function Link(props) {
  const router = useContext(RoutingContext);

  // When the user clicks, change route
  const changeRoute = useCallback(
    event => {
      event.preventDefault();
      router.history.push(props.to);
    },
    [props.to, router],
  );

  // Callback to preload just the code for the route:
  // we pass this to onMouseEnter, which is a weaker signal
  // that the user *may* navigate to the route.
  const preloadRouteCode = useCallback(() => {
    router.preloadCode(props.to);
  }, [props.to, router]);

  // Callback to preload the code and data for the route:
  // we pass this to onMouseDown, since this is a stronger
  // signal that the user will likely complete the navigation
  const preloadRoute = useCallback(() => {
    router.preload(props.to);
  }, [props.to, router]);

  return (
    <ChakraLink
      href={props.to}
      onClick={changeRoute}
      onMouseEnter={preloadRouteCode}
      onMouseDown={preloadRoute}
      {...props}
    >
      {props.children}
    </ChakraLink>
  );
}