import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
const CarouselsData = [
    {
        title: "What is Lorem Ipsum?",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        img: "https://picsum.photos/seed/picsum/1000/900"
    },
    {
        title: "What is Lorem Ipsum?",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        img: "https://picsum.photos/seed/picsum/1000/900"
    },
    {
        title: "What is Lorem Ipsum?",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        img: "https://picsum.photos/seed/picsum/1000/900"
    },
]
const Carousels = () => {
    return (
        <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
            autoplay={true}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={true}
        >
            {
                CarouselsData.map((Carousels, i) => (
                    <SwiperSlide style={{ backgroundImage: `url(${Carousels.img})` }} key={i}>
                        <h3>{Carousels.title}</h3>
                        <p className='text'>{Carousels.text}</p>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
export default Carousels
