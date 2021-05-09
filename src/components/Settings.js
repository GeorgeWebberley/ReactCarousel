import React, { useState } from "react";
import "./Settings.css";

const Settings = ({ updateNumberItems, updateItemsPerPage, numberOfItems }) => {
  // Checks that the itemsPerPage does not exceed the number of items, and that it is not less than 0
  const validateInput = (value) => {
    if (Number(value) > Number(numberOfItems)) {
      updateItemsPerPage(numberOfItems);
    } else if (value && value > 0) {
      updateItemsPerPage(value);
    } else {
      updateItemsPerPage(1);
    }
  };

  return (
    <form className="settings-container">
      <div className="form-group">
        <label htmlFor="items">Number of items:</label>
        <input
          type="number"
          id="items"
          name="items"
          value={numberOfItems}
          onChange={(e) => updateNumberItems(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pageItems">Items per page:</label>
        <input
          type="number"
          id="pageItems"
          name="pageItems"
          onChange={(e) => validateInput(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Settings;
