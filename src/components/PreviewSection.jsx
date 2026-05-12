import { useState } from "react";

export function PreviewSection({ info }) {
  function edDateContent() {
    let text = "";
    if (info.edStartDate) {
      text += info.edStartDate;
    }
    if (info.edEndDate) {
      text += ` to ${info.edEndDate}`;
    }
    return text;
  }

  function dateContent(startDate, endDate) {
    let text = "";
    startDate ? (text += `From ${startDate}`) : null;
    endDate ? (text += ` to ${endDate}`) : null;
    return text;
  }
  return (
    <div className="preview-section">
      <h2 className="preview-name">{info.name && info.name}</h2>
      <div className="preview-personal-details">
        <span className="preview-email">{info.email && info.email}</span>
        <span className="preview-phone">{info.phone && info.phone}</span>
      </div>
      <h3 className="preview-ed-exp">Educational experience</h3>
      <div className="data-item">
        <div className="date-container">
          <p>{dateContent(info.edStartDate, info.edEndDate)}</p>
        </div>
        <div className="data-content">
          <h4 className="data-title">{info.schoolName}</h4>
          <p className="data-subtitle ">{info.titleOfStudy}</p>
        </div>
      </div>
      <h3 className="preview-ed-exp">Practical experience</h3>
      <div className="data-item">
        <div className="date-container">
          <p>{dateContent(info.workStartDate, info.workEndDate)}</p>
        </div>
        <div className="data-content">
          <h4 className="data-title">{info.companyName}</h4>
          <p className="data-subtitle ">{info.positionTitle}</p>
          <p className="data-desc">{info.mainResponsabilities}</p>
        </div>
      </div>
    </div>
  );
}
