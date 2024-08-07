import React from "react";

const SwiperData = () => {
  return (
    <div className=" d-flex  img-fluid flex-column flex-lg-row">
      <div className="">
        <h2 className=" swiper-text-center fs-4 fw-semibold font-color">
          DISCOVER
        </h2>
        <h2
          className="py-3 fs-2 swiper-text-center font-color"
          style={{ fontWeight: "900" }}
        >
          UPCOMING EVENTS
        </h2>
        <p className="fs-6 swiper-description swiper-text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
      </div>
      <div>
        <img
          src="/asset/image/Burger01134.png"
          width={586}
          height={391}
          className="swiper-image"
        />
      </div>
    </div>
  );
};

export default SwiperData;
