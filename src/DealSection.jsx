import d_1 from '../src/Components/images/d-1.jpg'
import d_2 from '../src/Components/images/d-2.jpg'
export default function Deal() {
    return(
        <section className="deal_section layout_padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                  Отличное предложение по дому
                  </h2>
                </div>
                <p>
                Уютный дом с просторными террасами и окнами от пола до потолка, 
                что 
                позволяет наслаждаться лёгким летним бризом и живописными видами. 
                </p>
                <a href="#/contact">
                  Обсудить покупку
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <div className="box b1">
                  <img src={d_1} alt=""/>
                </div>
                <div className="box b1 b2">
                  <img src={d_2} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}