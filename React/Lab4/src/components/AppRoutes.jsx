import {Routes, Route, Navigate} from "react-router-dom";
import HomePage from '../pages/HomePage.jsx'
import MenuPage from '../pages/MenuPage.jsx'
import CartPage from '../pages/CartPage.jsx'
import ReservationsPage from '../pages/ReservationsPage.jsx'

function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/menu"/>}/>
            <Route path={"home"} element={<HomePage/>}/>
            <Route path={"menu"} element={<MenuPage/>}/>
            <Route path={"cart"} element={<CartPage/>}/>
            <Route path={"reservations"} element={<ReservationsPage/>}/>
        </Routes>
    )
}

export default AppRoutes;