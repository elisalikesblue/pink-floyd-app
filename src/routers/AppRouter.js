import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { AlbumInfo } from '../components/AlbumInfo';
import { AlbumList } from '../components/AlbumList';
import { NavBar } from '../nav/NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path = "/Lista/:serach?" exact>
                        <NavBar/>
                        <AlbumList></AlbumList>
                        
                    </Route>

                    <Route path = "/Album/:id">
                        <NavBar/>
                        <AlbumInfo></AlbumInfo>
                    </Route>

                    <Redirect to="/Lista"></Redirect>
                </Switch>            
            </div>

        </Router>
        
    )
}
