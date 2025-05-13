import axios from 'axios';
import { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';

import 'swiper/css';

function List() {
    const [movie , selectedMovie] = useState([])
    useEffect(()=>{
        axios.get("data.json")
        .then((res)=>{
            
            selectedMovie(res.data)
        })
        .catch()
    })

return (
    <div className='w-full min-h-screen bg-black'>
        <div className='h-[120px] relative max-w-[1248px] mx-auto'>
                <h1 className='text-white font-bold text-3xl absolute px-3 pt-5 pb-2.5 bottom-0 '>Danh Sách Phim </h1>    
        </div> 
        
        <div className='max-w-[1280px] mx-auto min-h-screen bg-black px-4  '>

            {/* Danh sách phim */}
            <div className='bg-gray-900 w-full flex flex-wrap justify-center gap-6 py-10 rounded-md'>
                {movie.map((movie) => (
                    <Link
                        to={`/detail/${movie.id}`}
                        key={movie.id}
                        className='w-[200px] sm:w-[240px] md:w-[260px] lg:w-[220px]  h-[300px] sm:h-[340px] md:h-[320px] bg-black relative overflow-hidden group  shadow-lg transition-transform hover:scale-[1.02]'
                    >
                        <img
                            src={movie.poster}
                            alt={movie.title}
                            className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110   '
                        />

                        <div className='absolute bottom-0 left-0 w-full bg-black/60 text-white px-3 py-2'>
                            <p className='font-semibold text-sm sm:text-base truncate'>{movie.title}</p>
                        </div>

                        <div className='absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100'>
                            <span className='text-amber-500 text-3xl font-bold mb-6'>▶</span>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    </div>
);


}
export default List;