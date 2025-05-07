import React from "react";
import { useCart } from "./Cart";
import Footer from "./Footer";
import "./OrderPage.css";
import Header from './header';
import Navbar from './Navbar';

const OrderPage = () => {
    const { cart } = useCart();

    // Calculate the total price
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
            
        <div className="order-summary-container">
        <Header/>
        <Navbar/><br/><br/>
        
            <h2>Order Summary</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <table className="order-summary-table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td className="price">${(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="total-container">
                        <p>Total: ${total.toFixed(2)}</p>
                    </div>
                    <br/>
                    <hr/><br/>
                    
                    <Footer/>
                </>
            )}
           
        </div>
        
    );
};

export default OrderPage;
