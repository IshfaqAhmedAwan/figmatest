import React from 'react';
import { Provider } from "react-redux";
import store from "components/store";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "FormStyle.css";
import UserContainer from "components/containers/UserContainer";
import HomeContainer from "components/containers/HomeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={UserContainer} />
            <Route path="/home-page" component={HomeContainer} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
