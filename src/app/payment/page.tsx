import React from 'react';
import Stripe from 'stripe';
import { PaymentForm, ElementsWrapper } from '@/components/inputs/payment';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY ?? '');

export default async function Payment() {
  const supabase = createClient(cookies());

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.id) {
    return redirect('/account/login');
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 9900,
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
