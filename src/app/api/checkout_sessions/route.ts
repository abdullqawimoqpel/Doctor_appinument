import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@/utils/supabase/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-02-24.acacia',
});

export async function POST(req: Request) {
  try {
    const { appointmentId, serviceName, price, doctorName } = await req.json();

    // Verify user is authenticated
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Appointment with ${doctorName}`,
              description: serviceName || 'General Consultation',
            },
            unit_amount: price ? Math.round(price * 100) : 2000, // Price in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/patient/my-bookings?session_id={CHECKOUT_SESSION_ID}&success=true`,
      cancel_url: `${req.headers.get('origin')}/book?canceled=true`,
      metadata: {
        appointmentId,
        userId: user.id
      },
      client_reference_id: appointmentId,
    });

    // Update appointment with stripe session ID
    await supabase.from('appointments').update({ stripe_session_id: session.id }).eq('id', appointmentId);

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Error creating checkout session:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
