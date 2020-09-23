import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HUZEeFjpDaVL8OFFsMIaY0bHfXzhZ1zXBNHHaaoMTZxr8M5WRoV0FzEyzk6MqVLOwyHPYNhZfaTySPPnM6KwVdK00l2HLpCBu'

    const onToken = token => {
        console.log(token);
        alert('Payment Successfull')
    }

    return (
        <StripeCheckout 
        name="Crown Clothing Co." // the pop-in header title
        label="Pay Now" // text inside the Stripe button
        currency="EUR" 
        shippingAddress
        billingAddress
        image="https://sendeyo.com/up/d/f3eb2117da" // the pop-in header image (default none)
        description={`Your total is ${price} €`} // the pop-in header subtitle
        amount={priceForStripe} // cents
        panelLabel="Pay Now" // prepended to the amount in the bottom pay button
        token={onToken} // submit callback
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;