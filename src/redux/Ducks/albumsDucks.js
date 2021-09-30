import dateFormat from "dateformat";

const initialData = {
    albums: [],
    album: {},
    loading: true,
}

const GET_ALL_ALBUMS = "GET_ALL_ALBUMS";
const GET_ONE_ALBUM = "GET_ONE_ALBUM";
const LOADING = "LOADING";

export default function albumsReducer (state=initialData, action) {
    switch(action.type){
        case LOADING:
            return {...state, loading: true}
        case GET_ALL_ALBUMS:
            return {...state, albums:action.payload ,loading: false}
        case GET_ONE_ALBUM:
            return {...state, album:action.payload ,loading: false}
        default:
            return state
    }
}


export const get_albums = () => async (dispatch) => {
    dispatch({
        type: LOADING
    })

    try {
        const res = await fetch(`http://itunes.apple.com/us/lookup?id=487143&entity=album`).then(resp=>{
            if(resp.status===200 || resp.status===201) {
                return resp.json()
            }

        })
        
        const albums = res.results.map( item => {
            
                return {
                    id: item.collectionId,
                    title: item.collectionName,
                    artist: item.artistName,
                    trackCount: item.trackCount,
                    country: item.country,
                    genre: item.primaryGenreName,
                    releaseDate: dateFormat(item.releaseDate, "yyyy"),
                    coyright: item.copyright,
                    explicit: item.collectionExplicitness,
                    cover: item.artworkUrl100
                }
            
            
        })

        albums.sort((a, b) => (a.releaseDate > b.releaseDate ? 1 : a.releaseDate < b.releaseDate ? -1 : 0))
    
        dispatch({
               type: GET_ALL_ALBUMS,
               payload: albums
        });
        
    } catch (error) {
        console.log(error)
    }
}

export const get_one_album = (id) => async (dispatch) => {
    dispatch({
        type: LOADING
    })

    try {
        const res = await fetch(`http://itunes.apple.com/us/lookup?id=${id}`).then(resp=>{
            if(resp.status===200 || resp.status===201) {
                return resp.json()
            }

        })


        const album = res.results.map ( item => {
            
                return {
                    id: item.collectionId,
                    title: item.collectionName,
                    artist: item.artistName,
                    trackCount: item.trackCount,
                    country: item.country,
                    genre: item.primaryGenreName,
                    releaseDate: dateFormat(item.releaseDate, "yyyy"),
                    coyright: item.copyright,
                    explicit: item.collectionExplicitness,
                    cover: item.artworkUrl100
                }
            
            
        })


    
        dispatch({
               type: GET_ONE_ALBUM,
               payload: album
        });
        
    } catch (error) {
        console.log(error)
    }
}