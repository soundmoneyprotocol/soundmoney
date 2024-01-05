import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Stripe from 'stripe';
import { PaymentForm, ElementsWrapper } from '@/components/inputs/payment';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY ?? '');

export default async function Payment() {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 90000,
    currency: 'usd',
  });

  const clientSecret = paymentIntent.client_secret;

  if (!clientSecret) {
    throw Error('No payment intent.');
  }

  return (
    <>
      <ElementsWrapper clientSecret={clientSecret}>
        <PaymentForm />
      </ElementsWrapper>
    </>
  );
}
