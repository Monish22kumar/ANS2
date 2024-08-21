import React from 'react';
import './ProfileSection.css';
const ProfileSection = () => {
  const profilePicUrl = 'https://www.google.com/imgres?q=john%20doe&imgurl=https%3A%2F%2Fevolve2023.in%2Fwp-content%2Fuploads%2F2014%2F10%2Fspeaker-3.jpg&imgrefurl=https%3A%2F%2Fevolve2023.in%2Fspeaker%2Fjohn-doe%2F&docid=X2uA6EAULLqyLM&tbnid=Yrsdz4MpYfWcqM&vet=12ahUKEwio07yi2IaIAxV3sVYBHcJoDCgQM3oECGIQAA..i&w=768&h=858&hcb=2&ved=2ahUKEwio07yi2IaIAxV3sVYBHcJoDCgQM3oECGIQAA'; // Replace with your image URL

  return (
    <section className="profile-section">
      <img src={profilePicUrl} alt="Profile" className="profile-pic" />
      <div className="profile-details">
        <h2 className="name">John Doe</h2>
        <p className="gender">Gender: Male</p>
        <p className="age">Age: 35</p>
        <p className="phone">Phone: (123) 456-7890</p>
        <p className="email">Email: john.doe@example.com</p>
      </div>
    </section>
  );
};

export default ProfileSection;
