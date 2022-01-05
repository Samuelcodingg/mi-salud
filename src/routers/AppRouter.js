import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { HomePage } from '../components/homepage/HomePage';
import Navbar from '../components/navegacion/Navbar';

export const AppRouter = () => {
    return (
        <Router>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </div>
        </Router>
    )
}
