import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { ClubPage } from '../components/clubpage/ClubPage';
import { DetailsProductPage } from '../components/detallesproductopage/DetailsProductPage';
import { HomePage } from '../components/homepage/HomePage';
import Navbar from '../components/navegacion/Navbar';
import { NosotrosPage } from '../components/nosotrospage/NosotrosPage';
import { RegistroClubPage } from '../components/registroclubpage/RegistroClubPage';

export const AppRouter = () => {
    return (
        <Router>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/club" component={ClubPage} />
                    <Route exact path="/registro-club" component={RegistroClubPage} />
                    <Route exact path="/nosotros" component={NosotrosPage} />
                    <Route exact path="/detalles-producto/:id" component={DetailsProductPage} />
                </Switch>
            </div>
        </Router>
    )
}
