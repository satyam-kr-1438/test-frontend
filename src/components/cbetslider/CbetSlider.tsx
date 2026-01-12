import React, { memo } from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";

export const data = [
  {
    cover: "/img/websiteimage/cbet-slide-2.jpg",
    title: "testerika-slide-2",
  },
  {
    cover: "/img/websiteimage/cbet-slide-3.jpg",
    title: "testerika-slide-3",
  },
  {
    cover: "/img/websiteimage/cbet-slide-4.jpg",
    title: "testerika-slide-4",
  },
  {
    cover: "/img/websiteimage/cbet-slide-5.jpg",
    title: "testerika-slide-4",
  },
];


export default function ResponsiveCarousel(props:any) {
  const ref:any = React.useRef();
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          // If you want to use a ref to call the method of StackedCarousel, you cannot set the ref directly on the carousel component
          // This is because ResponsiveContainer will not render the carousel before its parent's width is determined
          // parentWidth is determined after your parent component mounts. Thus if you set the ref directly it will not work since the carousel is not rendered
          // Thus you need to pass your ref object to the ResponsiveContainer as the carouselRef prop and in your render function you will receive this ref object
          let currentVisibleSlide = 5;
          if (parentWidth <= 1440) currentVisibleSlide = 3;
          if (parentWidth <= 1080) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
              carouselWidth={parentWidth}
              data={data}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={5}
              useGrabCursor
            />
          );
        }}
      />
      <>
        <div
          style={{ position: "absolute", top: "50%", left: 60, zIndex: 10 }}
          color="primary"
          onClick={() => {
            ref.current?.goBack();
          }}
        >
          {/* <ArrowBackIcon /> */}
          <svg xmlns="http://www.w3.org/2000/svg" height='25' width='25'  viewBox="0 0 512 512"><path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM116.7 244.7l112-112c4.6-4.6 11.5-5.9 17.4-3.5s9.9 8.3 9.9 14.8l0 64 96 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-96 0 0 64c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5l-112-112c-6.2-6.2-6.2-16.4 0-22.6z" fill="60A37E"/></svg>
        </div>
        <div
          style={{ position: "absolute", top: "50%", right: 60, zIndex: 10 }}
          color="primary"
          onClick={() => {
            ref.current?.goNext(6);
          }}
        >
          {/* <ArrowForwardIcon /> */}
          <svg xmlns="http://www.w3.org/2000/svg" height='25' width='25' viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm395.3 11.3l-112 112c-4.6 4.6-11.5 5.9-17.4 3.5s-9.9-8.3-9.9-14.8l0-64-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-64c0-6.5 3.9-12.3 9.9-14.8s12.9-1.1 17.4 3.5l112 112c6.2 6.2 6.2 16.4 0 22.6z" fill="60A37E"/></svg>
        </div>
      </>
    </div>
  );
}

// Very import to memoize your Slide component otherwise there might be performance issue
// At minimum your should do a simple React.memo(SlideComponent)
// If you want the absolute best performance then pass in a custom comparator function like below 
export const Card= function (props:any) {
  const { data, dataIndex } = props;
  const { cover } = data[dataIndex];
  return (
    <div
      style={{
        width: "100%",
        height: 300,
        userSelect: "none",
      }}
      className="my-slide-component"
    >
      <img
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          borderRadius: 20,
        }}
        draggable={false}
        src={cover}
      />
    </div>
  );
}