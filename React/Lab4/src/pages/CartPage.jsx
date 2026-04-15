import { useCart } from '../context/CartContext.jsx';
import CartSummary from "../components/CartSummary.jsx";

const CartPage = () => {
    const {cart} = useCart();

    return (
        <div>

            <CartSummary cart = {cart}/>

        </div>


    )
}

export default CartPage;