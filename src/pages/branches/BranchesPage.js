import React from "react";
import BranchCard from "../../components/BranchCard";
import BranchMap from "../../components/BranchMap";
import "./BranchesPage.css";

function BranchesPage() {
  return (
    <div className="branches-container">
      <h1>Visit Us</h1>
      <div className="visit-us-msg">
        <p>Find our branches at these locations and pay us a visit.</p>
        <p>All Store Timings</p>
        <p>9AM - 11PM</p>
      </div>
      <div className="branch-cards-container">
        <BranchCard
          name="Jumeirah Branch"
          address="7b street, Jumeirah 1"
          state="Dubai,UAE"
        />
        <BranchCard
          name="Jaffiliya Branch"
          address="13a st, Al-Jaffiliya"
          state="Dubai,UAE"
        />
        <BranchCard
          name="Satwa Branch"
          address="37A st, Al-Satwa (near Khadri Mosque)"
          state="Dubai,UAE"
        />
      </div>
      <div className="map-container">
        <BranchMap />
      </div>
    </div>
  );
}

export default BranchesPage;
