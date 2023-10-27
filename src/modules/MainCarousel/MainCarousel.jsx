import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class MainCarousel extends Component {
    render() {
        return (
            <Carousel width={'80vw'} >
                <div>
                    <img src="https://sun9-21.userapi.com/impg/E_js-UuvlJD4sqtpQVvCi9jjwbVbJZ4oiDxWjQ/aiZLwnWfwuM.jpg?size=2560x1920&quality=95&sign=0a5a9b499436022c71035f24c1d1b890&type=album"  alt={""}/>
                    <p className={"legend"}>Тренировки на высшем уровне!</p>
                </div>
                <div>
                    <img src="https://sun9-7.userapi.com/impg/sK5lbe9ZxYmxGAPxImCzK1Vafecno7bE06tugQ/I9H9yDb5LYM.jpg?size=2560x1920&quality=95&sign=b6d3b6aeb0bbab258565adcae53c342a&type=album"  alt={""}/>
                    <p className={"legend"}>Твой путь к миру MMA!</p> 
                </div>
            </Carousel>
        );
    }
}

export default MainCarousel;