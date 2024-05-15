import React from "react";
import "./BranchCard.css";
import BranchCardImage from "../assets/photos/branchCardImage.jpg";

function BranchCard(props) {
  return (
    <div className="branch-card">
      <img className="branch-card-image" src={BranchCardImage} alt="Branch" />
      <div className="branch-card-details">
        <h2 className="branch-card-name">{props.name}</h2>
        <p className="branch-card-address">{props.address}</p>
        <p className="branch-card-state">{props.state}</p>
      </div>
    </div>
  );
}

export default BranchCard;
