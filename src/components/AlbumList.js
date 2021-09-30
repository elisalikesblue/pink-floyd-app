import React from 'react'
import {MDBRow, MDBCol} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';


import { AlbumTN } from './AlbumTN';
import { get_albums } from '../redux/Ducks/albumsDucks';
import { useDispatch } from 'react-redux';



export const AlbumList = () => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(get_albums())
    }, [])

    const loading = useSelector(state => state.albums.loading)
    const data = useSelector(state => state.albums.albums)
    console.log('con el store', data)
    

    return (
        <div>
          
            <main>
                {
                    loading && <p className="spinner-border text-primary"/>
                }

                <MDBRow className='col-sm pl-5 pt-5'>
                        {
                            data.map ( item => {
                                if(item.id){
                                    return(
                                        <MDBCol className="my-3" key ={item.id}>
                                            <AlbumTN
                                            key={item.id}
                                            {...item}
                                        />
                                        </MDBCol>
                                        
                                    )
                                    
                                }
                                
                            })
                        }
                    
                </MDBRow>

                    
                
                    
                
            </main>
        </div>
        
    )
}
