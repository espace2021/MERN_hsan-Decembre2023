import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Listarticles from "./components/client/Listarticles"
import Cart from "./components/client/Cart"
import Productsappadmin from "./components/admin/articles/Productsappadmin"
import Listcategories from "./components/admin/categories/Listcategories"
import Listscategories from "./components/admin/scategories/Listscategories"
import Menu from "./components/admin/Menu"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  

  return (
    <>
    <ToastContainer/>
     <Router>
      <Menu/>
      <Routes>
        <Route path="/articlesclient" element={<Listarticles/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/articlesadmin" element={<Productsappadmin/>}/>
        <Route path="/categories" element={<Listcategories/>}/>
        <Route path="/scategories" element={<Listscategories/>}/>
      </Routes>

     </Router>
    </>
  )
}

export default App
