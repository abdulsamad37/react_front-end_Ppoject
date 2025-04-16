import React from "react";
import "./SubjectStats.css"

const SubjectStats = () => {
  return (
    <div className="container">
      <h2>Subject Performance Stats</h2>
      <p>
        Here are the performance statistics by subject, indicating areas of
        strength and improvement.
      </p>

      <div className="subject-statistics">
        <h4>Mathematics</h4>
        <p>Average Score: 85%</p>
        <p>Highest Score: 98%</p>
        <p>Improvement Needed: 15% of students need help in Algebra.</p>

        <h4>Science</h4>
        <p>Average Score: 90%</p>
        <p>Highest Score: 100%</p>
        <p>Improvement Needed: 10% of students need help in Physics.</p>

        <h4>English</h4>
        <p>Average Score: 78%</p>
        <p>Highest Score: 95%</p>
        <p>
          Improvement Needed: 20% of students need help in grammar and
          composition.
        </p>

        <h4>History</h4>
        <p>Average Score: 88%</p>
        <p>Highest Score: 100%</p>
        <p>Improvement Needed: 12% of students need help with essay writing.</p>
      </div>
    </div>
  );
};

export default SubjectStats;
