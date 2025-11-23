import React from 'react';
import { Link } from 'react-router-dom';
import './DownloadPage.css';

const DownloadPage = () => {
  return (
    <div className="download-page">
      <div className="container">
        <img src="/logozinha.png" alt="Looton Logo" className="app-logo" />
        <h1>Download Looton para Android</h1>
        <div className="download-options">
          <div className="download-option">
            <img src="/googleplay.png" alt="Google Play" className="store-logo" />
            <span className="platform-name">Android</span>
            <p>Disponível na Google Play Store</p>
            <a href="https://play.google.com/store/apps/details?id=com.nexusdevsystem.looton&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="download-btn">
              Download for Android
            </a>
          </div>
          <div className="download-option">
            <img src="/macos.png" alt="App Store" className="store-logo" />
            <span className="platform-name">iOS</span>
            <p>Disponível na App Store</p>
            <div className="download-btn soon">
              EM BREVE
            </div>
          </div>
        </div>
        <div className="back-link">
          <Link to="/">Voltar para a página inicial</Link>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;