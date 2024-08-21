import React from 'react';
import './MedicalDetailsSection.css';

const MedicalDetailsSection = () => {
  return (
    <section className="medical-details">
      <h3>Medical Details</h3>
      <p>Affected Side: Left</p>
      <p>Condition: Hypertension</p>
      <p>Specialty: Cardiology</p>
      <button className="view-history">View History</button>
    </section>
  );
};

export default MedicalDetailsSection;
