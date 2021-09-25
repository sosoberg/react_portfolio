import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact'
import Blog from './pages/Blog'
//components
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
    return (
        <Router>
            <a name='top'></a>
            <div className='headerGrid'>
                <Header />
                <Nav />
            </div>
                <Switch>
                    <Route exact path='/react_portfolio/' component={ Home } />
                    <Route exact path='/react_portfolio/projects' component={ Projects } />
                    <Route exact path='/react_portfolio/contact' component={ Contact } />
                    <Route exact path='/react_portfolio/blog' component={ Blog } />
                </Switch>
                <Footer />
        </Router>
    )
}

export default App;