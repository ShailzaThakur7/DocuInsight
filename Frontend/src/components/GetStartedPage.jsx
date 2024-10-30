// GetStartedPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GetStartedPage.css';

function GetStartedPage() {
  const [fileInput, setFileInput] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFileInput(event.target.files[0]);
  };

  const handleFileSubmit = () => {
    if (fileInput) {
      navigate('/summary-options', { state: { file: fileInput } }); // Pass the file to SummaryOptionsPage
    } else {
      alert('Please upload a file.');
    }
  };

  const handleVideoSubmit = () => {
    navigate('/video-link-summary'); // Navigate to video link summary page
  };

  return (
    <div className="get-started-page">
      <h1>Get Started</h1>
      <div className="box-container">
        <div className="box upload-file">
          <h2>Upload a File</h2>
          <input type="file" onChange={handleFileChange} />
          <button className="submit-button" onClick={handleFileSubmit}>Submit</button>
        </div>
        <div className="box video-link">
          <h2>Enter Video Link</h2>
          <input type="text" placeholder="Paste video link here..." />
          <button className="submit-button" onClick={handleVideoSubmit}>Submit</button>
        </div>
        <div className="box generate-quiz">
          <h2>Generate Quiz</h2>
          <input type="text" placeholder="Enter quiz details..." />
          <button className="generate-button">Generate</button>
        </div>
      </div>
    </div>
  );
}

export default GetStartedPage;
