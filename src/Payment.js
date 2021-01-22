import { Link, useHistory } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from './axios';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from './CheckoutProduct';
import './Amazon.css'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'
import { db } from './firebase';



function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    
    
    const stripe = useStripe();
    const elements = useElements();

    
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("")
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    
    
    useEffect(() => {
        //Generate special Stripe secret to allow charging customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //Stripe expects the total in a currency subunit e.g convert $ to cent 
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [basket])
    
    console.log('CLIENT SECRET IS >>>>>>', clientSecret)
    
    const handleSubmit = async (event) => {
        //Stripe things
        event.preventDefault();
        setProcessing(true);
        
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation
            
            db
             .collection('users')
             .doc(user?.uid)
             .collection('orders')
             .doc(paymentIntent.id)
             .set({
                 basket: basket,
                 amount: paymentIntent.amount,
                 created: paymentIntent.created
                 })
                //db format here is a NoSQL format

            
            setSucceeded(true)
            setError(null)
            setProcessing(false)
        

            dispatch({
                type: 'EMPTY_BASKET'
            })
            
            
            history.replace('/orders')
        })
    }

    const handleChange = event => {
        //Listen for changes in CardElement
        //and display any error as customer types in their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    
    
    
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
            {/* /////////Payment Section - Delivery address/////////// */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div vlassName='Payment__address'>
                        <p>{user?.email}</p>
                        <p>Block 157 Flat 5 Jakande Estate</p>
                        <p>Lagos, Nigeria.</p>
                    </div>
                </div>

          {/* //////Payment section - Review items/////// */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

            {/* ///////Payment section - Payment method/////////// */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        {/* Stripe */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div classname='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>    
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {/* Error message */}
                            {error && <div>{ error }</div>}
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
