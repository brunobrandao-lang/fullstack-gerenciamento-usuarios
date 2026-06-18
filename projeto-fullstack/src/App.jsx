import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import CadastroPage from './pages/CadastroPage'
import HomePage from './pages/HomePage'
import ListaUsuariosPages from './pages/ListaUsuariosPages'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cadastro' element={<CadastroPage />} />
          <Route path='/lista-usuarios' element={<ListaUsuariosPages />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
