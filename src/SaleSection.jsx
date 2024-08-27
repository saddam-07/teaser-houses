import s_1 from '../src/Components/images/s-1.jpg'
import s_2 from '../src/Components/images/s-2.jpg'
import s_3 from '../src/Components/images/s-3.jpg'
import s_4 from '../src/Components/images/s-4.jpg'
import s_5 from '../src/Components/images/s-5.jpg'
import s_6 from '../src/Components/images/s-6.jpg'
import React, { useState } from 'react';
import SignUp from './Cart'
import Find from './Find'

  const dataSaleHouse = [
    {name:'Летний Бриз', opisanie:'Уютный дом с просторными террасами и окнами от пола до пот...', img:s_1, plus:'+', id:1},
    {name:'Городская Панорама', opisanie:'Современный дом с захватывающим видом на городской пейзаж.', img:s_2, plus:'+', id:2},
    {name:'Зеленый Оазис', opisanie:'Дом, окружённый зеленью и ухоженным садом. Здесь вы сможете.', img:s_3, plus:'+', id:3},
    {name:'Современный Уют', opisanie:'Уютный дом с элегантным современным дизайном и качествен', img:s_4, plus:'+', id:4},
    {name:'Эко-Дом', opisanie:'Энергоэффективный дом, построенный с использованием эколог', img:s_5, plus:'+', id:5},
    {name:'Историческая Сказка', opisanie:'Очаровательный дом с элементами исторического дизайна и...', img:s_6, plus:'+', id:6}
  ]
export default function Sale({addToCart}) {
  const [listHouse, setListHouse] = useState(dataSaleHouse)
  const [searchHouses, setSearchHouses] = useState('')

  const filterHouse =listHouse.filter(sot=> 
    sot.name.toLowerCase().includes(searchHouses.toLowerCase()))
  
    function searchOurTovar(e) {
      setSearchHouses(e.target.value)
     
  }

    return(
    <div className="sale_section layout_padding-bottom">
    <div className="container-fluid">
      <div className="heading_container">
        <h2>
          Дома для продажы
        </h2>
        <p>
        Сделайте правильный выбор дома вместе с нами. Уверен, не пожалеете
        </p>
      </div>
      <Find value={searchHouses} onChange={searchOurTovar}/>
      <div className="sale_container">
        {filterHouse.map((e)=> {
          return(<>
          <div className="box" key={e.id}>
            <div className="img-box">
              <img src={e.img} alt=""/>
            </div>
            <div className="detail-box">
              <h6>
                {e.name}
              </h6>
              <button className="plus" onClick={()=> addToCart(e)}>{e.plus}</button>
              <p>
                {e.opisanie}
              </p>
            </div>
            
          </div>
          </>)
        })}
      </div>

      <div className="btn-box">
        <a href="#/contact">
          Узнать больше
        </a>
      </div>
    </div>
  </div>
    )
}