
import './App.css';
import Container from './Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CatItem from './Components/CatItem';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Container} />
          <Route path="/scoreAllCat" component={CatItem} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
