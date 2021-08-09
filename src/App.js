import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Details from "./pages/details";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" exact component={Details} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
