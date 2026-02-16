import { useEffect, useState } from "react"
import Card from "./components/Card"

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
            {filteredData.map(politician => (
              <Card key={politician.id} politician={politician} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
