import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {useState} from 'react';
import {
    Button,
    Input,
    Badge,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col
} from "reactstrap";

// core components
import {} from "variables/charts.js";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    "pk_live_51HFxnOHmV2D708We1FkfH067SuU4FEOTfw2QyC7kcw03MFUbHcLvSlElIZZPSPuWn8QKdZuaaH9rWHHmf5luGOUy00IhvezZyE"
);

const Shop = props => {
    const options = [
        {value: 'coins16000', text: '16000 Coins (9.99PLN)'},
        {value: 'coins80000', text: '80000 Coins (39.99PLN)'},
    ];

    const [selected, setSelected] = useState(options[0].value);

    const handleChange = event => {
        setSelected(event.target.value);
    };

    //const host = "https://host.jakjus.com";
    const host = "http://localhost:3000";

    const handleClickStripe = async item => {
        // Get Stripe.js instance
        const stripe = await stripePromise;

        // Call your backend to create the Checkout Session
        const response = await fetch(host + "/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        });

        const session = await response.json();

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id
        });

        if (result.error) {
            return (
                <section className="section">
                <h2>Shop</h2>
                <div className="card">
                <p>${result.error.message}</p>
                </div>
                </section>
            );
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
        }
    };
    //const handleClickPaypal = 

    return (
        <div className="content">
        <Card>
        <CardHeader>
        <Row>
        <Col className="text-left">
        <h3 className="card-category">Buy coins</h3>
        <CardTitle tag="h2">Store</CardTitle>
        </Col>
        </Row>
        </CardHeader>
        <CardBody>
        <p className="h4">
        Welcome to the <b>store</b>!
        </p>
        <ul>
        <li>Coins will be signed to your haxball account.</li>
        <li>
        After purchase, <b>code</b> will be sent on your e-mail address
        automatically.
        </li>
        <li>
        Activate it on server by typing "!code code_from_email" in chat.
        </li>
        </ul>
        <Card>
        <Row>
        <Col>
        <p className="h4">
        Select <b>amount</b>:
        </p>
        <Input
        className="mb-3"
        type="select"
        key="amount"
        value={selected}
        onChange={handleChange}
        >
        >
        {options.map(option => (
            <option key={option.value} value={option.value}>
            {option.text}
            </option>
        ))}
        </Input>
        </Col>
        </Row>

        <PayPalScriptProvider options={{ "client-id": "AY1jEIy8OF3YPJ23BYzkljrNkSPF4h3vokvdTqYmmVxz82ZX5hrMC2paeHW3An3eUmWnRwkOu6c223wi", "currency": "PLN" }}>
            <PayPalButtons forceReRender={[selected]} style={{ layout: "horizontal" }} createOrder={async (data, actions) => {
                const body = JSON.stringify({sku: selected})
                const response = await fetch(host + "/paypal/create-paypal-order", {

                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: body
                });
                const order = await response.json();
                return order.id

            }}
        onApprove={async (data, actions) => {
            return fetch(host + "/paypal/capture-paypal-order", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    orderID: data.orderID,
                }),
            })
                .then((response) => response.json())
                .then((orderData) => {
                    console.log('got capture', orderData)
                    // Successful capture! For dev/demo purposes:
                    // console.log(
                    //     "Capture result",
                    //     orderData,
                    //     JSON.stringify(orderData, null, 2)
                    // );
                    // const transaction = orderData.purchase_units[0].payments.captures[0];
                    // alert(
                    //     "Transaction " +
                    //     transaction.status +
                    //     ": " +
                    //     transaction.id +
                    //     "\n\nSee console for all available details"
                    // );
                    // When ready to go live, remove the alert and show a success message within this page. For example:
                    //var element = document.getElementById('payment-successful');
                    //element.innerHTML = 'Thank you for your payment!';
                    actions.redirect('https://hb.jakjus.com/#/shop/success')
                    // Or go to another URL:  actions.redirect('thank_you.html');
                });
        }}
        />
        </PayPalScriptProvider>

        <Button
        key="buy"
        role="link"
        className="btn-block"
        onClick={() =>
            handleClickStripe({ itemname: selected, currency: "pln" })
        }>
        <i className="tim-icons icon-coins" /> Pay with Stripe
        </Button>
        </Card>
        <p className="text-info">
        Any problems? Contact: jakub@jakjus.com
        </p>
        <p className="text-danger">
        <b>Never</b> give your code to any other person. Admin will never ask you
        for your code.
        </p>
        </CardBody>
        </Card>
        </div>
    );
};

const ShopSuccess = props => {
    return (
        <div className="content">
        <Card>
        <CardHeader>
        <Row>
        <Col className="text-left">
        <h3 className="card-category">Buy coins</h3>
        <CardTitle tag="h2">Store</CardTitle>
        </Col>
        </Row>
        </CardHeader>
        <CardBody>
        <p className="h4">
        Welcome to the <b>store</b>!
        </p>
        <p className="text-primary">Your purchase is successfully completed! Check your email for the code (also spam folder).</p>
        </CardBody>
        </Card>
        </div>
    );
};

export { Shop, ShopSuccess };
/*
                                        <small>
 *If you will uninstall/change browser and you still want to save your rank and items:
                                        <li>1. Go to <a href="https://www.haxball.com/playerauth">this site</a></li>
                                        <li>2. Copy your KEY (idkey...)</li>
                                        <li>3. On <b>new browser</b> go to the same site and press "Change Key"</li>
                                        <li>4. Paste key from clipboard and press Load key.</li>
                                        <li>5. Done!</li>
                                        </small>
                                        */
