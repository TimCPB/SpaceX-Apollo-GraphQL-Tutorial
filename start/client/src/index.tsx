import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
    ApolloProvider
  } from '@apollo/client';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import Pages from './pages';
  import injectStyles from './styles';
  
  const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    link: new HttpLink({
      uri: 'http://localhost:4000/graphql',
  
      headers: {
        authorization: localStorage.getItem('token'),
      },
    }),
  });
  
  
  cache.writeData({
    data: {
      isLoggedIn: !!localStorage.getItem('token'),
      cartItems: [],
    },
  });
  
  
  injectStyles();
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Pages />
    </ApolloProvider>,
    document.getElementById('root')
  );
  