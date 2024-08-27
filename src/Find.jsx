import React, { useState } from "react"

export default function Find({value, onChange}) {

    return(
      <section className="find_section ">
      <div className="container">
        <form action="">
          <div className=" form-row">
            <div className="col-md-5">
              <input type="text" className="form-control" placeholder="Ищите своё будущее жилье " value={value} onChange={onChange}/>
            </div>
            <div className="col-md-5">
              <input type="text" className="form-control" placeholder="Локацыя(необязательна)"/>
            </div>
            <div className="col-md-2">
              <button type="submit" className="">
                искать
              </button>
            </div>
          </div>
  
        </form>
      </div>
    </section>
    )
}