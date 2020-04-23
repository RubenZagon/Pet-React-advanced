import React from 'react'
import ReactDOM from 'react-dom'
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import {App} from "./App";
import Context from "./Context";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://petgram-server-ruben.now.sh/graphql'
});

const client = new ApolloClient({
  cache,
  link,
  request: (operation) => {
    const token = window.sessionStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  onError: error => {
    const {networkError} = error;
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token');
      window.location.href = '/';
    }
  }
});

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
);
