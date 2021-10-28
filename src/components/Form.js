import React, { useState, useEffect } from "react";
import Field from "./Field";

const Form = ({ formData }) => {
  //const [page, setPage] = useState(0);
  const page = 0;
  const [currentPageData, setCurrentPageData] = useState(formData[page]);

  // track the values of the form fields
  const [values, setValues] = useState({});

  useEffect(() => {
    const upcomingPageData = formData[page];
    setCurrentPageData(upcomingPageData);
    setValues((currentValues) => {
      const newValues = upcomingPageData.fields.reduce((obj, field) => {
          obj[field.dataField] = "";
        return obj;
      }, {});

      return Object.assign({}, newValues, currentValues);
    });
  }, [page, formData]);

  const fieldChanged = (fieldId, value) => {
    setValues((currentValues) => {
      currentValues[fieldId] = value;
      return currentValues;
    });

    setCurrentPageData((currentPageData) => {
      return Object.assign({}, currentPageData);
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let query = "?";
    for (const key in values) {
      query += `${key}=${values[key]}&`
    }
    query = query.substring(0, query.length - 1);
    
    console.log(query);


  };

  return (
    <form onSubmit={onSubmit}>
      <h2>{currentPageData.label}</h2>
      {currentPageData.fields
        .map((field) => {
          switch (field.component) {
            case "text":
              return (
                <Field
                  key={field.dataField}
                  field={field}
                  fieldChanged={fieldChanged}
                  value={values[field.dataField]}
                />
              );
            default:
              return (
                <Field
                  key={field.dataField}
                  field={field}
                  fieldChanged={fieldChanged}
                  value={values[field.dataField]}
                />
              );
          }
        })}
      <hr />
      <button>Search</button>
    </form>
  );
};

export default Form;