import React from "react";
import "./PricingPlans.css";

const PricingPlans = () => {
  // Benefits for each plan
  const monthlyBenefits = [
    "Access to all gym equipment",
    "Free group fitness classes",
    "Free Wi-Fi",
    "Monthly fitness progress tracking",
    "Locker room access",
    "Free guest pass (1 per month)",
    "Special discounts on gym merchandise",
    "Exclusive access to gym events",
    "Nutrition tips and advice",
    "Priority booking for classes",
    "Access to basic fitness classes",
    "Monthly membership renewal reminder",
  ];

  const sixMonthBenefits = [
    "All benefits from Monthly Plan",
    "Personalized fitness plan",
    "Nutrition consultation with experts",
    "Unlimited access to all fitness classes",
    "Priority access to popular classes",
    "Discounted merchandise",
    "Free one-on-one personal training session per month",
    "Free body composition analysis",
    "6-month progress check-in with trainer",
    "Free yoga or meditation sessions",
    "Exclusive access to wellness workshops",
    "Free parking for gym visits",
  ];

  const yearlyBenefits = [
    "All benefits from 6-Month Plan",
    "Free annual body scan and fitness assessment",
    "Free sports massage every 3 months",
    "Annual consultation with a personal trainer",
    "Exclusive access to online fitness programs",
    "Free participation in fitness challenges",
    "Free gym gear (T-shirt, water bottle, etc.)",
    "VIP access to gym events",
    "Priority booking for workshops and classes",
    "Dedicated personal training discounts",
    "Free fitness equipment rental",
    "Extended guest pass (up to 5 per year)",
  ];

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h1>Gym Membership Plans</h1>
        <p>Choose the best plan for your fitness goals!</p>
      </div>
      <div className="pricing-cards">
        {/* Monthly Plan */}
        <div className="pricing-card">
          <h2>Monthly Plan</h2>
          <p className="price">₹599</p>
          <p className="duration">Per Month</p>
          <ul className="benefits">
            {monthlyBenefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        {/* Popular 6-Month Plan */}
        <div className="pricing-card popular">
          <h2>6-Month Plan</h2>
          <p className="price">₹3199</p>
          <p className="duration">6 Months</p>
          <span className="popular-badge">Popular</span>
          <ul className="benefits">
            {sixMonthBenefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        {/* Yearly Plan */}
        <div className="pricing-card">
          <h2>Yearly Plan</h2>
          <p className="price">₹6000</p>
          <p className="duration">Per Year</p>
          <ul className="benefits">
            {yearlyBenefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
