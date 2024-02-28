import { Route, BrowserRouter as Router, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MonthDetail from './MonthDetail';

function App() {
  return (
    <Router>
    <div className="container">
      <Navbar/>
      <div>
        <Switch>
            {/* <Route exact path='/'>
                <Home/>
            </Route> */}
            {/* <Route path='/birdList'>
               <MonthDetail />
            </Route> */}
      
            <Route path='/months/:id'>
                <MonthDetail/>
            </Route>
            {/* <Route path='*'>
                <NotFound/>
            </Route> */}
        </Switch>
      </div>
  </div>
</Router>
  );
}

export default App;
