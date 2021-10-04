import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Error from './components/Error/Error';
import SignIn from './components/SignIn/SignIn';
import Services from './components/Services/Services';
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route exact path='/'>
          <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path='/home'>
          <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path='/services'>
          <Header></Header>
            <Services></Services>
            <Footer></Footer>
          </Route>
          <Route path='/about'>
          <Header></Header>
            <About></About>
            <Footer></Footer>
          </Route>
          <Route path='/signin'>
          <Header></Header>
            <SignIn></SignIn>
            <Footer></Footer>
          </Route>
          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
