import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import HomePage from "./pages/HomePage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import ReservationsPage from "./pages/ReservationsPage.jsx";
import CartPage from "./pages/CartPage.jsx";

const App = () => {
  return (
      <Router>
          <div className = "App">
              <div className ="container">
                  <ul>
                      <li><Link to ="/home">Home</Link></li>
                      <li><Link to ="/menu">Menu</Link></li>
                      <li><Link to ="/reservations">Reservations</Link></li>
                      <li><Link to ="/cart">Cart</Link></li>
                  </ul>

                  <Routes>
                      <Route path="/" element={<HomePage/>}/>
                      <Route path="/home" element={<HomePage/>}/>
                      <Route path="/menu" element={<MenuPage/>}/>
                      <Route path="/reservations" element={<ReservationsPage/>}/>
                      <Route path="/cart" element={<CartPage/>}/>
                  </Routes>

              </div>
          </div>
      </Router>

  )
}

export default App;