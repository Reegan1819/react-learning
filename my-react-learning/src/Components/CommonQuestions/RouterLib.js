import React from "react";

const RouterLib = () => {
  return (
    <div style={{ padding: " 20px" }}>
      <h2>Define React Router and explain its features.</h2>

      <p>
        React Router is a standard library for routing in React. It enables the
        navigation among views of various components in a React Application,
        allows changing the browser URL, and keeps UI in sync with the URL.
      </p>
      <p>
        It maintains consistent structure and behavior and is used to develop
        single-page web applications. Enables multiple views in a single
        application by defining multiple routes in the React application.
      </p>

      
      <p>Features of React Router:</p>
      <ul>
        <li>Declarative Routing</li>
        <li>Nested Routing</li>
        <li>Dynamic Routing</li>
        <li>Route Matching</li>
        <li>Route Configuration</li>
        <li>Route Parameters</li>
        <li>Redirects</li>
        <li>History Management</li>
        <li>Lazy Loading</li>
        <li>Server-side Rendering</li>
      </ul>

      <h2>What are the different components of React Router?</h2>
      <p>React Router consists of the following components:</p>
      <ul>
        <li>BrowserRouter</li>
        <li>Route</li>
        <li>Switch</li>
        <li>Link</li>
        <li>NavLink</li>
        <li>Redirect</li>
        <li>Router</li>
        <li>MemoryRouter</li>
        <li>HashRouter</li>
        <li>StaticRouter</li>
      </ul>

      <h2>What is the difference between BrowserRouter and HashRouter?</h2>
      <p>
        BrowserRouter and HashRouter are two types of routers provided by React
        Router. The main difference between them is the way they handle routing
        in the application.
      </p>
      <p>
        BrowserRouter uses the HTML5 history API to keep UI in sync with the
        URL. It uses the history.pushState() method to update the URL without
        refreshing the page.
      </p>
      <p>
        HashRouter uses the window.location.hash property to keep UI in sync
        with the URL. It uses the hash portion of the URL to update the UI
        without refreshing the page.
      </p>
      <p>
        BrowserRouter is recommended for applications with a server that can
        handle dynamic URLs, while HashRouter is recommended for static websites
        or applications that don't have a server to handle dynamic URLs.
      </p>
    </div>
  );
};

export default RouterLib;
