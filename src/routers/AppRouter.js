import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { AlbumInfo } from '../components/AlbumInfo';
import { AlbumList } from '../components/AlbumList';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path = "/Lista" exact>
                        <AlbumList></AlbumList>
                        
                    </Route>

                    <Route path = "/Album/:id">
                        <AlbumInfo></AlbumInfo>
                    </Route>

                    <Redirect to="/Lista"></Redirect>
                </Switch>            
            </div>

        </Router>
        
    )
}
