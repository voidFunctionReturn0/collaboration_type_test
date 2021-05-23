import { Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Q from 'pages/Q';
import LoadingResult from 'pages/LoadingResult';
import Result from 'pages/Result';

function App() {
  return(
    <div>
      <Route exact path="/" component={Home} />
      <Switch>
        <Route path="/q/:number" component={Q} />
        <Route path="/q" component={Q} />
      </Switch>
      <Route path="/loading_result" component={LoadingResult} />
      <Switch>
        <Route path="/result/:type" component={Result} />
        <Route path="/result" component={Result} />
      </Switch>
    </div>
  )
}

export default App;