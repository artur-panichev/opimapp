import '../Pages.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Keyboard } from 'swiper/modules';

const Prog2 = () => {
    return (
        <div className="page">
        <h1>Programmeerimine II</h1>

        <div className="textBox">
            <h2>Mooduli kirjeldus</h2>
            <p><strong>Mooduli maht</strong> - 15 EKAP</p>
            <p><strong>Mooduli eesmärk</strong> - õpetusega taotletakse, et õppija tunneb objektorienteeritud programmeerimist, suudab luua keerukamaid rakendusi ja rakendada nende loomisel programmeerimismustreid.</p>
            <h3>Õpiväljundid</h3>
            <p><strong>ÕV1</strong> - teab objektorienteeritud programmeerimise põhimõtteid ja –mõisteid; tunneb enamlevinud programmeerimismustreid;</p>
            <p><strong>ÕV2</strong> - kasutab rakenduste koostamisel matemaatika- ja loogikafunktsioone;</p>
            <p><strong>ÕV3</strong> - kasutab parimate praktikate kohaselt ORM (Object-Relational Mapping) vahendeid;</p>
            <p><strong>ÕV4</strong> - mõistab ühiktestide olemust ning nende kasutamisvõimalusi;</p>
            <p><strong>ÕV5</strong> - kasutab testides mock-klasse;</p>
            <p><strong>ÕV6</strong> - kasutab korrektselt kokkulepitud koodistandardit;</p>
            <p>
                <strong>ÕV7</strong> - loob suurema keerukusastmega rakendusi, kasutades ka matemaatiliselt ja loogiliselt keerukamaid algoritme ja rakenduse osiseid; <br />
                - dokumenteerib loodud rakendused inglise keeles.
            </p>
        </div>

        <div className="container">
            <h2>Konsoolirakendus Juveelipood</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Keyboard]}
                className="slider"
                >
                <SwiperSlide>
                    <div className="sliderImgDesc">
                        <p>Funktsioonide loend</p>
                        <div>
                            <img src="/img/prog2/jptv22kauplus/start.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliderImgDesc">
                        <p>Toote lisamine</p>
                        <div>
                            <img src="/img/prog2/jptv22kauplus/product-adding.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliderImgDesc">
                        <p>Toodete loetelu</p>
                        <div>
                            <img src="/img/prog2/jptv22kauplus/list-products.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliderImgDesc">
                        <p>Klientide lisamine</p>
                        <div>
                            <img src="/img/prog2/jptv22kauplus/customer-adding.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliderImgDesc">
                        <p>Klientide loetelu</p>
                        <div>
                            <img src="/img/prog2/jptv22kauplus/list-customers.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliderImgDesc">
                        <p>Toodete hinnang</p>
                        <div>
                            <img src="/img/prog2/jptv22kauplus/rating-products.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliderImgDesc">
                        <p>Klientide hinnang</p>
                        <div>
                            <img src="/img/prog2/jptv22kauplus/rating-customers.png" alt="" />
                        </div>
                        </div>
                </SwiperSlide>
            </Swiper>
                <p>Lähtekood:</p>
                <p><a href="https://github.com/artur-panichev/JPTV22Kauplus">https://github.com/artur-panichev/JPTV22Kauplus</a></p>
        </div>

    </div>
    );
}

export default Prog2;