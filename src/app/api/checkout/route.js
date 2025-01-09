import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(
	"sk_test_51QPrJg03EIq7TkyDQmACyHpPfx4cnb2Ni6tO3qX4XLZzC83olNNvIiKi4OZ9lOdk48zUoC7IHIyzmEktpW0KRSQU00mF2tIzzl"
);

export async function POST(request){
    const body = await request.json();
	const session = await stripe.checkout.sessions.create({
		success_url: "http://localhost:3000/success",
		line_items: [
            { 
			    price_data:{
				    currency: "usd",
				    product_data: {
					    name: body.name,
					    images: [body.img],
				    },
				    unit_amount: Number(body.price),
			    },
			    quantity: 1,
            },
		],
		mode: "payment",
	});
	
	return NextResponse.json(session);
}