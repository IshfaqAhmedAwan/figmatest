import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from 'components/HomePage';
import UserContainer from 'pages/User/containers/UserContainer';
import AuthRoutes from 'pages/User';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <AuthRoutes />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
export default App;
