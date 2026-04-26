# 🎬 TicketSphere — Movie Ticket Booking Platform

A full-stack movie ticket booking platform where users can browse now-playing movies, select seats, and pay securely online. Built with the MERN stack.

🔗 **Live Demo:** [ticketsphere-iota.vercel.app](https://ticketsphere-iota.vercel.app)

---

## ✨ Features

### User
- Browse now-playing movies with real-time data from TMDB API (cast, genres, ratings, runtime)
- Interactive visual seat layout with real-time occupied seat detection
- Select date and time for a show
- Secure payment via Stripe Checkout
- Seats auto-release after 10 minutes if payment is not completed
- Booking confirmation email sent after successful payment
- View all past bookings with Pay Now link for pending payments
- Add movies to favourites
- Show reminder email sent 8 hours before showtime

### Admin
- Dashboard with total revenue, bookings, active shows, and total users
- Add shows — select movie from TMDB, set multiple dates and times at once, set price
- List all shows with per-show earnings and booking count
- List all bookings with user details and movie info

---

## 🛠️ Tech Stack

**Frontend:** React.js, Tailwind CSS, React Router, React Player, Axios  
**Backend:** Node.js, Express.js, MongoDB (Mongoose), MVC Architecture  
**Auth:** Clerk  
**Payments:** Stripe Checkout + Webhooks  
**Background Jobs:** Inngest  
**Email:** Nodemailer  
**Movie Data:** TMDB API  
**Deployment:** Vercel (Frontend) · Render (Backend)

---

## 📸 Screenshots
### Home Page
<img width="1919" height="864" alt="image" src="https://github.com/user-attachments/assets/72832647-1e80-4b57-9354-7f12514d72fe" />
<img width="1919" height="858" alt="image" src="https://github.com/user-attachments/assets/37e12f76-563c-467a-be9c-3bcd34b7b64b" />
<img width="1913" height="865" alt="image" src="https://github.com/user-attachments/assets/ccf88a0e-e1de-4eab-840f-b0a0c7a6f30b" />
<img width="1919" height="857" alt="image" src="https://github.com/user-attachments/assets/fbf9b4ec-eb1f-4c35-b3ca-4255e3360ff9" />


### Movie Details
(paste screenshot here)
<img width="1914" height="870" alt="image" src="https://github.com/user-attachments/assets/4b682541-9888-4683-bd8d-74fbd9d58dd7" />
<img width="1919" height="861" alt="image" src="https://github.com/user-attachments/assets/aa1b469b-1adf-4599-aba4-75624ff48cc0" />
<img width="1919" height="870" alt="image" src="https://github.com/user-attachments/assets/c755d90c-bfdc-4b2d-885d-ada19cc19789" />


### Seat Layout
<img width="1919" height="863" alt="image" src="https://github.com/user-attachments/assets/7e45b3c9-4484-40e9-851e-05e902d067c1" />
<img width="1919" height="864" alt="image" src="https://github.com/user-attachments/assets/50692c71-91c8-4c21-95a3-0f37e85cfec6" />


### My Bookings
<img width="1917" height="864" alt="image" src="https://github.com/user-attachments/assets/e05084b9-fc58-4ef4-aeae-61c9c8839958" />


### Admin Dashboard
<img width="1919" height="870" alt="image" src="https://github.com/user-attachments/assets/0a215682-6eb9-4af2-81ea-551bb6cf0312" />
<img width="1919" height="867" alt="image" src="https://github.com/user-attachments/assets/c9a18fee-abda-45cf-876e-31cebfc581fd" />


### Add Shows (Admin)
<img width="1919" height="864" alt="image" src="https://github.com/user-attachments/assets/1d82215e-16b3-460f-b5f7-c7385dc40be5" />
<img width="1919" height="865" alt="image" src="https://github.com/user-attachments/assets/a4fb5dcd-fa19-4719-87d1-02509ff2eec1" />


### List Bookings (Admin)
<img width="1913" height="870" alt="image" src="https://github.com/user-attachments/assets/cd0d7005-8bf2-4495-aac1-1b1057337984" />

 
---

## 🚀 Getting Started

### Prerequisites
- Node.js v22+
- MongoDB
- Stripe account
- Clerk account
- TMDB API key
- Inngest account

### Installation

**Clone the repository**
```bash
git clone https://github.com/himanshu03066/TicketSphere.git
cd TicketSphere
```

**Setup Backend**
```bash
cd server
npm install
npm run server
```

**Setup Frontend**
```bash
cd client
npm install
npm run dev
```

---

## 🔑 Environment Variables

### Server `.env`
```
MONGODB_URI=
CLERK_SECRET_KEY=
CLERK_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
TMDB_API_KEY=
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
SMTP_USER=
SMTP_PASS=
SENDER_EMAIL=
```

### Client `.env`
```
VITE_BASE_URL=
VITE_CLERK_PUBLISHABLE_KEY=
VITE_TMDB_IMAGE_BASE_URL=
VITE_CURRENCY=$
```

---

## 👨‍💻 Author

**Himanshu Bagri**  
[GitHub](https://github.com/himanshu03066) • [LinkedIn](https://www.linkedin.com/in/himanshu-bagri-761088400)
