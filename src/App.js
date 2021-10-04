import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import About from './component/About/About';
import Service from './component/Service/Service';
import NotFound from './component/NotFound/NotFound';
import Blog from './component/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
       <Switch>
         <Route path='/home'>
           <Home></Home>
         </Route>
         <Route exact path='/'>
           <Home></Home>
         </Route>
         <Route path='/about'>
            <About></About>
         </Route>
         <Route path='/service'>
            <Service></Service>
         </Route>
         <Route path='/blog'>
            <Blog></Blog>
         </Route>
         <Route path='*'>
            <NotFound></NotFound>
         </Route>
       </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
