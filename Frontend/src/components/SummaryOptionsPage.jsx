// SummaryOptionsPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import './SummaryOptionsPage.css';

function SummaryOptionsPage() {
  const [videoLink, setVideoLink] = useState('');
  const [fileInput, setFileInput] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.file) {
      setFileInput(location.state.file);
    }
  }, [location.state]);

  const handleVideoSubmit = () => {
    if (videoLink) {
      alert('Video link submitted: ' + videoLink);
      // Handle further actions here
    } else {
      alert('Please enter a video link.');
    }
  };

  const handleSummarizeClick = async () => {
    if (fileInput) {
      const formData = new FormData();
      formData.append('files', fileInput);

      try {
        const response = await axios.post('http://127.0.0.1:5000/process_files', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        // Navigate to SummaryPage with the summary
        navigate('/summary', { state: { summary: response.data.summary } });
      } catch (error) {
        console.error('Error processing the file:', error);
        alert('Error processing the file. Please try again.');
      }
    } else {
      alert('No file uploaded. Please upload a file first.');
    }
  };

  return (
    <div className="summary-options-page">
      <h1 className="title">What Would You Like to Do?</h1>
      <div className="button-container">
        <button className="action-button" onClick={handleSummarizeClick}>Summarize Content</button>
      </div>
      <div className="or-line">OR</div>
      <div className="video-link-container">
        <h2>Combined summary of PDF and Video</h2>
        <input 
          type="text" 
          placeholder="Paste video link here..." 
          value={videoLink} 
          onChange={(e) => setVideoLink(e.target.value)} 
        />
        <button className="submit-button" onClick={handleVideoSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default SummaryOptionsPage;
