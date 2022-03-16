import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import ReactGA from 'react-ga';
const TRACKING_ID = 'UA-172956970-6'; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
