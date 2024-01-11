import { useState } from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './Home.jsx'
import Food from './Food.jsx'
import Details from './Details.jsx'
import Searched from './Searched.jsx'
import DetailsContext from './context/details-context.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [details, setDetails] = useState([])

  return (
    <BrowserRouter>
      <DetailsContext.Provider value={{details, setDetails}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/food" element={<Food/>}/> 
          <Route path="/food/restaurants/:id" element={<Details/>}/>
          <Route path="/search/:type" element={<Searched/>}/>
        </Routes>
      </DetailsContext.Provider>
    </BrowserRouter>
  );
}

export default App
