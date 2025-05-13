import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import MovieList from "../Component/MovieList"


function Home() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    axios.get("/data.json") 
      .then((res) => {
        setMovies(res.data);
        if (res.data.length > 0) {
          setSelectedMovie(res.data[2]);
        }
      })
      .catch((err) => {
        console.error("Lỗi khi tải dữ liệu:", err);
      });
  }, []);

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <>
      <div className="w-full  bg-black/95">
        <div className="w-full lg:h-[100vh] md:h-[80vh]   relative overflow">
          <div className="w-full h-full bg-black z-50 absolute opacity-30"></div>

          <div className="relative w-full h-full aspect-video">
               <video
                src={selectedMovie ? selectedMovie.video : "/src/assets/videos/Vikings Season 1 Trailer - Rewatch Again (1080p, h264).mp4"}
                autoPlay
                playsInline
                muted
                
                className="absolute inset-0 w-full h-full object-cover aspect-video">
              </video>
                <div className="absolute z-60  max-w-5xl  h-full flex justify-center items-center md:w-[60%] w-full sm:w-[70%]">
                    <div className="w-[400px] text-amber-50 px-3.5">
                      <h1 className="text-5xl font-bold md:text-4xl  lg:text-6xl mb-2 ">{selectedMovie?.title}</h1>
                      <p className="text-lg mb-2 hidden sm:block">{selectedMovie?.desc}</p>
                      <div className="flex space-x-7">
                        <Link to={`/detail/${selectedMovie?.id}`}>
                          <button className="md:px-3 py-2 px-1.5 bg-white rounded-sm cursor-pointer lg:text-sm  text-black flex items-center font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653Z" />
                            </svg>
                            Xem ngay
                          </button>
                        </Link>

                          {/* <button className="px-3 py-2 bg-white rounded-sm cursor-pointer text-sm text-black flex items-center font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            Thông tin chi tiết
                          </button> */}
                    </div>
                  </div>
              </div>
          {/* xon div thẻ video và text */}
          </div>
          {/* mờ  */}
          <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent z-40" />
          <div className="absolute z-60 w-full flex justify-center items-center md:bottom-0  sm:bottom-[-30%] px-3 sm:px-10 ">
          
            <Swiper
              spaceBetween={5}
              slidesPerView="3"
              
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 4 },
              }}
              className="w-[1150px] ">
               
              {movies.slice(0, 4).map((item) => (
               <SwiperSlide key={item.id}>
                <div style={{ aspectRatio: '16/9' }} className="py-0.5 min-w-[120px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[220px] max-w-[200px] w-full aspect-video cursor-pointer relative group"
                     onClick={() => handleSelectMovie(item)}>
                  <div className="w-full h-full overflow-hidden rounded-xl relative">
                    <img
                      src={item.poster}
                      alt={item.title}
                      className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-115"
                      style={{ objectPosition: "100% 15%" }}/>
                    <div className="absolute w-full h-full bg-black  z-21 top-0 opacity-20 "></div>
                    <p className="text-sm font-bold absolute bottom-4 text-white left-4 z-20 uppercase">
                      {item.title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              ))}

            </Swiper>
          </div>
        </div>
        <div className="w-full h-[130px] md:h-[20px] bg-black z-40"></div>
        <MovieList title={"Phim Để Cử"} data={movies.slice(0,10)}/>
        <MovieList title={"Phim hay trong ngày"} data={movies.slice(10,15)}/>
      </div>
    </>
  );
}

export default Home;
