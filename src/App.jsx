
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Home from "./Component/Home"
import List from "./Component/List"
import Detail from "./Component/Detail"

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/list' element={<List/>}></Route>
        <Route path='/detail' element={<Detail/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
