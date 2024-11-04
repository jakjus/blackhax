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
        {value: 'coins16000', text: '16000 Coins (2999$Ar | 2.99$US)'},
        {value: 'coins80000', text: '80000 Coins (11999$Ar | 11.99$US) (25% MÁS MONEDAS)'},
    ];

    const [selected, setSelected] = useState(options[0].value);

    const handleChange = event => {
        setSelected(event.target.value);
    };

    //const host = "https://host.jakjus.com";
    const host = "/api";
    //const host = "http://localhost:3000";

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
                <h2>Tienda</h2>
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
        <CardTitle tag="h2">Tienda</CardTitle>
        </Col>
        </Row>
        </CardHeader>
        <CardBody>
        <p className="h4">
        ¡Bienvenido a la <b>tienda</b>!
        </p>
        <ul>
        <li>Las monedas se registrarán en su cuenta de haxball.</li>
        <li>
        Después de la compra, se enviará un <b>código</b> a su dirección de correo electrónico.</li>
        <li>
        Actívelo en una sala escribiendo el código "!code código_del_correo" en el chat.
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
        {options.map(option => (
            <option key={option.value} value={option.value}>
            {option.text}
            </option>
        ))}
        </Input>
        </Col>
        </Row>
        <Button
        key="buy"
        role="link"
        className="btn-block"
        onClick={() =>
            handleClickStripe({ itemname: selected, currency: "ars" })
        }>
        <i className="tim-icons icon-coins" /> Pagar en ARS (solo Argentinos)
        </Button>
        <Button
        key="buy"
        role="link"
        className="btn-block"
        onClick={() =>
            handleClickStripe({ itemname: selected, currency: "usd" })
        }>
        <i className="tim-icons icon-coins" /> Pagar en USD (disponible para todos)
        </Button>
    </Card>
        <p className="text-info">
            ¿Algún problema? Contacto: jakub@jakjus.com
            </p>
            <p className="texto-peligro">
            <b>Nunca</b> proporciones tu código a ninguna otra persona. El administrador nunca te preguntará para tu código.
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
        ¡Bienvenido a la <b>tienda</b>!
        </p>
        <p className="text-primary"> ¡Tu compra se completó con éxito! Revise su correo electrónico para ver el código (también la carpeta de spam).</p>
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
