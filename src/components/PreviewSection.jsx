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
          <span className="preview-email">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>email</title>
              <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
            </svg>
            {info.email && info.email}
          </span>
          <span className="preview-phone">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>phone</title>
              <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
            </svg>
            {info.phone && info.phone}
          </span>
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
