import React from 'react'

import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Hotel from './hotels/Hotel.js'
import Hotels from './hotels/Hotels.js'
import Hote from './hotels/Hote.js'
import Hot from './hotels/Hot.js'
import Mhotel from './hotels/Mhotel.js'
import Navbar from './components/Navbar.js'
const App = () => {
  return (
    <div>
      
      yok
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
       
        <Route path="/mhotel"element={<Mhotel/>}/>
        
        <Route path="/hot"element={<Hot/>}/>
        <Route path="/hote"element={<Hote/>}/>
        <Route path="/hotels"element={<Hotels/>}/>
        <Route path="/hotel"element={<Hotel/>}/>  
      </Routes>
      </BrowserRouter>
     
     
    </div>
  )
}







export default App

