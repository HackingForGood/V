import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import "./styles/auth-form.scss";
import "./styles/app.scss";
import "./styles/index.scss";
import "./styles/profile.scss"

import Routes from './components/Routes';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:8888/graphql',
  }),
});

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Routes);

if (module.hot) {
  module.hot.accept('./components/Routes', () => {
    render(Routes);
  });
}