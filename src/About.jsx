import square from '../src/Components/images/square.png'
import about from '../src/Components/images/about-img.jpg'
export default function About() {
    return(
        <section className="about_section layout_padding-bottom">
        <div className="square-box">
          <img src={square} alt=""/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src={about} alt=""/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                  О нашых квартирах
                  </h2>
                </div>
                <p>
                Эта квартира предлагает комфортное и современное жилье с продуманным дизайном и удобной планировкой. В ней есть все необходимые удобства: просторная гостиная, оборудованная кухня, уютные спальни и современная ванная комната. Квартира также оснащена современными бытовыми приборами и мебелью.
                </p>
                <a href="#/contact">
                  Узнать больше
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}