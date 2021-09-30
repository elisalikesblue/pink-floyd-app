import React from 'react'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import dateFormat from 'dateformat';
import Button from '@restart/ui/esm/Button';
import { useHistory } from 'react-router';


export const AlbumTN = ({title, cover, releaseDate, id}) => {

    const hisotry = useHistory();

    return (

        <MDBCard style={{ width: '540px' }}>
        <MDBRow>
            <MDBCol md='4'>
                <img src={cover} alt={title} className="my-5 mx-5"></img>
            </MDBCol>
            <MDBCol>
            <MDBCardBody>
                <MDBCardTitle>{title}</MDBCardTitle>
                <MDBCardText>{dateFormat(releaseDate, "yyyy")}</MDBCardText>
                <MDBCardText>
                <Button className="btn btn-secondary" onClick={() => hisotry.push(`/Album/${id}`)}>Ver Mas</Button>
                </MDBCardText>
            </MDBCardBody>
            </MDBCol>
        </MDBRow>
        </MDBCard>
        
    )
}
