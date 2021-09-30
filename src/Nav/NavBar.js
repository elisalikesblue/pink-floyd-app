import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const NavBar = () => {
    


    return (
        <Navbar bg="dark" expand="lg" style={{height: '240px', justifyContent: 'space-between'}} className="d-flex">
           <Link to={'/Lista'}  className="text-white font-weight-bold ml-5 mt-5 mr-0 mb-0" style={{fontSize: '80px'}}>Pink Floyd Albums</Link>
           <div className="">
               <form className="form-inline ml-5 mt-5 mr-0 mb-0 mr-5" >
			        <input 
                        className="form-control mr-sm-2" 
                        type="text" 
                        placeholder="Buscar"
                        aria-label="Buscar"/>
			        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Buscar</button>
			    </form>
            </div>
        </Navbar>
    )
}
