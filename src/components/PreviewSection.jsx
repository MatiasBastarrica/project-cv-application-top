import { useState } from "react";

export function PreviewSection({ info }) {
  // function edDateContent() {
  //   let text = "";
  //   if (info.edStartDate) {
  //     text += info.edStartDate;
  //   }
  //   if (info.edEndDate) {
  //     text += ` to ${info.edEndDate}`;
  //   }
  //   return text;
  // }

  function formatDate(dateString) {
    const textArr = dateString.split("-");
    return textArr.join("/");
  }

  function dateContent(startDate, endDate) {
    let text = "";
    startDate ? (text += `${formatDate(startDate)}`) : null;
    endDate ? (text += ` - ${formatDate(endDate)}`) : null;
    return text;
  }

  function children(type) {
    let listItems;

    if (type === "ed") {
      listItems = info.educationItems.map((item, index) => {
        return (
          <div className="data-item" key={index}>
            <div className="date-container">
              <p>{dateContent(item.startDate, item.endDate)}</p>
            </div>
            <div className="data-content">
              <h4 className="data-title">{item.schoolName}</h4>
              <p className="data-subtitle ">{item.titleOfStudy}</p>
            </div>
          </div>
        );
      });
    } else {
      listItems = info.practicalItems.map((item, index) => {
        return (
          <div className="data-item" key={index}>
            <div className="date-container">
              <p>{dateContent(item.startDate, item.endDate)}</p>
            </div>
            <div className="data-content">
              <h4 className="data-title">{item.companyName}</h4>
              <p className="data-subtitle ">{item.positionTitle}</p>
              <p className="data-desc">{item.mainResponsabilities}</p>
            </div>
          </div>
        );
      });
    }

    return <>{listItems}</>;
  }

  return (
    <div className="preview-section">
      <div className="preview-intro">
        <h2 className="preview-name">{info.name && info.name}</h2>
        <div className="preview-personal-details">
          <span className="preview-email">{info.email && info.email}</span>
          <span className="preview-phone">{info.phone && info.phone}</span>
        </div>
      </div>
      <div className="preview-main">
        <h3 className="preview-ed-exp">Educational experience</h3>
        {children("ed")}
        <h3 className="preview-ed-exp">Practical experience</h3>
        {children("pr")}
      </div>
    </div>
  );
}
