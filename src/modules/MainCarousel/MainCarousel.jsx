import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class MainCarousel extends Component {
    render() {
        return (
            <Carousel width={'80vw'} >
                <div>
                    <img src="http://sportizdorovie.ru/wp-content/uploads/2013/04/Бой.jpg"  alt={""}/>
                    <p className={"legend"}>Тренировки на высшем уровне!</p>
                </div>
                <div>
                    <img src="https://fikiwiki.com/uploads/posts/2022-02/1645054302_50-fikiwiki-com-p-kartinki-mma-56.jpg"  alt={""}/>
                    <p className={"legend"}>Тренировки на высшем уровне!</p> 
                </div>
            </Carousel>
        );
    }
}

export default MainCarousel;