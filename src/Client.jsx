import client from '../src/Components/images/client.jpg'
import client2 from './Components/images/client2.jpg'
import client3 from './Components/images/client3.jpg'
import React from 'react';
import Slider from 'react-slick';
import '../src/App.css'

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-arrow-next" onClick={onClick}>
      &#x2192; 
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-arrow-prev" onClick={onClick}>
      &#x2190;
    </div>
  );
};


const dataClient = [
  {img : client, zagolovok : 'Большинство', podzagolovok:'Современный дом с захватывающим видом на городской пейзаж. Идеален для любителей динамичной городской жизни и удобства центра города, а также оснащён всеми необходимыми удобствами.  Отлично подходит для тех, кто ценит свежесть и комфорт.Уютный дом с современным дизайном и качественной отделкой. '},
  {img : client2, zagolovok : 'Большинство', podzagolovok:'Современный дом с захватывающим видом на городской пейзаж. Идеален для любителей динамичной городской жизни и удобства центра города, а также оснащён всеми необходимыми удобствами.  Отлично подходит для тех, кто ценит свежесть и комфорт.Уютный дом с современным дизайном и качественной отделкой. '},
  {img : client3, zagolovok : 'Большинство', podzagolovok:'Современный дом с захватывающим видом на городской пейзаж. Идеален для любителей динамичной городской жизни и удобства центра города, а также оснащён всеми необходимыми удобствами.  Отлично подходит для тех, кто ценит свежесть и комфорт.Уютный дом с современным дизайном и качественной отделкой. '}
]

export default function Client() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <CustomNextArrow />,
      prevArrow: <CustomPrevArrow />,
    };
    return (
      <section className="client_section layout_padding">
        <div className="rang"></div>
        <div className="container-fluid">
          <div className="heading_container">
            <h2>Что говорят наши клиенты</h2>
          </div>
          <div className="client_container">
            <Slider {...settings}>
              {dataClient.map((e, index) => (
                <div className="carousel-item" key={index}>
                  <div className="box">
                    <div className="img-box">
                      <img src={e.img} alt={`Slide ${index + 1}`} />
                    </div>
                    <div className="detail-box">
                      <h5>
                        <span>{e.zagolovok}</span>
                        <hr />
                      </h5>
                      <p>{e.podzagolovok}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    );
  }