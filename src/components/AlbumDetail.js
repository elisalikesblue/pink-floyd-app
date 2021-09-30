
import React from 'react'
import { Card } from 'react-bootstrap'

export const AlbumDetail = ({title, cover, releaseDate, artist, trackCount, country, genre, coyright, explicit}) => {
    

    
    return (

        
        <div>
            <Card className="mx-5 mt-5" style={{alignItems: 'center'}}>
                <Card.Img src={cover} alt={title} style={{width: "200px", alignSelf: 'center'}} className="my-3"/>
                {/* <img src={cover} alt={title} className="col-3 mt-5"></img> */}
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Subtitle>{artist}</Card.Subtitle>
                <Card.Text>{releaseDate}</Card.Text>
                <Card.Body>
                    <Card.Text> Tiene {trackCount} canciones </Card.Text>
                    <Card.Text> País: {country} </Card.Text>
                    <Card.Text> Género: {genre} </Card.Text>
                    <Card.Text> {explicit !== 'notExplicit' ? 'Explícito' : 'No explícito'} </Card.Text>
                    <Card.Text className='text-secondary'> {coyright} </Card.Text>
                </Card.Body>
            </Card>

            
        </div>
        
    )
}
