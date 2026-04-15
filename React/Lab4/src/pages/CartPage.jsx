import { useCart } from '../context/CartContext.jsx';
import CartSummary from "../components/CartSummary.jsx";

const CartPage = () => {
    const {cart} = useCart();

    const items = cart.map((item) => {
        return <li key={item.id}>{item.name}</li>
    })

    return (
        <div>
            {items}
            <CartSummary cart = {cart}/>

        </div>


    )
}

export default CartPage;