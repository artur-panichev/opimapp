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
            <p><strong>Mooduli eesmärk</strong> -õpetusega taotletakse, et õppija tunneb objektorienteeritud programmeerimist, suudab luua keerukamaid rakendusi ja rakendada nende loomisel programmeerimismustreid.</p>
            <h3>Õpiväljundid</h3>
            <p><strong>ÕV1</strong> - teab objektorienteeritud programmeerimise põhimõtteid ja –mõisteid; tunneb enamlevinud programmeerimismustreid;</p>
            <p><strong>ÕV2</strong> - kasutab rakenduste koostamisel matemaatika- ja loogikafunktsioone;</p>
            <p><strong>ÕV3</strong> - kasutab parimate praktikate kohaselt ORM (Object-Relational Mapping) vahendeid;</p>
            <p><strong>ÕV4</strong> - mõistab ühiktestide olemust ning nende kasutamisvõimalusi;</p>
            <p><strong>ÕV5</strong> - kasutab testides mock-klasse;</p>
            <p><strong>ÕV6</strong> - kasutab korrektselt kokkulepitud koodistandardit;</p>
            <p><strong>ÕV7</strong> - loob suurema keerukusastmega rakendusi, kasutades ka matemaatiliselt ja loogiliselt keerukamaid algoritme ja rakenduse osiseid;</p>
            <p>- dokumenteerib loodud rakendused inglise keeles.</p>
        </div>

        <div className="container">
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
                    <img src="/img/prog2/jptv22kauplus/customer-adding.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/prog2/jptv22kauplus/list-customers.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/prog2/jptv22kauplus/list-products.png" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
        <div className="box">
            <div className="textCenter">
                <h2>Esitlus "Firebase" (HÜ 1.3)</h2>
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSRhxlv7EdcI6WZsTNv0hy0ImBfzV1CWU6UqrOUPoP4sjW6HaWJh27XhHPoTkamDA/embed?start=false&loop=false&delayms=3000" frameborder="0" width="500" height="300" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </div>
        </div>
        <div className="box">
            <div className="textCenter">
                <h2>Andmebaasi päringud (HÜ 2.5)</h2>
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vQhrQ9p1ekvU039InNskJTwXQnDwpsH0ynBSeoiqdjlwh8hBzHjAIA5MnK01yGgcg/pub?embedded=true" width="500px" height="300px"></iframe>
            </div>
        </div>

    </div>
    );
}

export default Prog2;