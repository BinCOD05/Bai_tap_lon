import axios from "axios";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

function Detail() {
  const {id} = useParams()
  const [movie , setMovie] = useState(null);
  useEffect(()=> {
    axios.get("/public/data.json")
    .then((res) => {
      const MovieId = res.data.find((item) => (
        item.id === parseInt(id)
      ))
      setMovie(MovieId)

    })
    .catch((e)=>{
      console.error();
      
    })
  },[id])

  return (
    <div className="m-0 font-sans bg-[#121212] text-white min-h-screen">
      <div className="p-5 max-w-[900px] mx-auto pt-15">
        <h1 className="text-3xl font-bold mb-4 p-2  ">{movie?.title}</h1>
        
        
           <div className="relative w-full aspect-video shadow-lg mb-6">
           <video src={`/public/${movie?.video}`} className="w-full h-full absolute top-0 left-0 z-999" controls ></video>
        </div>

            <h1 className="text-white text-2xl p-5 uppercase font-semibold">Giới Thiệu Phim:</h1>
        
          

          <div className="bg-black p-5 rounded">
            <div className="space-y-2 text-gray-400">
              <p>
                <strong className="text-white">Thể loại:</strong>{movie?.category}
              </p>
              <p>
                <strong className="text-white">Diễn viên:</strong> {movie?.actors}
              </p>
              <p>
                <strong className="text-white">Năm Phát Hành:</strong>{movie?.year}
              </p>
              <p>
                <strong className="text-white">Đạo diễn:</strong> {movie?.director}
              </p>
              <p>
                <strong className="text-white">Quốc gia:</strong> {movie?.country}
              </p>
              <p>
                <strong className="text-white">Thời lượng:</strong> {movie?.episodes}
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-white text-xl font-semibold">
                Nội dung phim:
              </h3>
              <p className="text-gray-400 mt-2 leading-7">
               {movie?.desc}
              </p>
            </div>
          </div>

          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {casts.map((cast, i) => (
              <div key={i} className="bg-[#1e1e1e] p-2 rounded text-center">
                {cast.link ? (
                  <a href={cast.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={cast.image}
                      className="w-full h-[200px] object-cover rounded"
                    />
                    <span className="block mt-2 text-white font-medium text-sm">
                      {cast.name}
                    </span>
                  </a>
                ) : (
                  <>
                    <img
                      src={cast.image}
                      className="w-full h-[200px] object-cover rounded"
                    />
                    <span className="block mt-2 text-white font-medium text-sm">
                      {cast.name}
                    </span>
                  </>
                )}
              </div>
            ))}
          </div> */}

          <div className="mt-6">
            <button className="px-3 py-1 bg-[#444] text-white rounded mr-2">
              👍 <span>Thích</span>
            </button>
            <button className="px-3 py-1 bg-[#444] text-white rounded">
              🔗 Chia sẻ
            </button>
          </div>
          

          
        </div>
      </div>
  );
}

export default Detail;