import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
const responsive = {
    superLargeDesktop1: {
    // the naming can be any, depends on you.
    
    breakpoint: { max:3000, min: 1100 },
    items: 6
  },
  superLargeDesktop: {
    // the naming can be any, depends on you.
    
    breakpoint: { max:1100, min: 900 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1300, min: 1100 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 900, min: 350},
    items: 3
  },
  mobile: {
    breakpoint: { max: 350, min: 100 },
    items: 2
  }
}

const MovieList = ({title , data}) => {
    return(
        <div className="text-white sm:p-8  p-5 ">
            <h1 className="font-bold text-2xl mb-3.5 inline-block cursor-pointer hover:text-red-700 transition-all duration-700 ease-in-out"><Link to="/Danh-Muc">{title}</Link></h1>
            <Carousel responsive={responsive} className="flex space-x-10 items-center">
               
                {data.length > 0 &&  data.map((item) => (
                     <div key={item.id} className="sm:w-[200px] sm:h-[300px]  w-[110px] h-[150px] relative group rounded-xl overflow-hidden cursor-pointer">
                       <Link to={`/detail/${item.id}`}>
                            <div className="group-hover:scale-110 w-full h-full transition-all duration-700 ease-in-out ">
                            <div className="w-full h-full bg-black opacity-10 group-hover:hidden absolute top-0"></div>
                            <img src={item.poster} alt="" className="w-full h-full object-cover"/>
                            <div className="absolute uppercase text-[16px] group-hover:bottom-[40%] bottom-[-10%] transition-all ease-in-out duration-900 flex justify-center w-full">
                            <p className="font-bold text-white  " >{item.title}</p>
                            </div>
                            </div>
                        </Link>
                    </div>
                ))}    
                
            </Carousel>
                
        </div>
    )
}
MovieList.PropTypes = {
    title: PropTypes.string,
    data: PropTypes.array
}

export default MovieList;