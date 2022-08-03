import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Topping(props) {
    return (
        <section className="container">
            <h5>Topping</h5>
            <div className={`d-flex row `} style={{ width: "400" }}>
                {props.data.map((item, id) => {
                    return (
                        <div className="col-3">
                            <div key={id}>
                                <img src={item.imageUrl} style={{
                                    width: 80, height: 80
                                }} alt="toping" />
                                <h6> {item.name}</h6>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </section >
    )
}
