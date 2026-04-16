import { useCart } from '../context/CartContext.jsx';
import { useState } from 'react';
import CartSummary from "../components/CartSummary.jsx";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CartPage = () => {
    const {cart, clearCart} = useCart();




    const [showConfirm, setShowConfirm] = useState(false);
    const handleShowConfirm = () => setShowConfirm(true);
    const handleCloseConfirm = () => {
        setShowConfirm (false);
        clearCart();
    }

    const [showCancel, setShowCancel] = useState(false);
    const handleShowCancel = () => setShowCancel(true);
    const handleCloseCancel = () => {
        setShowCancel (false)
        setShowConfirmCancel (true)
        clearCart();
    }

    const [showConfirmCancel, setShowConfirmCancel] = useState(false);
    const handleShowConfirmCancel = () => setShowConfirmCancel(true);
    const handleCloseConfirmAgain = () => {
        setShowConfirmCancel (false);
    }



    return (
        <div>

            <CartSummary cart = {cart}/>

            <br/>

            <div>
                {cart.length >= 1 && (<Button variant="primary" onClick={handleShowConfirm}>
                    Submit Order
                </Button>)}

                <Modal show={showConfirm} onHide={handleCloseConfirm}>
                    <Modal.Header closeButton>
                        <Modal.Title>Order Confirmed</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Your order has been submitted!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseConfirm}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

            <div>
                {cart.length >= 1 && (<Button variant="secondary" onClick={handleShowCancel}>
                    Cancel Order
                </Button>)}

                <Modal show={showCancel}>
                    <Modal.Header closeButton>
                        <Modal.Title>Cancel Order?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to cancel?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {setShowCancel(false)}}>
                            No, Keep Order
                        </Button>
                        <Button variant="primary" onClick={handleCloseCancel}>
                            Yes, Cancel Order
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

            <div>
                <Modal show={showConfirmCancel}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm Cancel</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Thank you, come again!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => {setShowConfirmCancel (false)}}>
                            Yes, Cancel Order
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </div>


    )
}

export default CartPage;