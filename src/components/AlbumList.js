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

    // const [data2, setdata2] = useState(data)


    // useEffect(() => {
    //     let arr = []

    //     console.log("data en use effect",data)

    //     data.map( item => {
    //         if(item.id){
    //             arr.push(item)
    //         }
    //     })

    //     console.log('arr', arr)
    //     setdata2(arr)
    //     console.log("data2",data2)
    // }, [data])

    // console.log(data2)


    



    // function filterItems(query) {
    //     if(query != ""){
    //         return data2.filter(function(el) {
    //             return el.title.toString().toLowerCase().indexOf(query.toLowerCase()) > -1;
    //         })
    //     }
        
        
    // }
    
    

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
