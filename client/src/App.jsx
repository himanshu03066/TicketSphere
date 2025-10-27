import React from "react";

import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import SeatLayout from "./pages/SeatLayout";
import MyBookings from "./pages/MyBookings";
import Favourite from "./pages/Favourite";
import Navbar from "./components/Navbar";

import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Dashboard from "./pages/admin/Dashboard";
import AddShowS from "./pages/admin/AddShows";
import ListShows from "./pages/admin/ListShows";
import ListBookings from "./pages/admin/ListBookings";
import Layout from "./pages/admin/Layout";
import { useAppContext } from "./context/AppContext";
import { SignIn } from "@clerk/clerk-react";
const App = () => {
  const isAdmin= useLocation().pathname.startsWith('/admin');
  const{user}=useAppContext();
  return (
    <>
<Toaster/>
    { !isAdmin && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/favourite" element={<Favourite />} />

        <Route path='/admin/*' element={ user ?<Layout/>:(
          <div className="min-h-screen flex justify-center items-center">
            <SignIn fallbackRedirectUrl={'/admin'} />
          </div>
        )}>
  <Route index element={<Dashboard/>} />
  <Route path="add-shows" element={<AddShowS />} />
  <Route path="list-shows" element={<ListShows />} />
  <Route path="list-bookings" element={<ListBookings />} />
</Route>
      </Routes>
          { !isAdmin && <Footer />}

    </>
  );
};

export default App;
