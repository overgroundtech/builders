import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './Theme/theme';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createUploadLink } from 'apollo-upload-client';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import ContextProvider from "./Context/ContextWrapper";

const link = createUploadLink({
  uri: 'https://kimita.pythonanywhere.com/graphql/'
});

const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
              <ContextProvider>
                  <App />
              </ContextProvider>
          </ThemeProvider>
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
