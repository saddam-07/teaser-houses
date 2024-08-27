import { useState } from "react"
import React from "react"
import Find from "./Find"

export default function Cart({cart}) {
    const [listHouse, setListHouse] = useState(cart)
    const [searchHouses, setSearchHouses] = useState('')
  
    const filterHouse =listHouse.filter(sot=> 
      sot.name.toLowerCase().includes(searchHouses.toLowerCase()))
    
      function searchOurTovar(e) {
        setSearchHouses(e.target.value)
       
    }
    function deleteHouse(id) {
        setListHouse(elem=> {
            return elem.filter(item=>item.id !==id)
        })
    }
    
    return( <>
                     <a href="#/"><button className="close-button">Назад</button></a>
                    <p className="ppp"></p><h2 className="zag-corzina">Корзина</h2>
                    <Find value={searchHouses} onChange={searchOurTovar}/>
                <div className="sale_container">
            {filterHouse.map((e)=> {
                return(<>
                    <div className="box" key={e.id}>
                        <div className="img-box">
                            <img src={e.img} alt=""/>
                        </div>
                        <div className="detail-box">
                            <h6>{e.name}</h6>
                            <button className="plus" onClick={()=> deleteHouse(e.id)}>-</button>
                            <p>{e.opisanie}</p>
                        </div>
                    </div>
                </>)
            })} </div></>
    )
}