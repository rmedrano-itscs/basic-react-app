import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './contexts/stateContext-v2';
import LoadContext from './contexts/loadContext';
import AppRouter from './routes/appRouter';
import Layout from './components/layout/Layout';
import Routes from './routes/routes';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <LoadContext>
        <AppRouter>
          <Layout>
            <Routes/>
          </Layout>
        </AppRouter>
      </LoadContext>       
    </StateProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
