import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { ClubPage } from '../components/clubpage/ClubPage';
import { HomePage } from '../components/homepage/HomePage';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/club" component={ClubPage} />
                </Switch>
            </div>
        </Router>
    )
}
