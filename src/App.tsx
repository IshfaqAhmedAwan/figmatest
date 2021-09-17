import { Provider } from "react-redux";
import store from "./components/store";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./FormStyle.css";
import UserContainer from "./components/containers/UserContainer";
import SuccesContainer from "./components/containers/SuccesContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={UserContainer} />
            <Route path="/successpage" component={SuccesContainer} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
