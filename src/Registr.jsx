
import Slider from "./Slider";
export default function Registr() {
  
    return(
        <section className="contact_section ">
        <div className="container">
          <div className="heading_container">
            <h2>
            Свяжитесь с нами
            </h2>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 px-0">
              <div className="map_container">
                <div className="map-responsive">
                  <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" frameBorder="0" allowFullScreen className="karta"></iframe>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 ">
              <div className="form_container">
                <form action="">
                  <div>
                    <input type="text" placeholder="Имя" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input type="number" placeholder="Номер телефона" />
                  </div>
                  <div>
                    <input type="number" placeholder="Придумайте пароль" />
                  </div>
                  <div className="d-flex ">
                    <button>
                     Отправить
                    </button>
                  </div>
                </form>
              </div>
            </div>
    
          </div>
        </div>
      </section>
    )
}