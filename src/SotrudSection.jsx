import u_1 from '../src/Components/images/u-1.png'
import u_2 from '../src/Components/images/u-2.png'
import u_3 from '../src/Components/images/u-3.png'
import u_4 from '../src/Components/images/u-4.png'

export default function SotrudUs() {
    return(
        <section className="us_section layout_padding2">

        <div className="container">
          <div className="heading_container">
            <h2>
              Почему выбрать нас
            </h2>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <img src={u_1} alt=""/>
                </div>
                <div className="detail-box">
                  <h3 className="price">
                    1000+
                  </h3>
                  <h5>
                    Новые Дома
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <img src={u_2} alt=""/>
                </div>
                <div className="detail-box">
                  <h3>
                    20000+
                  </h3>
                  <h5>
                    Доступные Проэкты
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <img src={u_3} alt=""/>
                </div>
                <div className="detail-box">
                  <h3>
                    10000+
                  </h3>
                  <h5>
                    Довольные клиенты
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <img src={u_4} alt=""/>
                </div>
                <div className="detail-box">
                  <h3>
                    1500+
                  </h3>
                  <h5>
                    Хорошый рейтинг
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="#/contact">
              Обсудить покупку
            </a>
          </div>
        </div>
      </section>
    )
}