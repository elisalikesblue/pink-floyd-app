import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

export const AlbumCarousel = (props) => {

    const data = props.data;
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className=''>
            
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition='transform 1000ms ease-in-out'
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType='desktop'
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-10-px"
                centerMode={true}
                >

                {
                    data.map( item => {
                        if(item.id)
                            if(item.releaseDate < 1980){
                                return( 
                                    <div  className='my-5 text-center' key = {item.id}>
                                        <Link to={`/Album/${item.id}`}>
                                            <img src={item.cover} alt={item.cover}></img>
                                        </Link>
                                        <p>{item.title}</p>
                                    </div>
                                    
                                )
                            }
                        
                        
                    })
                }
            </Carousel>;
        </div>
    )
}





