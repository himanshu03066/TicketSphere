

import { inngest } from "../inngest/index.js";
import Booking from "../models/Booking.js";
import Show from "../models/Show.js";
import Stripe from "stripe";

export const createBooking = async (req, res) => {
  try {
    const { userId } = req.auth();
    const { showId, selectedSeats } = req.body;
    const { origin } = req.headers;

    const showData = await Show.findOneAndUpdate(
      {
        _id: showId,
        ...Object.fromEntries(
          selectedSeats.map(seat => [`occupiedSeats.${seat}`, { $exists: false }])
        )
      },
      {
        $set: Object.fromEntries(
          selectedSeats.map(seat => [`occupiedSeats.${seat}`, userId])
        )
      },
      { new: true }
    ).populate('movie');

    if (!showData) {
      return res.json({ success: false, message: "Selected Seats are not available." });
    }

    const booking = await Booking.create({
      user: userId,
      show: showId,
      amount: showData.showPrice * selectedSeats.length,
      bookedSeats: selectedSeats
    })

    const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);

    const line_items = [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: showData.movie.title,
        },
        unit_amount: Math.floor(booking.amount) * 100
      },
      quantity: 1
    }];

    const session = await stripeInstance.checkout.sessions.create({
      success_url: `${origin}/loading/my-bookings`,
      cancel_url: `${origin}/my-bookings`,
      line_items: line_items,
      mode: 'payment',
      metadata: {
        bookingId: booking._id.toString()
      },
      expires_at: Math.floor(Date.now() / 1000) + 30 * 60,
    });

    booking.paymentLink = session.url;
    await booking.save();

    await inngest.send({
      name: "app/checkpayment",
      data: {
        bookingId: booking._id.toString(),
      }
    });

    res.json({ success: true, url: session.url })

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message })
  }
}

export const getOccupiedSeats = async (req, res) => {
  try {
    const { showId } = req.params;
    const showData = await Show.findById(showId)

    if (!showData) {
      return res.json({ success: false, message: "Show not found" });
    }
    const occupiedSeats = Object.keys(showData.occupiedSeats)

    res.json({ success: true, occupiedSeats })

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message })
  }
}