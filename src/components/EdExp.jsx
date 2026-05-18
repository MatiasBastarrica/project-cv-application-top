import { useState } from "react";
import { Accordion } from "./Accordion.jsx";

export function EdExp({ previewData, updatePreviewData }) {
  const [items, setItems] = useState([createItem()]);

  function createItem() {
    const item = {
      submitted: false,
      schoolName: "",
      titleOfStudy: "",
      startDate: "",
      endDate: "",
    };
    return item;
  }

  function ItemForm({ index }) {
    return (
      <form action="#" className=" ed-exp-form">
        <div>
          <label htmlFor="school-name">School name</label>
          <input
            type="text"
            id="school-name"
            defaultValue={items[index].schoolName}
          />
        </div>
        <div>
          <label htmlFor="title-of-study">Title of study</label>
          <input
            type="text"
            name="title-of-study"
            id="title-of-study"
            defaultValue={items[index].titleOfStudy}
          />
        </div>
        <div className="date-inputs-container">
          <div>
            <label htmlFor="ed-start-date">Start date</label>
            <input
              type="date"
              name="ed-start-date"
              id="ed-start-date"
              defaultValue={items[index].startDate}
            />
          </div>
          <div>
            <label htmlFor="ed-end-date">End date</label>
            <input
              type="date"
              name="ed-end-date"
              id="ed-end-date"
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
        <p>School name: {items[index].schoolName}</p>
        <p>Title of study: {items[index].titleOfStudy}</p>
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
      </div>
    );
  }

  function getUpdatedItems(e, isSubmitted, isNew, index) {
    const newItems = [...items];
    if (!isNew) {
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
    const newItems = getUpdatedItems(e, true, false, index);

    newItems[index].schoolName = document.querySelector("#school-name").value;
    newItems[index].titleOfStudy =
      document.querySelector("#title-of-study").value;
    newItems[index].startDate = document.querySelector("#ed-start-date").value;
    newItems[index].endDate = document.querySelector("#ed-end-date").value;

    setItems([...newItems]);
  }

  function handleEdit(e) {
    const index = e.target.dataset.itemCount;
    const newItems = getUpdatedItems(e, false, false, index);
    setItems([...newItems]);
  }

  function handleAddMore(e) {
    const newItems = getUpdatedItems(e, null, true);
    setItems([...newItems]);
    // const
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
    console.log(items);
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

  return <Accordion title={"Educational experience"}>{children()}</Accordion>;
}
