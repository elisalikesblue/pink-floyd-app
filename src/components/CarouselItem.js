import React from 'react'

export const CarouselItem = ({cover, title}) => {
    return (
        <div className="carousel-item active">
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-2">
                    <img className="card-img-top" src={cover}
                        alt="Card image cap"/>
                    <div className="card-body">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                        <a className="btn btn-primary">Button</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
