import React from "react"
import loc from "../images/location.png"
import sydney from "../images/sydney.png"

export default function Card() {
    return(
        <section className="card--container">
            <img src={sydney} alt="no pic found" className="card--pic"/>
            <div className="card--main">
                <img src={loc} alt="no pic found" className="card--loc"/>
                <p className="card--country">AUSTRALIA</p>
                <p className="card--google">view of Google Maps</p>
                <p className="card--title">Sydney Operahouse</p>
                <p className="card--date">27 May,2021 - 8 Jun,2021</p>
                <p className="card--desc">The Sydney Opera House is a multi-venue performing arts centre
                     in Sydney. Located on the banks of the Sydney Harbour, it is often
                      regarded as one of the 20th century's most famous and distinctive
                       buildings</p>

            </div>
        </section>
    )
}