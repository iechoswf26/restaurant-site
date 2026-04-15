import {SiteNavbar} from "./components/SiteNavbar.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import ReservationsPage from "./pages/ReservationsPage.jsx";
import CartPage from "./pages/CartPage.jsx";


const App = () => {
    return (
        <Router>
            <SiteNavbar/>

            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/menu" element={<MenuPage />}/>
                <Route path="/reservations" element={<ReservationsPage />}/>
                <Route path="/cart" element={<CartPage />}/>
            </Routes>
        </Router>

    )
}

export default App;