import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

//components
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Nav />
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/contact' component={ Contact } />
                    <Route exact path='/projects' component={ Projects } />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App;