import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <></>
    // <div>
    //   <Carousel
    //     swipeable={false}
    //     draggable={false}
    //     showDots={true}
    //     responsive={responsive}
    //     ssr={true} // means to render carousel on server-side.
    //     infinite={true}
    //     autoPlaySpeed={1000}
    //     keyBoardControl={true}
    //     customTransition="all .5"
    //     transitionDuration={500}
    //     containerClass="carousel-container"
    //     removeArrowOnDeviceType={["tablet", "mobile"]}
    //     dotListClass="custom-dot-list-style"
    //     itemClass="carousel-item-padding-40-px"
    //   >
    //     <div>Item 1</div>
    //     <div>Item 2</div>
    //     <div>Item 3</div>
    //     <div>Item 4</div>
    //   </Carousel>
    //   ;
    // </div>
  );
};
export default page;
