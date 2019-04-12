import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";
import Logo from "./images/spaceX-Logo.png";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <img
            src={Logo}
            alt="SpaceX"
            style={{ width: 300, display: "block", margin: "auto" }}
          />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
