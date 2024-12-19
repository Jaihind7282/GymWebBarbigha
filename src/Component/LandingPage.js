import React from "react";
import ImageSlider from "./ImageSlider.js";
import CTAButton from "./CTAButton.js";
import PricingPlans from "./PricingPlans.js";
import ClassSchedule from "./ClassSchedule.js";
import SuccessGallery from "./SuccessGallery.js";
import ContactUsBtn from "./ContactUsBtn.js";

function LandingPage() {
  return (
    <>
      <ImageSlider />
      <CTAButton />
      <PricingPlans />
      <ClassSchedule />
      <SuccessGallery />
      <ContactUsBtn />
    </>
  );
}

export default LandingPage;
