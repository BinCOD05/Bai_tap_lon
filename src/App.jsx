
import Home from "./pages/Home"
import List from "./pages/List"
import Detail from "./pages/Detail"
import Header from './Component/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./Component/Footer"

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Danh-Muc' element={<List/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>

      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
