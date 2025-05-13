import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Home() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    axios.get("/data.json") 
      .then((res) => {
        setMovies(res.data);
        if (res.data.length > 0) {
          setSelectedMovie(res.data[0]);
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
      <div className="w-full h-[200vh] bg-black">
        <div className="w-full h-[100vh] bg-amber-50 relative overflow-hidden">
          <div className="w-full h-full bg-black z-50 absolute opacity-30"></div>

            <video
            src={selectedMovie ? selectedMovie.video : "/src/assets/videos/Dr_Strange_trailer.mp4"}
            autoPlay
            playsInline
            // muted
            
            className="absolute inset-0 w-full h-full object-cover">
            </video>

            <div className="absolute z-60 w-[50%] h-full flex justify-center items-center">
              <div className="w-[400px] text-amber-50">
              <h1 className="font-bold text-6xl mb-2">{selectedMovie?.title}</h1>
              <p className="text-lg mb-2">{selectedMovie?.desc}</p>
              <div className="flex space-x-7">
               <Link to="/detail">
                 <button className="px-3 py-2 bg-white rounded-sm cursor-pointer text-sm text-black flex items-center font-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653Z" />
                  </svg>
                  Xem ngay
                </button>
               </Link>

                <button className="px-3 py-2 bg-white rounded-sm cursor-pointer text-sm text-black flex items-center font-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                  Thông tin chi tiết
                </button>
              </div>
            </div>
          </div>

          <div className="absolute z-60 w-full h-[170px] flex justify-center items-center bottom-0 px-10 ">
            <Swiper
              spaceBetween={10}
              slidesPerView={2}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="w-[1150px] ">
               
              {movies.slice(0, 4).map((item) => (
               <SwiperSlide key={item.id}>
                <div className="w-[250px] h-[130px] cursor-pointer relative group"
                     onClick={() => handleSelectMovie(item)}>
                  <div className="w-full h-full overflow-hidden rounded-xl relative">
                    <img
                      src={item.poster}
                      alt={item.title}
                      className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
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
      </div>
    </>
  );
}

export default Home;
