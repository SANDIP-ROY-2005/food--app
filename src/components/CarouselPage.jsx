// import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
 
 

// function CarouselPage() {
//   return (
//     <div>
//     <Carousel>
//     <Carousel.Item>
//       <img style={{height:'90vh'}}
//         className="d-block w-100"
//         src="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600"
//         alt="First slide"
//       />
//       <Carousel.Caption>
        
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//       <img style={{height:'90vh'}}
//         className="d-block w-100"
//                src= "https://media.istockphoto.com/id/642827392/photo/snacks-for-watching-a-football-game.jpg?s=612x612&w=0&k=20&c=Pikqf1h9QwPGq4OSEI8Mt1EMLPnWV8v1BKU1BoPslk0="
//         alt="Second slide"
//       />

//       <Carousel.Caption>
       
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//       <img style={{height:'90vh'}}
//         className="d-block w-100"
//               src= "https://media.istockphoto.com/id/1075099420/photo/homemade-pulled-pork-sliders.jpg?s=612x612&w=0&k=20&c=THqwsD3fg0uvjeyVuY9aGjZfcBZsPmb_5nBpSJvjSpQ="
//         alt="Third slide"
//       />

    
//     </Carousel.Item>
//   </Carousel>
//   </div>
//   )
// }

// export default CarouselPage
import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselPage = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
 src="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Food image"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://media.istockphoto.com/id/642827392/photo/snacks-for-watching-a-football-game.jpg?s=612x612&w=0&k=20&c=Pikqf1h9QwPGq4OSEI8Mt1EMLPnWV8v1BKU1BoPslk0="
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
           src= "https://media.istockphoto.com/id/1075099420/photo/homemade-pulled-pork-sliders.jpg?s=612x612&w=0&k=20&c=THqwsD3fg0uvjeyVuY9aGjZfcBZsPmb_5nBpSJvjSpQ="
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselPage
