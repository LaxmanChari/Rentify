import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routes from './routes';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes />
            </div>
        </Router>
    );
}

export default App;
