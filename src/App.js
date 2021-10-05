import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllCourse from './components/AllCourse/AllCourse';
import Course from './components/Course/Course';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Abroad from './components/Abroad/Abroad';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div >

      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/course">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/abroad">
            <Abroad></Abroad>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
