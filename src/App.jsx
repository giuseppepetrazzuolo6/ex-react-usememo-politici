import { useEffect, useState } from "react"

function App() {
  const urlApi = 'http://localhost:3333/politicians'
  const [data, setData] = useState([])

  const loadPoliticians = async () => {
    const res = await fetch(urlApi)
    const data = await res.json()
    setData(data)
  }
  useEffect(() => {
    loadPoliticians()
  }, [])

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              {
                data.map(el => (
                  <div className="card" key={el.id}>
                    <h2>{el.name}</h2>
                    <img src={el.image} alt="" />
                    <h3>{el.position}</h3>
                    <p>{el.biography}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
