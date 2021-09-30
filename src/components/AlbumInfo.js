import React from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { AlbumDetail } from './AlbumDetail'
import { NavBar } from '../Nav/NavBar'
import { AlbumCarousel } from './Carousel'
import { get_one_album } from '../redux/Ducks/albumsDucks'
import { get_albums } from '../redux/Ducks/albumsDucks'


export const AlbumInfo = () => {

    const {id} = useParams();
    console.log(id)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_one_album(id) )
        dispatch(get_albums())
        
    }, [id])


    const loading = useSelector(state => state.albums.loading)
    const data = useSelector(state => state.albums.album[0])
    const all_albums = useSelector(state => state.albums.albums)
    
    
    return (
        <div>
            <NavBar/>

            {
                    loading && <p className="spinner-border text-primary"/>
                   
            }


            <div>
                <AlbumDetail
                    key ={id}
                    {...data}
                />
            </div>

            <AlbumCarousel data={all_albums}/>
           
        </div>
    )
}
