import { Navbar, Button, Card } from "./components"
import "./App.css"
import { useState } from "react"
import imageProduct from "./assets/img/img-1.png"

function App() {
  const [cart, setCart] = useState(0)
  const handleAdd = () => setCart(cart + 1)
  const handleResetCart = () => setCart(0)

  const dataDummy = [
    {
      id: 1,
      title: "Buku Baca",
      cover: imageProduct
    },
    {
      id: 2,
      title: "Majalah Bobo",
      cover: imageProduct
    },
    {
      id: 3,
      title: "Buku Baca Lanjutan",
      cover: imageProduct
    },
    {
      id: 4,
      title: "Majalah Lanjutan",
      cover: imageProduct
    },
    {
      id: 5,
      title: "Buku Saku",
      cover: imageProduct
    },
  ];

  return (
    <main className="main">
      <Navbar>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button title="User Account">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span>{cart} Items</span>
              <Button onClick={handleResetCart}>x</Button>
            </div>
          </Button>
        </div>
      </Navbar>
      <div className="content">
        {
          dataDummy.map((value) => {
            return <Card title={value.title} image={value.cover}>
              <Button onClick={handleAdd}>
                <span>Add</span>
              </Button>
            </Card>
          })
        }
      </div>
    </main>
  )
}

export default App
