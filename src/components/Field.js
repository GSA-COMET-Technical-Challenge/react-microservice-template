import React from "react";

const Field = ({ field, fieldChanged, type, value }) => {
  return (
    <div key={field.dataField}>
      <label htmlFor={field.dataField}>{field.label}</label>
      <input
        type={type || field.component}
        id={field.dataField}
        name={field.dataField}
        value={value}
        onChange={(e) => {
          // Notify the main state list of the new value
          fieldChanged(field.dataField, e.target.value);
        }}
      />
    </div>
  );
};

export default Field;