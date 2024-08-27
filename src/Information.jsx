import location from '../src/Components/images/location.png'
import phone from '../src/Components/images/phone.png'
import mail from '../src/Components/images/mail.png'
import facebook from '../src/Components/images/fb.png'
import twitter from '../src/Components/images/twitter.png'
import linkedin from '../src/Components/images/linkedin.png'
import youtube from '../src/Components/images/youtube.png'

export default function Info() {
    return(
        <section className="info_section ">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="info_contact">
                <h5>
                  О нашых домов
                </h5>
                <div>
                  <div className="img-box">
                    <img src={location} width="18px" alt=""/>
                  </div>
                  <p>
                    Адресс
                  </p>
                </div>
                <div>
                  <div className="img-box">
                    <img src={phone} width="12px" alt=""/>
                  </div>
                  <p>
                    +992 980001010
                  </p>
                </div>
                <div>
                  <div className="img-box">
                    <img src={mail} width="18px" alt=""/>
                  </div>
                  <p>
                    demo@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_info">
                <h5>
                  Информацыя
                </h5>
                <p>
                Очаровательный дом с элементами исторического дизайна и классической архитектуры. 
                </p>
              </div>
            </div>
    
            <div className="col-md-3">
              <div className="info_links">
                <h5>
                  Наша ссылка
                </h5>
                <ul>
                  <li>
                    <a href="">
                      Есть очень много
                    </a>
                  </li>
                  <li>
                    <a href="">
                      вариацый
                    </a>
                  </li>
                  <li>
                    <a href="">
                      текстов о
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Lorem Ipsum
                    </a>
                  </li>
                  <li>
                    <a href="">
                      в котором все
                    </a>
                  </li>
                  <li>
                    <a href="">
                      доволны покупкой
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_form ">
                <h5>
                  Новости
                </h5>
                <form action="">
                  <input type="email" placeholder="Введите свой Email"/>
                  <button>
                    Присоединиться
                  </button>
                </form>
                <div className="social_box">
                  <a href="">
                    <img src={facebook} alt=""/>
                  </a>
                  <a href="">
                    <img src={twitter} alt=""/>
                  </a>
                  <a href="">
                    <img src={linkedin} alt=""/>
                  </a>
                  <a href="">
                    <img src={youtube} alt=""/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}