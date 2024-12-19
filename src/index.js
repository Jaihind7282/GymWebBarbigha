import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import LandingPage from "./Component/LandingPage";
import GymServices from "./Routes/GymServices";
import PricingPlans from "./Component/PricingPlans";
import ContactUsBtn from "./Component/ContactUsBtn";
import Gallery from "./Routes/Gallery";
import AboutUs from "./Routes/AboutUs";
import ContactUsForm from "./Routes/ContactUsForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/services" element={<GymServices />} />
      <Route
        path="/plans"
        element={
          <>
            <PricingPlans /> <ContactUsBtn />
          </>
        }
      />
      <Route
        path="/gallery"
        element={
          <>
            <Gallery /> <ContactUsBtn />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <AboutUs /> <ContactUsBtn />
          </>
        }
      />
      <Route path="/contact" element={<ContactUsForm />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
