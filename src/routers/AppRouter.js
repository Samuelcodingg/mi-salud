import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { ClubPage } from '../components/clubpage/ClubPage';
import { HomePage } from '../components/homepage/HomePage';
import { NosotrosPage } from '../components/nosotrospage/NosotrosPage';
import { RegistroClubPage } from '../components/registroclubpage/RegistroClubPage';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/club" component={ClubPage} />
                    <Route exact path="/registro-club" component={RegistroClubPage} />
                    <Route exact path="/nosotros" component={NosotrosPage} />
                </Switch>
            </div>
        </Router>
    )
}
