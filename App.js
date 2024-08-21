import React from 'react';
import ProfileSection from './ProfileSection';
import PatientIDSection from './PatientIDSection';
import MedicalDetailsSection from './MedicalDetailsSection';
import GoalProgressSection from './GoalProgressSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Profile Overview</h1>
      </header>
      <ProfileSection />
      <PatientIDSection />
      <MedicalDetailsSection />
      <GoalProgressSection />
    </div>
  );
}

export default App;
