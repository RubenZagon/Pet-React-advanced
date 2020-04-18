import React from 'react'
import ReactDOM from 'react-dom'
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import {App} from "./App";
import Context from "./Context";

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'https://petgram-server-ruben-9u45ly875.now.sh/graphql'
});

const client = new ApolloClient({
  cache,
  link
});

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
);
