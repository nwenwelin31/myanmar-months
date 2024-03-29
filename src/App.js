import { Route, BrowserRouter as Router, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MonthDetail from './MonthDetail';
import Home from './Home';
import Footer from './Footer';
//importing aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <Router>
    <div>
      <Navbar/>
      <div className='container'>
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/months/:id'>
                <MonthDetail/>
            </Route>
            {/* <Route path='*'>
                <NotFound/>
            </Route> */}
        </Switch>
      </div>
      <Footer />
  </div>
</Router>
  );
}

export default App;
