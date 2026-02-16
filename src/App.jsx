import { useEffect, useState } from "react"

function App() {
  const urlApi = 'http://localhost:3333/politicians'
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

  const loadPoliticians = async () => {
    const res = await fetch(urlApi)
    const data = await res.json()
    setData(data)
  }

  useEffect(() => {
    loadPoliticians()
  }, [])

  const filteredData = data.filter(el =>
    el.name.toLowerCase().includes(search.toLowerCase()) ||
    el.biography.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section>
      <div className="container">
        <input
          type="text"
          placeholder="Ricerca"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="row">
          <div className="col">
            {filteredData.map(el => (
              <div className="card" key={el.id}>
                <h2>{el.name}</h2>
                <img src={el.image} alt={el.name} />
                <h3>{el.position}</h3>
                <p>{el.biography}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
