import React from "react"

export default React.memo(function Card({ politician }) {
    console.log("Render card")

    return (
        <div className="card">
            <h2>{politician.name}</h2>
            <img src={politician.image} alt={politician.name} />
            <h3>{politician.position}</h3>
            <p>{politician.biography}</p>
        </div>
    )
})


