import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import ReactDOM from 'react-dom';
import UserRoutes from 'pages/User';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <UserRoutes />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
export default App;
