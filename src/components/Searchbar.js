import React from "react";
import Form from "./Form";
import { formData } from "./formData";

export default function Searchbar() {
  return (
    <div className="search-bar">
      <Form formData={formData} />
    </div>
  );
}