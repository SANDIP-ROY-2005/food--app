import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import img1 from './images/img1.jpg'
// import img2 from './images/img2.jpg'
// import img3 from './images/img3.jpg'
 

function CarouselPage() {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="First slide"
      />
      <Carousel.Caption>
        {/* <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
               src= "https://media.istockphoto.com/id/642827392/photo/snacks-for-watching-a-football-game.jpg?s=612x612&w=0&k=20&c=Pikqf1h9QwPGq4OSEI8Mt1EMLPnWV8v1BKU1BoPslk0="
        alt="Second slide"
      />

      <Carousel.Caption>
        {/* <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
              src= "https://media.istockphoto.com/id/1075099420/photo/homemade-pulled-pork-sliders.jpg?s=612x612&w=0&k=20&c=THqwsD3fg0uvjeyVuY9aGjZfcBZsPmb_5nBpSJvjSpQ="
        alt="Third slide"
      />

      <Carousel.Caption>
        {/* <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p> */}
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default CarouselPage
