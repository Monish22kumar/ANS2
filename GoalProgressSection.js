import React from 'react';
import './GoalProgressSection.css';

const GoalProgressSection = () => {
  const progress = 0.7; // 70%

  return (
    <section className="goal-progress">
      <h3>Goal Progress</h3>
      <div className="progress-bar">
        <div
          className="semi-circle"
          style={{ background: `conic-gradient(#4caf50 ${progress * 100}%, #e0e0e0 ${progress * 100}% 100%)` }}
        >
          <span className="percentage">{Math.round(progress * 100)}%</span>
        </div>
      </div>
    </section>
  );
};

export default GoalProgressSection;
