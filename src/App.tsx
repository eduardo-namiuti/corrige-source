import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"

function App() {

  return (

    <Routes>
      <Route path="/" element={<Home/>} />

    <Route element={<Layout />}>
      <Route path="/aluno" element={<Dashboard/>} />  
    </Route>

    <Route path="/login" element={<Login/>}/>

    <Route path = "/cadastro" element={<Cadastro/>}/>
    </Routes>

  )
}

export default App