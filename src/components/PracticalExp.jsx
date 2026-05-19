import { useState } from "react";
import { Accordion } from "./Accordion.jsx";

export function PracticalExp({ previewData, updatePreviewData }) {
  const [items, setItems] = useState([createItem()]);

  function createItem() {
    const item = {
      submitted: false,
      companyName: "",
      positionTitle: "",
      mainResponsabilities: "",
      startDate: "",
      endDate: "",
    };
    return item;
  }

  function ItemForm({ index }) {
    return (
      <form action="#" className=" practical-exp-form">
        <div>
          <label htmlFor="company-name">Company name</label>
          <input
            type="text"
            id="company-name"
            defaultValue={items[index].companyName}
          />
        </div>
        <div>
          <label htmlFor="position-title">Position title</label>
          <input
            type="text"
            name="position-title"
            id="position-title"
            defaultValue={items[index].positionTitle}
          />
        </div>
        <div>
          <label htmlFor="main-responsabilities">Main responsabilities</label>
          <textarea
            name="main-responsabilities"
            id="main-responsabilities"
            defaultValue={items[index].mainResponsabilities}
          ></textarea>
        </div>
        <div className="date-inputs-container">
          <div>
            <label htmlFor="work-start-date">Start date</label>
            <input
              type="date"
              name="work-start-date"
              id="work-start-date"
              defaultValue={items[index].startDate}
            />
          </div>
          <div>
            <label htmlFor="work-end-date">End date</label>
            <input
              type="date"
              name="work-end-date"
              id="work-end-date"
              defaultValue={items[index].endDate}
            />
          </div>
        </div>
        <button type="submit" data-item-count={index} onClick={handleSubmit}>
          Submit
        </button>
      </form>
    );
  }

  function ItemPreview({ index }) {
    return (
      <div className="form-values-display">
        <p>Company name: {items[index].companyName}</p>
        <p>Position title: {items[index].positionTitle}</p>
        <p>Main responsabilities: {items[index].mainResponsabilities}</p>
        <p>Start date: {items[index].startDate}</p>
        <p>End date: {items[index].endDate}</p>
        <button
          type="button"
          data-item-count={index}
          className="edit-button"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          type="button"
          data-item-count={index}
          className="remove-button"
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    );
  }

  function getUpdatedItems(e, isSubmitted, isNew, isRemoved, index) {
    const newItems = [...items];

    if (isRemoved) {
      newItems.splice(index, 1);
    } else if (!isNew) {
      const updatedItem = { ...items[index], submitted: isSubmitted };
      newItems.splice(index, 1, updatedItem);
    } else {
      newItems.push(createItem());
    }
    return newItems;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const index = e.target.dataset.itemCount;
    const newItems = getUpdatedItems(e, true, false, false, index);

    newItems[index].companyName = document.querySelector("#company-name").value;
    newItems[index].positionTitle =
      document.querySelector("#position-title").value;
    newItems[index].mainResponsabilities = document.querySelector(
      "#main-responsabilities",
    ).value;
    newItems[index].startDate =
      document.querySelector("#work-start-date").value;
    newItems[index].endDate = document.querySelector("#work-end-date").value;

    setItems([...newItems]);

    updatePreviewData({
      ...previewData,
      practicalItems: newItems,
    });
  }

  function handleEdit(e) {
    const index = e.target.dataset.itemCount;
    const newItems = getUpdatedItems(e, false, false, false, index);
    setItems([...newItems]);
  }

  function handleAddMore(e) {
    const newItems = getUpdatedItems(e, null, true, false);
    setItems([...newItems]);
  }

  function handleRemove(e) {
    const index = e.target.dataset.itemCount;
    const newItems = getUpdatedItems(e, null, false, true, index);
    setItems([...newItems]);
  }

  function getItem(item, keyNum) {
    if (!item.submitted) {
      return (
        <div key={keyNum}>
          <ItemForm index={keyNum}></ItemForm>
        </div>
      );
    } else {
      return (
        <div key={keyNum}>
          <ItemPreview index={keyNum}></ItemPreview>
        </div>
      );
    }
  }

  function children() {
    const listItems = items.map((item, index) => {
      return getItem(item, index);
    });

    return (
      <div className="accordion-content__wrapper">
        {listItems}
        <button type="button" className="add-more" onClick={handleAddMore}>
          Add more
        </button>
      </div>
    );
  }

  return <Accordion title={"Practical experience"}>{children()}</Accordion>;
}
