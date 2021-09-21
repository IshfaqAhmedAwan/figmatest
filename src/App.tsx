import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import UserContainer from 'components/containers/UserContainer';
import HomePage from 'components/HomePage';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
          <Switch>
            <Route path='/' exact component={UserContainer} />
            <Route path='/home-page' component={HomePage} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
export default App;
