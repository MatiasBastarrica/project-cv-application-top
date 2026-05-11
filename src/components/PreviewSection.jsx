import { useState } from "react";

function PreviewSection({ props }) {
  return (
    <div className="preview-section">
      <h2 className="preview-name">{props.name}</h2>
      <div className="preview-gral-info">
        <span className="preview-email">{props.email}</span>
        <span className="preview-phone">{props.phone}</span>
      </div>
      <h3 className="preview-ed-exp">Educational experience</h3>
      <div className="ed-item">
        <div className="date-container"></div>
        <div className="desc-container"></div>
      </div>
      <h3 className="preview-ed-exp">Practical experience</h3>
      <div className="work-item">
        <div className="date-container"></div>
        <div className="desc-container"></div>
      </div>
    </div>
  );
}
