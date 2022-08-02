import React from "react";
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe("pk_test_51LQln9SD15ZsgjBIRLO25L5L37E1OvXkFLeMLDcD1aJTCMZYA2g3hzjuBc4TsjMHWFiAPtMDmEsHk5nXDpgOHeJX00z4BxjJHz")
    }
    
    return stripePromise;
}

const Form = () => {

    const item = {
        price: "price_1K3TfMA4B8Maa00LFZ4EFwdX",
        quantity: 1
    };

    const checkoutOptions = {
        lineItems : [item],
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`
    }

    const redirectToCheckout = async () => {
        console.log("redirectToCheckout")

        const stripe = await getStripe()
        const { error } = await stripe.redirectToCheckout(checkoutOptions)
        console.log("Stripe checkout error", error)
    }

    return (
        <>
        <center>
            <div className="container" style={{ width: "480px" }}>
                <div>
                <label forhtml="name">Name</label>
                <br />
                <input
                    className="form-control"
                    name="name"
                    type="text"
                />
                <br />
                <label Forhtml="email">E-mail</label>
                <br />
                <input
                    className="form-control"
                    name="email"
                    type="text"
                />
                <br />
                <label Forhtml="phone">Mobile number</label>
                <br />
                <input
                    className="form-control"
                    name="phone"
                    type="text"
                />
                <br />
                <label Forhtml="amount">Amount</label>
                <br />
                <input
                    className="form-control"
                    name="amount"
                    type="number"
                />
                <br />
                <button
                className="btn btn-success"
                onClick={redirectToCheckout}
                >
                Checkout
                </button>
                </div>
            </div>
        </center>
        </>
    );
};

export default Form;
