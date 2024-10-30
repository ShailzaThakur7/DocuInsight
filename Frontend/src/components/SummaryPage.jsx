// SummaryPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SummaryPage.css'; // Import the CSS file for styling

function SummaryPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { summary } = location.state || { summary: "No summary available." };

  const handleGenerateQuiz = () => {
    // Logic for generating a quiz or navigating to another page
    // navigate('/generate-quiz');
  };

  return (
    <div className="summary-page">
      <h1 className="summary-title">Summary</h1>
      <div className="summary-box">
        <p>{summary}</p>
      </div>
      <button className="generate-quiz-button" onClick={handleGenerateQuiz}>
        Generate Quiz
      </button>
    </div>
  );
}

export default SummaryPage;
