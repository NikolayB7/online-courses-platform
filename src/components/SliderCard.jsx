import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import CardCourse from "../components/CardCourse";

function SliderCard() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <CardCourse />
            </SwiperSlide>
            <SwiperSlide>
                <CardCourse />
            </SwiperSlide>
            <SwiperSlide>
                <CardCourse />
            </SwiperSlide>
            <SwiperSlide>
                <CardCourse />
            </SwiperSlide>
        </Swiper>
    )
}

export default SliderCard