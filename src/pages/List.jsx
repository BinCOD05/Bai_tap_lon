import { Swiper, SwiperSlide } from 'swiper/react';

        // Import Swiper styles
import 'swiper/css';

function List(){
    return(
        <>
        <div className='w-full h-[200vh] bg-amber-800'>
            <div className='w-full h-[200px]'></div>
        <Swiper
              spaceBetween={50}
              slidesPerView={2}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide><div className='p-[20px]'><img className='h-96' src="/public/i1.jpg" alt="" /></div></SwiperSlide>
              <SwiperSlide><div className='p-[20px]'><img className='h-96' src="/public/i2.jpg" alt="" /></div></SwiperSlide>
              <SwiperSlide><div className='p-[20px]'><img className='h-96' src="/public/i3.jpg" alt="" /></div></SwiperSlide>
              <SwiperSlide><div className='p-[20px]'><img className='h-96' src="/public/i2.jpg" alt="" /></div></SwiperSlide>
              
            </Swiper>
        </div>
        
        
        
            
        </>
    )
}
export default List;