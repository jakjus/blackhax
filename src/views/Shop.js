/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import {
	Button,
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
	const handleClick = async item => {
		// Get Stripe.js instance
		const stripe = await stripePromise;
		const host = "https://host.jakjus.com";

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
								<Button
									key="coins16000"
									role="link"
									className="btn-block"
									onClick={() =>
										handleClick({ itemname: "coins16000", currency: "eur" })
									}
								>
									Buy <i className="tim-icons icon-coins" /> 16000 coins (2.39EUR)
								</Button>
							</Col>
							<Col>
								<Button
									key="coins16000"
									role="link"
									className="btn-block"
									onClick={() =>
										handleClick({ itemname: "coins16000", currency: "pln" })
									}
								>
									Buy <i className="tim-icons icon-coins" /> 16000 coins (9.99PLN)
								</Button>
							</Col>
						</Row>
						<Row>
							<Col>
								<Button
									key="coins80000"
									role="link"
									className="btn-block"
									onClick={() =>
										handleClick({ itemname: "coins80000", currency: "eur" })
									}
								>
									Buy <i className="tim-icons icon-coins" /> 80000 coins (7.99EUR)
								</Button>
							</Col>
							<Col>
								<Button
									key="coins80000"
									role="link"
									className="btn-block"
									onClick={() =>
										handleClick({ itemname: "coins80000", currency: "pln" })
									}
								>
									Buy <i className="tim-icons icon-coins" /> 80000 coins (39.99PLN)
								</Button>
							</Col>
						</Row>
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
