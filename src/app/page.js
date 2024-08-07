"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import SwiperData from "./components/SwiperData";
export default function Home() {
  return (
    <main className="">
      <div
        className="bg-image main-background-image"
        style={{
          backgroundImage: "url(/asset/image/bg01.png)",
          minHeight: "100vh",
        }}
      >
        <div className="container-fluid d-flex justify-content-between pt-4 flex-column flex-sm-row ">
          <img
            alt="burger-icon"
            src="/asset/image/Logo01.png"
            className="mr-2  "
            width={170}
          />

          <p className="mb-0">
            <span>
              <img
                src="/asset/image/nestle-logo-A8E00E37D1-seeklogo.com.png"
                width={45}
              />
            </span>{" "}
            Express Delivery +123 567 890
          </p>
        </div>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto gap-2">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    MENU
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    EVENTS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    GALLERY
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="d-flex justify-content-xl-around  flex-xl-row  flex-lg-row flex-column mt-5 pt-3 ">
          <div className="align-content-center   align-items-center">
            <p
              className="mb-0 d-felx align-items-center p-2 font-color"
              style={{
                borderStyle: "dashed",
                width: "fit-content ",
              }}
            >
              <b>IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS</b>
            </p>

            <p className="lh-1 mb-0 main-title">
              <b
                className="font-color "
                style={{ textShadow: " 0px 2px white" }}
              >
                BURGER
              </b>
            </p>
            <p className="lh-1 font-color small-title">WEEK</p>
          </div>
          <div>
            <img
              src="/asset/image/barger01.png"
              className="img-fluid position-relative main-image"
              height={582}
              style={{
                top: " 76px",
              }}
            />
          </div>
        </div>
      </div>
      <section className="mt-5 container">
        <div className="row">
          <div
            className="rounded col img-fluid  m-3 popular-main-image "
            style={{
              backgroundImage: "url(/asset/image/Burger011.png)",
              backgroundPosition: " center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "596px",
              height: "420px",
            }}
          >
            <h2 className="text-white py-4 ms-2 h5">TRY IT TODAY</h2>
            <h2 className="text-white ms-2">
              <b> MOST POPULAR BURGER</b>
            </h2>
          </div>
          <div className="col  " style={{ padding: "10px" }}>
            <div
              className="img-fluid rounded img-width-auto "
              style={{
                backgroundImage: "url(/asset/image/Burger012.png)",
                width: "600px",
                height: "194px",
                backgroundPosition: " center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h2 className="text-white py-4 ms-2 h5">TRY IT TODAY</h2>
              <h2 className="text-white h4 ps-3">MORE FUN</h2>
              <h2 className="text-white h4 ps-3">MORE TASTE</h2>
            </div>

            <div
              className="img-fluid mt-4 rounded img-width-auto"
              style={{
                backgroundImage: "url(/asset/image/Burger013.png)",
                width: "600px",
                height: "194px",
                backgroundPosition: " center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h2 className="text-white py-4 ps-3 h5">TRY IT TODAY</h2>
              <h2 className="text-white h4 ps-3">FRESH & CHILI</h2>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button className="bg-warning btn  ">ALWAYS TASTY BURGER</button>
          </div>
        </div>
      </section>
      <section className="container">
        {" "}
        {/* choose and Enjoy Section */}
        <div>
          <h2
            className="position-relative text-center m-5 h1 font-color"
            style={{
              fontWeight: "900",
            }}
          >
            CHOOSE & ENJOY
          </h2>
          <p
            className="  text-center   padding-zero"
            style={{ padding: " 0px 80px 0px 80px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
        </div>
        <div className="d-flex text-center mt-5 flex-column flex-md-row">
          <div className="">
            <img
              src="/asset/image/Burger0144.png"
              className="img-fluid"
              width={360}
              height={235}
            />
            <h2 className="fs-5 fw-bolder">THE BUN JOVI BURGER</h2>
            <p className="fs-6 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus
            </p>
            <button
              className="btn btn-danger mb-4"
              style={{ fontWeight: "900" }}
            >
              ORDER NOW
            </button>
          </div>
          <div className="">
            <img
              src="/asset/image/Burger0561.png"
              className="img-fluid"
              width={360}
              height={290}
            />
            <h2 className="fs-5 fw-bolder">THE GRILL THRILL BURGER</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus
            </p>
            <button
              className="btn btn-danger mb-4"
              style={{ fontWeight: "900" }}
            >
              ORDER NOW
            </button>
          </div>

          <div className="">
            <img
              src="/asset/image/Burger0144.png"
              className="img-fluid"
              width={360}
              height={235}
            />
            <h2 className="fs-5 fw-bolder">THE ICEBURG BURGER</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus
            </p>
            <button
              className="btn btn-danger  mb-4"
              style={{ fontWeight: "900" }}
            >
              ORDER NOW
            </button>
          </div>
        </div>
      </section>
      <section className="container  p-3   box-shadow">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          <SwiperSlide>
            <SwiperData />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperData />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperData />
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="  d-flex" style={{ paddingTop: "90px" }}>
        <div className="pe-4  d-none  d-md-block" style={{ width: " 20%" }}>
          <img src="/asset/image/top-view-hamburger.png" width={200} />
          <br></br>
          <img src="/asset/image/bottel.png" className="float-end pt-3" />
        </div>
        <div className="form-table " style={{ width: " 60%" }}>
          <div className="mt-4">
            <h2 className="text-center fw-semibold h3 font-color ">
              RESERVATION
            </h2>
            <h2
              className="text-center  font-color pb-4 "
              style={{ fontWeight: "900", fontSize: "xxx-large" }}
            >
              BOOK YOUR TABLE
            </h2>
          </div>
          <div className="row mt-4 justify-content-center">
            <div class="col-9 col-md-5 m-3 text-center">
              <input
                type="text"
                class="form-control  p-3"
                id="exampleInputPassword1"
                placeholder="NAME"
              />
            </div>
            <div class="col-9 col-md-5 m-3 text-center">
              <input
                type="text"
                class="form-control  p-3 "
                id="exampleInputPassword1"
                placeholder="EMAIL"
              />
            </div>
            <div class="col-9 col-md-5 m-3 text-center">
              <input
                type="text"
                class="form-control  p-3 "
                id="exampleInputPassword1"
                placeholder="DATE"
              />
            </div>
            <div class="col-9 col-md-5 m-3 text-center">
              <input
                type="text"
                class="form-control  p-3 "
                id="exampleInputPassword1"
                placeholder="TIME"
              />
            </div>
            <div class="col-9 col-md-5 m-3 text-center">
              <input
                type="text"
                class="form-control  p-3 "
                id="exampleInputPassword1"
                placeholder="PEOPLE"
              />
            </div>
            <div className="col-9 col-md-5 m-3">
              <button type="submit " className="w-100 p-3 btn btn-danger">
                FIND A TABLE
              </button>
            </div>
          </div>
        </div>
        <div
          className="d-flex align-items-end position-relative d-none  d-md-block"
          style={{ left: " 90px", top: "50px", width: " 20%" }}
        >
          <img
            src="/asset/image/flat-lay-burger-fries-plate.png"
            width={400}
            className="mb-4"
          />
        </div>
      </section>
      <br></br>
      <footer
        style={{
          backgroundImage: "url(/asset/image/Burger011we.png)",
          minHeight: "450px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="footer-logo ">
          <img
            src="/asset/image/Logo01.png"
            style={{ filter: "contrast(0) brightness(3.5)", height: "93px" }}
            className="mt-5 pt-3 ps-3 img-fluid footer-logo-image"
          />
        </div>
        <div className=" d-flex justify-content-around footer-content">
          <div className=" w-50 footer-description  ">
            <p className=" text-white ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viver ra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>
          <div className=" footer-com-info ">
            <div className="text-white">
              <p className="text-center">
                <i class="fa-solid fa-location-dot"></i> Main Road, Building
                Name, Country
              </p>
              <p className="text-center">
                <i class="fa-solid fa-envelope"></i> info@companyname.com
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-around footer-content">
          <div className="">
            <p className="text-white text-center">
              © Company Name 2022. All rights reserved.
            </p>
          </div>
          <div className="icon m-4">
            <i
              className="fa-brands fa-facebook  "
              style={{ color: "cornflowerblue" }}
            ></i>
            <i
              className="fa-brands fa-twitter "
              style={{ color: " #4169e1" }}
            ></i>
            <i className="fa-brands fa-youtube " style={{ color: "brown" }}></i>
          </div>
        </div>
      </footer>
    </main>
  );
}

// export default dynamic(() => Promise.resolve(Home), { ssr: false });
